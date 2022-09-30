// get all elements in the home page

let capstone = document.querySelectorAll(".capstone .container .cap"),
    problems = document.getElementById("problems"),
    youtube = document.getElementById("youtube"),
    footer = document.querySelector("footer");
window.onscroll = function (){
    capstone.forEach((cap) =>{
        if(window.scrollY >= (cap.offsetTop - 300))
            cap.classList.add("slide-top");
    });
    if(window.scrollY >= (problems.offsetTop - 300))
        problems.classList.add("slide-top");
    if(window.scrollY >= (youtube.offsetTop - 300))
        youtube.classList.add("slide-top");
    if(window.scrollY >= (footer.offsetTop - 500))
        footer.classList.add("slide-top");
};

let overlay = document.querySelector(".overlay-org"),
    html = document.querySelector("html");

window.onload = function (){
    overlay.style.opacity = "0";
    overlay.style.zIndex = "-1";
    overlay.style.display = "none";
    html.style.overflow = "auto";
}

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
