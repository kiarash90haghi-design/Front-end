const cart = JSON.parse(localStorage.getItem("cart")) || [];

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

cart.forEach(item => {

    cartContainer.innerHTML += `
        <div class="item">

            <img src="${item.img}" width="120">

            <div class="item-info">
                <h3>${item.name}</h3>

                <p>
                    ${Number(item.price).toLocaleString("fa-IR")} تومان
                </p>
            </div>

            <button class="remove-btn" data-id="${item.id}">
                 <i class="fa-solid fa-trash"></i>
            </button>

        </div>
    `;

});

const removeButtons = document.querySelectorAll(".remove-btn");

removeButtons.forEach(button =>{
    button.addEventListener("click", () => {
        const id = button.dataset.id;

        const newCart = cart.filter(item => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(newCart));
        console.log(id);

        location.reload();
    })
})