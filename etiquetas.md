---
layout: page
title: "Etiquetas"
permalink: /etiquetas/
---

<h1>Etiquetas</h1>

<ul class="tag-list">
  {% for tag in site.tags %}
    {% assign nombre = tag[0] %}
    {% assign posts = tag[1] %}
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
