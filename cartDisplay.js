
// cartDisplay.js

// Function to display cart items
function displayCart() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var cartList = document.getElementById('cart-items');

    // Clear previous items in the list
    cartList.innerHTML = '';

    // Loop through cart items and create list items for each
    cartItems.forEach((item, index) => {
        var listItem = document.createElement('li');
        
        // Create an image element for the item
        var img = document.createElement('img');
        img.src = item.imageSrc;
        img.alt = item.name;
        img.style.width = '50px'; // Adjust size as needed
        
        // Create a div to hold the item details (name, price, and delete button)
        var itemDetails = document.createElement('div');
        itemDetails.textContent = `${item.name} - ₹${item.price}`;

        // Add a delete button for each item
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            removeItemFromCart(index);
        });

        // Append image, item details, and delete button to the list item
        listItem.appendChild(img);
        listItem.appendChild(itemDetails);
        listItem.appendChild(deleteButton);
        
        cartList.appendChild(listItem);
    });
}

// Function to remove item from cart
function removeItemFromCart(index) {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Remove the item from the cart array
    cartItems.splice(index, 1);

    // Update the cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Redisplay the cart
    displayCart();
}

// Call the function when the page loads
window.onload = displayCart;



// Function to clear all items from the cart
