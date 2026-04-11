---
layout: page
title: "Etiquetas de Lotrives (Substack)"
permalink: /etiquetas-substack/
---

<style>
.etiquetas-nav {
  display: grid;
  grid-template-columns: repeat(9, 2rem);
  gap: 0.25rem;
  margin-bottom: 1.5rem;
}

.etiquetas-nav a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  text-decoration: none;
  color: inherit;
  font-size: 0.9rem;
}

.etiquetas-nav a:hover {
  text-decoration: underline;
}

.etiquetas-lista {
  columns: 2;
  column-gap: 2rem;
  margin-top: 0.4rem;
  padding-left: 1.2rem;
}

.etiquetas-lista li {
  margin: 0 0 0.15rem 0;
  break-inside: avoid;
}

@media screen and (max-width: 700px) {
  .etiquetas-nav {
    grid-template-columns: repeat(7, 2rem);
  }
  .etiquetas-lista {
    columns: 1;
  }
}

.letra-cabecera {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
}

.letra-cabecera a.volver {
  font-size: 1rem;
  font-weight: normal;
  color: #aaa;
  text-decoration: none;
  line-height: 1;
}

.letra-cabecera a.volver:hover {
  color: #333;
}
</style>

Este índice recoge todos los temas tratados en [Lotrives (Substack)](https://lotrives.substack.com).

Puedes explorar los contenidos haciendo clic en cada etiqueta.

{% assign etiquetas_ordenadas = site.data.etiquetas | sort: "Etiqueta" %}

**Total de etiquetas:** {{ etiquetas_ordenadas | size }}

## Navegación {#navegacion}

<div class="etiquetas-nav">
  <a href="#0-9">0-9</a>
  <a href="#a">A</a>
  <a href="#b">B</a>
  <a href="#c">C</a>
  <a href="#d">D</a>
  <a href="#e">E</a>
  <a href="#f">F</a>
  <a href="#g">G</a>
  <a href="#h">H</a>
  <a href="#i">I</a>
  <a href="#j">J</a>
  <a href="#k">K</a>
  <a href="#l">L</a>
  <a href="#m">M</a>
  <a href="#n">N</a>
  <a href="#o">O</a>
  <a href="#p">P</a>
  <a href="#q">Q</a>
  <a href="#r">R</a>
  <a href="#s">S</a>
  <a href="#t">T</a>
  <a href="#u">U</a>
  <a href="#v">V</a>
  <a href="#w">W</a>
  <a href="#x">X</a>
  <a href="#y">Y</a>
  <a href="#z">Z</a>
</div>

{% assign digitos = "0123456789" %}

{% assign tiene_digitos = false %}
{% for item in etiquetas_ordenadas %}
  {% assign inicial = item.Etiqueta | slice: 0, 1 %}
  {% if digitos contains inicial %}
    {% assign tiene_digitos = true %}
  {% endif %}
{% endfor %}

{% if tiene_digitos %}
<div class="letra-cabecera"><h2 id="0-9">0-9</h2> <a class="volver" href="#navegacion">↑</a></div>

<ul class="etiquetas-lista">
{% for item in etiquetas_ordenadas %}
  {% assign inicial = item.Etiqueta | slice: 0, 1 %}
  {% if digitos contains inicial %}
    <li><a href="{{ item.URL }}">{{ item.Etiqueta }}</a></li>
  {% endif %}
{% endfor %}
</ul>
{% endif %}

{% assign letras = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z" | split: "," %}

{% for letra in letras %}

{% assign tiene_etiquetas = false %}
{% for item in etiquetas_ordenadas %}
  {% assign inicial = item.Etiqueta | slice: 0, 1 | upcase
    | replace: "Á", "A"
    | replace: "À", "A"
    | replace: "Ä", "A"
    | replace: "É", "E"
    | replace: "È", "E"
    | replace: "Ë", "E"
    | replace: "Í", "I"
    | replace: "Ì", "I"
    | replace: "Ï", "I"
    | replace: "Ó", "O"
    | replace: "Ò", "O"
    | replace: "Ö", "O"
    | replace: "Ú", "U"
    | replace: "Ù", "U"
    | replace: "Ü", "U" %}
  {% if inicial == letra %}
    {% assign tiene_etiquetas = true %}
  {% endif %}
{% endfor %}

{% if tiene_etiquetas %}
<div class="letra-cabecera"><h2 id="{{ letra | downcase }}">{{ letra }}</h2> <a class="volver" href="#navegacion">↑</a></div>

<ul class="etiquetas-lista">
{% for item in etiquetas_ordenadas %}
  {% assign inicial = item.Etiqueta | slice: 0, 1 | upcase
    | replace: "Á", "A"
    | replace: "À", "A"
    | replace: "Ä", "A"
    | replace: "É", "E"
    | replace: "È", "E"
    | replace: "Ë", "E"
    | replace: "Í", "I"
    | replace: "Ì", "I"
    | replace: "Ï", "I"
    | replace: "Ó", "O"
    | replace: "Ò", "O"
    | replace: "Ö", "O"
    | replace: "Ú", "U"
    | replace: "Ù", "U"
    | replace: "Ü", "U" %}
  {% if inicial == letra %}
    <li><a href="{{ item.URL }}">{{ item.Etiqueta }}</a></li>
  {% endif %}
{% endfor %}
</ul>
{% endif %}

{% endfor %}
