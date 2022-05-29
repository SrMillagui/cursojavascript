console.log(
  "***********Elementos del Documento, conceptos básicos del DOM**********"
);
console.log(window.document); // Explicacion de ir al documento
console.log(document.head); //Voy  al head, no es nevesario poner window
console.log(document.body); //Voy al body
console.log(document.documentElement); //Voy al html
console.log(document.doctype); //Vamos al doctype
console.log(document.charset); // va al charset
console.log(document.title); //Va al titulo
console.log(document.links); //Va alos links
console.log(document.images); //Imagenes
console.log(document.forms); //Formularios
console.log(document.stylesheets); //Hojas de estilo
console.log(document.scripts); //Se ve los etiquetas scripts

/*Podemos hacer lo mismo con metodos*/

//console.log(document.getSelection().toString());   //Para mostrar lo seleccionado en el texto, To string lo convierte en texto para poder ser mostrado. Como no podemos seleccionar antes d que se ejecute haremos lo mismo pero colocando un temporizador asi nos da timepo a seleccionar texto antes que se ejecute.
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);

document.write("<h2><s>Hola mundo desde el DOM</s></h2>");
//Escribe Hola mundo en el documento html
