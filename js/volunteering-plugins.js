// get all elements in the home page

let listItems = document.querySelectorAll(".positions .container ul li"),
    footer = document.querySelector("footer");
window.onscroll = function (){
    listItems.forEach((listItme) =>{
        if(window.scrollY >= (listItme.offsetTop + 50))
            listItme.classList.add("slide-top");
    });
    if(window.scrollY >= (footer.offsetTop - 500))
        footer.classList.add("slide-top");
};