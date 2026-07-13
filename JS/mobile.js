let cart = JSON.parse(localStorage.getItem("cart")) || [];
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

        const id = product.dataset.id;
        const name = product.dataset.name;
        const price = Number(product.dataset.price);
        const img = product.dataset.img;

        const exist = cart.find(item => item.id === id);

        if (exist) {

            exist.quantity++;

        } else {

            cart.push({
                id: id,
                name: name,
                price: price,
                img: img,
                quantity: 1
            });

        }

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("محصول به سبد خرید اضافه شد");

    });

});