const imageSlide = document.querySelector('#image-slide');

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

let i = 0;

setInterval(() => {
    imageSlide.src = `../images/${images[i]}`;
    i = (i + 1) % images.length;
}, 2000);


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


const headText = document.querySelector('#head-text');
const texts = ['Transform Your Fitness Journey', 'Unleash Your Full Potential.', 'MAKE YOUR BODY HEALTHY & FIT'];

let j = 0;

function changeText() {
    
    headText.style.transition = 'opacity 1s ease'; 
    headText.style.opacity = 0; 

    setTimeout(() => {
        headText.textContent = texts[j]; 
        headText.style.opacity = 1; 
        j = (j + 1) % texts.length; 
    }, 900); 
}

// Change text every 3 seconds
setInterval(changeText, 5000);



