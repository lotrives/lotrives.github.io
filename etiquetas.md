---
layout: page
title: "Etiquetas"
permalink: /etiquetas/
---

# Etiquetas

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
  <ul>
    {%- for post in posts_de_tag -%}
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
