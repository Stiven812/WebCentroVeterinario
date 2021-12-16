/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function enviar()
{
    
    var nombre = document.getElementsById("nombreMascota").value;
    var edad   = document.getElementsById("edad").value;
    var raza   = document.getElementsById("raza").value;
    var fecha  = document.getElementsById("miFecha").value;
    var hora   = document.getElementsById("miHora").value;
    var dueño  = document.getElementsById("dueño").value;
    alert("Sus datos han quedado agendados, para: " + nombre + " de " + raza + "<br>" +
             " con " + edad + "años, el dia: " + fecha + " a las: " + hora + "</br>" +
             " perteneciente a: " + dueño + ".");
}


