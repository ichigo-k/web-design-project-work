const links = document.querySelectorAll('.desktop-menu li a');
const ctaCardTitle = document.querySelector(".cta-card .content  h3")
const ctaCardText = document.querySelector(".cta-card .content  p")
const ctaCardButton = document.querySelector(".cta-card .content  button")
const ctaCardImage = document.querySelector(".cta-card img")
const ctaCard = document.querySelector(".cta-card")

links.forEach(link => {
    if (link.href === window.location.href) {
        link.id = 'active';
    }
});



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


const services = [

    {
        title: "Tailored Programs",
        description: "Our workout plans are customized to suit all fitness levels, from beginners to experts.",
        button: "Find Your Plan",
        image: "https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_960_720.jpg",
        color: "#27AE60" // Refreshing Green
    },
    {
        title: "Expert Trainers",
        description: "Train with certified professionals who will guide and motivate you every step of the way.",
        button: "Meet Our Trainers",
        image: "https://cdn.pixabay.com/photo/2021/01/04/06/21/man-5886574_1280.jpg",
        color: "#2980B9" // Professional Blue
    },
    {
        title: "Modern Equipment",
        description: "Work out with state-of-the-art fitness equipment designed for optimal performance.",
        button: "View Facilities",
        image: "https://cdn.pixabay.com/photo/2021/02/03/11/32/gym-5977600_960_720.jpg",
        color: "#F1C40F" // Bright Yellow
    },
    {
        title: "Group Classes",
        description: "Join dynamic group classes like yoga, spinning, and Zumba for an exciting workout experience.",
        button: "Explore Classes",
        image: "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg",
        color: "#8E44AD" // Soothing Purple
    },
    {
        title: "Flexible Memberships",
        description: "Choose from a variety of membership plans that fit your schedule and budget.",
        button: "Check Plans",
        image: "https://cdn.pixabay.com/photo/2021/11/07/17/40/woman-6777444_1280.jpg",
        color: "#E74C3C" // Energetic Red
    }

];

let index =0
const updateCard = () => {
   
        ctaCardButton.innerText = services[index]['button'];
        ctaCardButton.style.background = services[index]['color'];
        ctaCardImage.src = services[index]['image'];
        ctaCardTitle.innerText = services[index]['title'];
        ctaCardText.innerText = services[index]['description'];
        index = (index + 1) % services.length;
};


setInterval(updateCard, 2000);





