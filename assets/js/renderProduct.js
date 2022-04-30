window.onload = function () {
    renderProduct('Monitor');
    renderProduct('components');
    renderProduct('Spare-part');
    renderProduct('PC');
    renderProduct('laptop');
}

function renderProduct(productType) {
    const products = JSON.parse(localStorage.getItem('products')).filter(product => product.type === productType);
    products.length = 10;
    $(function () {
        let container = $('#pagination' + `__${productType}`);
        container.pagination({
            dataSource: [
                ...products,
            ],
            pageSize: 5,
            callback: function (data, pagination) {
                var dataHtml = '<div class="product-cards">';
                $.each(data, function (index, product) {
                    dataHtml += `
                    <div class="product-card">
                        <a href="#" onClick="viewProduct('${product.id}')" class="product-item" >
                            <div class="card-image">
                            <img src="${product.image}" alt="">
                            </div>
                            <div class="card-title">${product.title}</div>
                            <div class="card-content">
                                <div class="money-old-detail">
                                    <div class="card-money-old">
                                    ${formatPrice(product.price)}
                                    </div>
                                    <div class="card-sale-off">
                                        (Tiết kiệm ${product.sale_off}%)
                                    </div>
                                </div>
                                <div class="card-money-new">
                                    <h2>${formatPrice(product.price)}</h2>
                                </div>
                                <div class="card-warehouse">
                                    <div class="card-icon">
                                        <i class="fas fa-shopping-bag"></i>
                                        <p>Còn hàng</p>
                                    </div>
                                </div>
                            </div> 
                        </a>
                   </div>
                    `;
                });
                dataHtml += '</div>';
                $("#data-container" + `__${productType}`).html(dataHtml);
            }
        })
    })
}

function viewAllProduct(productType) {
    let products = JSON.parse(localStorage.getItem('products'));
    const filteredList = products.filter(product => (product.type === productType ));
    localStorage.setItem('searchProduct', JSON.stringify(filteredList));
    window.location.replace("./Product.html");
}

function viewAllProductProducer(productType) {
    let products = JSON.parse(localStorage.getItem('products'));
    const filteredList = products.filter(product => (product.info.producer === productType ));
    localStorage.setItem('searchProduct', JSON.stringify(filteredList));
    window.location.replace("./Product.html");
}

function viewProduct(id) {
    if (localStorage.getItem('productId')) {
      localStorage.removeItem('productId');
    }
    localStorage.setItem('productId', id);
    console.log(id);
    window.location.replace('./viewProduct.html');
  }