// Update total price function
function updateTotalPrice() {
    const totalElement = document.querySelector('.total');
    let totalPrice = 0;
  
    document.querySelectorAll('.card-body').forEach(product => {
      const quantity = parseInt(product.querySelector('.quantity').textContent);
      const unitPrice = parseFloat(product.querySelector('.unit-price').textContent.replace(' $', ''));
      totalPrice += quantity * unitPrice;
    });
  
    totalElement.textContent = totalPrice + ' $';
  }
  
  // Change product quantity
  function changeQuantity(productId, amount) {
    const productElement = document.getElementById(productId);
    const quantityElement = productElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
  
    quantity = Math.max(0, quantity + amount); // Prevent negative quantities
    quantityElement.textContent = quantity;
  
    updateTotalPrice();
  }
  
  // Remove product from cart
  function removeProduct(productId) {
    const productElement = document.getElementById(productId);
    productElement.remove();
  
    updateTotalPrice();
  }
  
  // Toggle like for a product
  function toggleLike(productId) {
    // You need to implement this function according to your requirement.
    // For example, you can add/remove a CSS class to toggle the like icon.
  }