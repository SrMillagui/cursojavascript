import saludar, { Saludar, PI } from "./constantes.js"; //para importar se usa { } y el ./ nos ubica en el lugar donde esta la carpeta donde estamos, dentro de las llaves coloco el nommre de la funcion a eportar PI.
// la variable saludar se creo automaticamente fuera de las llaves ya que se colocó como default
//Veremos importar funciones

/*import { sumar, restar } from "./aritmetica.js";// importamos sumar y restar
console.log("archivo modulos.js");
console.log(PI);
console.log(sumar(3, 4));*/

//Ahora veremos importar el elemento que creamos en aritmetica donde constiene sumar y restar para ver como importamos un elemento.

import { aritmetica } from "./aritmetica.js";
console.log(aritmetica.sumar(3, 5));
/*si quisiera usar ALIAS en aritmetica pondria 
aritmetica as "Lo que quiera de nombre"
y abajo concole.log(nombre.sumar(3,5))*/

//importaremos la funcion saludar creada en constantes sin necesidad de console.log() ya que vemos que lo creamos como default
saludar();

//Para que aparezca el nuevo Saludar que es una clase se hace lo siguiente

let saludo = new Saludar();
saludo; // lo invocamos sin console.log ya que sino daria el prtotipo formado ademas ya esta declarada en su construcción.
