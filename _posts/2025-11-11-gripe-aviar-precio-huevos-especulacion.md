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
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Hen_chicken.jpg/1280px-Hen_chicken.jpg"
       alt="Gallina (Hen chicken)" style="max-width:100%; height:auto;">
</a>

El pasado viernes, 7/11/2025, supimos que se han sacrificado 450.000 gallinas en Valdemoro (Comunidad de Madrid), para intentar controlar un foco de gripe aviar (v. <a href="https://elpais.com/espana/madrid/2025-11-07/madrid-sacrifica-a-casi-medio-millon-de-gallinas-por-un-brote-de-gripe-aviar-en-valdemoro.html" target="_blank" rel="noopener">El País</a>). Por esa, y por otras medidas parecidas, el precio de una docena de huevos ha subido considerablemente. De ello se habla hoy como asunto destacado del día.

1) Imagínese que usted quiere vender su piso y dispone de varias ofertas. ***Especula*** con el precio de su casa y al final opta por traspasarla a quien le pague más. 

2) Imagínese que es propietario de una granja avícola. Desea aprovechar la escasez de oferta en estos momentos en Madrid y liquida a un mayor precio. ***Especula*** también. 

**¿Por qué se suele considerar 1) bueno y 2) malo?**
¿Hay una doble moral? ¿Hay factores que no se consideran aquí?

Algunos economistas piensan que *especular* es el camino necesario para la vuelta a la normalidad en momentos de escasez, mejor que cualquier otro, aunque en el caso que nos atañe ayudaría que el Estado quitara el IVA a los huevos.

Una lectura recomendada:

<a href="https://www.nuevarevista.net/henry-hazlitt-la-economia-en-una-leccion/" target="_blank" rel="noopener">Henry Hazlitt</a>. (2018). *La economía en una lección*. Prólogos de Javier Milei y Juan Ramón Rallo. Traducción de Marciano Villanueva Salas. Unión Editorial.

Edición original:  
Henry Hazlitt. (1946). *Economics in One Lesson*. Nueva York: Harper & Row.

<hr style="margin:2rem 0 1rem; border:none; border-top:1px solid #ddd;">

<p style="text-align:left; font-size:0.9rem; color:#555; margin:0.6rem 0;">
  Autor: <a href="{{ '/autor/jose-manuel-grau-navarro/' | relative_url }}" target="_blank" rel="noopener"
            style="text-decoration:none; border-bottom:1px dotted #999; color:inherit;">
            José Manuel Grau Navarro
         </a>
</p>

<p style="text-align:left; font-size:0.9rem; color:#555; margin:0.2rem 0 0.6rem;">
  Foto: © <a href="https://commons.wikimedia.org/wiki/File:Hen_chicken.jpg" target="_blank" rel="noopener"
  style="text-decoration:none; border-bottom:1px dotted #999; color:inherit;">
  Thegreenj, CC BY-SA 3.0
  </a>, vía Wikimedia Commons
</p>

<p style="text-align:left; font-size:0.9rem; color:#555; margin:0.6rem 0 0;">
  <a href="https://lotrives.substack.com/subscribe" target="_blank" rel="noopener"
     style="text-decoration:none; border-bottom:1px dotted #999; color:inherit;">Newsletter</a>
  &nbsp;·&nbsp;
  <a id="share-x" target="_blank" rel="noopener"
     style="text-decoration:none; border-bottom:1px dotted #999; color:inherit;">X</a>
  &nbsp;·&nbsp;
  <a id="share-wa" target="_blank" rel="noopener"
     style="text-decoration:none; border-bottom:1px dotted #999; color:inherit;">WhatsApp</a>
</p>

<script>
(function() {
  const url = "{{ page.url | absolute_url }}";
  const title = "{{ page.title | escape }}";
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(title + " – Lotrives");

  // X (Twitter)
  const x = document.getElementById("share-x");
  if (x) x.href = "https://twitter.com/intent/tweet?url=" + encodedUrl + "&text=" + encodedText;

  // WhatsApp
  const wa = document.getElementById("share-wa");
  if (wa) wa.href = "https://wa.me/?text=" + encodedText + "%20" + encodedUrl;
})();
</script>

<p style="text-align:left; font-size:0.9rem; color:#555; margin:0.6rem 0 0;">
{%- for tag in page.tags -%}
  <a href="{{ '/etiquetas/' | relative_url }}#{{ tag | slugify: 'latin' }}" target="_blank" rel="noopener"
     style="text-decoration:none; border-bottom:1px dotted #999; color:inherit;">#{{ tag }}</a>{% unless forloop.last %} · {% endunless %}
{%- endfor -%}
</p>
