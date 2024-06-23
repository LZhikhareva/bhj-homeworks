const values = Array.from(document.querySelectorAll('.product__quantity-value'));
const cartProductsContainer = document.querySelector('.cart__products');
const addButtons = document.querySelectorAll('.product__add');
let cartProducts = [];

if (localStorage.getItem('cartProducts')) {
    cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    renderProducts();
}

values.forEach((value, index) => {
    const plusButtons = document.querySelectorAll(`.product__quantity-control_inc[data-index="${index}"]`);
    const minusButtons = document.querySelectorAll(`.product__quantity-control_dec[data-index="${index}"]`);
    if (plusButtons.length > 0) {
        plusButtons.forEach(plusButton => {
            plusButton.addEventListener('click', () => {
                value.textContent = parseInt(value.textContent) + 1;
            });
        });
    }
    if (minusButtons.length > 0) {
        minusButtons.forEach(minusButton => {
            minusButton.addEventListener('click', () => {
                let currentValue = parseInt(value.textContent);
                if (currentValue > 1) {
                    value.textContent = currentValue - 1;
                }
            });
        });
    }
})

function renderProducts() {
    cartProductsContainer.innerHTML = '';
    cartProducts.forEach((productData, index) => {
        const cartProduct = document.createElement('div');
        cartProduct.classList.add('cart__product');
        cartProduct.dataset.id = index + 1;
        const img = document.createElement('img');
        img.classList.add('cart__product-image');
        img.src = productData[0];
        cartProduct.appendChild(img);
        const count = document.createElement('div');
        count.classList.add('cart__product-count');
        count.textContent = productData[1];
        cartProduct.appendChild(count);
        const trashbutton = document.createElement("a");
        trashbutton.innerHTML = '&times;';
        trashbutton.classList.add("product__remove");
        cartProduct.appendChild(trashbutton);
        cartProductsContainer.appendChild(cartProduct);
    });
}

addButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const product = document.querySelector(`.product[data-id="${index + 1}"]`);
        const productImage = product.querySelector('.product__image');
        const quantityValue = document.querySelector(`.product__quantity-value[data-index="${index}"]`);
        const existingProductIndex = cartProducts.findIndex(productData => productData[0] === productImage.src);
        if (existingProductIndex !== -1) {
            cartProducts[existingProductIndex][1] = parseInt(cartProducts[existingProductIndex][1]) + parseInt(quantityValue.textContent);
        } else {
            const productData = [
                productImage.src,
                Number(quantityValue.textContent.trim())
            ];
            cartProducts.push(productData);
        }
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
        renderProducts();
    });
})

function deleteItem(e) {
    const item = e.target;
    if (item.classList[0] === 'product__remove') {
        const prList = item.parentElement;
        prList.remove();
        const itemId = parseInt(prList.dataset.id);
        cartProducts = cartProducts.filter((productData, index) => {
            return index + 1 !== itemId;
        });
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }
}

cartProductsContainer.addEventListener('click', deleteItem);