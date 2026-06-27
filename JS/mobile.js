const hearts = document.querySelectorAll(".favorite-btn i");

hearts.forEach(heart => {

    heart.addEventListener("click", () => {

        heart.classList.toggle("fa-solid");
        heart.classList.toggle("fa-regular");
        heart.classList.toggle("active");

    });

});

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.querySelector(".side-bar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});