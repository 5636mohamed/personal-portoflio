var typed = new Typed(".auto-typed", {
    strings: ["Data Science", "Artificial Intelligence", "Robotics", "IoT", "Quantum Computing"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
})

let nums = document.querySelectorAll("#features .container .feat h6 div:first-child");
let starting = false;

function countUp(el){
    let aim = el.dataset.target;
    let counting = setInterval(() =>{
        val = parseInt(el.textContent);
        val += 1;
        el.textContent = val;
        if (el.textContent == aim)
            clearInterval(counting);
    }, 1500/aim);
}

// get all elements in the home page

let features = document.getElementById("features"),
    projects = document.getElementById("projects"),
    footer = document.querySelector("footer");
window.onscroll = function (){
    if (window.scrollY >= (features.offsetTop- 200)){
        features.classList.add("slide-top");
        if(!starting)
            nums.forEach((num) =>{countUp(num)});
        starting = true;
    }
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