const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Mobile Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000, 
    loop: true
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbarList = document.querySelector(".navbar-list");

    // Toggle menu saat tombol hamburger diklik
    menuToggle.addEventListener("click", function () {
        navbarList.classList.toggle("active");
    });

    // Tutup menu saat salah satu item diklik
    navbarList.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            navbarList.classList.remove("active");
        }
    });
});

function redirectAfterSubmit() {
    alert("Your message has been sent successfully!");
    setTimeout(() => {
        window.location.href = "index.html"; // Redirect ke halaman index.html setelah beberapa detik
    }, 1000); // Tunggu 1 detik sebelum redirect
    return true; // Izinkan form untuk dikirim ke Formspree
}