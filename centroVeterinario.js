function enviar()
{   
    var nombre = document.getElementById("nombreMascota").value;
    var edad   = document.getElementById("edad").value;
    var raza   = document.getElementById("raza").value;
    var fecha  = document.getElementById("miFecha").value;
    var hora   = document.getElementById("miHora").value;
    var dueño  = document.getElementById("dueño").value;
    alert("Sus datos han quedado agendados, para: " + nombre + " de raza: " + raza + 
             " con edad: " + edad + "años, el dia: " + fecha + " a las: " + hora + 
             " perteneciente a: " + dueño + ".");    
 }

const contenedor2 = document.querySelector("#contenedor2");
const btnAgregar = document.querySelector("#btnAgregar");
let contenedor_img = document.querySelectorAll(".contenedor_img");
let ultimaImg = contenedor_img[contenedor_img.length -1];

contenedor2.insertAdjacentElement('afterbegin', ultimaImg);

function next()
{
    let primerImg = document.querySelectorAll(".contenedor_img")[0];
    contenedor2.style.marginLeft = "-200%";
    contenedor2.style.transition = "all 0.7s";
    setTimeout(function()
            {
                contenedor2.style.transition = "none";
                contenedor2.insertAdjacentElement('beforeend', primerImg);
                contenedor2.style.marginLeft = "-100%";
            }, 500);
}

setInterval(function(){next();}, 3000);

