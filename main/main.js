const products = [
    {
        id: 1,
        name: 'Gold Necklace',
        price: 200,
        image: 'IMG_4182.jpg',
        description: "Product 1"
    },
    {
        id: 2,
        name: 'PRODUCT 1',
        price: 50,
        image: 'IMG_4187.jpg',
        description: 'SALE'
    },
    {
        id: 3,
        name: 'PRODUCT 2',
        price: 50,
        image: 'IMG_4183.jpg',
        description: 'SALE'
    },
    {
        id: 4,
        name: 'PRODUCT 3',
        price: 50,
        image: 'IMG_4185.jpg',
        description: 'SALE'
    },
    {
        id: 5,
        name: 'PRODUCT 4',
        price: 50,
        image: 'IMG_4199.jpg',
        description: 'SALE'
    },
    {
        id: 6,
        name: 'PRODUCT 5',
        price: 50,
        image: 'IMG_4174.jpg',
        description: 'SALE'
    },
    {
        id: 7,
        name: 'PRODUCT 6',
        price: 50,
        image: 'IMG_4175.jpg',
        description: 'SALE'
    },
    {
        id: 8,
        name: 'PRODUCT 7',
        price: 50,
        image: 'IMG_4178.jpg',
        description: 'SALE'
    },
    {
        id: 9,
        name: 'PRODUCT 8',
        price: 50,
        image: 'IMG_4180.jpg',
        description: 'HOT'
    },
    {
        id: 10,
        name: 'PRODUCT 9',
        price: 50,
        image: 'IMG_4198.jpg',
        description: 'NEW ARRIVAL'
    },
    {
        id: 11,
        name: 'PRODUCT 10',
        price: 50,
        image: 'IMG_4202.jpg',
        description: 'SALE'
    },
    {
        id: 12,
        name: 'PRODUCT 11',
        price: 50,
        image: 'IMG_4176.jpg',
        description: 'SALE'
    },
    {
        id: 13,
        name: 'PRODUCT 12',
        price: 50,
        image: 'IMG_4182.jpg',
        description: 'NEW ARRIVAL'
    },
    {
        id: 14,
        name: 'PRODUCT 13',
        price: 50,
        image: 'IMG_4201.jpg',
        description: 'SALE'
    },
    {
        id: 15,
        name: 'PRODUCT 14',
        price: 50,
        image: 'IMG_4203.jpg',
        description: 'NEW ARRIVAL'
    },
    {
        id: 16,
        name: 'PRODUCT 15',
        price: 50,
        image: 'IMG_4204.jpg',
        description: 'SALE'
    },
    {
        id: 17,
        name: 'PRODUCT 16',
        price: 50,
        image: 'IMG_4200.jpg',
        description: 'SALE'
    },
    {
        id: 18,
        name: 'PRODUCT 17',
        price: 50,
        image: 'IMG_4184.jpg',
        description: 'SALE'
    },
    {
        id: 19,
        name: 'PRODUCT 18',
        price: 50,
        image: 'IMG_4188.jpg',
        description: 'SALE'
    },
    {
        id: 20,
        name: 'PRODUCT 19',
        price: 50,
        image: 'IMG_4177.jpg',
        description: 'SALE'
    },
    {
        id: 21,
        name: 'PRODUCT 20',
        price: 50,
        image: 'IMG_4192.jpg',
        description: 'SALE'
    },
    {
        id: 22,
        name: 'PRODUCT 21',
        price: 50,
        image: 'IMG_4193.jpg',
        description: 'SALE'
    },
    {
        id: 23,
        name: 'PRODUCT 22',
        price: 50,
        image: 'IMG_4195.jpg',
        description: 'SALE'
    },
    {
        id: 24,
        name: 'PRODUCT 23',
        price: 50,
        image: 'IMG_4189.jpg',
        description: 'SALE'
    },
    {
        id: 25,
        name: 'PRODUCT 24',
        price: 50,
        image: 'IMG_4190.jpg',
        description: 'SALE'
    }
];

function displayProducts() {
    const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = ""; // Clear existing products

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.setAttribute("data-id", product.id);
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProduct = cart.find(item => item.id === product.id);
        console.log(existingProduct, "existingProduct");
        productCard.innerHTML = `
        <div class="product" data-id="item1">
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
            <button ${existingProduct ? 'disabled' : ''} class="add-to-cart-btn button-3 add-button">ADD TO CART</button>
        </div>
    `;
    

        // Add event listener to the 'Add to Cart' button
        const addToCartButton = productCard.querySelector(".add-to-cart-btn");
        addToCartButton.addEventListener("click", () => addToCart(product));

        productContainer.appendChild(productCard);
    });
}

 // Function to add a product to the cart
 function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if already in cart
    } else {
        product.quantity = 1; // Set initial quantity to 1
        cart.push(product);
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to your cart.`);
    displayProducts();
}



document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
});

