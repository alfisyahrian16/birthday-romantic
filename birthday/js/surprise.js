/* ==========================
   BACKGROUND MUSIC
========================== */

const bgMusic = document.getElementById("bgMusic");

window.addEventListener("load", () => {

    if(bgMusic){

        bgMusic.volume = 0.35;

        bgMusic.play().catch(() => {

            console.log("Autoplay diblokir browser");

        });

    }

});

/* ==========================
   FIREWORKS
========================== */

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createFirework() {

    const x = random(100, canvas.width - 100);
    const y = random(80, canvas.height * 0.45);

    const color = `hsl(${Math.random() * 360},100%,60%)`;

    for (let i = 0; i < 90; i++) {

        const angle = Math.random() * Math.PI * 2;
        const speed = random(2, 7);

        particles.push({

            x,
            y,

            dx: Math.cos(angle) * speed,
            dy: Math.sin(angle) * speed,

            radius: random(2, 4),

            alpha: 1,

            color

        });

    }

}

setInterval(createFirework, 800);

function animate() {

    ctx.fillStyle = "rgba(2,6,23,0.18)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {

        const p = particles[i];

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        p.dy += 0.03;
        p.alpha -= 0.012;

        if (p.alpha <= 0) {
            particles.splice(i, 1);
        }

    }

    ctx.globalAlpha = 1;

    requestAnimationFrame(animate);

}

animate();

/* ==========================
   BALLOONS
========================== */

const balloonContainer = document.querySelector(".balloons");

const colors = [

"#ff4d88",
"#ff7eb3",
"#ffd166",
"#4ecdc4",
"#74c0fc",
"#c77dff"

];

function createBalloon(){

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.style.left = Math.random()*100+"vw";

    balloon.style.background =
    colors[Math.floor(Math.random()*colors.length)];

    balloon.style.animationDuration =
    (10 + Math.random()*6)+"s";

    balloon.style.transform =
    `scale(${0.8 + Math.random()*0.5})`;

    balloonContainer.appendChild(balloon);

    balloon.addEventListener("animationend",()=>{

        balloon.remove();

    });

}

setInterval(createBalloon,700);