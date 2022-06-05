console.log("***Manejadores de Usuario y Remover Eventos***");
/*
Manejo de acciondes de usuario y del documento
Existen 3 maneras de crear manejadores.
EN MDN se encuentra la lista de eventos para estudiar
*/

/*
1) Evento por atributo html.
-Se crea la etiqueta boton 
<button onclick="holaMundo()">Evento con atributo HTML</button>
-Se crea funcion en JS

*/
function holaMundo() {
  //nombre deve ser igaul al onclick
  alert("Texto de alerta"); //Texto que aparece en alerta
  console.log(event); //funcion que se ejecuta en un evento
}

/* 
2)  Manejador semantico

1) Creo boton.
<button id="evento-semantico">Evento con manejador cemantico</button>
2)Creo variable que apunte al boton
3) Opcion 1: La variable $eventSemantico y la accion (on)  selecciono (onclick)
4) Ejecuta *solamente* una funcion, en este caso el holaMundo anterior
5) Opcion 2:  el unico parametro que recibe las funciones en este caso es (event), simplificado será (e).
6) Declarar console.log()
*/

const $eventSemantico = document.getElementById("evento-semantico");
$eventSemantico.onclick = holaMundo; //opcion 1
$eventSemantico.onclick = (e) => {
  //opcion 2
  alert("Manejador de evento semantico");
  console.log(e);
};

/*
3)   Manejador Multiple  o ADB Listener

1) creo variable que dirija al id del boton creado "evento multiple".
2) Declaramos el evento multiple con la variable.metodo addEventListener, este recibe varios parametros. Usaremos dos importantes "click, luego la funcion que declaramos anteriormentes holaMundo"

*/

const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola mundo 2");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});

/*
Para concadenar un evento

1) Se crea una funcion "saludar"  que contenga una variable nombre = desconocido
2) Colocar alerta concadenando nombre y evento o  en este caso la alerta con el "nombre" y en consola el "evento".
*/

function saludar(nombre = "desconocido") {
  alert(`Hola ${nombre}`);
  console.log(event);
}
$eventoMultiple.addEventListener("click", () => {
  saludar(); // tomara el desconocido
  saludar("RO"); // tomara el valor RO
});

/*
Elimniar eventos de un elemento

Esto solo se puede hacer conmanejadores Multiples

1) crearemos un boton con id "evento-remover" el cual nos servira para accionar la accion.
2) Creo variable que dirige a la etiqueta con id " evento-remover"
3) Creo una variable $removerDobleclick Pa ejecutar l siguiente.
4) A $eventoremover agrego un listener que se acciona con doble click (e) acciona el evento dentro de la arrow function luego eleminina el (e.type).
5) declaramos el removeEventListener
*/

/*2*/ $eventoRemover = document.getElementById("evento-remover");
/*3*/ const $removerDobleclick = (e) => {
  alert(`Removiendo el evento ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleclick); //Desabilita el dobleclick remover
  $eventoRemover.disabled = true; //Desabilitara el boton despues de ejecutarse
};
/*4*/ $eventoRemover.addEventListener("dblclick", removerDobleclick);
