/* import fade from "./fade.js";
import form from "./formulario.js";
import hamburger from "./menu.js";
form();
fade()
hamburger(".panel-btn",".panel",".panel_enlaces");
document.addEventListener("DOMContentLoaded", (e)=>{
}) */

document.addEventListener("click", e => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
        document.querySelector(panel).classList.toggle("is-active")
        document.querySelector(panelBtn).classList.toggle("is-active")
    }
    if (e.target.matches(link)) {
        document.querySelector(panel).classList.remove("is-active")
        document.querySelector(panelBtn).classList.remove("is-active")
        
    }
})



function fade(direction) {
    let info = document.querySelectorAll(".fade_" + direction)

    for (var i = 0; i < info.length; i++) {

        let altura = window.innerHeight;
        let distancia = info[i].getBoundingClientRect().top;


        if (distancia <= altura) {

            info[i].classList.add("aparece");

        } else {
            info[i].classList.remove("aparece");
            
        }

    }

}
fade("left");
fade("up");
fade("opacity");


document.addEventListener("submit", (e) => {

    e.preventDefault();

    const $response=document.querySelector(".form_mensaje");
    fetch("https://formsubmit.co/ajax/enriqueitwaru@gmail.com", {
            method: "POST",
            body: new FormData(e.target)
        })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => {

            console.log(json);
            $response.classList.remove("none")
            document.getElementById("form").reset();
           
        })
        .catch(err => {

            console.log(err);
        })
        .finally(()=> setTimeout(() => {
            $response.classList.add("none");
        }, 3000));
})