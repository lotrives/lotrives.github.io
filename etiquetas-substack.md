---
layout: page
title: "Etiquetas de Substack"
permalink: /etiquetas-substack/
---

Este índice recoge todas las etiquetas utilizadas en [Lotrives (Substack)](https://lotrives.substack.com).

Puedes explorar los contenidos por tema haciendo clic en cada etiqueta.

{% assign etiquetas_ordenadas = site.data.etiquetas | sort: "Etiqueta" %}

**Total de etiquetas:** {{ etiquetas_ordenadas | size }}

## Navegación

[0-9](#0-9) ·
[A](#a) ·
[B](#b) ·
[C](#c) ·
[D](#d) ·
[E](#e) ·
[F](#f) ·
[G](#g) ·
[H](#h) ·
[I](#i) ·
[J](#j) ·
[K](#k) ·
[L](#l) ·
[M](#m) ·
[N](#n) ·
[O](#o) ·
[P](#p) ·
[Q](#q) ·
[R](#r) ·
[S](#s) ·
[T](#t) ·
[U](#u) ·
[V](#v) ·
[W](#w) ·
[X](#x) ·
[Y](#y) ·
[Z](#z)

## 0-9

{% for item in etiquetas_ordenadas %}
  {% assign inicial = item.Etiqueta | slice: 0, 1 %}
  {% if inicial >= '0' and inicial <= '9' %}
- [{{ item.Etiqueta }}]({{ item.URL }})
  {% endif %}
{% endfor %}

{% assign letras = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z" | split: "," %}

{% for letra in letras %}
## {{ letra }}

{% for item in etiquetas_ordenadas %}
  {% assign inicial = item.Etiqueta | slice: 0, 1 | upcase %}
  {% if inicial == letra %}
- [{{ item.Etiqueta }}]({{ item.URL }})
  {% endif %}
{% endfor %}

{% endfor %}