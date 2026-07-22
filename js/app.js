const favoriteButtons = document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach((button) => {

    button.addEventListener("click", () => {

        if (button.innerHTML === "♡") {
            button.innerHTML = "❤️";
        } else {
            button.innerHTML = "♡";
        }

    });

});
const watchBtn = document.querySelector(".watch-btn");

watchBtn.addEventListener("click", () => {
    alert("🎬 Now Playing: Interstellar");
});
const movieCards = document.querySelectorAll(".media-card");

movieCards.forEach((card) => {

    card.addEventListener("click", () => {

        const movie = card.dataset.movie;

        alert("Opening " + movie);

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