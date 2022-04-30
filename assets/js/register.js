const registerBtn = document.querySelector(".register-btn")

const handleRegister = () => {
    const name = document.querySelector(".reg-name");
    const email = document.querySelector(".reg-email");
    const phoneNumber = document.querySelector(".reg-tel");
    const username = document.querySelector(".reg-username");
    const password = document.querySelector(".reg-password");
    const reEnterPassword = document.querySelector(".reg-password2");
    if (!localStorage.getItem('userList')) {
        localStorage.setItem('userList', JSON.stringify(""));
    }
    let userList = JSON.parse(localStorage.getItem('userList'));
    if (userList) {
        if (validateName(name.value) && validateEmail(email.value, userList)
        && validatePhoneNumber(phoneNumber.value)  && validateUsername(username.value, userList) 
        && validatePassword(password.value, reEnterPassword.value)) {
            let newUser = {
                email: email.value,
                phoneNumber: phoneNumber.value,
                username: username.value, 
                password: password.value,
                fullname: name.value,
                role: "user"
            }
            userList = [...userList, newUser];
            localStorage.setItem('userList', JSON.stringify(userList));
            document.querySelector('.reg-message').innerText = "Đăng ký thành công";
            name.value = ""
            email.value = ""
            phoneNumber.value = ""
            username.value = ""
            password.value = ""
            reEnterPassword.value = ""
        }
    } else {
        let newUser = {
            email: email.value,
            phoneNumber: phoneNumber.value,
            username: username.value, 
            password: password.value,
            fullname: name.value,
            role: "user"
        }
        userList = [...userList, newUser];
        localStorage.setItem('userList', JSON.stringify(userList));
        document.querySelector('.reg-message').innerText = "Đăng ký thành công";
        name.value = ""
        email.value = ""
        phoneNumber.value = ""
        username.value = ""
        password.value = ""
        reEnterPassword.value = ""
    }
}

function validateName(name) {
    if (!name) {
        document.querySelector('.reg-message').innerText = "Vui lòng nhập tên đầy đủ";
        return false;
    } else {
        document.querySelector('.reg-message').innerText = "";
    }
    return true;
}

function validatePhoneNumber(phoneNumber) {
    if (!phoneNumber) {
        document.querySelector('.reg-message').innerText = "Vui lòng nhập SĐT";
        return false;
    } else {
        let reg = /^((\+)33|0)[1-9](\d{2}){4}$/;
        if (!reg.test(phoneNumber)) {
            document.querySelector('.reg-message').innerText = "Số điện thoại không hợp lệ!";
            return false;
        } else {
            document.querySelector('.reg-message').innerText = "";
        }
    }
    return true;
}

function validateEmail(email, userList) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    for (var i = 0; i < userList.length; i++) {
        if (userList[i].email.toLocaleLowerCase() === email.toLocaleLowerCase()) {
            document.querySelector('.reg-message').innerText = "Email đã được đăng kí!";
            return false;
        }
    }
    if (email) {
        if (!regex.test(email)) {
            document.querySelector('.reg-message').innerText = "Email sai định dạng!";
            return false;
        }
    } else {
        document.querySelector('.reg-message').innerText = "Vui lòng nhập Email!";
        return false;
    }
    return true;
}

function validateUsername(username, userList) {
    if (username) {
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].username.toLocaleLowerCase() === username.toLocaleLowerCase()) {
                document.querySelector('.reg-message').innerText = "Tài khoản đã tồn tại!";
                return false;
            }  
        }
    } else  {
        document.querySelector('.reg-message').innerText = "Vui lòng nhập tài khoản!";
        return false
    }
    return true;
}

function validatePassword(password, reEnterPassword) {
    if (password.length < 6) {
        document.querySelector('.reg-message').innerText = "Vui lòng nhập mật khẩu có độ dài lớn hơn 6 ký tự!";
        return false;
    } else if (password !== reEnterPassword) {
        document.querySelector('.reg-message').innerText = "Mật khẩu không trùng khớp!";
        return false;
    } else {
        document.querySelector('.reg-message').innerText = "";
    }
    return true;
}

function validateRole(role) {
    if (role === 'admin' || role === 'user') {
        return true;
    } else {
        document.querySelector('.reg-message').innerText = "Vui lòng chọn vai trò tài khoản!";
        return false;
    }
}

if (registerBtn) {
    registerBtn.onclick = () => {
        handleRegister();
    }
}

// const handleAdminRegister = () => {
//     const fullname = document.querySelector(".fullname");
//     const email = document.querySelector(".email");
//     const phoneNumber = document.querySelector(".phone-number");
//     const username = document.querySelector(".username");
//     const password = document.querySelector(".password");
//     const reEnterPassword = document.querySelector(".re-enter-password");
//     const role = document.querySelector("#role");
//     if (!localStorage.getItem('userList')) {
//         localStorage.setItem('userList', JSON.stringify(""));
//     }
//     let userList = JSON.parse(localStorage.getItem('userList'));
//     if (userList) {
//         if (validateName(fullname.value) && validateEmail(email.value, userList)
//         && validatePhoneNumber(phoneNumber.value)  && validateUsername(username.value, userList) 
//         && validatePassword(password.value, reEnterPassword.value) && validateRole(role.value)) {
//             let newUser = {
//                 email: email.value,
//                 phoneNumber: phoneNumber.value,
//                 username: username.value, 
//                 password: password.value,
//                 fullname: fullname.value,
//                 role: role.value
//             }
//             userList = [...userList, newUser];
//             localStorage.setItem('userList', JSON.stringify(userList));
//             document.querySelector('.message').innerText = "Đăng ký thành công";
//             fullname.value = ""
//             email.value = ""
//             phoneNumber.value = ""
//             username.value = ""
//             password.value = ""
//             reEnterPassword.value = ""
//             role.value = ""
//         }
//     } else {
//         let newUser = {
//             email: email.value,
//             phoneNumber: phoneNumber.value,
//             username: username.value, 
//             password: password.value,
//             name: fullname.value,
//             role: role.value,
//         }
//         userList = [...userList, newUser];
//         localStorage.setItem('userList', JSON.stringify(userList));
//         document.querySelector('.message').innerText = "Đăng ký thành công";
//         fullname.value = "";
//         email.value = "";
//         phoneNumber.value = "";
//         username.value = "";
//         password.value = "";
//         reEnterPassword.value = "";
//         role.value = "";
//     }
// }
// if (document.querySelector('.admin-register-btn')) {
//     document.querySelector('.admin-register-btn').addEventListener('click', () => {
//         handleAdminRegister();}
//     )
// }