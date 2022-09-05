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

let overlay = document.querySelector(".overlay"),
    html = document.querySelector("html");

window.onload = function (){
    overlay.style.opacity = "0";
    overlay.style.zIndex = "-1";
    html.style.overflow = "auto";
}