// ==========================================
// CONTAGEM REGRESSIVA
// ==========================================

// ALTERE A DATA QUANDO NECESSÁRIO

const dataEstreia =
    new Date("December 18, 2026 00:00:00").getTime();


function atualizarContagem() {

    const agora =
        new Date().getTime();

    const distancia =
        dataEstreia - agora;


    if (distancia <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;

    }


    const dias =
        Math.floor(
            distancia /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (distancia %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutos =
        Math.floor(
            (distancia %
            (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const segundos =
        Math.floor(
            (distancia %
            (1000 * 60)) /
            1000
        );


    document.getElementById("days").innerText =
        String(dias).padStart(2, "0");


    document.getElementById("hours").innerText =
        String(horas).padStart(2, "0");


    document.getElementById("minutes").innerText =
        String(minutos).padStart(2, "0");


    document.getElementById("seconds").innerText =
        String(segundos).padStart(2, "0");

}


setInterval(
    atualizarContagem,
    1000
);


atualizarContagem();



const audio = document.getElementById("bgMusic");
const volumeSlider = document.getElementById("volumeSlider");

// volume inicial
audio.volume = 0.4;

volumeSlider.addEventListener("input", () => {

    audio.volume =
    volumeSlider.value / 100;

});



const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (id === "novo-ator-confirmado") {

    document.getElementById("categoria").textContent = "ELENCO";

    document.getElementById("titulo").textContent =
        "Novo ator confirmado no elenco principal";

    document.getElementById("data").textContent =
        "10 Ago 2026";

    document.getElementById("imagem").src =
        "img/ciclop-confirmado.png";

    document.getElementById("conteudo").innerHTML = `
        <p>
            A Marvel confirmou oficialmente o retorno
            de um ator muito aguardado pelos fãs.
        </p>

        <p>
            O anúncio aconteceu durante um evento especial
            e movimentou as redes sociais.
        </p>
    `;
}


if(id === "steve-mjolnir"){

    document.title = "Steve com o Mjolnir";

    document.getElementById("categoria").textContent =
        "BASTIDORES";

    document.getElementById("titulo").textContent =
        "Fotos do set mostram Steve impondo o Mjolnir";

    document.getElementById("subtitulo").textContent =
        "Imagens dos bastidores aumentam os rumores sobre um possível retorno de Steve Rogers em um papel importante nos eventos de Avengers: Doomsday.";

    document.getElementById("data").textContent =
        "08 Ago 2026";

    document.getElementById("autor").textContent =
        "Equipe Doomsday News";

    document.getElementById("leitura").textContent =
        "5 min de leitura";

    document.getElementById("imagem").src =
        "img/bastidores.png";

    document.getElementById("conteudo").innerHTML = `
        <p>
            Novas imagens dos bastidores de Avengers: Doomsday
            chamaram a atenção dos fãs ao mostrar Steve Rogers
            segurando o Mjolnir durante uma sequência de gravação.
        </p>

        <p>
            As fotos começaram a circular rapidamente nas redes sociais,
            gerando discussões sobre qual versão do personagem poderá
            aparecer na trama multiversal do filme.
        </p>

        <div class="destaque">
            "A simples presença do Mjolnir já foi suficiente para criar dezenas de teorias entre os fãs."
        </div>

        <p>
            Muitos acreditam que a cena pode estar relacionada a uma
            batalha de grande escala envolvendo diferentes heróis de
            universos alternativos.
        </p>

        <p>
            Outros fãs especulam que o momento pode servir como homenagem
            aos eventos de Avengers: Endgame, quando Steve utilizou o
            martelo de Thor pela primeira vez em combate.
        </p>

        <p>
            Como acontece com a maioria das gravações da Marvel,
            ainda não existe confirmação oficial sobre o contexto
            da cena ou sobre sua presença na versão final do filme.
        </p>

        <div class="info-box">
            <h3>O que os fãs estão discutindo?</h3>

            <ul>
                <li>Retorno de Steve Rogers em uma variante multiversal</li>
                <li>Nova batalha utilizando o Mjolnir</li>
                <li>Conexão com os eventos de Endgame</li>
                <li>Participação dos Vingadores clássicos</li>
                <li>Possível confronto contra Doutor Destino</li>
            </ul>
        </div>
    `;
}




// const audio = document.getElementById("bgMusic");

// window.addEventListener("load", () => {

//     const savedTime = localStorage.getItem("audioTime");
//     const isPlaying = localStorage.getItem("audioPlaying");

//     if(savedTime){
//         audio.currentTime = parseFloat(savedTime);
//     }

//     if(isPlaying === "true"){
//         audio.play().catch(() => {});
//     }
// });

// setInterval(() => {
//     localStorage.setItem("audioTime", audio.currentTime);
//     localStorage.setItem("audioPlaying", !audio.paused);
// }, 1000);