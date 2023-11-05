window.addEventListener('click', (e) => {
  let counter;
  if (e.target.classList.contains("product__quantity-control_inc") || e.target.classList.contains("product__quantity-control_dec")) {
    const counterEl = e.target.closest(".product__quantity-controls");
    counter = counterEl.querySelector(".product__quantity-value");
  }


  if (e.target.classList.contains("product__quantity-control_inc")) {
    counter.innerText = ++counter.innerText;
  }

  if (e.target.classList.contains("product__quantity-control_dec")) {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    }
  }
});

window.addEventListener('click', (e) => {
  
  if (e.target.classList.contains("product__add")) {
    const cart = e.target.closest(".product");
    const cartId = cart.dataset.id;
    const cartImg = cart.querySelector(".product__image").getAttribute('src');
    const cartCount = cart.querySelector(".product__quantity-value").innerText;
    const cartsIn = document.querySelector(".cart__products");
    const elInCart = cartsIn.querySelector(`[data-id="${cartId}"]`);

    if (elInCart) {
      const counterEl = elInCart.querySelector(".cart__product-count");
      counterEl.innerText = parseInt(counterEl.innerText) + parseInt(cartCount);
      
    } else {
      cartsIn.insertAdjacentHTML('beforeend',
        `<div class="cart__product" data-id="${cartId}">
    <img class="cart__product-image" src="${cartImg}">
    <div class="cart__product-count">${cartCount}</div>
</div>`);
    }
  }
});