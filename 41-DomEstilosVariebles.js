console.log("*******DOM Estilos y Varioables********");

/*
COntinuaremos con la variable que resume el document.querySelector
dodnde el $elDOm queda como variable que resume esta direccion larga para facilitar este ejersicio.
*/

const $elDOM = document.querySelector(".link-dom");

/*
Para ver el (style)

1) style : Imprime en un objeto todas las acciones ue se puede realizar en css identificando las que se usó.
2) getAttribute :  entrega litrelmente lo que se cambio en estyle.
3) getComputedStyle : muestra la propiedad y  valor total y como lee la pc esos valores.
*/
console.log($elDOM.style);
console.log($elDOM.getAttribute("style"));
console.log(getComputedStyle($elDOM).getPropertyValue("style"));
//Aqui muestra todos los datos en style

/*
Modificar y crear valores

1) setProperty ("etiqueta", "valor")
2)
*/

$elDOM.style.setProperty("text-decoration", "none");
$elDOM.style.setProperty("display", "block");
$elDOM.style.width = "50%";
$elDOM.style.higth = "80px";
$elDOM.style.textAlign = "center";

/*
Variables:  O como le llaman Custom Properties CSS

*/
//Dentro de una etiquetaa style y para que las Variables CSS  queden disponibles en todo el documento creamos root en el html como propositos practicos}

/*
Método para modificar vriable en html
1)Creacion de variable = document.documentElement;
2) Otra variable de body = document.body;
3) Creo variables que lleven a las variables css creadas en el archivo html
4) Colocamos los donde elegimos las variables que son la propiedad que colocamos.

*/
const $html = document.documentElement;
$body = document.body;
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

/*
Modificamos valores dados
1) setProperty Cambiamos el valor
2) getPropertiValue redefinir la variable modificada
3)  Hacer que el body tome el valor
*/

$html.style.setProperty("--dark-color", "#222");
//Redefinir variable modificada
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
//Hacer que el body tome el nuevo valor
$body.style.setProperty("background-color", varDarkColor);
