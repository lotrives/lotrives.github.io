---
layout: page
title: "Categorías"
permalink: /categorias/
---

{% assign sorted_categories = site.categories | sort: 'first' %}

{% for category in sorted_categories %}
  {% assign category_name = category[0] %}
  {% assign category_posts = category[1] %}

  <h3 id="{{ category_name | slugify }}">{{ category_name }}</h3>

  {% if category_posts %}
  <ul>
    {% for post in category_posts %}
      <li>
        <a href="{{ post.url | relative_url }}" target="_blank" rel="noopener">
          {{ post.title }}
        </a>
        <span style="font-size:0.85rem; color:#777;">
          ({{ post.date | date: "%Y-%m-%d" }})
        </span>
      </li>
    {% endfor %}
  </ul>
  {% else %}
  <p>No hay entradas en esta categoría.</p>
  {% endif %}

  {% unless forloop.last %}
  <hr>
  {% endunless %}
{% endfor %}
