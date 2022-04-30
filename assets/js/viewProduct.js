function renderProduct([product]) {
    let htmls =  `
        <div class="product-container">
            <div class="product-information">
                <div class="product-img">
                    <img src="${product.image}" alt="">
                </div>
                <div id="product-detail">
                    ${product.info.desc}
                </div>
            </div>
            <div class="product-main">
                <div class="product-name">${product.title}</div>
                <div class="producer">Nhà sản xuất: <span>${product.info.producer}</span></div>
                <div class="product-quantily">Số lượng còn lại: ${product.quantily}</div>
                <div class="product-price">
                    <div class="old-price-detail">
                        <h4>${formatPrice(product.price1)}</h4>
                        <p>Tiết kiệm: ${product.sale_off}%</p>
                    </div>
                    <div class="new-price">${formatPrice(product.price)}</div>
                </div>
                <div class="action__name-btn">
                    <button type="button" class="btn" onClick="handleForwardToCheckOut('${product.id}')">Mua Ngay</button>
                    <button type="button" class="btn" onClick="handleAddProductToCart('${product.id}')">
                        Thêm vào giỏ hàng
                    </button>
                </div>
                <div class="id-promotion">
                    <h4>Khuyến mãi liên quan</h4>
                    <ul>
                        <li>Nhập mã Mystery3000 giảm thêm 3% tối đa 300.000đ khi thanh toán</li>
                        <li>Nhập mã MysteryZ90 giảm thêm 4% tối đa 800.000đ. Áp dụng cho một số sản phẩm Apple trên 20.000.000đ </li>
                        <li>Nhập mã MysteryNoel giảm thêm 5% tối đa 1.000.000đ. Áp dụng cho các sản phẩm iPhone 13, Ipad 9th GEN & Mini 6</li>
                    </ul>
                </div>
            </div>
            <div class="product-contact">
                <div class="priority">
                    <i class="fas fa-truck"></i>
                    <p>Sản phẩm được giao hàng miễn phí</p>
                </div>
                <div class="offer-list">
                    <h4 class="offer-heading">Chính sách ưu đãi</h4>
                    <div class="offer">
                        <div class="offer-item">
                            <i class="fas fa-truck"></i>
                            <p>Miễn phí giao hàng cho đơn hàng từ 800K</p>
                        </div>
                        <div class="offer-item">
                            <i class="fas fa-shield-alt"></i>
                            <p>Cam kết hàng chính hãng 100%</p>
                        </div>
                        <div class="offer-item">
                            <i class="fas fa-undo"></i>
                            <p>Đổi trả trong vòng 10 ngày</p>
                        </div>
                    </div>
                </div>
                <div class="offer-list">
                    <h4 class="offer-heading">Chính sách ưu đãi</h4>
                    <div class="offer">
                        <div class="offer-item">
                            <i class="fas fa-truck"></i>
                            <p>Miễn phí giao hàng cho đơn hàng từ 800K</p>
                        </div>
                        <div class="offer-item">
                            <i class="fas fa-shield-alt"></i>
                            <p>Cam kết hàng chính hãng 100%</p>
                        </div>
                        <div class="offer-item">
                            <i class="fas fa-undo"></i>
                            <p>Đổi trả trong vòng 10 ngày</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    document.getElementById('product-wrapper').innerHTML = htmls;
}

function findProductByProductId() {
    let productId = localStorage.getItem('productId');
    let productList = JSON.parse(localStorage.getItem("products"));
    return productList.filter(product => product.id === productId);
}
window.onload = () => {
    renderProduct(findProductByProductId());
}

