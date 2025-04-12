let value = document.getElementById("value");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let currentValue = 0;

minus.addEventListener("click", function () {
  if (currentValue > 0) {
    currentValue--;
    value.textContent = currentValue;
  }
});
plus.addEventListener("click", function () {
  currentValue++;
  value.textContent = currentValue;
});

const cartCard = document.querySelector('.cart-card');
const cartEmptyMessage = document.querySelector('.cart-empty');
const addToCartBtn = document.getElementById('add-to-cart-btn');
let cartItems = [];

addToCartBtn.addEventListener('click', () => {
  const itemName = 'Fall Limited Edition Sneakers';
  const itemPrice = 125.0;
  const itemQuantity = parseInt(document.getElementById('value').textContent);

  if (itemQuantity > 0) {
    cartItems = [{ name: itemName, price: itemPrice, quantity: itemQuantity }];
    renderCartItems();
  }
});

function renderCartItems() {
  cartCard.innerHTML = ''; // Clear previous content

  if (cartItems.length === 0) {
    cartCard.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    return;
  }

  cartItems.forEach((item) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    cartItem.innerHTML = `
      <img src="./assets/images/image-product-1-thumbnail.jpg" alt="${item.name}">
      <div class="cart-item-details">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">$${item.price} x ${item.quantity} <strong>$${item.price * item.quantity}</strong></p>
      </div>
      <img src="./assets/images/icon-delete.svg" alt="Remove" class="cart-item-remove-icon">
    `;

    cartCard.appendChild(cartItem);
  });

  const checkoutBtn = document.createElement('button');
  checkoutBtn.textContent = 'Checkout';
  checkoutBtn.classList.add('add-to-cart-btn');
  cartCard.appendChild(checkoutBtn);

  // Add remove functionality
  document.querySelectorAll('.cart-item-remove').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      cartItems.splice(index, 1);
      renderCartItems();
    });
  });
}