console.log("***Etiqueta Template***");
/*
Modulo donde colocamos el contenido para hacerlo dinamico, interactua con el DOM.
*/
/* 
creo etiqueta template en el archivo html agregando las demas
 
<template>
    <figure class="card">
      <img>
      <figcaption></figcaption>
    </figure>
  </template>
*/

/*
                 Pasos en JS
1) Creo variable hacia la clase donde estan las imagenes ".cards"
2)Creo variable hacia la etiqueta <template> "content" apunta al contenido.
3) Creo fragmento para almacenar la informacion
4) Creo variable cardContent (simulara la petición de datos).
5) Creo foreach por cada elemento de template, osea las img. Buscara imagenes "img" y estblarecera en su atributo "src" (el,img). Coloco  lo mismo pero en "alt" con el titulo y en figCaption poner el titulo
6) Clonar la estructura de template para aplicar a las demas img
7) Agregamos ese clon al fragmento
8) Agregamos a cards (etiqueta superior) el fragmento
*/

/*1*/ const $cards = document.querySelector(".cards"),
  /*2*/ $template = document.getElementById("template-card").content,
  /*3*/ $fragment = document.createDocumentFragment(),
  /*4*/ $cardContent = [
    {
      title: "Tecnologia",
      img: "https://placeimg.com/200/200/tech",
    },

    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },

    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },

    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },

    {
      title: "Tecnologia",
      img: "https://placeimg.com/200/200/tech",
    },
  ];
/*5*/ $cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  /*6*/ let $clone = document.importNode($template, true); //"true" copia todo, "false" copia la entra y salida.
  $fragment.appendChild($clone);
});

/*8*/ $cards.appendChild($fragment);
