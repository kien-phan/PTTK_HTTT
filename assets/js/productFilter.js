


btnsProducers = document.querySelectorAll('.btnProducer');
btnsProducers.forEach(element => {
    element.addEventListener('click', function () {
        this.classList.toggle('filter__btn--active');
        filter__Prod();
    })
});

btnsTypes = document.querySelectorAll('.btnType');
btnsTypes.forEach(element => {
    element.addEventListener('click', function () {
        btnsTypes.forEach(element => {
            if (this != element)
                element.classList.remove('filter__btn--active')
        });
        this.classList.toggle('filter__btn--active')
        filterOnClick();
    })
});

btnPrices = document.querySelectorAll('.btnPrice');
btnPrices.forEach(element => {
    element.addEventListener('click', function () {
        btnPrices.forEach(element => {
            if (this != element)
                element.classList.remove('filter__btn--active')
        });
        this.classList.toggle('filter__btn--active')
        filter__Prod();
    })
});

btnSorts = document.querySelectorAll('.btnSort');
btnSorts.forEach(element => {
    element.addEventListener('click', function () {
        btnSorts.forEach(element => {
            if (this != element)
                element.classList.remove('filter__btn--active')
        });
        this.classList.toggle('filter__btn--active')
        filter__Prod();
    })
});


function filterOnClick() {
    let products = JSON.parse(localStorage.getItem('products'));
    let filteredList = products;

    const btnType__LapMac = document.querySelector('#btnType__LapMac')
    const btnType__PC = document.querySelector('#btnType__PC')
    const btnType__Monitor = document.querySelector('#btnType__Monitor')
    const btnType__Compo = document.querySelector('#btnType__Compo')
    const btnType__Spare = document.querySelector('#btnType__Spare')

    //Type
    if (btnType__LapMac.classList.contains('filter__btn--active')) {
        filteredList = filteredList.filter(product => (product.type == "laptop"))
    }
    if (btnType__PC.classList.contains('filter__btn--active')) {
        filteredList = filteredList.filter(product => (product.type == "PC"))
    }
    if (btnType__Monitor.classList.contains('filter__btn--active')) {
        filteredList = filteredList.filter(product => (product.type == "Monitor"))
    }
    if (btnType__Compo.classList.contains('filter__btn--active')) {
        filteredList = filteredList.filter(product => (product.type == "components"))
    }
    if (btnType__Spare.classList.contains('filter__btn--active')) {
        filteredList = filteredList.filter(product => (product.type == "Spare-part"))
    }

    localStorage.setItem('searchProduct', JSON.stringify(filteredList));
    let products2 = JSON.parse(localStorage.getItem('searchProduct'));
    renderProduct(products2);
}

function filter__Prod() {
    let products = JSON.parse(localStorage.getItem('searchProduct'));
    let filteredList = products;

    const btnProd__Asus = document.querySelector('#btnProd__Asus');
    const btnProd__MSI = document.querySelector('#btnProd__MSI');
    const btnProd__Acer = document.querySelector('#btnProd__Acer');
    const btnProd__AOC = document.querySelector('#btnProd__AOC');
    const btnProd__DELL = document.querySelector('#btnProd__DELL');
    const btnProd__HP = document.querySelector('#btnProd__HP');
    let flag = 0;
    let filteredList__prod;
    let newList = [];
    //Producer
    if (btnProd__Asus.classList.contains('filter__btn--active')) {
        filteredList__prod = filteredList.filter(product => (product.info.producer == "Asus"))
        newList = newList.concat(filteredList__prod);
        filteredList__prod = filteredList;
        flag++
    }
    if (btnProd__MSI.classList.contains('filter__btn--active')) {
        filteredList__prod = filteredList.filter(product => (product.info.producer == "MSI"))
        newList = newList.concat(filteredList__prod);
        filteredList__prod = filteredList;
        flag++
    }
    if (btnProd__Acer.classList.contains('filter__btn--active')) {
        filteredList__prod = filteredList.filter(product => (product.info.producer == "Acer"))
        newList = newList.concat(filteredList__prod);
        filteredList__prod = filteredList;
        flag++
    }
    if (btnProd__AOC.classList.contains('filter__btn--active')) {
        filteredList__prod = filteredList.filter(product => (product.info.producer == "AOC"))
        newList = newList.concat(filteredList__prod);
        filteredList__prod = filteredList;
        flag++
    }
    if (btnProd__DELL.classList.contains('filter__btn--active')) {
        filteredList__prod = filteredList.filter(product => (product.info.producer == "Dell"))
        newList = newList.concat(filteredList__prod);
        filteredList__prod = filteredList;
        flag++
    }
    if (btnProd__HP.classList.contains('filter__btn--active')) {
        filteredList__prod = filteredList.filter(product => (product.info.producer == "HP"))
        newList = newList.concat(filteredList__prod);
        filteredList__prod = filteredList;
        flag++
    }

    const btnPrice__under10 = document.querySelector('#btnPrice__under10')
    const btnPrice__under15 = document.querySelector('#btnPrice__under15')
    const btnPrice__under20 = document.querySelector('#btnPrice__under20')
    const btnPrice__uppon20 = document.querySelector('#btnPrice__uppon20')

    const btnAsc = document.querySelector('#ascending')
    const btnDesc = document.querySelector('#descending')

    

    if(newList.length != 0){
        filteredList = newList;
    }
    if (newList.length == 0 && flag != 0){
        filteredList = [];
        renderProduct(filteredList);
        return;
    }

    

    //Price
    if (btnPrice__under10.classList.contains('filter__btn--active')) {
        if (filteredList.length == 0) {
            filteredList = products;
        }
        filteredList = filteredList.filter(product => (product.price <= 10000000))
        
    }
    if (btnPrice__under15.classList.contains('filter__btn--active')) {
        if (filteredList.length == 0) {
            filteredList = products;
        }
        filteredList = filteredList.filter(product => (product.price <= 15000000))
    }
    if (btnPrice__under20.classList.contains('filter__btn--active')) {
        if (filteredList.length == 0) {
            filteredList = products;
        }
            filteredList = filteredList.filter(product => (product.price <= 20000000))
    }
    if (btnPrice__uppon20.classList.contains('filter__btn--active')) {
        if (filteredList.length == 0) {
            filteredList = products;
        }
            filteredList = filteredList.filter(product => (product.price >= 20000000))
    }
    //Sort
    if (btnAsc.classList.contains('filter__btn--active')) {
        if (filteredList.length == 0) {
            filteredList = products;
        }
            filteredList = filteredList.sort((a, b) => a.price - b.price)
    }
    if (btnDesc.classList.contains('filter__btn--active')) {
        if (filteredList.length == 0) {
            filteredList = products;
        }
            filteredList = filteredList.sort((a, b) => b.price - a.price);
    }
    

    renderProduct(filteredList);
}

function renderProduct(products) {
    if (products) {
        $(() => {
            let container = $('#pagination');
            container.pagination({
                dataSource: [
                    ...products,
                ],
                pageSize: 10,
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
                    $("#data-container").html(dataHtml);
                }
            })
        })
    }
}


let products = JSON.parse(localStorage.getItem('searchProduct'));
renderProduct(products);
// const ascendingBtn = document.getElementById('ascending');
// const descendingBtn = document.getElementById('descending');
// ascendingBtn.addEventListener('click', () => {
//     descendingBtn.classList.remove('filter__btn--active')
//     ascendingBtn.classList.toggle('filter__btn--active')
//     products.sort((a, b) => a.price - b.price);
//     renderProduct(products);
// })
// descendingBtn.addEventListener('click', () => {
//     ascendingBtn.classList.remove('filter__btn--active')
//     descendingBtn.classList.toggle('filter__btn--active')
//     products.sort((a, b) => b.price - a.price);
//     renderProduct(products);
// })
