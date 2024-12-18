const links = document.querySelectorAll('.desktop-menu li a');
const answers = document.querySelectorAll(".faq-item p")

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


function toggleAnswer(e) {
    const answer = e.querySelector("p");
    const icon = e.querySelector("span");

    
    answers.forEach((item) => {
        const parent = item.closest(".faq-item");
        const otherIcon = parent.querySelector("span");

        if (item !== answer) {
            item.style.display = "none";
            otherIcon.innerText = "+";
        }
    });

    
    const isCurrentlyVisible = answer.style.display === "block";
    answer.style.display = isCurrentlyVisible ? "none" : "block";
    icon.innerText = isCurrentlyVisible ? "+" : "-";

   
    answer.style.transition = "all 0.3s ease-in-out";
}
