---
layout: page
title: "Categorías"
permalink: /categorias/
---

# Categorías

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
  <ul>
    {%- for post in posts_de_cat -%}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        ({{ post.date | date: "%Y-%m-%d" }})
      </li>
    {%- endfor -%}
  </ul>
  {%- unless forloop.last -%}
  <hr>
  {%- endunless -%}
{%- endfor -%}
