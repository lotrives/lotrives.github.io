---
layout: post
title: "La gripe aviar, el precio de los huevos y la especulación"
excerpt: "¿Es bueno especular con los precios?"
description: "Reflexión sobre la gripe aviar en Madrid y la percepción moral de la especulación económica."
canonical_url: "https://lotrives.github.io/2025-11-11-gripe-aviar-precio-huevos-especulacion/"
tags: [Cuaderno de notas 2025-11, Abusos, Especulación, Lecturas]
---
<a href="https://commons.wikimedia.org/wiki/File:Hen_chicken.jpg" target="_blank" rel="noopener"
   title="Photo by Thegreenj – CC BY-SA 3.0, via Wikimedia Commons">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Hen_chicken.jpg/512px-Hen_chicken.jpg"
       alt="Hen chicken" style="max-width:100%; height:auto;">
</a>
El pasado viernes, 7/11/2025, supimos que se han sacrificado 450.000 gallinas en Valdemoro (Comunidad de Madrid), para intentar controlar un foco de gripe aviar (v. [El País](https://elpais.com/espana/madrid/2025-11-07/madrid-sacrifica-a-casi-medio-millon-de-gallinas-por-un-brote-de-gripe-aviar-en-valdemoro.html)). Por esa, y por otras medidas parecidas, el precio de una docena de huevos ha subido considerablemente. De ello se habla hoy por todas partes.

1) Imagínese que usted quiere vender su piso y tiene varias ofertas. ***Especula*** con el precio de su casa y al final opta por venderla a quien le pague más. 

2) Imagínese que es propietario de una granja avícola. Opta por aprovechar la escasez de oferta en estos momentos en Madrid y vende a un mayor precio. ***Especula*** también. 

**¿Por qué se suele considerar 1) bueno y 2) malo?**
¿Hay una doble moral? ¿Hay factores que no se consideran aquí?

Algunos economistas piensan que *especular* es el camino para la vuelta a la normalidad, aunque en el caso que nos atañe ayudaría seguro que el Estado quitara el IVA a los huevos.

Una lectura recomendada:

[Henry Hazlitt](https://www.nuevarevista.net/henry-hazlitt-la-economia-en-una-leccion/). (2018). *La economía en una lección*. Prólogos de Javier Milei y Juan Ramón Rallo. Traducción de Marciano Villanueva Salas. Unión Editorial.

Edición original: 
Henry Hazlitt. (1946). *Economics in One Lesson*. Nueva York: Harper & Row.

<p>
{%- for tag in page.tags -%}
  <a href="{{ '/etiquetas/' | relative_url }}#{{ tag | slugify: 'latin' }}">#{{ tag }}</a>
  {% unless forloop.last %} · {% endunless %}
{%- endfor -%}
</p>

<br>

<p style="text-align:left; font-size:0.9rem; color:#555; margin-top:1.5rem;">
  Autor: <a href="{{ '/autor/jose-manuel-grau-navarro/' | relative_url }}"
            style="text-decoration:none; border-bottom:1px dotted #999; color:inherit;">
            José Manuel Grau Navarro
         </a>
</p>

<!-- BLOQUE SUSCRIPCIÓN -->
<p style="text-align:left; font-size:0.9rem; color:#555; margin-top:1.2rem;">
  <a href="https://lotrives.substack.com/subscribe" target="_blank" rel="noopener"
     style="text-decoration:none; border-bottom:1px dotted #999; color:inherit;">
    Suscríbete a la Newsletter
  </a>
</p>

<!-- BLOQUE COMPARTIR -->
<p style="text-align:left; font-size:0.9rem; color:#555; margin-top:0.6rem;">
  Compartir:
  <a id="share-x" target="_blank" rel="noopener"
     style="text-decoration:none; border-bottom:1px dotted #999; color:inherit;">
     X
  </a> ·
  <a id="share-wa" target="_blank" rel="noopener"
     style="text-decoration:none; border-bottom:1px dotted #999; color:inherit;">
     WhatsApp
  </a>
</p>

<br>

<script>
(function() {
  const url = "{{ page.url | absolute_url }}";
  const title = "{{ page.title | escape }}";
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(title + " – Lotrives");

  // X (Twitter)
  document.getElementById("share-x").href =
    "https://twitter.com/intent/tweet?url=" + encodedUrl + "&text=" + encodedText;

  // WhatsApp
  document.getElementById("share-wa").href =
    "https://wa.me/?text=" + encodedText + "%20" + encodedUrl;
})();
</script>
