function toggleTheme() {
    const body = document.body;
    const btn = document.querySelector('.theme-toggle');

    body.classList.toggle('dark-theme');
    btn.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
}

// --- Navbar active link on click ---
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // remove active from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // add active only to the clicked link
        link.classList.add('active');
    });
});

// --- Highlight on scroll ---
const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // offset for header height
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
