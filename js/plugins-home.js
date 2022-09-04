var typed = new Typed(".auto-typed", {
    strings: ["Problem Solver", "Programmer", "Web Developer", "UI Designer", "Content Creator"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

// get all overlay content to make the loader

let overlay = document.querySelector(".overlay"),
    html = document.querySelector("html");

window.onload = function (){
    overlay.style.opacity = "0";
    html.style.overflow = "auto";
}

// get all elements in the home page

let about = document.getElementById("about"),
    education = document.getElementById("education"),
    resume = document.getElementById("resume"),
    footer = document.querySelector("footer");
window.onscroll = function (){
    if (window.scrollY >= (about.offsetTop- 200))
        about.classList.add("slide-top");
    if (window.scrollY >= (education.offsetTop- 200))
        education.classList.add("slide-top");
    if (window.scrollY >= (resume.offsetTop- 200))
        resume.classList.add("slide-top");
    if (window.scrollY >= (footer.offsetTop - 500))
        footer.classList.add("slide-top");
};