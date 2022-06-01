console.log("*******Modificando Clases desde JS");

/*
Acceder eligiendo la primer clase y crear una variente para acceder más  rápido a ella.
*/
const $card = document.querySelector(".card");

/*
Averiguar si un elemento tiene una clase en particular
1) classList  muestra un DOM Token , datos de la clase.
2) contains Pregunta si tiene algo que consultemos dentro de una clase
Devuelve true o false.
*/

console.log($card.classList);
console.log($card.classList.contains("rotate-45"));

/*
Modificar esa clase
1) add  Agrega
2) remove Elimina
3) toggle  (Agrega si no existe, elimina si existe).
4) replace (Reemplaza)
5) add Metodo agregar varios a la vez.
*/
$card.classList.add("rotate-45", "sepia");
$card.classList.remove("rotate-45");
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-130");
$card.classList.add("opacity-80", "sepia");
