console.log("****Metodo Moderno de modificacion de elementos****");
/*
Metodo moderno

insertAdjacent
1) insertAdjacentElement(position, el) = "Agrega elemento ETIQUETA"
2) insertAdjacentHTML(position, text)  = Agrega un html
3)insertAdjacentText(position, text)  = Agrega Texto

Posiciones:

beforeBegin(hermano anterior) = antes del parrafo
afterBegin(primer hijo)  = 
beforeEnd(ultimo hijo)
afterEnd(hermano siguiente) = despues del parrafo
*/

/*
1) insertAdjacentElement(position, el)

Usamos el mismo innerHTML pero a modo de ejemplo, no es recomendable no usarlo, mejor es usar fragmentos, templates elemnts etc.

const $cards = document.querySelector(".cards");
$newCard = document.createElement("figure");

$newCard.innerHtml = `
<img src="https://placeimg.com/200/200/any" alt="Any"> <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");


       adjacentElement:

$cards.insertAdjacentElement("afterbegin", $newCard);
*/

/*

2) insertAdjacentHTML(position, text)

*/
const $cards = document.querySelector(".cards");
$newCard = document.createElement("figure");

//Crea variable
let $contenCard = `
<img src="https://placeimg.com/200/200/any" alt="Any"> <figcaption></figcaption>
`; // figcaption bacia

$newCard.classList.add("card");
$newCard.insertAdjacentHTML("beforeend", $contenCard);
$newCard.querySelector("figcaption").insertAdjacentHTML("afterBegin", "Any");
// $cards.insertAdjacentElement("afterbegin", $newCard);

/*
1) prepend()  = Primer hijo
2) append()  = Ultimo hijo
2) before()  = antes de otro hermano
4) after()  = despues de otro hermano
*/

//$cards.prepend($newCard);   = primer hijo de $cards
//$cards.append($newCard);     = segundo hijo $cards
//$cards.before($newCard);     sale afuera de $cards antes
//$cards.after($newCard);           sale afuera de $cards despues
