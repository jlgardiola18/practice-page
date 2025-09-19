const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
    root.setAttribute("data-theme", "dark");
    toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
    if (root.getAttribute("data-theme") === "dark") {
        root.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
    } else {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
    }
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});