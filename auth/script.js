const loginCon = document.querySelector('.login-container');
const loginImg = document.querySelector('.login-container img');

if (window.location.pathname === '/auth/signup.html') {
    loginCon.style.flexDirection = 'row';
    loginImg.style.height = '30rem';
} else {
    loginCon.style.flexDirection = 'row-reverse';
}
