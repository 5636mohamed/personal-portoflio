// get all elements in the home page

let courses = document.getElementById("courses"),
    features = document.getElementById("features"),
    projects = document.getElementById("projects"),
    footer = document.querySelector("footer");
window.onscroll = function (){
    if (window.scrollY >= (courses.offsetTop- 200))
        courses.classList.add("slide-top");
    if (window.scrollY >= (features.offsetTop- 200))
        features.classList.add("slide-top");
    if (window.scrollY >= (projects.offsetTop- 200))
        projects.classList.add("slide-top");
    if (window.scrollY >= (footer.offsetTop - 500))
        footer.classList.add("slide-top");
};

let overlay = document.querySelector("body > .overlay"),
    html = document.querySelector("html");

window.onload = function (){
    overlay.style.opacity = "0";
    overlay.style.zIndex = "-1";
    html.style.overflow = "auto";
}