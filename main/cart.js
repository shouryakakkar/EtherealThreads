// Load existing cart from localStorage
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    displayCart(cart);
    updateTotal(cart);
}

function displayCart(cart) {
    const cartContainer = document.getElementById("cart-items");
    const checkoutButton = document.querySelector(".checkout-btn");
    cartContainer.innerHTML = ''; // Clear the cart container

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty!</p>";
        checkoutButton.disabled = true; 
        return;
    }

    cart.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.setAttribute("data-id", product.id);
        productCard.innerHTML = `
        <div class="product" data-id=${product.id}>
            <img src="${product.image}" height="300vh">
            <div class="product-text">
                <h5>${product.name}</h5>
            </div>
            <div class="heart-icon">
                <i class="fa-regular fa-heart"></i>
            </div>
            <div class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <div class="price">
                <h5>${product.description}</h5>
                <p>RS ${product.price}</p>
            </div>
            <button class="button-2">BUY NOW</button>
            <button class=" button-3 remove-btn">REMOVE</button>
        </div>
    `;
        cartContainer.appendChild(productCard);
    });

    // Add event listeners for remove button
    const removeButtons = cartContainer.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => removeItem(e, cart));
    });
}

// Remove an item from the cart
function removeItem(event, cart) {
    // Use event.target.closest('.product-card') to ensure we're targeting the right element
    const productCard = event.target.closest('.product-card');
    if (productCard) {
        const id = productCard.getAttribute('data-id');
        const updatedCart = cart.filter(i => i.id != id);

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        loadCart(); // Refresh the cart
    }
}

// Update the cart total
function updateTotal(cart) {
    const totalElement = document.getElementById('total');
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    totalElement.textContent = `Total: RS ${total.toFixed(2)}`;
}

// Add product to the cart (for demonstration)
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if the product is already in the cart
    } else {
        product.quantity = 1; // Set quantity to 1 if it's a new product
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart(); // Refresh cart
}

document.addEventListener("DOMContentLoaded", () => {
    loadCart(); // Load the cart when the page loads
});
