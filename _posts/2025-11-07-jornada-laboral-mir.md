---
layout: post
title: "La peligrosa e injusta jornada laboral de los médicos internos residentes"
excerpt: "¿Nadie responde por este abuso?"
tags: [Médicos internos residentes (mir), Abusos]
---

Lotrives conoce a un grupo considerable de médicos internos residentes (un *mir*, unos *mir*, según [Fundéu](https://www.fundeu.es/recomendacion/mir-se-escribe-en-minuscula-y-redonda-553/)). Los de primer año suelen tener 25 años, obtuvieron el Grado en Medicina en 2024 y comenzaron la especialización, lo que equivale a que empezaron a trabajar, en junio de este año. El horario de estos jóvenes, en la mayoría de los casos mujeres, comienza a las 8:00 un jueves como ayer. Pero con frecuencia, además de las guardias de día entero, deben cumplir guardias de tarde que alargan su jornada hasta las 22:00, perfectamente. Al día siguiente, en este caso, viernes, deben presentarse en el hospital que les corresponda otra vez a las 8:00, lo que supone en un lugar como Madrid que el despertador suene a las 6:30. No es algo que ocurre un día al mes, es habitual. Cuando están de guardia, atienden urgencias que no son de su especialidad, con recursos humanos escasos y escasa supervisión. No les da tiempo ni para comerse el bocadillo que se llevan de casa. La organización hospitalaria es mala y faltan médicos por todas partes.

Hay ministros en España que hablan de rebajar la jornada laboral quizás cuando no es el caso, pero miran para otro lado ante grandes abusos como este, por lo que parece. Se dinamitan así aspectos esenciales de la dignidad humana: de los pacientes desatendidos y de los jóvenes mir que no disponen de vida suficiente para atenderlos.

<p>
{%- for tag in page.tags -%}
  <a href="{{ '/etiquetas/' | relative_url }}#{{ tag | slugify: 'latin' }}">#{{ tag }}</a>
  {% unless forloop.last %} · {% endunless %}
{%- endfor -%}
</p>

<br>

Autor: José Manuel Grau Navarro

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
