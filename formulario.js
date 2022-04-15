export default function form() {
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




}