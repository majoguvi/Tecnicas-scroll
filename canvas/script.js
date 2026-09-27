const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const frameCounter = document.getElementById("frame-counter");

const totalFrames = 100;

const images = [];

let currentFrame = 0;
let targetFrame = 0;

let imagesLoaded = 0;


/* -------------------------
   CARGAR LOS 100 FRAMES
------------------------- */

for (let i = 0; i < totalFrames; i++) {

    const image = new Image();

    const frameNumber = String(i).padStart(3, "0");

    image.src = `frames/${frameNumber}.webp`;

    image.onload = () => {

        imagesLoaded++;

        if (imagesLoaded === totalFrames) {
            drawFrame(0);
        }
    };

    images.push(image);
}


/* -------------------------
   AJUSTAR CANVAS
------------------------- */

function resizeCanvas() {

    if (images[0].naturalWidth === 0) {
        return;
    }

    canvas.width = images[0].naturalWidth;
    canvas.height = images[0].naturalHeight;

    drawFrame(currentFrame);
}

window.addEventListener("resize", resizeCanvas);


/* -------------------------
   DIBUJAR FRAME
------------------------- */

function drawFrame(frameIndex) {

    const image = images[frameIndex];

    if (!image || !image.complete) {
        return;
    }

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.drawImage(
        image,
        0,
        0,
        canvas.width,
        canvas.height
    );

    frameCounter.textContent =
        `Frame ${String(frameIndex).padStart(3, "0")} / 099`;
}


/* -------------------------
   OBTENER FRAME SEGÚN SCROLL
------------------------- */

function updateScroll() {

    const section = document.querySelector(".canvas-section");

    const sectionTop = section.offsetTop;

    const sectionHeight =
        section.offsetHeight - window.innerHeight;

    const scrollPosition =
        window.scrollY - sectionTop;

    let progress =
        scrollPosition / sectionHeight;

    progress = Math.max(0, Math.min(1, progress));

    targetFrame =
        Math.floor(progress * (totalFrames - 1));
}


/* -------------------------
   ANIMACIÓN
------------------------- */

function animate() {

    if (currentFrame !== targetFrame) {

        currentFrame = targetFrame;

        drawFrame(currentFrame);
    }

    requestAnimationFrame(animate);
}


/* -------------------------
   EVENTO DE SCROLL
------------------------- */

window.addEventListener(
    "scroll",
    updateScroll
);


/* -------------------------
   INICIAR
------------------------- */

resizeCanvas();

updateScroll();

animate();