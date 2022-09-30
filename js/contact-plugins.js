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
let overlay = document.querySelector(".overlay-org"),
    html = document.querySelector("html");

window.onload = function (){
    overlay.style.opacity = "0";
    overlay.style.zIndex = "-1";
    overlay.style.display = "none";
    html.style.overflow = "auto";
}

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