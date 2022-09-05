let about = document.getElementById("about"),
    contact = document.getElementById("contact"),
    footer = document.querySelector("footer");
window.onscroll = function (){
    if (window.scrollY >= (about.offsetTop- 200))
        about.classList.add("slide-top");
    if (window.scrollY >= (contact.offsetTop- 200))
        contact.classList.add("slide-top");
    if (window.scrollY >= (footer.offsetTop - 500))
        footer.classList.add("slide-top");
};
let overlay = document.querySelector(".overlay"),
    html = document.querySelector("html");

window.onload = function (){
    overlay.style.opacity = "0";
    overlay.style.display = "none";
    html.style.overflow = "auto";
}