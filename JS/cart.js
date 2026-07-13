const cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.forEach(item => {
    if (!item.quantity) {
        item.quantity = 1;
    }
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

console.log("cart.js loaded");

const cartContainer = document.getElementById("cart-items");
const itemCount = document.getElementById("item-count");
const totalPrice = document.getElementById("total-price");

cart.forEach(item => {

cartContainer.innerHTML += `
<div class="item">
    <img src="${item.img}" width="120">
    <div class="item-info">
        <h3>${item.name}</h3>
        <p>
            ${Number(item.price * item.quantity).toLocaleString("fa-IR")} تومان  
        </p>
    </div>
    <div class="item-actions">

        <button class="remove-btn" data-id="${item.id}">
            <i class="fa-solid fa-trash"></i>
        </button>

        <div class="quantity-box">

            <button class="plus-btn" id= "posetive" data-id="${item.id}">
                +
            </button>

            <span class="quantity">
                ${item.quantity || 1}
            </span>

            <button class="minus-btn" id="negeive" data-id="${item.id}">
                -
            </button>
        </div>
    </div>
</div>
`;

});
updateSummary();

const removeButtons = document.querySelectorAll(".remove-btn");
const plusButtons = document.querySelectorAll(".plus-btn");
const minusButtons = document.querySelectorAll(".minus-btn");

removeButtons.forEach(button =>{
    button.addEventListener("click", () => {
        const id = button.dataset.id;

        const newCart = cart.filter(item => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(newCart));
        console.log(id);

        location.reload();
    })
})

function updateSummary(){

    let totalItems = 0;
    let total = 0;

    cart.forEach(item => {

        totalItems += item.quantity;

        total += item.price * item.quantity;

    });

    itemCount.textContent = totalItems;

    totalPrice.textContent =
        Number(total).toLocaleString("fa-IR") + " تومان";
}

plusButtons.forEach(button => {

    button.addEventListener("click", () => {

        const id = button.dataset.id;

        const product = cart.find(item => item.id === id);

        product.quantity++;

        localStorage.setItem("cart", JSON.stringify(cart));

        location.reload();

    });

});

minusButtons.forEach(button => {

    button.addEventListener("click", () => {

        const id = button.dataset.id;

        const product = cart.find(item => item.id === id);

        if (product.quantity > 1) {

            product.quantity--;

            localStorage.setItem("cart", JSON.stringify(cart));

        } else {

            const newCart = cart.filter(item => item.id !== id);

            localStorage.setItem("cart", JSON.stringify(newCart));

        }

        location.reload();

    });

});