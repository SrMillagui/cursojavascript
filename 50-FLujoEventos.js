console.log("****Flujo de eventos Burbuja y Captura*****");
/*
Hay dos maneras de propagacion del evento

1) Fase de Burbuja:  Propagacion de adentro hacia afura del arbol del DOM
2) Fase de captura de afuera hacia adentro



1) Creo constante tomando  direccion
2) agrego forEach para para darle una funcion a todos los div grupalemente. La funcion doy el nombre de "flujoEventos".
3) creo funcion para ejecutar el texto
4) console.log(`Hola`); Impresion de hola


Forma para imprimir las "div"

5) Agrego ${this.className}  Toma el nombre de laclase de cada div
 ${e.target} Es cualquiera de las div de esta actividad.
 }
Se evidencia al imprimir fase de burbuja

Fase Burbuja:
Hola te saluda tres el click lo origino tres
Hola te saluda dos el click lo origino tres
Hola te saluda uno el click lo origino tres

Fase Captura:
Hola te saluda uno el click lo origino tres
 Hola te saluda dos el click lo origino tres
 Hola te saluda tres el click lo origino tres
*/

const $divsEventos = document.querySelectorAll(".eventos-flujo div");
function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className} el click lo origino ${e.target.className}`
  );
}
console.log($divsEventos); // Imprime una vez hola por cada div, en el div cental hay 3, el externo 2 y el ultimo 1.

$divsEventos.forEach((div) => {
  //Fase de burburja, por defecto esta en "false"
// div.addEventListener("click", flujoEventos);
 //Ejecuta fase de Captura con "true".
 // div.addEventListener("click", flujoEventos, true);

  //Fase de Captura
  //Otra forma de hacer lo mismo es con capture
  div.addEventListener("click", flujoEventos,{
    capture: false,  //Capture hace referencia si es burbuja o captura, si es false  sera burbuja.
    once: true, // para reproducir una sola vez
  });
});
