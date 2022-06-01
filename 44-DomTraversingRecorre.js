console.log("****** Travesing, recorriendo el DOM*****");

/*
Traversing, recorre los elementos del DOM
*/

/*
Recorrer el DOM
Se recorrera la clase cards del html

1) Ver el contenido de cars
2) Ver el contenido de hijos de cards.
3) Ver especificamente el contenido de la tarjeta 2 de los childrens.
4) Ver el padre de cards. En este caso es el body.
5) Ver el primer hijo nodo de cards
6) Ver el primer elemento hijo de cards.
7) Ver el ultimo elemento hijo de cards, en este caso la ultima tarjeta.
8) Ver el elemnto anterior a cards. EN este caso el link de link-dom
9) Ver el elemnto posterior a cards. EN este caso el scr = " "
10) Ver si hay cerca un ... EN este caso un div
11) Ver si hay cerca un ...... EN este caso desde la targeta 4 un div
*/
const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling); //Sin element mostraria solo nodo espacio
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.children[4].closest("div"));
