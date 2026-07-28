// ===========================
// Canvas
// ===========================

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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

        this.radius = Math.random() * 2 + 0.5;

        this.opacity = Math.random();

        this.speed = Math.random() * 0.015 + 0.003;

    }

    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;

        ctx.fill();

    }

    update() {

        this.opacity += this.speed;

        if (this.opacity >= 1 || this.opacity <= 0.2) {

            this.speed *= -1;

        }

        this.draw();

    }

}

// Create Stars

for (let i = 0; i < 180; i++) {

    stars.push(new Star());

}

// ===========================
// Animate Stars
// ===========================

function animate() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    stars.forEach(star => {

        star.update();

    });

    requestAnimationFrame(animate);

}

animate();

// ===========================
// GSAP Timeline
// ===========================

const tl = gsap.timeline();

// Logo

tl.to(".logo", {

    opacity: 1,
    scale: 1,
    duration: 1.6,
    ease: "power3.out"

})

// Tagline

.to(".tagline", {

    opacity: 1,
    y: -8,
    duration: 1,
    ease: "power2.out"

}, "-=0.6")

// Loading

.to(".loading", {

    opacity: 1,
    duration: .8

}, "-=0.3")

// Hold

.to({}, {

    duration: 1.8

})

// Fade Everything

.to(".container", {

    opacity: 0,
    duration: 1,
    ease: "power2.inOut"

});

// ===========================
// Redirect
// ===========================

setTimeout(() => {

    window.location.href = "login.html";

}, 6200);

// ===========================
// Resize
// ===========================

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});