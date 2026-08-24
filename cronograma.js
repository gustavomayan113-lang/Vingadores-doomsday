/* ============================================
   CRONOGRAMA.JS
   - Contagem regressiva até a estreia
   - Linha do tempo com marcador "estamos aqui"
     calculado pela data real do visitante
   - Cards da timeline abrem/fecham ao clicar
   - Lightbox pra ampliar a foto da maratona
   - Checklist de maratona pessoal salva no
     localStorage (progresso não se perde)
============================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------- 1. CONTAGEM REGRESSIVA ---------- */

    const RELEASE_DATE = new Date("2026-12-18T00:00:00");

    const elDays = document.getElementById("crDays");
    const elHours = document.getElementById("crHours");
    const elMinutes = document.getElementById("crMinutes");
    const elSeconds = document.getElementById("crSeconds");

    function pad(n) {
        return String(n).padStart(2, "0");
    }

    function updateCountdown() {
        const now = new Date();
        const diff = RELEASE_DATE - now;

        if (diff <= 0) {
            elDays.textContent = "00";
            elHours.textContent = "00";
            elMinutes.textContent = "00";
            elSeconds.textContent = "00";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        if (elDays) elDays.textContent = pad(days);
        if (elHours) elHours.textContent = pad(hours);
        if (elMinutes) elMinutes.textContent = pad(minutes);
        if (elSeconds) elSeconds.textContent = pad(seconds);
    }

    if (elDays && elHours && elMinutes && elSeconds) {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }


    /* ---------- 2. LINHA DO TEMPO ---------- */

    const timeline = document.getElementById("crTimeline");

    if (timeline) {

        const items = Array.from(timeline.querySelectorAll(".cr-timeline-item"));
        const progressBar = document.getElementById("crTimelineProgress");
        const hereMarker = document.getElementById("crTimelineHere");

        const dates = items.map(item => new Date(item.dataset.date));
        const firstDate = dates[0];
        const lastDate = dates[dates.length - 1];
        const totalSpan = lastDate - firstDate;

        const today = new Date();

        // marca visualmente quais marcos já ficaram no passado
        items.forEach((item, i) => {
            if (dates[i] <= today) {
                item.classList.add("is-past");
            }
        });

        // posição do marcador "estamos aqui" e da barra de progresso,
        // proporcional ao tempo já percorrido dentro da linha do tempo
        let percent = ((today - firstDate) / totalSpan) * 100;
        percent = Math.max(0, Math.min(100, percent));

        if (progressBar) progressBar.style.height = percent + "%";
        if (hereMarker) hereMarker.style.top = percent + "%";

        if (today > lastDate && hereMarker) {
            hereMarker.style.display = "none";
        }

        // clique em cada card abre/fecha a descrição (accordion simples)
        items.forEach(item => {
            const card = item.querySelector(".cr-timeline-card");
            if (!card) return;

            card.addEventListener("click", () => {
                item.classList.toggle("is-open");
            });
        });
    }


    /* ---------- 3. LIGHTBOX DA FOTO DE MARATONA ---------- */

    const frame = document.getElementById("marathonFrame");
    const lightbox = document.getElementById("marathonLightbox");
    const lightboxClose = document.getElementById("lightboxClose");

    function openLightbox() {
        lightbox.classList.add("is-open");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.classList.remove("is-open");
        document.body.style.overflow = "";
    }

    if (frame && lightbox) {
        frame.addEventListener("click", openLightbox);

        frame.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLightbox();
            }
        });

        lightboxClose.addEventListener("click", closeLightbox);

        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeLightbox();
        });
    }


    /* ---------- 4. CHECKLIST DE MARATONA PESSOAL ---------- */

    const STORAGE_KEY = "doomsday-maratona-progresso";
    const checklist = document.getElementById("crChecklist");
    const progressFill = document.getElementById("crProgressFill");
    const progressLabel = document.getElementById("crProgressLabel");

    if (checklist) {

        const items = Array.from(checklist.querySelectorAll("li"));
        let saved = {};

        try {
            saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        } catch (e) {
            saved = {};
        }

        function updateProgress() {
            const total = items.length;
            const checked = items.filter(li => li.querySelector("input").checked).length;
            const pct = total ? Math.round((checked / total) * 100) : 0;

            if (progressFill) progressFill.style.width = pct + "%";
            if (progressLabel) progressLabel.textContent = `${checked} de ${total} assistidos`;
        }

        items.forEach(li => {
            const id = li.dataset.id;
            const input = li.querySelector("input");

            if (saved[id]) input.checked = true;

            input.addEventListener("change", () => {
                saved[id] = input.checked;
                localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
                updateProgress();
            });
        });

        updateProgress();
    }

});
