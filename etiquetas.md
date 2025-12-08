---
layout: page
title: "Etiquetas"
permalink: /etiquetas/
---

# Etiquetas

<ul>
{% for tag in site.tags %}
  {% assign nombre = tag[0] | append: '' %}
  {% assign posts_de_tag = tag[1] %}
  <li>
    <a href="#{{ nombre | slugify }}">{{ nombre }}</a>
    ({{ posts_de_tag | size }})
  </li>
{% endfor %}
</ul>

{% for tag in site.tags %}
  {% assign nombre = tag[0] | append: '' %}
  {% assign posts_de_tag = tag[1] %}
  <h2 id="{{ nombre | slugify }}">{{ nombre }}</h2>
  <ul>
    {% for post in posts_de_tag %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        ({{ post.date | date: "%Y-%m-%d" }})
      </li>
    {% endfor %}
  </ul>
{% endfor %}
