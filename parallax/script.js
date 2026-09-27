const backgroundCircle =
    document.querySelector(".background-circle");

const circleOne =
    document.querySelector(".circle-one");

const circleTwo =
    document.querySelector(".circle-two");

const circleThree =
    document.querySelector(".circle-three");

const contentCard =
    document.querySelector(".content-card");

const cardOne =
    document.querySelector(".card-one");

const cardTwo =
    document.querySelector(".card-two");

const cardThree =
    document.querySelector(".card-three");


/* -------------------------
   ACTUALIZAR PARALLAX
------------------------- */

function updateParallax() {

    const section =
        document.querySelector(".parallax-section");


    const sectionTop =
        section.offsetTop;


    const sectionHeight =
        section.offsetHeight -
        window.innerHeight;


    const scrollPosition =
        window.scrollY -
        sectionTop;


    let progress =
        scrollPosition /
        sectionHeight;


    progress =
        Math.max(
            0,
            Math.min(1, progress)
        );


    /* -------------------------
       MOVIMIENTO DEL FONDO
    ------------------------- */

    const backgroundMove =
        progress * 250;

    backgroundCircle.style.transform =
        `translateY(${backgroundMove}px)`;


    /* -------------------------
       CÍRCULOS
    ------------------------- */

    const circleOneMove =
        progress * -180;

    circleOne.style.transform =
        `translateY(${circleOneMove}px)`;


    const circleTwoMove =
        progress * 220;

    circleTwo.style.transform =
        `translateY(${circleTwoMove}px)`;


    const circleThreeMove =
        progress * -120;

    circleThree.style.transform =
        `translateY(${circleThreeMove}px)`;


    /* -------------------------
       TARJETA PRINCIPAL
    ------------------------- */

    const contentMove =
        progress * -80;

    contentCard.style.transform =
        `translateY(${contentMove}px)`;


    /* -------------------------
       TARJETAS FLOTANTES
    ------------------------- */

    const cardOneMove =
        progress * 180;

    cardOne.style.transform =
        `translateY(${cardOneMove}px)`;


    const cardTwoMove =
        progress * -150;

    cardTwo.style.transform =
        `translateY(${cardTwoMove}px)`;


    const cardThreeMove =
        progress * 200;

    cardThree.style.transform =
        `translateY(${cardThreeMove}px)`;

}


/* -------------------------
   SCROLL
------------------------- */

window.addEventListener(
    "scroll",
    updateParallax
);


/* -------------------------
   INICIAR
------------------------- */

updateParallax();