window.onload = () => {
    renderCart(getCart());
}

function getCart() {
    let cartItems = JSON.parse(localStorage.getItem("orderToView"));
    return cartItems;
}

function renderCart(order) {
    let user = JSON.parse(localStorage.getItem("sectionUserName"))
    if (user.role == "admin") {
        document.getElementById('empty-cart').classList.add('hide');
        document.getElementById('cart__payment').classList.remove('hide');
        if (document.querySelector('.btndelete').classList.contains('hide')) {
            document.querySelector('.btndelete').classList.remove('hide');
        }
        let htmls = order.cartItems.map((item, index) => {
            return `
            <div class="oder">
            <div class="oder-container">
                <span class="item__code">${index + 1}</span>
                <img src="${item.image}" alt="">
                <div class="order-name">
                    <h3 class="order-product">${item.title}</h3>
                    <p class="order-price">${item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
                </div>
                <input disabled type="text" id="quantity" onchange="handleChangeQuantity('${item.id}');" name="quantity" value="${item.quantity}">
            </div>
            </div>
            `
        });
        document.getElementById('cart-product').innerHTML = htmls.join('');
        document.getElementById('pricing').innerHTML = formatPrice(order.total);
        document.getElementById('status').disabled = false;
        document.getElementById('status').value = order.status;
        document.getElementById('payment').innerHTML = order.paymentMethod;
        document.getElementById('date').innerHTML = order.date;
    } else {
        document.getElementById('empty-cart').classList.add('hide');
        document.getElementById('cart__payment').classList.remove('hide');
        if (!document.querySelector('.btndelete').classList.contains('hide')) {
            document.querySelector('.btndelete').classList.add('hide');
        }
        let htmls = order.cartItems.map((item, index) => {
            console.log(item.quantity);
            return `
            <div class="order">
                <div class="order-container">
                    <span class="item__code">${index + 1}</span>
                    <img src="${item.image}" alt="">
                    <div class="order-name">
                        <h3 class="order-product">${item.title}</h3>
                        <p class="order-price">${item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
                    </div>
                    <input disabled type="text" id="quantity" onchange="handleChangeQuantity('${item.id}');" name="quantity" value="${item.quantity}">
                </div>
            </div>
            `
            
        });
        document.getElementById('cart-product').innerHTML = htmls.join('');
        document.getElementById('pricing').innerHTML = order.total.toLocaleString('vi', {style : 'currency', currency : 'VND'});
        document.getElementById('status').disabled = true;
        document.getElementById('status').value.innerHTML = "Đang xử lý";
        document.getElementById('payment').innerHTML = order.paymentMethod;
        document.getElementById('date').innerHTML = order.date;
    }
}

function handleChangeStatus() {
    document.querySelector('.btnpay').classList.remove('hide');
}

function handleUpdateOrder() {
    let orderList = JSON.parse(localStorage.getItem('cartList'));
    let orderEditing = getCart();
    let index = orderList.findIndex(product => product.id === orderEditing.id);
    orderList[index].status = document.getElementById('status').value;
    localStorage.setItem('orderToview', JSON.stringify(orderList[index]));
    localStorage.setItem('cartList', JSON.stringify(orderList));
    renderCart(getCart());
    document.querySelector('.btnpay').classList.add('hide');
}

function handleDeleteOrder() {
    let orderList = JSON.parse(localStorage.getItem('cartList'));
    let orderDeleting = getCart();
    let index = orderList.findIndex(product => product.id === orderDeleting.id);
    orderList.splice(index, 1);
    localStorage.setItem('cartList', JSON.stringify(orderList));
    localStorage.removeItem('orderToview');
    window.location.replace('./quanlydonhang.html');
}