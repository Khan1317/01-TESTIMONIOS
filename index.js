import {testimonios} from "./testimonios.js";

const $img = document.querySelector("img");
const $text = document.querySelector(".text");
const $username = document.querySelector(".username");
let idx = 0;

actualizarTestimonio();

document.addEventListener('DOMContentLoaded', function(){
    const isFirefox = typeof InstallTrigger !== 'undefined';
    if(isFirefox){
        $text.classList.add('text-firefox');
    }

})


function actualizarTestimonio(){
    const { Nombre, FotoUrl, Mensaje } = testimonios[idx];

    $img.src = FotoUrl;
    $text.innerText = Mensaje;
    $username.innerText = Nombre;

    idx++;

    if(idx === testimonios.length){
        idx = 0;
    }

    setTimeout(() => {
        actualizarTestimonio();
    }, 10000);
}