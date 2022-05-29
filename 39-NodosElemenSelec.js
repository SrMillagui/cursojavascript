/*Nodos son:
Comentarios
Textos (h1, p, etc).
Etiquetas (Etiqueta html en particular).
Se puede ver la lista en MDN /node.node Type
*/
/*Veremos los métodos del DOM
Veremos métodos desactualizados
1) getElementByTagname
2) getElementsByClassName
3) getElementsByName
4)getElementsById  "Se sigue usando"

Métodos que reemplazaron a los anteriores
1)querySelector
2)querySelectorAll
*/

console.log(document.getElementsByTagName("li")); //Devuelve las  li declaradas. (collection)
console.log(document.getElementsByClassName("card")); //devuelve las clases con nombre card. (collection)
console.log(document.getElementsByName("nombre")); //Devuelve los elementos con el nombre declarado. (List).
/*console.log(document.getElementsById("menu"));*/

/*Nuevos*/
console.log(document.querySelector("#menu")); //Usa formas de CCS para buscar
console.log(document.querySelector("a")); //Otro ejemplo, a cnsiderar que solo entregara el primer selector que se especifico en el html. Veremos como seleccionar todos abjo.
console.log(document.querySelectorAll("a")); // Entrega un nodeList

document.querySelectorAll("a").forEach((el) => {
  console.log(el); //Por cada elemento imprime su codigo html
});

//Elección de item a imprimir
console.log(document.querySelectorAll(".card")[2]);

//Dentro de id es igual a CSS
console.log(document.querySelectorAll("#menu li"));
