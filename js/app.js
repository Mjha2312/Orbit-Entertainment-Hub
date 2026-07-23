const favoriteButtons = document.querySelectorAll(".favorite-btn");

// Get saved favorites
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

favoriteButtons.forEach((button) => {

    const card = button.closest(".media-card");
    const movieId = card.dataset.id;

    // Show saved favorite when page loads
    if (favorites.includes(movieId)) {
        button.textContent = "❤️";
    } else {
        button.textContent = "♡";
    }

    button.addEventListener("click", (e) => {

        // Prevent opening the movie page
        e.stopPropagation();

        if (favorites.includes(movieId)) {

            favorites = favorites.filter(id => id !== movieId);
            button.textContent = "♡";

        } else {

            favorites.push(movieId);
            button.textContent = "❤️";

        }

        localStorage.setItem("favorites", JSON.stringify(favorites));

    });

});
const watchBtn = document.querySelector(".watch-btn");

if (watchBtn) {
    watchBtn.addEventListener("click", () => {
        alert("🎬 Now Playing: Interstellar");
    });
}
const movieCards = document.querySelectorAll(".media-card");

movieCards.forEach((card) => {

    card.addEventListener("click", () => {

        const movieId = card.dataset.id;

        window.location.href = `movies.html?id=${movieId}`;

    });

});
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".media-card");
const results = document.getElementById("search-results");

searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase().trim();

    results.innerHTML = "";

    if (searchValue === "") {

        results.style.display = "none";

        cards.forEach(function(card) {
            card.style.display = "";
        });

        return;
    }

    cards.forEach(function(card) {

        const title = (card.dataset.title || "").toLowerCase();
        console.log(card.dataset.title);

        if(title.toLowerCase().startsWith(searchValue)) {

            card.style.display = "";

            const item = document.createElement("div");

            item.className = "search-item";

            item.textContent = "🔍 " + card.dataset.title;

            item.addEventListener("click", function () {

                card.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                results.style.display = "none";

            });

            results.appendChild(item);

        } else {

            card.style.display = "none";

        }

    });

    if (results.children.length > 0) {

        results.style.display = "block";

    } else {

        results.innerHTML = "<div class='search-item'>No results found</div>";

        results.style.display = "block";

    }

});
const themeBtn = document.getElementById("theme-btn");
const themeMenu = document.getElementById("theme-menu");
const themeOptions = document.querySelectorAll(".theme-option");

// Open / Close menu
themeBtn.addEventListener("click", () => {

    themeMenu.style.display =
        themeMenu.style.display === "block" ? "none" : "block";

});

// Change theme
themeOptions.forEach(option => {

    option.addEventListener("click", () => {

        document.body.classList.remove(
            "theme-midnight",
            "theme-purple",
            "theme-gold",
            "theme-ocean",
            "theme-cyber"
        );

        document.body.classList.add(option.dataset.theme);

        themeMenu.style.display = "none";

    });

});