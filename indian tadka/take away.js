document.addEventListener("DOMContentLoaded", function () {
    const orderButtons = document.querySelectorAll(".order-button");
    const cartItems = document.getElementById("cart-items");
    const totalPriceDisplay = document.getElementById("total-price");
  
    let total = 0;
  
    orderButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const item = button.getAttribute("data-item");
        const price = parseFloat(button.getAttribute("data-price")); 
  
        const listItem = document.createElement("li");
        listItem.textContent = `${item} - $${price}`;
        cartItems.appendChild(listItem);
  
        total += price;
        totalPriceDisplay.textContent = `Total Price: $${total.toFixed(2)}`; 
      });
    });
  });
  