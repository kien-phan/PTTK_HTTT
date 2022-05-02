var htmlAddproduct = ''
htmlAddproduct += `<div class="col-2_wrapper">
<div class="order__heading">
    <h2 class="col-2__heading">Thêm sản phẩm</h2>
</div>
<form name="addProductForm" class="register-form" id="register-form">
    <div class="form-group form-type">
        <label for="state">Phân loại:</label>
        <div class="form-select">
            <select name="type" id="type">
                <option value="laptop">Laptop - Macbook</option>
                <option value="PC">PC - Máy tính đồng bộ</option>
                <option value="Monitor">Màn hình máy tính</option>
                <option value="components">Linh kiện máy tính</option>
                <option value="Spare-part">Phụ kiện & thiết bị ngoại vi</option>
            </select>
            <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
        </div>
    </div>
    <div class="form-group">
        <label for="image">Hình ảnh sản phẩm:</label>
        <input type="file" name="image" id="image" required="required">
    </div>
    <div class="form-group">
        <label for="name">Tên sản phẩm:</label>
        <input type="text" name="name" id="name" required="required">
    </div>

    <div class="form-group">
        <label for="price">Giá sản phẩm:</label>
        <input required="required" type="number" name="price1" id="price1">
    </div>
    <div class="form-group">
        <label for="sale">Giá sản phẩm thật:</label>
        <input required="required" type="number" name="price" id="price">
    </div>
    <div class="form-group">
        <label for="sale">Giảm giá (%):</label>
        <input required="required" type="number" name="sale_off" id="sale">
    </div>
    <div class="form-group">
        <label for="">Số lượng:</label>
        <input required="required" type="number" id="quantily">
    </div>
    <div class="form-group">
        <label for="">Mô tả:</label>
        <input required="required" type="text" id="desc">
    </div>
    <div class="form-group">
        <label for="">Nhà sản xuất:</label>
        <input required="required" type="text" id="producer">
    </div>
    <div class="form-submit ">
    <button onclick="addProduct()" value="Cập nhật" class="submit btn" name="submit" id="submit">Cập nhật</button>
    </div>
</form> </div>
`

var htmlRevenue = `
<div class="order__heading">
<h2 class="col-2__heading">Doanh thu</h2>
</div>
<div class="revenueContainer">

</div>
`;
var htmlProductManage = `<div class="order__heading">
<h2 class="col-2__heading">Sửa thông tin sản phẩm</h2>
<div class="ProductManage__SearchContainer">
    <input id="ProductManage__SearchInput" type="text" placeholder="Nhập tên sản phẩm" onkeyup="productManageSearch()">
 </div>
</div>
<div class="productsContainer">

</div>
<div id="pagination__all" class="pagination"></div>`

var htmlOderManage = `<div class="accountManage">
<div class="order__heading">
    <h2 class="col-2__heading">Quản lý đơn hàng</h2>
    </div>
<div class="accountManage__switchBtns">
    <div class="adminManage_btn accountManage__btn--active" onclick="clickAdmin()">
        <span>Đơn đang chờ</span>
    </div>
    <div class="userManage_btn" onclick="clickUser()">
        <span>Đơn đã duyệt</span>
    </div>
</div>

<div class="accountManage__body">
   
</div>
</div>`;


const btnSwitches = document.querySelectorAll('.management-list__page')
const renderSide = document.querySelector('#renderSide')
btnSwitches.forEach(element => {
    element.addEventListener('click', function () {
        btnSwitches.forEach(element => {
            if (this != element)
                element.classList.remove('management-active')
        });
        this.classList.add('management-active')

        if (element == btnSwitches[0]) {
            renderSide.innerHTML = htmlAddproduct;
        }
        if (element == btnSwitches[1]) {
            renderSide.innerHTML = htmlOderManage;
            let sectionUser = JSON.parse(window.localStorage.getItem('sectionUserName'));
            if (sectionUser.role === 'adminSeller') {
                renderOrderStat0Header();
                renderOrderStat0Content();
            }
        }
        if (element == btnSwitches[2]) {
            renderSide.innerHTML = htmlRevenue;
            sortInvoiceList();
            renderRevenue();
        }
        if (element == btnSwitches[3]) {
            renderSide.innerHTML = htmlProductManage;
            let products = JSON.parse(localStorage.getItem('products'));
            renderProduct(products);

        }
    })
})

function renderOrderStat0Header() {
    var html = `
    <div class="order-data-type">
    <div class="order-type --1"><p> Mã đơn hàng</p></div>
    <div class="order-type --2"><p> Tên khách hàng</p></div>
    <div class="order-type --3"><p> Ngày mua</p> </div>
    <div class="order-type --4"><p> Địa chỉ</p></div>
    <div class="order-type --5"><p> Phương thức TT</p></div>
    <div class="order-type --6"> </div>
    </div>
    <ul class="order-wrapper">
    
    </ul>`;
    document.querySelector('.accountManage__body').innerHTML = html
}

function renderOrderStat0Content() {
    let orderList = JSON.parse(localStorage.getItem('cartList'));
    let htmls = orderList.map(order => {
        if (order.stat == 0) {
            return `
            <li class="order__info">
                <div class="order__data --1">${order.id}</div>
                <div class="order__data --2">${order.user.fullname}</div>
                <div class="order__data --3">${order.date}</div>
                <div class="order__data --4">${order.address}</div>
                <div class="order__data --5">${order.paymentMethod}</div>
                <div class="order__data --6">
                    <div class="btn" onclick="handleChangeStatus('${order.id}')">Xem chi tiết</div>
                    <div class="btn" onclick="confirmOrder('${order.id}')">Duyệt đơn hàng</div>
                </div>
            </li>       
            `
        }
    })
    document.querySelector('.order-wrapper').innerHTML = htmls.join('');
}

function clickUser() {
    const adminBtn = document.querySelector('.adminManage_btn')
    const userBtn = document.querySelector('.userManage_btn')
    adminBtn.classList.remove('accountManage__btn--active');
    userBtn.classList.add('accountManage__btn--active');
    let orderList = JSON.parse(localStorage.getItem('cartList'));
    let htmls = orderList.map(order => {
        if (order.stat == 1) {
            return `
            <li class="order__info">
                <div class="order__data --1">${order.id}</div>
                <div class="order__data --2">${order.user.fullname}</div>
                <div class="order__data --3">${order.date}</div>
                <div class="order__data --4">${order.address}</div>
                <div class="order__data --5">${order.paymentMethod}</div>
                <div class="order__data --6">
                    <div class="btn" onclick="handleChangeStatus('${order.id}')">Xem chi tiết</div>
                </div>
            </li>       
            `
        }
    })
    document.querySelector('.order-wrapper').innerHTML = htmls.join('');
}

function clickAdmin() {
    const adminBtn = document.querySelector('.adminManage_btn')
    const userBtn = document.querySelector('.userManage_btn')
    userBtn.classList.remove('accountManage__btn--active')
    adminBtn.classList.add('accountManage__btn--active')
    renderOrderStat0Content()
}

function viewAllProduct(productType) {
    let products = JSON.parse(localStorage.getItem('products'));
    const filteredList = products.filter(product => (product.type === productType));
    localStorage.setItem('searchProduct', JSON.stringify(filteredList));
    window.location.replace("./Product.html");
}

let searchBox1 = document.getElementById("search-box1");
let searchInput1 = document.getElementById("search-input1");


searchInput1.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    if (searchString) {
        const productList = getProduct();
        const filteredList = productList.filter((product) => {
            return (
                product.title.toLowerCase().includes(searchString)
            );
        });
        displaySearchItem(filteredList);
    } else {
        document.getElementById('search-box1').innerHTML = `
        <li  class="search-item-wrapper nohover">
            Bạn muốn tìm sản phẩm...
        </li>
        `;
    }
})

searchInput1.addEventListener('focus', () => {
    document.getElementById('search-box1').innerHTML = `
        <li  class="search-item-wrapper nohover">
            Bạn muốn tìm sản phẩm...
        </li>
    `;
})

searchInput1.addEventListener('blur', () => {
    setTimeout(() => {
        document.getElementById('search-box1').innerHTML = ""
    }, 200)
})

function displaySearchItem(productList) {
    let htmls = productList.map((product) => {
        return `
            <li  class="search-item-wrapper" onClick="viewProduct('${product.id}')">
                <img src="${product.image}" class="search-item__img">
                <div class="search-item-info">
                    <h3 class="search-item__name">${product.title}</h3>
                    <p class="search-item__price">${formatPrice(product.price)}</p>
                </div>
            </li>
        `
    });
    let reducedHtmls = htmls;
    reducedHtmls.length = 4;
    reducedHtmls = [...reducedHtmls, `
         <li class="search-item-wrapper jsViewProduct">
             Xem tất cả sản phẩm...
         </li>
     `]
    document.getElementById('search-box1').innerHTML = reducedHtmls.join('');
    document.querySelector('.jsViewProduct').addEventListener('click', () => {
        localStorage.setItem('searchProduct', JSON.stringify(productList));
        window.location.replace("./Product.html");
    })
    document.getElementById('search-btn1').addEventListener('click', () => {
        localStorage.setItem('searchProduct', JSON.stringify(productList));
        window.location.replace("./Product.html");
    })
}

function getProduct() {
    let productList = JSON.parse(localStorage.getItem("products"));
    return productList ? productList : [];
}

function formatPrice(price) {
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return formatter.format(price);
}

function viewProduct(id) {
    if (localStorage.getItem('productId')) {
        localStorage.removeItem('productId');
    }
    localStorage.setItem('productId', id);
    console.log(id);
    window.location.replace('./viewProduct.html');
}

function addProduct() {

    let productList = JSON.parse(localStorage.getItem("products"));
    var obj = new Object;

    var length = productList.length;
    obj.id = `${length}`;

    var type = document.querySelector('#type')
    obj.type = type.value;

    var productName = document.querySelector('#name');
    obj.title = productName.value;

    var price1 = document.querySelector('#price1');
    obj.price1 = price1.value;

    var price = document.querySelector('#price1');
    obj.price = price.value;

    var sale = document.querySelector('#sale');
    obj.sale_off = sale.value;

    var quantily = document.querySelector('#quantily');
    obj.quantily = quantily.value;

    var info = new Object

    var desc = document.querySelector('#desc');
    info.desc = desc.value;

    var producer = document.querySelector('#producer');
    info.producer = producer.value;

    obj.info = info;

    let testimg = document.querySelector('#image')
    const fileRead = new FileReader();
    const filesupload = testimg.files;
    obj.image = '';
    fileRead.readAsDataURL(filesupload[0]);
    fileRead.onload = function (e) {
        let img = e.target.result;
        obj.image = img;
        productList.push(obj);
        localStorage.setItem("products", JSON.stringify(productList));
        alert("Thêm sản phẩm thành công")
        window.location.reload();
    }
}

function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}


// toDataURL(`${file}`, function(dataUrl) {
//     // obj.image = dataUrl
//     console.log(dataUrl)
// })

// console.log(file);

// $(function()
// {
//     $('#image').on('change',function ()
//     {
//         var filePath = $(this).val();
//         console.log(filePath)
//     });
// });

function renderProduct(products) {
    if (products) {
        $(() => {
            let container = $('#pagination__all');
            container.pagination({
                dataSource: [
                    ...products,
                ],
                pageSize: 10,
                callback: function (data, pagination) {
                    var dataHtml = ``;
                    $.each(data, function (index, product) {
                        dataHtml += `
                            <div class="productItem">
                        <img src="${product.image}" alt="" class="productImg">
                        <div class="productName">${product.title}</div>
                        <div class="productQuantity">SL:${product.quantily}</div>
                        <div class="productItem__btns">
                            <div class="editBtn" onclick="edit(${product.id})">
                                <span>Chỉnh sửa</span>
                            </div>
                            <div class="deleteBtn" onclick="deleteProduct(${product.id})">
                                <span>Xóa</span>
                            </div>
                        </div>
                    </div>
                            `;
                    });
                    dataHtml += '</div>';
                    $(".productsContainer").html(dataHtml);
                }
            })
        })
    }
}

function productManageSearch() {
    var inputElement = document.getElementById('ProductManage__SearchInput')
    let products = JSON.parse(localStorage.getItem('products'));
    var html = ``
    var count = 0;
    var productsNew = []
    products.forEach(function (product) {
        if (product.title.toUpperCase().indexOf(inputElement.value.toUpperCase()) > -1 && inputElement.value.length > 1) {
            productsNew.push(product);
        }
    });

    if (productsNew.length) {
        $(() => {
            let container = $('#pagination__all');
            container.pagination({
                dataSource: [
                    ...productsNew,
                ],
                pageSize: 10,
                callback: function (data, pagination) {
                    var dataHtml = ``;
                    $.each(data, function (index, product) {
                        dataHtml += `
                                    <div class="productItem">
                                <img src="${product.image}" alt="" class="productImg">
                                <div class="productName">${product.title}</div>
                                <div class="productQuantity">SL:${product.quantily}</div>
                                <div class="productItem__btns">
                                    <div class="editBtn" onclick="edit(${product.id})">
                                        <span>Chỉnh sửa</span>
                                    </div>
                                    <div class="deleteBtn" onclick="deleteProduct(${product.id})">
                                        <span>Xóa</span>
                                    </div>
                                </div>
                            </div>
                                    `;
                    });
                    dataHtml += '</div>';
                    $(".productsContainer").html(dataHtml);
                }
            })
        })
    }
    else if (productsNew.length == 0) {
        renderProduct(products);
    }
    console.log(inputElement)
}


function edit(id) {
    let products = JSON.parse(localStorage.getItem('products'));
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            var dataHtml = `
            <form name="addProductForm" class="register-form" id="register-form">
            <div class="form-group form-type">
                <label for="state">Phân loại:</label>
                <div class="form-select">
                    <select name="type" id="type">
                        <option value="0">-----------------</option>
                        <option value="laptop">Laptop - Macbook</option>
                        <option value="PC">PC - Máy tính đồng bộ</option>
                        <option value="Monitor">Màn hình máy tính</option>
                        <option value="components">Linh kiện máy tính</option>
                        <option value="Spare-part">Phụ kiện & thiết bị ngoại vi</option>
                    </select>
                    <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                </div>
            </div>
            <div class="form-group">
                <label for="image">Hình ảnh sản phẩm:</label>
                <input type="file" name="image" id="image" required="required">
            </div>
            <div class="form-group">
                <label for="name">Tên sản phẩm:</label>
                <input type="text" name="name" id="name" required="required" value="${products[i].title}">
            </div>
        
            <div class="form-group">
                <label for="price">Giá sản phẩm:</label>
                <input required="required" type="number" name="price1" id="price1" value="${products[i].price1}">
            </div>
            <div class="form-group">
                <label for="sale">Giá sản phẩm thật:</label>
                <input required="required" type="number" name="price" id="price" value="${products[i].price}">
            </div>
            <div class="form-group">
                <label for="sale">Giảm giá (%):</label>
                <input required="required" type="number" name="sale_off" id="sale" value="${products[i].sale_off}">
            </div>
            <div class="form-group">
                <label for="">Số lượng:</label>
                <input required="required" type="number" id="quantily" value="${products[i].quantily}">
            </div>
            <div class="form-group">
                <label for="">Mô tả:</label>
                <input required="required" type="text" id="desc" value="${products[i].info.desc}">
            </div>
            <div class="form-group">
                <label for="">Nhà sản xuất:</label>
                <input required="required" type="text" id="producer" value="${products[i].info.producer}">
            </div>
            <div class="form-submit ">
            <button class="submit btn turnbackBtn" onclick="load()">Quay lại</button>
            <button value="Cập nhật" class="submit btn" name="submit" onclick="submitEdit(${products[i].id})">Cập nhật</button>
            </div>
        </form>
            `
            $(".productsContainer").html(dataHtml);
            break;
        }
    }
}

function submitEdit(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            var type = document.querySelector('#type')
            if (type.value != "0") {
                products[i].type = type.value;
            }

            var productName = document.querySelector('#name');
            products[i].title = productName.value;

            var price1 = document.querySelector('#price1');
            products[i].price1 = price1.value;

            var price = document.querySelector('#price1');
            products[i].price = price.value;

            var sale = document.querySelector('#sale');
            products[i].sale_off = sale.value;

            var quantily = document.querySelector('#quantily');
            products[i].quantily = quantily.value;

            var desc = document.querySelector('#desc');
            products[i].info.desc = desc.value;

            var producer = document.querySelector('#producer');
            products[i].info.producer = producer.value;

            let testimg = document.querySelector('#image')
            if (testimg.value != "") {
                const fileRead = new FileReader();
                const filesupload = testimg.files;
                products[i].image = '';
                fileRead.readAsDataURL(filesupload[0]);
                fileRead.onload = function (e) {
                    let img = e.target.result;
                    products[i].image = img;
                }
            }

            localStorage.setItem("products", JSON.stringify(products));
            alert("Sửa sản phẩm thành công")
            window.location.reload();
            break;
        }
    }
}

function load() {
    window.location.reload();
}

function deleteProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products.splice(i, 1);
            localStorage.setItem("products", JSON.stringify(products));
            alert("Đã xóa 1 sản phẩm")
            window.location.reload();
            break;
        }
    }
}


function handleChangeStatus(id) {
    let orderList = JSON.parse(localStorage.getItem('cartList'));
    let index = orderList.findIndex(product => product.id === id);
    localStorage.setItem('orderToView', JSON.stringify(orderList[index]));
    window.location.replace('./viewOrder.html');
}

function confirmOrder(orderId) {
    var obj1 = new Object;
    let invoiceQuantity = 0
    let orderList = JSON.parse(localStorage.getItem('cartList'));
    let productList = JSON.parse(localStorage.getItem('products'));
    let invoiceList = JSON.parse(localStorage.getItem('invoiceList'));
    let detailInvoiceList = JSON.parse(localStorage.getItem('detailInvoiceList'));
    for (let i = 0; i < orderList.length; i++) {
        if (orderList[i].id === orderId) {
            orderList[i].stat = 1;

            obj1.id = generateInvoiceId();
            obj1.date = orderList[i].date;


            for (let j = 0; j < orderList[i].cartItems.length; j++) {
                for (let k = 0; k < productList.length; k++) {
                    if (orderList[i].cartItems[j].id == productList[k].id) {
                        productList[k].quantily = productList[k].quantily - orderList[i].cartItems[j].quantity

                        invoiceQuantity = invoiceQuantity + orderList[i].cartItems[j].quantity

                        var obj2 = new Object;
                        obj2.idInvoice = obj1.id;
                        obj2.idProduct = productList[k].id
                        obj2.quantity = orderList[i].cartItems[j].quantity
                        obj2.price = productList[k].price

                        detailInvoiceList.push(obj2);
                    }
                }

            }

            obj1.quantity = invoiceQuantity;
            obj1.total = orderList[i].total
            obj1.userName = orderList[i].user.username
            invoiceList.push(obj1);
            break;
        }
    }

    localStorage.setItem('detailInvoiceList', JSON.stringify(detailInvoiceList));
    localStorage.setItem('cartList', JSON.stringify(orderList));
    localStorage.setItem('products', JSON.stringify(productList));
    localStorage.setItem('invoiceList', JSON.stringify(invoiceList));
    renderOrderStat0Content();
}

function logOutAdmin() {
    window.localStorage.removeItem('sectionUserName')
    window.location.replace('./index.html');
}

function renderRevenue() {
    let invoiceList = JSON.parse(localStorage.getItem('invoiceList'));
    let currentMonth = invoiceList[0].date.split('/')[1];
    let currentYear = invoiceList[0].date.split('/')[2];
    var html = ``
    if (invoiceList[0]) {
        html += `
       <div class="revenueItem">
       <h3 class="revenue__Heading">Tháng ${currentMonth}</h3>
       <table style="width:100%">
           <tr>
               <td></td>
               <th>Đơn đã xử lý</th>
               <th>Đơn chưa xử lý</th>
               <th>Tổng</th>
           </tr>
           <tr>
               <td>Số lượng đơn</td>
               <td>${countStat1(currentMonth, currentYear)}</td>
               <td>${countStat0(currentMonth, currentYear)}</td>
               <td>${countStat0(currentMonth, currentYear) + countStat1(currentMonth, currentYear)}</td>
           </tr>
           <tr>
               <td>Số lượng sản phẩm</td>
               <td>${countAmountStat1(currentMonth, currentYear)}</td>
               <td>${countAmountStat0(currentMonth, currentYear)}</td>
               <td>${countAmountStat1(currentMonth, currentYear) + countAmountStat0(currentMonth, currentYear)}</td>
           </tr>
           <tr>
               <td>Tiền thu được</td>
               <td colspan="3">${formatPrice(countTotalMoney(currentMonth, currentYear))}</td>
           </tr>
       </table>
   </div>
       `
    }

    for (let i = 0; i < invoiceList.length; i++) {
        if ((getMonth(invoiceList[i].date) > currentMonth && getYear(invoiceList[i].date) == currentYear)
            || (getMonth(invoiceList[i].date) <= currentMonth && getYear(invoiceList[i].date) != currentYear)) {
            currentMonth = getMonth(invoiceList[i].date)
            currentYear = getYear(invoiceList[i].date)
            html += `
        <div class="revenueItem">
            <h3 class="revenue__Heading">Tháng ${currentMonth}</h3>
            <table style="width:100%">
                <tr>
                    <td></td>
                    <th>Đơn đã xử lý</th>
                    <th>Đơn chưa xử lý</th>
                    <th>Tổng</th>
                </tr>
                <tr>
                    <td>Số lượng đơn</td>
                    <td>${countStat1(currentMonth, currentYear)}</td>
                    <td>${countStat0(currentMonth, currentYear)}</td>
                    <td>${countStat0(currentMonth, currentYear) + countStat1(currentMonth, currentYear)}</td>
                </tr>
                <tr>
                    <td>Số lượng sản phẩm</td>
                    <td>${countAmountStat1(currentMonth, currentYear)}</td>
                    <td>${countAmountStat0(currentMonth, currentYear)}</td>
                    <td>${countAmountStat1(currentMonth, currentYear) + countAmountStat0(currentMonth, currentYear)}</td>
                </tr>
                <tr>
                    <td>Tiền thu được</td>
                    <td colspan="3">${formatPrice(countTotalMoney(currentMonth, currentYear))}</td>
                </tr>
            </table>
        </div>
       `
            console.log(currentMonth);
            console.log(currentYear)
        }
    }

    var renderSideRevenue = document.querySelector('.revenueContainer')
    renderSideRevenue.innerHTML = html
    // console.log(currentMonth);
    // console.log(currentYear)
}

function getYear(date) {
    if (typeof date === 'string')
        return date.split('/')[2];
}

function getMonth(date) {
    if (typeof date === 'string')
        return date.split('/')[1];
}

function countStat0(month, year) {
    let cartList = JSON.parse(localStorage.getItem('cartList'));
    let count = 0;
    for (let i = 0; i < cartList.length; i++) {
        if (getMonth(cartList[i].date) == month && getYear(cartList[i].date) == year && cartList[i].stat == 0) {
            count += 1;
        }
    }
    return count
}

function countStat1(month, year) {
    let invoiceList = JSON.parse(localStorage.getItem('invoiceList'));
    let count = 0;
    for (let i = 0; i < invoiceList.length; i++) {
        if (getMonth(invoiceList[i].date) == month && getYear(invoiceList[i].date) == year) {
            count += 1;
        }
    }
    return count - 1;
}

function countAmountStat0(month, year) {
    let cartList = JSON.parse(localStorage.getItem('cartList'));
    let count = 0;
    for (let i = 0; i < cartList.length; i++) {
        if (getMonth(cartList[i].date) == month && getYear(cartList[i].date) == year && cartList[i].stat == 0) {
            for (let j = 0; j < cartList[i].cartItems.length; j++) {
                count += cartList[i].cartItems[j].quantity;
            }
        }
    }
    return count
}

function countAmountStat1(month, year) {
    let invoiceList = JSON.parse(localStorage.getItem('invoiceList'));
    let count = 0;
    for (let i = 0; i < invoiceList.length; i++) {
        if (getMonth(invoiceList[i].date) == month && getYear(invoiceList[i].date) == year) {
            count += invoiceList[i].quantity;
        }
    }
    return count - 3;
}

function countTotalMoney(month, year) {
    let invoiceList = JSON.parse(localStorage.getItem('invoiceList'));
    let count = 0;
    for (let i = 0; i < invoiceList.length; i++) {
        if (getMonth(invoiceList[i].date) == month && getYear(invoiceList[i].date) == year) {
            count += invoiceList[i].total;
        }
    }
    return count - 30000000;
}

function generateInvoiceId() {
    let id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    let invoiceList = JSON.parse(localStorage.getItem('invoiceList'));
    for (let i = 0; i < invoiceList.length; i++) {
        while (invoiceList[i].id == id) {
            id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            i = 0;
        }
    }
    return id;
}


function sortInvoiceList() {
    let invoiceList = JSON.parse(localStorage.getItem('invoiceList'));

    invoiceList.sort(function sort(a, b) {
        var aa = a.date.split('/'),
            bb = b.date.split('/');
        return aa[2] - bb[2] || aa[1] - bb[1];
    });
    localStorage.setItem('invoiceList', JSON.stringify(invoiceList));
}







