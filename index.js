// Get all the "Buy" buttons
const buyButtons = document.querySelectorAll('a.button');

// Add click event listener to each "Buy" button
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Display an alert with the product name and price
        const productName = button.parentNode.querySelector('h5').textContent;
        const productPrice = button.parentNode.querySelector('p').textContent;
        alert(`You just bought ${productName} for ${productPrice}!`);

        // Update cart
        addToCart(productName, productPrice);
    });
});

let cartCount = 0;
let minicart = [];
let totalPrice = [];

function addToCart(productName, productPrice) {
    // Add product to minicart
    minicart.push(productName);

    // Add product price to total price
    totalPrice.push(parseFloat(productPrice.slice(1))); // Remove "$" sign and convert to float

    // Update cart count
    cartCount++;
    document.querySelector('.cart .item-count').textContent = `(${cartCount})`;


    // Update total price
    const total = totalPrice.reduce((acc, val) => acc + val, 0);
    document.querySelector('.cart .total-price').textContent = `$${total.toFixed(2)}`;
}

function showMiniCart() {
    document.querySelector('.mini').classList.toggle('visible');
}