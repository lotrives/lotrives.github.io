---
layout: page
title: "Categorías"
permalink: /categorias/
---

<h1>Categorías</h1>

<ul class="category-list">
  {% for category in site.categories %}
    {% assign nombre = category[0] %}
    {% assign posts = category[1] %}
    <li id="{{ nombre | slugify }}">
      <h2>{{ nombre }}</h2>
      <ul>
        {% for post in posts %}
          <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <span class="post-date">
              {{ post.date | date: "%Y-%m-%d" }}
            </span>
          </li>
        {% endfor %}
      </ul>
    </li>
  {% endfor %}
</ul>
