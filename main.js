import fade from "./fade.js";
import form from "./formulario.js";
import hamburger from "./menu.js";
form();
fade()

document.addEventListener("DOMContentLoaded", (e)=>{
    hamburger(".panel-btn",".panel",".panel_enlaces");
})






