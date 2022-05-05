const login = document.querySelector(".login-btn");
const userName = document.querySelector(".username-login");
const password = document.querySelector(".password");
const textMessage = document.querySelector(".text-message");
const handleLogin = () => {
    console.log(userName.value, password.value);
    let userList = JSON.parse(localStorage.getItem('userList'));
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].username.toLocaleLowerCase() === userName.value.toLocaleLowerCase() &&
            userList[i].password.toLocaleLowerCase() === password.value.toLocaleLowerCase()) {
            if (userList[i].stat === 'disable') {
                alert('Tài khoản đã bị vô hiệu hóa!!!');
                return;
            }
            if (userList[i].role === 'user') {
                localStorage.setItem('sectionUserName', JSON.stringify(userList[i]));
                window.location.replace("./index.html");
            } else if (userList[i].role === 'adminServer') {
                if (confirm("Chuyển hướng tới AdminSeller?")) {
                    localStorage.setItem('sectionUserName', JSON.stringify(userList[i]));
                    window.location.replace("./adminSeller.html");
                } else {
                    localStorage.setItem('sectionUserName', JSON.stringify(userList[i]));
                    window.location.replace("./adminServer.html");
                }
            } else if (userList[i].role === 'adminSeller') {
                localStorage.setItem('sectionUserName', JSON.stringify(userList[i]));
                window.location.replace("./adminSeller.html");
            } else {
                console.error("Invalid role: " + userList[i].role);
            }
        } else {
            textMessage.innerText = "Tài khoản hoặc mật khẩu sai!";
        }
    }
}
login.onclick = () => {
    handleLogin();
}