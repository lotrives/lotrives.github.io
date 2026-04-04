---
layout: page
title: "Etiquetas de Lotrives (Substack)"
permalink: /etiquetas-substack/
---

<style>
.etiquetas-nav {
  line-height: 1.5;
}

.etiquetas-bloque {
  margin-bottom: 1.5rem;
}

.etiquetas-lista {
  columns: 2;
  column-gap: 2rem;
  margin: 0.4rem 0 0 0;
  padding-left: 1.2rem;
}

.etiquetas-lista li {
  margin: 0 0 0.15rem 0;
  break-inside: avoid;
}

@media screen and (max-width: 700px) {
  .etiquetas-lista {
    columns: 1;
  }
}
</style>

Este índice recoge todas las etiquetas utilizadas en [Lotrives (Substack)](https://lotrives.substack.com).

Puedes explorar los contenidos por tema haciendo clic en cada etiqueta.

{% assign etiquetas_ordenadas = site.data.etiquetas | sort: "Etiqueta" %}

**Total de etiquetas:** {{ etiquetas_ordenadas | size }}

## Navegación

<div class="etiquetas-nav">
[0-9](#0-9) · [A](#a) · [B](#b) · [C](#c) · [D](#d) · [E](#e) · [F](#f) · [G](#g) · [H](#h) · [I](#i) · [J](#j) · [K](#k) · [L](#l) · [M](#m) · [N](#n) · [O](#o) · [P](#p) · [Q](#q) · [R](#r) · [S](#s) · [T](#t) · [U](#u) · [V](#v) · [W](#w) · [X](#x) · [Y](#y) · [Z](#z)
</div>

{% assign digitos = "0123456789" %}

## 0-9

<ul class="etiquetas-lista">
{% for item in etiquetas_ordenadas %}
  {% assign inicial = item.Etiqueta | slice: 0, 1 %}
  {% if digitos contains inicial %}
<li><a href="{{ item.URL }}">{{ item.Etiqueta }}</a></li>
  {% endif %}
{% endfor %}
</ul>

{% assign letras = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z" | split: "," %}

{% for letra in letras %}
## {{ letra }}

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

{% endfor %}
