const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
    root.setAttribute("data-theme", "dark");
}

toggleBtn.addEventListener("click", () => {
    if (root.getAttribute("data-theme") === "dark") {
        root.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
    } else {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});