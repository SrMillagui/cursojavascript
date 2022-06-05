console.log("*****Modificacion de Elementos******");
/*
Método antiguo

Reemplazar elemento

Metodo no recomendado
1) Variable hacia etiqueta cards.
2) Nueva Etiqueta figure
3) De donde se saca info
4) Toma propiedades de card
5) Reemplazar elemento  replaceChild(
6) firstElementChild  es el primer elemento a diferencia de firsElement que toma el primer nodo y no elemento.
7) Eliminar elemento
8) Clonar muchos elementos
*/

/*1*/ //const $cards = document.querySelector(".cards");
/*2*/ // $newCard = document.createElement("figure");
/*8*/ // $cloneCards = $cards.cloneNode(true); //True para  que tome los elementos y no solo el nodo.
/*3*$newCard.innerHtml = `
<img src="https://placeimg.com/200/200/any" alt="Any">
      <figcaption>Any</figcaption>
`;

/*4*/ //$newCard.classList.add("card");
/*5*/ //$cards.replaceChild($newCard, $cards.children[2]);
//$cards es padre, remplazar (crear nueva etiqueta. en cards.hijo[2]).

/*6*/ // $cards.insertBefore($newCard, $cards.firstElementChild);

/*7*/ //$cards.removeChild($cards.lastElementChild);

/*8*/ //document.body.appendChild($cloneCards);
