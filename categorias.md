---
layout: page
title: "Categorías"
permalink: /categorias/
---

# Categorías

{%- comment -%}
  site.categories es un hash:
    "Nombre categoría" => [post1, post2, ...]
  Lo convertimos a array y lo ordenamos por nombre
{%- endcomment -%}

{%- assign categorias_ordenadas = site.categories | sort -%}

<ul>
{%- for cat in categorias_ordenadas -%}
  {%- assign nombre = cat[0] -%}
  {%- assign posts_de_cat = cat[1] -%}
  <li>
    <a href="#{{ nombre | slugify }}">{{ nombre }}</a>
    ({{ posts_de_cat | size }})
  </li>
{%- endfor -%}
</ul>

{%- for cat in categorias_ordenadas -%}
  {%- assign nombre = cat[0] -%}
  {%- assign posts_de_cat = cat[1] | sort: "date" | reverse -%}

  <h2 id="{{ nombre | slugify }}">{{ nombre }}</h2>

  <ul>
  {%- for post in posts_de_cat -%}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      ({{ post.date | date: "%Y-%m-%d" }})
    </li>
  {%- endfor -%}
  </ul>
{%- endfor -%}
