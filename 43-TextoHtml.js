console.log("****Modificación del Texto******");

/*Creacion de variable para acortar el texto*/
const $wathIsDom = document.getElementById("que-es");
console.log($wathIsDom);

/*Creacion de variable para colocar el nuevo texto*/
let text = `Hola soy el nuevo texto del curso :D <br>`;

/*
Ahora veremos las forma de colocar en el html
1) inerText  (Este no se usa mucho) Coloca texto y etiquetas y comandos
2) textConter (Este si es estandar)  Coloca tambien texto y comandos.
3) innerHTML   Coloca el texto solamente.
4) outerHTML  (Remplaza totalmente el codigo anterior y Coloca el texto solamente.)
*/
//$wathIsDom.innerText = text;
$wathIsDom.textContent = text;
$wathIsDom.innerHTML = text;
$wathIsDom.outerHTML = text;
