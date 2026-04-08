---
layout: page
title: "Etiquetas"
permalink: /etiquetas/
---

<style>
.nav-letras {
  display: grid;
  grid-template-columns: repeat(9, auto);
  gap: 0.4em;
  margin-bottom: 2em;
  width: fit-content;
}
.nav-letras a {
  padding: 0.2em 0.5em;
  text-decoration: none;
  color: inherit;
  font-size: 0.95em;
}
.nav-letras a:hover {
  text-decoration: underline;
}
.letra-header {
  display: flex;
  align-items: baseline;
  gap: 0.4em;
  margin-top: 1.5em;
}
.letra-header h2 {
  margin: 0;
}
.letra-header a {
  font-size: 0.85em;
  text-decoration: none;
  color: #999;
}
.letra-header a:hover {
  color: inherit;
}
.tags-columnas {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 2em;
  margin-bottom: 1em;
}
@media (max-width: 600px) {
  .tags-columnas {
    grid-template-columns: 1fr;
  }
  .nav-letras {
    grid-template-columns: repeat(6, auto);
  }
}
</style>

{% assign letras = "0-9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z" | split: "," %}
{% assign tags_sorted = site.tags | sort %}

<div id="nav-letras" class="nav-letras">
{% for letra in letras %}
  {% assign tiene = false %}
  {% if letra == "0-9" %}
    {% for tag in tags_sorted %}
      {% assign inicial = tag[0] | slice: 0 %}
      {% assign inicial_num = inicial | times: 1 %}
      {% if inicial == "0" or inicial == "1" or inicial == "2" or inicial == "3" or inicial == "4" or inicial == "5" or inicial == "6" or inicial == "7" or inicial == "8" or inicial == "9" %}
        {% assign tiene = true %}
      {% endif %}
    {% endfor %}
  {% else %}
    {% for tag in tags_sorted %}
      {% assign inicial = tag[0] | slice: 0 | upcase %}
      {% if inicial == letra %}
        {% assign tiene = true %}
      {% endif %}
    {% endfor %}
  {% endif %}
  {% if tiene %}<a href="#letra-{{ letra | slugify }}">{{ letra }}</a>{% endif %}
{% endfor %}
</div>

{% for letra in letras %}
  {% assign tags_de_letra = "" | split: "" %}
  {% if letra == "0-9" %}
    {% for tag in tags_sorted %}
      {% assign inicial = tag[0] | slice: 0 %}
      {% if inicial == "0" or inicial == "1" or inicial == "2" or inicial == "3" or inicial == "4" or inicial == "5" or inicial == "6" or inicial == "7" or inicial == "8" or inicial == "9" %}
        {% assign tags_de_letra = tags_de_letra | push: tag %}
      {% endif %}
    {% endfor %}
  {% else %}
    {% for tag in tags_sorted %}
      {% assign inicial = tag[0] | slice: 0 | upcase %}
      {% if inicial == letra %}
        {% assign tags_de_letra = tags_de_letra | push: tag %}
      {% endif %}
    {% endfor %}
  {% endif %}

  {% if tags_de_letra.size > 0 %}
<div class="letra-header">
  <h2 id="letra-{{ letra | slugify }}">{{ letra }}</h2>
  <a href="#nav-letras">↑</a>
</div>
<div class="tags-columnas">
  {% for tag in tags_de_letra %}
    {% assign nombre = tag[0] %}
    {% assign posts_de_tag = tag[1] %}
    <div>
      <a href="#{{ nombre | slugify }}">{{ nombre }}</a> ({{ posts_de_tag | size }})
    </div>
  {% endfor %}
</div>

    {% for tag in tags_de_letra %}
      {% assign nombre = tag[0] %}
      {% assign posts_de_tag = tag[1] %}
<h4 id="{{ nombre | slugify }}">{{ nombre }}</h4>
<ul>
  {% for post in posts_de_tag %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> ({{ post.date | date: "%Y-%m-%d" }})</li>
  {% endfor %}
</ul>
    {% endfor %}
  {% endif %}
{% endfor %}
