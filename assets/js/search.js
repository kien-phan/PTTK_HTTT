let searchBox = document.getElementById("search-box");
let searchBox1 = document.getElementById("search-box1");
let searchInput = document.getElementById("search-input");
let searchInput1 = document.getElementById("search-input1");

searchInput.addEventListener('keyup', (e) => {
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
        document.getElementById('search-box').innerHTML = `
        <li  class="search-item-wrapper nohover">
            Bạn muốn tìm sản phẩm...
        </li>
        `;
    }
})
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
searchInput.addEventListener('focus', () => {
    document.getElementById('search-box').innerHTML = `
        <li  class="search-item-wrapper nohover">
            Bạn muốn tìm sản phẩm...
        </li>
    `;
})
searchInput1.addEventListener('focus', () => {
    document.getElementById('search-box1').innerHTML = `
        <li  class="search-item-wrapper nohover">
            Bạn muốn tìm sản phẩm...
        </li>
    `;
})
searchInput.addEventListener('blur', () => {
    setTimeout(() => {
        document.getElementById('search-box').innerHTML = ""
    }, 200)
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
    document.getElementById('search-box').innerHTML = reducedHtmls.join('');
    document.querySelector('.jsViewProduct').addEventListener('click', () => {
        localStorage.setItem('searchProduct', JSON.stringify(productList));
        window.location.replace("./Product.html");
    })
    document.getElementById('search-btn').addEventListener('click', () => {
        localStorage.setItem('searchProduct', JSON.stringify(productList));
        indow.location.replace("./Product.html");
    })
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
    return productList ? productList :  [];
}

function formatPrice(price) {
    var formatter = new Intl.NumberFormat('vi-VN', {
        style:  'currency',
        currency:  'VND',
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


