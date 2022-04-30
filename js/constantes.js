export const PI = Math.PI;

//Ahora veamoscolocar una variable que se importe por defecto
//SImplemente se coloca despues de expor la palabra default

export default function saludar() {
  console.log("Hola modulos ES6");
}

//Solamente solamente puede haber un default exportado

//Sobre el Default
//Variables
//Solamente funciona con funciones definida y no con variables que contengan una funcion. Para resolver esto se debe usar este recurso

//export default let saludo = "Hola como estas"; De esta forma nos dará error.

//Se debe declarar expresada y luego definir
/*let saludo = "Hola como estas";
export default saludo;*/

//Class
//las clases si se pueden declarar de forma directa como default usando el constructor.

/*export default class saludar {
constructor(){
  console.log("Hola estoy saludando")
    }
}*/

//Ahora la declararemos exportandola nada mas

export class Saludar {
  constructor() {
    console.log("Hola estoy saludando");
  }
}
