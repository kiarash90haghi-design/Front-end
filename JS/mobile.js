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


const cart_button = document.querySelectorAll(".add-cart");

cart_button.forEach(button => {
    button.addEventListener("click", () => {
        const product = button.closest(".product-card");

        const item = {
            id: product.dataset.id,
            name: product.dataset.name,
            price: product.dataset.price,
            img: product.dataset.img,
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("محصول به سبد خرید اضافه شد")
    })
})