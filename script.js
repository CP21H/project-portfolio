// NAV BAR 
const navLinkEls = document.querySelectorAll(`.nav_link`);
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEL => {
    const navLinkPathname = new URL(navLinkEL.href).pathname;

    if ((windowPathname === navLinkPathname) || (windowPathname === `/index.html` && navLinkPathname === '/')) {
        navLinkEL.classList.add('active');
    }
})



// BUTTON BAR
var tech = document.getElementById("tech");
var tools = document.getElementById("tools");
var bg_tech = document.getElementById("bg-tech");
var bg_tools = document.getElementById("bg-tools");
var button_tech = document.getElementById("button-tech");
var button_tools = document.getElementById("button-tools");

function enableTECH() {
    tech.style.visibility = "visible";
    tech.style.display = "grid";
    bg_tech.style.background = "#3f834e85";
    button_tech.style.color = "#61d87b";

    tools.style.visibility = "hidden";
    tools.style.display = "none";
    bg_tools.style.background = "none";
    button_tools.style.color = "#bebebe";
}

function enableTOOLS() {
    tools.style.visibility = "visible";
    tools.style.display = "grid";
    bg_tools.style.background = "#3f834e85";
    button_tools.style.color = "#61d87b";

    tech.style.visibility = "hidden";
    tech.style.display = "none";
    bg_tech.style.background = "none";
    button_tech.style.color = "#bebebe";
}
