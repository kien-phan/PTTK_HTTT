window.onload = () => {
    renderCart(getCart());
}

function getCart() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    return cartItems;
}

function renderCart(cartItems) {
    if ( cartItems && cartItems.length !== 0) {
        document.getElementById('empty-cart').classList.add('hide');
        document.getElementById('cart__payment').classList.remove('hide');
        let htmls = cartItems.map((item, index) => {
            return `
                <div class="product__list-item">
                    <span class="item__code">${index + 1}</span>
                    <img src="${item.image}" alt="">
                    <div class="cart__detail">
                        <h4 class="item__name">${item.title}</h4>
                        <p class="price">${formatPrice(item.price)}</p>
                    </div>
                    <div class="item__change">
                        <button type="button" onclick="handleAddProductToCart('${item.id}')"> + </button>
                        
                        <input type="text" id="${item.id}" onchange="handleChangeQuantity('${item.id}');" name="quantity" value="${item.quantity}">
                        <button type="button" onclick="handleReduceProductToCart('${item.id}')"> - </button> 
                                       
                    </div>                  
                    <div class="item__delete">
                        <button type="button" class="btn" onclick="handleDeleteProductFromCart('${item.id}')">Xóa</button>
                    </div>
                </div>
            `
        });
        document.getElementById('cart-product').innerHTML = htmls.join('');
        calculatePricing();
    } else {
        document.getElementById('empty-cart').classList.remove('hide');
        document.getElementById('cart__payment').classList.add('hide');
        document.getElementById('cart-product').innerHTML = '';
    }
}

function clearCart(id){
    if(confirm("Xóa hết mặt hàng")){
        localStorage.removeItem("cartItems");
        document.getElementById('empty-cart').classList.remove('hide');
        document.getElementById('cart__payment').classList.add('hide');
        document.getElementById('cart-product').innerHTML = '';
    }
}
function handleAddProductToCart(id1) {
    const quantity = document.getElementById(`${id1}`);
    let productList = getProduct();
    let index = productList.findIndex(product => product.id === id1);
    let productChoosen = productList.find(product => product.id === id1);
    let cartItems = getCart();
    if (cartItems.find(item => item.id === productList[index].id)) {
        for (let i = 0; i < cartItems.length; i++) {
            if (quantity.value > productChoosen.quantily - 1 && cartItems[i].id === productChoosen.id) {
                alert('Vượt quá số lượng sản phẩm hiện có rồi!!')
                cartItems[i].quantity = productChoosen.quantily;
            }
            else if (cartItems[i].id === productList[index].id) {
                cartItems[i]["quantity"] = cartItems[i].quantity + 1;
                break;
            }
        }
    } else {
        productList[index]["quantity"] = 1;
        cartItems = [...cartItems, productList[index]];
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    renderCart(getCart());
}

function handleReduceProductToCart(id1) {
    const quantity = document.getElementById(`${id1}`);
    let productList = getProduct();
    let index = productList.findIndex(product => product.id === id1);
    let productChoosen = productList.find(product => product.id === id1);
    let cartItems = getCart();
    if (cartItems.find(item => item.id === productList[index].id)) {
        for (let i = 0; i < cartItems.length; i++) {
            if (quantity.value > productChoosen.quantily && cartItems[i].id === productChoosen.id) {
                alert('Vượt quá số lượng sản phẩm hiện có rồi!!')
                cartItems[i].quantity = productChoosen.quantily;
            }
            else if (cartItems[i].id === productList[index].id) {
                cartItems[i]["quantity"] = cartItems[i].quantity - 1;
                if (cartItems[i].quantity <= 0) {
                    if (confirm("Xoa mat hang?")) {
                        cartItems.splice(i, 1);
                    } else {
                        cartItems[i]["quantity"] = cartItems[i].quantity + 1;
                    }
                }
                break;
            }
        }
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    renderCart(getCart());
}

function handleDeleteProductFromCart(id) {
    let cartItems = getCart();
    let index = cartItems.findIndex(product => product.id === id);
    if (confirm("Xoa mat hang?")) {
        cartItems.splice(index, 1);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    renderCart(getCart());
}

function calculatePricing() {
    let cartItems = getCart();
    let pricing = 0;
    for (let i = 0; i < cartItems.length; i++) {
        pricing += cartItems[i].price * cartItems[i].quantity;
    }
    document.getElementById('pricing').innerHTML = formatPrice(pricing);
}

function handleChangeQuantity(id1) {
    const quantity = document.getElementById(`${id1}`);
    let productList = getProduct();
    let productChoosen = productList.find(product => product.id === id1);
    let cartItems = getCart();
    if (cartItems.find(item => item.id === productChoosen.id)) {
        for (let i = 0; i < cartItems.length; i++) {
            if (quantity.value > productChoosen.quantily && cartItems[i].id === productChoosen.id) {
                alert('Vượt quá số lượng sản phẩm hiện có rồi!!')
                cartItems[i].quantity = productChoosen.quantily;
            }
            else if (cartItems[i].id === productChoosen.id) {
                cartItems[i].quantity = parseInt(quantity.value);
                if (cartItems[i].quantity <= 0) {
                    if (confirm("Xoa mat hang?")) {
                        cartItems.splice(i, 1);
                    } else {
                        cartItems[i].quantity = 1;
                    }
                }
                break;
            }
        }
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    renderCart(getCart());
}