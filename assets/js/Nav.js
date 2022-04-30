const logAndReg = document.getElementById('log-and-reg');
const logAndReg1 = document.getElementById('log-and-reg1');
const userSection = document.getElementById('user-section');
const userSection1 = document.getElementById('user-section1');
const userInfo = JSON.parse(localStorage.getItem('sectionUserName'));

if (userInfo) {
    logAndReg.classList.add('hide');
    logAndReg1.classList.add('hide');
    userSection.classList.remove('hide');
    userSection1.classList.remove('hide');
    const username = document.querySelector('.username');
    const username1 = document.querySelector('.username1');
    username.innerHTML = `<span class="user-name-wrapper">${userInfo.fullname}</span>`;
    username1.innerHTML = `<span class="user-name-wrapper">${userInfo.fullname}</span>`;
    // if (userInfo.role === 'admin') {
    //     if (document.querySelector('.to-admin'))
    //         document.querySelector('.to-admin').classList.remove('hide');
    // }
} else {
    logAndReg.classList.remove('hide');
    logAndReg1.classList.remove('hide');
    userSection.classList.add('hide');
    userSection1.classList.add('hide');
}

const logoutBtn = document.getElementById('logout-btn')

logoutBtn.onclick = () => {
    window.location.replace("./index.html");
    localStorage.removeItem('sectionUserName');
    localStorage.removeItem('cartItems');
}
function viewAllProduct(productType) {
    let products = JSON.parse(localStorage.getItem('products'));
    const filteredList = products.filter(product => product.type === productType);
    localStorage.setItem('searchProduct', JSON.stringify(filteredList));
    window.location.replace("./Product.html");
}

