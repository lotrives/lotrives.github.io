---
layout: page
title: "Etiquetas"
permalink: /etiquetas/
---

# Etiquetas

{%- comment -%}
  site.tags es un hash:
    "Nombre etiqueta" => [post1, post2, ...]
  Lo convertimos en array y lo ordenamos alfabéticamente por nombre.
{%- endcomment -%}

{%- assign tags_ordenados = site.tags | sort -%}

<ul>
{%- for tag in tags_ordenados -%}
  {%- assign nombre = tag[0] -%}
  {%- assign posts_de_tag = tag[1] | sort: "date" | reverse -%}
  <li>
    <a href="#{{ nombre | slugify }}">{{ nombre }}</a>
    ({{ posts_de_tag | size }})
  </li>
{%- endfor -%}
</ul>

{%- for tag in tags_ordenados -%}
  {%- assign nombre = tag[0] -%}
  {%- assign posts_de_tag = tag[1] | sort: "date" | reverse -%}

  <h2 id="{{ nombre | slugify }}">{{ nombre }}</h2>

  {%- if posts_de_tag and posts_de_tag != empty -%}
    <ul>
    {%- for post in posts_de_tag -%}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span style="font-size:0.85rem; color:#777;">
          ({{ post.date | date: "%Y-%m-%d" }})
        </span>
      </li>
    {%- endfor -%}
    </ul>
  {%- else -%}
    <p>No hay entradas con esta etiqueta.</p>
  {%- endif -%}

  {%- unless forloop.last -%}
  <hr>
  {%- endunless -%}
{%- endfor -%}
