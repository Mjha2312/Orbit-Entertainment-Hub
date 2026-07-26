// ===========================
// Canvas
// ===========================

const canvas = document.getElementById("universe");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

// ===========================
// Stars
// ===========================

const stars = [];

class Star {

    constructor() {

        this.reset();

    }

    reset() {

        this.x = Math.random() * canvas.width;

        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 2 + 0.5;

        this.alpha = Math.random();

        this.speed = Math.random() * 0.015 + 0.005;

    }

    draw() {

        ctx.beginPath();

        ctx.arc(

            this.x,

            this.y,

            this.size,

            0,

            Math.PI * 2

        );

        ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;

        ctx.fill();

    }

    update() {

        this.alpha += this.speed;

        if (this.alpha > 1 || this.alpha < .2) {

            this.speed *= -1;

        }

        this.draw();

    }

}

for (let i = 0; i < 300; i++) {

    stars.push(new Star());

}

// ===========================
// Variables
// ===========================

let showUniverse = false;
let showIcons = false;
let orbit = 0;
let blackHole = false;

let iconRadius = 180;

// ===========================
// Icons
// ===========================

const icons = [

    "🎬",

    "📺",

    "🍥",

    "🎵"

];

// ===========================
// Draw Icons
// ===========================

function drawIcons() {

    orbit += 0.01;

    // When black hole appears,
    // pull icons inward
    if (blackHole) {

        iconRadius *= 0.985;

        if (iconRadius < 8) {

            showIcons = false;
            return;

        }

    }

    icons.forEach((icon, index) => {

        const angle = orbit + index * (Math.PI / 2);

        const x = canvas.width / 2 + Math.cos(angle) * iconRadius;

        const y = canvas.height / 2 + Math.sin(angle) * iconRadius;

        ctx.save();

        ctx.font = "45px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillText(icon, x, y);

        ctx.restore();

    });

}

// ===========================
// Draw Black Hole
// ===========================

let holeRadius = 0;

function drawBlackHole() {

    holeRadius += .4;

    ctx.beginPath();

    ctx.arc(

        canvas.width / 2,

        canvas.height / 2,

        holeRadius,

        0,

        Math.PI * 2

    );

   const gradient = ctx.createRadialGradient(

    canvas.width / 2,
    canvas.height / 2,
    0,

    canvas.width / 2,
    canvas.height / 2,
    holeRadius

);

gradient.addColorStop(0,"#000");
gradient.addColorStop(.6,"rgba(0,0,0,.95)");
gradient.addColorStop(1,"rgba(255,180,40,.15)");

ctx.fillStyle = gradient;

    ctx.fill();

}

// ===========================
// Animation
// ===========================

function animate() {

    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );

    if (showUniverse) {

        stars.forEach(star => star.update());

    }

    if (showIcons) {

        drawIcons();

    }

    if (blackHole) {

        drawBlackHole();

    }

    requestAnimationFrame(animate);

}

animate();

// ===========================
// Story Timeline
// ===========================

// Universe

setTimeout(() => {

    showUniverse = true;

}, 1000);

// Icons

setTimeout(() => {

    showIcons = true;

}, 5000);

// Black Hole

setTimeout(() => {

    blackHole = true;

}, 10000);

// Logo

setTimeout(() => {

    gsap.to("#logoContainer", {

        opacity: 1,

        scale: 1,

        duration: 2

    });

}, 14000);setTimeout(() => {

    gsap.fromTo(

        "#logoContainer",

        {
            opacity:0,
            scale:0.2
        },

        {
            opacity:1,
            scale:1,
            duration:2,
            ease:"power3.out"
        }

    );

},16000);

// Redirect

setTimeout(() => {

    window.location.href = "login.html";

}, 22000);

// ===========================
// Resize
// ===========================

window.addEventListener("resize", () => {

    canvas.width = innerWidth;

    canvas.height = innerHeight;

});