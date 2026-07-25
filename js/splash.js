const movie = document.querySelector(".movie");
const series = document.querySelector(".series");
const anime = document.querySelector(".anime");
const music = document.querySelector(".music");

const ring = document.querySelector(".orbit-ring");
const center = document.querySelector(".center");

// 1 second
setTimeout(() => {

    movie.classList.add("show");

},1000);

// 2 seconds
setTimeout(() => {

    series.classList.add("show");

},2000);

// 3 seconds
setTimeout(() => {

    anime.classList.add("show");

},3000);

// 4 seconds
setTimeout(() => {

    music.classList.add("show");

},4000);

// 5 seconds

setTimeout(()=>{

    movie.classList.add("move");
    series.classList.add("move");
    anime.classList.add("move");
    music.classList.add("move");

},5000);

// 6.5 seconds

setTimeout(()=>{

    ring.classList.add("show");
    ring.classList.add("rotate");

},6500);

// 7.5 seconds

setTimeout(()=>{

    center.classList.add("show");

},7500);

// 10 seconds

setTimeout(()=>{

    document.body.style.opacity="0";
    document.body.style.transition="1s";

},10000);

// 11 seconds

setTimeout(()=>{

    window.location.href="login.html";

},11000);