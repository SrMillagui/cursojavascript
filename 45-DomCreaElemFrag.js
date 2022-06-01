console.log("****Creando Elementos y Fragmentos****");

/*
Crear etiquetas o elementos

1) Crear variable con contenido createElement , Uso "figure" ya que en esa etiqueta estan las cards.
2) Crear Elemento img
3) Crear figcaption es un nodo para el "src"
4) Crear figcaptioText es nodo de texto  
5) Crear elemento Padre donde se va a insertar la tarjeta que es "cards".
6) (Opcional) forma usando InnerHTML
*/

const $figure = document.createElement("figure");
$img = document.createElement("img");
$figcaption = document.createElement("figcaption");
$figcaptionText = document.createTextNode("Animals");
$cards = document.querySelector(".cards");

/*Opcion2*/
//$figura2 = document.createElement("figure");//

/*
Agregar al DOM
1)  ($figcaption) Agregamos texto debajo de la imagen
2) ($figure) Agregar un nodo cards, Agregar la etiqueta figure.
3) ($img) Agregamos etiqueta imagen
4) ($figcaption) Agregamos etiqueta figcaption.|

5) (src)  Agregamos el src.
6)(alt)  Agregamos el alt
7) (card) Agregamos la clase para que tome todas las propiedades.
8) innerHTML Forma colocando el texto en html (Opcional)
*/

/*5*/ $img.setAttribute("src", "https://placeimg.com/200/200/animals");
/*6*/ $img.setAttribute("alt", "Animals");
/*7*/ $figure.classList.add("card");
/*1*/ $figcaption.appendChild($figcaptionText);
/*2*/ $cards.appendChild($figure);
/*3*/ $figure.appendChild($img);
/*4*/ $figure.appendChild($figcaption); /*8*/ /*

/*Opcion2*/
/*
 $figure2.innerHTML = ` 
<img src="https://placeimg.com/200/200/people" alt="People">     <figcaption>People</figcaption>`;
$figure2.classList.add("card"); //Agregamos en la clase card figura2
$cards.appendChild($figure2); //Agregamos a la lista de imagenes cards
*/

/*
Crear elementos de forma grupal

1)Creo constante con array
2) Creo etiqueta "ul"
3) Creo un titulo (Opcional esta forma).
4) La etiqueta "ul" agregamos al body
5) Creo un forech para agregar la li
De las estaciones, por cada elemento agregar constante $li que sea una "li"
*/

const estaciones = ["verano", "invierno", "otoño", "primavera"];
$ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el; //Accedemos a $li y agregamos "solament texto"
  $ul.appendChild($li); //Agregue a ul el elemento creado arriba
});

/*Opcion 2
innerHTML
1)Creo variante
2)Creo etiqueta o elemento
3) Colocación del titulo
4) Agrego al body la list "ul2"
5) Colocamos el innerHTML
6) forech para ingreso del texto
Diferencia entre esta y la primera es que una tiene nodo html y esta no.
*/
const continentes = ["oceania", "america", "Europa", "Acia", "Africa"];
$ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = ""; //Espacio bacio para que imprima correctamente(opcional ya que se logra ver igualmente)
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`)); //+- para que tome todos los textos sino tomaria el primero nada mas,

/*
Crear listas grandes = Ingreso en fragmentos al DOM
(createElementFragment)

1)Creo variable con la lista
2)Creo etiqueta o elemento

3)Creo variable createDocumentFragment
4) Creo forEach para aplicar a cada elemento que cree  un "li"

5) Agregar elemnto "el" en este caso el mes
6) Al fragmento le colocamos la lista "$li"

7) Creamos el titulo.
8) agregamos a la lista $ul3 el fragmento
9) Agregamos la lista $ul3 al body
*/
const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

$ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
