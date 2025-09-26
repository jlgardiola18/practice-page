function toggleTheme() {
    const body = document.body;
    const btn = document.querySelector('.theme-toggle');

    body.classList.toggle('dark-theme');
    btn.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
}