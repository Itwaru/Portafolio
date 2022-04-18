/* export default function fade() {

    window.addEventListener("scroll", function () {

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

    })



} */