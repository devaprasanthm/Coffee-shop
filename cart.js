// cart.js

// Function to add item to cart
function addToCart(itemName, itemPrice) {
    // Retrieve existing cart items from local storage or initialize an empty array
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add the new item to the cart
    cartItems.push({ name: itemName, price: itemPrice });

    // Save the updated cart items back to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    alert('Item added to cart!');
}

// cartDisplay.js

// Function to display cart items
function displayCart() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Display cart items as you wish, e.g., in a table or list
    cartItems.forEach(item => {
        console.log(item.name, item.price);
        // You can manipulate the DOM here to display the items
    });
}

// Call the function when the page loads
window.onload = displayCart;

var cartItems = [
    {
        
        name: 'Espresso',
        price: 1250,
        imageSrc: 'images/CafeEspresso.jpg'
    },
    {
        name: 'Cappuccino',
        price: 1500,
        imageSrc: 'images/cappuccino.jpg'
    },
    {
        name: 'CORTADO',
        price: 1600,
        imageSrc: 'images/expresso-cortado.jpg'
    },
    {
        name: 'Latte',
        price: 1000,
        imageSrc: 'images/latte.webp'
    },
    {
        name: 'lungo',
        price: 2000,
        imageSrc: 'images/lungo.png'
    },
    {
        name: 'Ristretto',
        price: 1000,
        imageSrc: 'images/ristretto.jpg'
    },
    {
        name: 'frappuchino',
        price: 1600,
        imageSrc: 'images/frappuchino.jpg'
    },
    {
        name: 'iced-coffee',
        price: 1000,
        imageSrc: 'images/iced-coffee.JPG'
    },
    // Add more items as needed
];

// Convert cartItems to JSON and store in local storage
localStorage.setItem('cartItems', JSON.stringify(cartItems));


