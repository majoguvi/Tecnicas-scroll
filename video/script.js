const video = document.getElementById("video");

const timeCounter =
    document.getElementById("time-counter");


/* -------------------------
   ACTUALIZAR VIDEO
------------------------- */

function updateVideo() {

    const section =
        document.querySelector(".video-section");


    const sectionTop =
        section.offsetTop;


    const sectionHeight =
        section.offsetHeight -
        window.innerHeight;


    const scrollPosition =
        window.scrollY -
        sectionTop;


    /* -------------------------
       CALCULAR PROGRESO
    ------------------------- */

    let progress =
        scrollPosition /
        sectionHeight;


    progress =
        Math.max(
            0,
            Math.min(1, progress)
        );


    /* -------------------------
       CALCULAR TIEMPO
    ------------------------- */

    if (video.duration) {

        const newTime =
            progress *
            video.duration;


        video.currentTime =
            newTime;


        updateTimeCounter(newTime);
    }

}


/* -------------------------
   MOSTRAR TIEMPO
------------------------- */

function updateTimeCounter(time) {

    const minutes =
        Math.floor(time / 60);


    const seconds =
        Math.floor(time % 60);


    const formattedMinutes =
        String(minutes).padStart(2, "0");


    const formattedSeconds =
        String(seconds).padStart(2, "0");


    timeCounter.textContent =
        `${formattedMinutes}:${formattedSeconds}`;
}


/* -------------------------
   CUANDO EL VIDEO CARGA
------------------------- */

video.addEventListener(
    "loadedmetadata",
    () => {

        updateVideo();

    }
);


/* -------------------------
   EVENTO DE SCROLL
------------------------- */

window.addEventListener(
    "scroll",
    updateVideo
);


/* -------------------------
   INICIAR
------------------------- */

updateVideo();