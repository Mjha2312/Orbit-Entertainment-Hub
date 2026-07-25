// Get movie id from URL
const params = new URLSearchParams(window.location.search);

const movieId = params.get("id");

// Find the selected movie
const movie = movies.find(m => m.id === movieId);
// If movie exists
if (movie) {
    const bg = document.querySelector(".background-image");

    bg.style.backgroundImage = `url(${movie.backdrop})`;
    document.getElementById("movie-title").textContent = movie.title;

    document.getElementById("movie-genre").textContent = movie.genre;

    document.getElementById("movie-rating").textContent = movie.rating;

    document.getElementById("movie-year").textContent = movie.year;

    document.getElementById("movie-duration").textContent = movie.duration;

    document.getElementById("movie-description").textContent = movie.description;

    document.getElementById("movie-poster").src = movie.poster;

    document.getElementById("movie-poster").alt = movie.title;

   // Cast
const castContainer = document.getElementById("movie-cast");

movie.cast.forEach(actor => {

    const card = document.createElement("div");

    card.className = "cast-card";

    card.textContent = actor;

    castContainer.appendChild(card);

});
// Trailer Button
const watchBtn = document.getElementById("watch-btn");

watchBtn.addEventListener("click", () => {

    console.log(movie);

    console.log(movie.trailer);

    window.open(movie.trailer, "_blank");

});

} else {

    document.body.innerHTML =
        "<h1 style='text-align:center; margin-top:100px;'>Movie Not Found 😢</h1>";

}