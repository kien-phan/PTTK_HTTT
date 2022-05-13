
let userString = 'user';
let adminServerString = 'adminServer';
let adminSellerString = 'adminSeller';
const adminBtn = document.querySelector('.adminManage_btn')
const userBtn = document.querySelector('.userManage_btn')
var htmlAccountManage = `<div class="accountManage">
<div class="accountManage__switchBtns">
    <div class="adminManage_btn accountManage__btn--active" onclick="clickAdmin()">
        <span>Admin</span>
    </div>
    <div class="userManage_btn" onclick="clickUser()">
        <span>User</span>
    </div>
</div>

<div class="accountManage__body">
   
</div>
</div>`
var htmlRevenue = `
<div class="order__heading">
<h2 class="col-2__heading">Doanh thu</h2>
</div>
<div class="revenueContainer">

</div>
`;
initAccountManage();


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
            renderSide.innerHTML = htmlAccountManage;
            initAccountManage();

        }
        if (element == btnSwitches[1]) {
            renderSide.innerHTML = htmlRevenue;
            sortInvoiceList();
            renderRevenue();
        }
    })
})





function initAccountManage() {
    adminBtn.classList.add('accountManage__btn--active')
    userBtn.classList.remove('accountManage__btn--active')
    let userList = JSON.parse(localStorage.getItem('userList'));
    let html = '';
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].role === "adminServer") {
            if(userList[i].stat == "enable") {
                html += `<div class="accountManage__body-item">
                <div class="icon__block">
                    <i class="accountIcon fas fa-user-circle"></i>
                    <span class="accountName">${userList[i].username}</span>
                </div>
                <div class="accountManage__buttonList">
                    <div class="buttonItem buttonItem__setRole">
                        <span>Cấp quyền</span> 
                    </div>
                    <div class="buttonItem" onclick="disableAccount('${userList[i].username}')">Vô hiệu hóa</div>
                    <div class="subBtns">
                        <button class="buttonItem" onclick="setRole('${userList[i].username}','${userString}')">User</button>
                        <button class="buttonItem" onclick="setRole("${userList[i].username}","${adminSellerString}")">AdminSeller</button>
                        <button class="buttonItem buttonItem--active" onclick="setRole('${userList[i].username}','${adminServerString}')">AdminServer</button>
                    </div>
                </div>
            </div>`
            }
            else {
                html += `<div class="accountManage__body-item">
                <div class="icon__block">
                    <i class="accountIcon fas fa-user-circle"></i>
                    <span class="accountName">${userList[i].username}</span>
                </div>
                <div class="accountManage__buttonList">
                    <div class="buttonItem buttonItem__setRole">
                        <span>Cấp quyền</span> 
                    </div>
                    <div class="buttonItem buttonItem--active" onclick="disableAccount('${userList[i].username}')">Vô hiệu hóa</div>
                    <div class="subBtns">
                        <button class="buttonItem" onclick="setRole('${userList[i].username}','${userString}')">User</button>
                        <button class="buttonItem" onclick="setRole("${userList[i].username}","${adminSellerString}")">AdminSeller</button>
                        <button class="buttonItem buttonItem--active" onclick="setRole('${userList[i].username}','${adminServerString}')">AdminServer</button>
                    </div>
                </div>
            </div>`
            }
        }
        else if (userList[i].role == "adminSeller") {
            if (userList[i].stat == "enable") {
                html += `<div class="accountManage__body-item">
                <div class="icon__block">
                    <i class="accountIcon fas fa-user-circle"></i>
                    <span class="accountName">${userList[i].username}</span>
                </div>
                <div class="accountManage__buttonList">
                    <div class="buttonItem buttonItem__setRole">
                        <span>Cấp quyền</span> 
                    </div>
                    <div class="buttonItem" onclick="disableAccount('${userList[i].username}')">Vô hiệu hóa</div>
                    <div class="subBtns">
                        <button class="buttonItem" onclick="setRole('${userList[i].username}','${userString}')">User</button>
                        <button class="buttonItem buttonItem--active" onclick="setRole("${userList[i].username}","${adminSellerString}")">AdminSeller</button>
                        <button class="buttonItem" onclick="setRole('${userList[i].username}','${adminServerString}')">AdminServer</button>
                    </div>
                </div>
            </div>`
            }
            else {
                html += `<div class="accountManage__body-item">
                <div class="icon__block">
                    <i class="accountIcon fas fa-user-circle"></i>
                    <span class="accountName">${userList[i].username}</span>
                </div>
                <div class="accountManage__buttonList">
                    <div class="buttonItem buttonItem__setRole">
                        <span>Cấp quyền</span> 
                    </div>
                    <div class="buttonItem buttonItem--active" onclick="disableAccount('${userList[i].username}')">Vô hiệu hóa</div>
                    <div class="subBtns">
                        <button class="buttonItem" onclick="setRole('${userList[i].username}','${userString}')">User</button>
                        <button class="buttonItem buttonItem--active" onclick="setRole("${userList[i].username}","${adminSellerString}")">AdminSeller</button>
                        <button class="buttonItem" onclick="setRole('${userList[i].username}','${adminServerString}')">AdminServer</button>
                    </div>
                </div>
            </div>`
            }
        }
    }
    const body = document.querySelector('.accountManage__body')
    body.innerHTML = html;
}






function setRole(name, role2) {
    btns = document.querySelectorAll('.subBtns')
    let userList = JSON.parse(localStorage.getItem('userList'));
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].username == name) {
            userList[i].role = role2;
        }
    }
    localStorage.setItem('userList', JSON.stringify(userList));
    initAccountManage();
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


function topBtnsClick() {
    let adminBtn = document.querySelector('.adminManage_btn')
    let userBtn = document.querySelector('.userManage_btn')
    let userList = JSON.parse(localStorage.getItem('userList'));
}

function clickUser() {
    adminBtn.classList.remove('accountManage__btn--active');
    userBtn.classList.add('accountManage__btn--active');
    let userList = JSON.parse(localStorage.getItem('userList'));
    let html = '';
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].role == "user") {
            if (userList[i].stat == "enable") {
                html += `<div class="accountManage__body-item">
                    <div class="icon__block">
                    <i class="accountIcon fas fa-user-circle"></i>
                    <span class="accountName">${userList[i].username}</span>
                    </div>
                    <div class="accountManage__buttonList">
                    <div class="buttonItem buttonItem__setRole">
                        <span>Cấp quyền</span> 
                    </div>
                    <div class="buttonItem" onclick="disableAccount('${userList[i].username}')">Vô hiệu hóa</div>
                    <div class="subBtns">
                        <button class="buttonItem buttonItem--active" onclick="setRole('${userList[i].username}','${userString}')">User</button>
                        <button class="buttonItem" onclick="setRole('${userList[i].username}','${adminSellerString}')">AdminSeller</button>
                        <button class="buttonItem" onclick="setRole('${userList[i].username}','${adminServerString}')">AdminServer</button>
                    </div>
                    </div>
                    </div>`
            }
            else {
                html += `<div class="accountManage__body-item">
                    <div class="icon__block">
                    <i class="accountIcon fas fa-user-circle"></i>
                    <span class="accountName">${userList[i].username}</span>
                    </div>
                    <div class="accountManage__buttonList">
                    <div class="buttonItem buttonItem__setRole">
                        <span>Cấp quyền</span> 
                    </div>
                    <div class="buttonItem buttonItem--active" onclick="disableAccount('${userList[i].username}')">Vô hiệu hóa</div>
                    <div class="subBtns">
                        <button class="buttonItem buttonItem--active" onclick="setRole('${userList[i].username}','${userString}')">User</button>
                        <button class="buttonItem" onclick="setRole('${userList[i].username}','${adminSellerString}')">AdminSeller</button>
                        <button class="buttonItem" onclick="setRole('${userList[i].username}','${adminServerString}')">AdminServer</button>
                    </div>
                    </div>
                    </div>`
            }
        }
    }
    const body = document.querySelector('.accountManage__body')
    body.innerHTML = html;
}

function clickAdmin() {
    userBtn.classList.remove('accountManage__btn--active')
    adminBtn.classList.add('accountManage__btn--active')
    initAccountManage();
}

function disableAccount(name) {
    let userList = JSON.parse(localStorage.getItem('userList'));
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].username == name) {
            if (userList[i].stat == "enable") {
                userList[i].stat = "disable";
                localStorage.setItem('userList', JSON.stringify(userList));
                initAccountManage();
                break;
            }
            else {
                userList[i].stat = "enable";
                localStorage.setItem('userList', JSON.stringify(userList));
                initAccountManage();
                break;
            }
        }
    }
}

function renderRevenue() {
    let invoiceList = JSON.parse(localStorage.getItem('invoiceList'));
    if (invoiceList.length == 0) return;
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
    return count;
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
    return count;
}

function countTotalMoney(month, year) {
    let invoiceList = JSON.parse(localStorage.getItem('invoiceList'));
    let count = 0;
    for (let i = 0; i < invoiceList.length; i++) {
        if (getMonth(invoiceList[i].date) == month && getYear(invoiceList[i].date) == year) {
            count += invoiceList[i].total;
        }
    }
    return count;
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

function logOutAdmin() {
    window.localStorage.removeItem('sectionUserName')
    window.location.replace('./index.html');
}





