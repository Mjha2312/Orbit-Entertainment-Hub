// =========================
// Auto Login
// =========================

if (localStorage.getItem("orbitLoggedIn") === "true") {
    window.location.href = "index.html";
}

// =========================
// Elements
// =========================

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const loginBtn = document.querySelector(".login-btn");
const emailInput = document.querySelector('input[type="email"]');

// =========================
// Show / Hide Password
// =========================

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.textContent = "visibility_off";

    } else {

        password.type = "password";
        togglePassword.textContent = "visibility";

    }

});

// =========================
// Login Button
// =========================

loginBtn.addEventListener("click", () => {

    const email = emailInput.value.trim();
    const pass = password.value.trim();

    if (email === "" || pass === "") {

        alert("Please fill in all fields.");
        return;

    }

    // Save Login
    localStorage.setItem("orbitLoggedIn", "true");
    localStorage.setItem("orbitUser", email);

    // Redirect
    window.location.href = "index.html";

});