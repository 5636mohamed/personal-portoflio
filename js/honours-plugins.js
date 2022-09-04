// get all elements in the home page

let competitions = document.getElementById("competitions"),
    features = document.getElementById("feature"),
    projects = document.getElementById("projects"),
    footer = document.querySelector("footer");
window.onscroll = function (){
    if (window.scrollY >= (competitions.offsetTop- 200))
        competitions.classList.add("slide-top");
    if (window.scrollY >= (features.offsetTop- 200))
        features.classList.add("slide-top");
    if (window.scrollY >= (projects.offsetTop- 200))
        projects.classList.add("slide-top");
    if (window.scrollY >= (footer.offsetTop - 500))
        footer.classList.add("slide-top");
};

let overlay = document.querySelector(".overlay"),
    html = document.querySelector("html");

window.onload = function (){
    overlay.style.opacity = "0";
    html.style.overflow = "auto";
}