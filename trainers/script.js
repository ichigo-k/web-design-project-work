
const menuBtn = document.getElementById('menu-btn');
const mobileNav = document.querySelector('#mobile-nav');
const menuIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.replace('fa-bars', 'fa-times');
    } else {
        menuIcon.classList.replace('fa-times', 'fa-bars');
    }
    mobileNav.classList.toggle('show');
});


const links = document.querySelectorAll('.desktop-menu li a');

links.forEach(link => {
    if (link.href === window.location.href) {
        link.id = 'active';
    }
});


