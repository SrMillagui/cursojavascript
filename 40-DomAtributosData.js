console.log("******Clase 40 DOM Atributos y Data atributos**********");
/*
Veremos como mandar a llamar o modificar valores de los atributos del archivo html 39-NodosElemetSel.html.
*/

/*

*******Ver que tiene un atributo*****

Veremos dos formas de llamar un atributo y sus diferencias. aveces nos dara el mismo resultado en otras etiquetas dara diferentes resultados.
*/
/*
1) (document.documentElement.NOMBRE DE ETIQUETA); 
 Puede  devolver valores extras. 

2) (document.documentElement.getAttribute("NOMBRE DE ETIQUETA"));
 Toma literalmente lo que se escribio en etiqueta.

 3) querySelector.Entrega lo escrito en la etiqueta
*/
console.log(document.documentElement.lang); //Vemos el lang

console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href); // se va al link del DOm devolviendo la direccion del live server. "http://127.0.0.1:5500/dom.html".

console.log(document.querySelector(".link-dom").getAttribute("href"));
//Devuelve en consola "dom.html"  Es el valor escrito en la etiqueta.

/*
********Cambio de Valores:********

1) documentElement
2)  setAttribute
*/

//Cambiamos la etiqueta del idioma de html de es a en y luego en el otro metodo de es a MX.

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang); //Imprime es-MX

/*
 ****** Creacion de variable para contener las declaraciones*******
 */

//De esta forma facilitamos su uso para no escribir tanto.

const $elDOM = document.querySelector(".link-dom");
//Nota: el simbolo del $ es opcional, se considera buena practica ponerlo para usar en etiquetas del DOM asi diferenciarlo facilmente.

/*
******Cambio de acciones o atributos  a link******

Link:
Ahora podemos hacer que se abra en otro lugar este link, etc

1) setAttribute("target", "blank");
2) "href", "https://www.brigadasgrifo.com"); Cambio de url
*/
$elDOM.setAttribute("target", "blank"); //Abre en nueva pestaña
$elDOM.setAttribute("rel", "noopener"); //Buena costumbre poner no dependiente al colocar nueva pestaña el link
$elDOM.setAttribute("href", "https://www.brigadasgrifo.com"); //Cambio de dirección donde va el link.

/*
 *******Consultar si tiene un atributo y Eliminar un atributo******
1) COnsulta.
2)Elimina
 */
console.log($elDOM.hasAttribute("rel"));

$elDOM.removeAttribute("rel");

setInterval(() => {
  console.log($elDOM.hasAttribute("rel"));
}, 3000); //Juego con setInterval para ver los cambios :D

/*
**************Data Atributes***********
Toma dato de lo que tenga  etiqueta "data -......
Vemos dos formas ver su contenido

1) getAttribute: Imrpime el nombre de la etiqueta
2) dataset:   Encuentra la etique data y devuelve un mapa
3)dataset.description : Describe el contenido
*/
console.log($elDOM.getAttribute("data-description"));

console.log($elDOM.dataset);
//Imprime Todo lo que tenga data -... En este caso...  Dom string map que contiene el atributo de "data-description" que tiene el html

console.log($elDOM.dataset.description);

/*
 ******Modificar un  Data atribut******
 
 1) Con setAttribute.
 2) Con dataset
 */
$elDOM.setAttribute("data-description", "Nuevo Nombre");

$elDOM.dataset.description = "Cambio de nombre con datase";

//Vemos como cambia con un console.log e imprime el nuevo nombre dado de "cambio de nombre con dataset"

console.log($elDOM.dataset.description);
