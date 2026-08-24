/* ============================================
   PRODUTOS.JS
   Filtro de categoria simples: clica no botão,
   os cards que não pertencem à categoria somem
   com uma leve transição.
============================================ */

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".pr-filter-btn");
    const cards = document.querySelectorAll(".pr-card");
    const emptyMsg = document.getElementById("prEmpty");

    if (!buttons.length || !cards.length) return;

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {

            buttons.forEach(b => b.classList.remove("is-active"));
            btn.classList.add("is-active");

            const filter = btn.dataset.filter;
            let visibleCount = 0;

            cards.forEach(card => {
                const match = filter === "todos" || card.dataset.category === filter;
                card.classList.toggle("is-hidden", !match);
                if (match) visibleCount++;
            });

            if (emptyMsg) {
                emptyMsg.classList.toggle("is-visible", visibleCount === 0);
            }
        });
    });

});
