//Crearemos funciones para ser exportadas usando expor al comienzo, luego seran retirados al incorporarlos l elemento aritmetica.
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

//Ahora crearemos un objeto de nombre aritmetica para que veamos que se puede aplicar exportacion a objetos tambien. Pero en su contendio estaran sumar y restar por lo tanto borraremos su respectivos export.

export const aritmetica = {
  sumar,
  restar,
};
