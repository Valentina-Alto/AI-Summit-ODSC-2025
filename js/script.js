let cart = [];

function addToCart(itemName, itemPrice) {
    const cartItem = {
        name: itemName,
        price: itemPrice
    };

    fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartItem)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        fetchCart();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function fetchCart() {
    fetch('http://localhost:3000/cart')
    .then(response => response.json())
    .then(cart => {
        displayCart(cart);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function displayCart(cart) {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '<h2>Cart</h2>';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - $${item.price}`;
        cartContainer.appendChild(itemElement);
    });
}