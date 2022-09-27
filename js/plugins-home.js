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
    overlay.style.zIndex = "-1";
    html.style.overflow = "auto";
}

// get all elements in the home page

let about = document.getElementById("about"),
    resume = document.getElementById("resume"),
    projects = document.getElementById("projects"),
    connection = document.getElementById("contact"),
    footer = document.querySelector("footer");
window.onscroll = function (){
    if (window.scrollY >= (about.offsetTop - 200))
        about.classList.add("slide-top");
    if (window.scrollY >= (resume.offsetTop - 200))
        resume.classList.add("slide-top");
    if (window.scrollY >= (projects.offsetTop - 200))
        projects.classList.add("slide-top");
    if (window.scrollY >= (connection.offsetTop - 200))
        connection.classList.add("slide-top");
    if (window.scrollY >= (footer.offsetTop - 500))
        footer.classList.add("slide-top");
};


/* paste this line in verbatim */
window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
/* customize formbutton below*/     
formbutton("create", {
  action: "https://formspree.io/f/xvoyzznd",
  title: "How can we help?",
  fields: [
    { 
      type: "email", 
      label: "Email:", 
      name: "email",
      required: true,
      placeholder: "your@email.com"
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      placeholder: "What's on your mind?",
    },
    { type: "submit" }      
  ],
  styles: {
    title: {
      backgroundColor: "gray"
    },
    button: {
      backgroundColor: "gray"
    }
  }
});