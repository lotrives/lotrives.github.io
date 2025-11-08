---
layout: page
title: Etiquetas
permalink: /etiquetas/
---

<!-- Índice de etiquetas -->
<ul>
  {% assign tags = site.tags | sort %}
  {% for tag in tags %}
    {% assign tag_name = tag[0] %}
    <li>
      <a href="#{{ tag_name | slugify: 'latin' }}">{{ tag_name }}</a>
      <small>({{ tag[1].size }})</small>
    </li>
  {% endfor %}
</ul>

<hr />

<!-- Lista de entradas bajo cada etiqueta -->
{% for tag in tags %}
  {% assign tag_name = tag[0] %}
  <h4 id="{{ tag_name | slugify: 'latin' }}">{{ tag_name }}</h4>
  <ul>
    {% for post in tag[1] %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small>— {{ post.date | date: "%b %-d, %Y" }}</small>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
