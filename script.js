let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    totalPrice += price;
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItems.innerHTML = '';
    cart.forEach((cartItem) => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.item} - $${cartItem.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    document.getElementById('cart').classList.remove('hidden');
}

function checkout() {
    document.getElementById('cart').classList.add('hidden');
    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = '';
    cart.forEach((cartItem) => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.item} - $${cartItem.price.toFixed(2)}`;
        orderSummary.appendChild(li);
    });
    document.getElementById('summary').classList.remove('hidden');
}

function trackOrder() {
    document.getElementById('summary').classList.add('hidden');
    document.getElementById('track').classList.remove('hidden');
    document.getElementById('tracking-status').innerHTML = 'Your order is being prepared...';
}
