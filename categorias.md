---
layout: page
title: "Categorías"
permalink: /categorias/
---

# Categorías

{%- comment -%}
  site.categories es un hash:
    "Nombre categoría" => [post1, post2, ...]
  Lo convertimos en array y lo ordenamos alfabéticamente por nombre.
{%- endcomment -%}

{%- assign categorias_ordenadas = site.categories | sort -%}

<ul>
{%- for categoria in categorias_ordenadas -%}
  {%- assign nombre = categoria[0] -%}
  {%- assign posts_de_cat = categoria[1] | sort: "date" | reverse -%}
  <li>
    <a href="#{{ nombre | slugify }}">{{ nombre }}</a>
    ({{ posts_de_cat | size }})
  </li>
{%- endfor -%}
</ul>

{%- for categoria in categorias_ordenadas -%}
  {%- assign nombre = categoria[0] -%}
  {%- assign posts_de_cat = categoria[1] | sort: "date" | reverse -%}

  <h2 id="{{ nombre | slugify }}">{{ nombre }}</h2>

  {%- if posts_de_cat and posts_de_cat != empty -%}
    <ul>
    {%- for post in posts_de_cat -%}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span style="font-size:0.85rem; color:#777;">
          ({{ post.date | date: "%Y-%m-%d" }})
        </span>
      </li>
    {%- endfor -%}
    </ul>
  {%- else -%}
    <p>No hay entradas en esta categoría.</p>
  {%- endif -%}

  {%- unless forloop.last -%}
  <hr>
  {%- endunless -%}
{%- endfor -%}
