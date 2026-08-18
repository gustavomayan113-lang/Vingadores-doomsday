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