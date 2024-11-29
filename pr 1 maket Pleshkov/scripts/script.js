document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById('slider');
    const slides = [
        "img/startscreen.png",
        "img/mixplenka.png",
        "img/premiumplenka.png"
    ];
    let currentSlide = 0;
    const changeSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length; 
        slider.style.background = `url('${slides[currentSlide]}') no-repeat right, #000`; 
    };
    setInterval(changeSlide, 3000);
});

let menu = document.querySelector("header ul");
let menuToggle = document.querySelector(".burger-menu");

menuToggle.addEventListener("click", function(e) {
    e.preventDefault();
    menu.classList.toggle("show-menu");
    menuToggle.classList.toggle("active"); // Toggle the active class
}); 

window.addEventListener('resize', function() {
    if (window.innerWidth > 480 && menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu');
        menuToggle.classList.remove("active"); // Remove active class on resize
    }
});