---
layout: page
title: "Categorías"
permalink: /categorias/
---

<h3 id="sociedad">Sociedad</h3>

{% assign sociedad_posts = site.categories.Sociedad %}
{% if sociedad_posts %}
<ul>
  {% for post in sociedad_posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span style="font-size:0.85rem; color:#777;">
        ({{ post.date | date: "%Y-%m-%d" }})
      </span>
    </li>
  {% endfor %}
</ul>
{% else %}
<p>No hay entradas en esta categoría.</p>
{% endif %}

<hr>

<h3 id="cultura">Cultura</h3>

{% assign cultura_posts = site.categories.Cultura %}
{% if cultura_posts %}
<ul>
  {% for post in cultura_posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span style="font-size:0.85rem; color:#777;">
        ({{ post.date | date: "%Y-%m-%d" }})
      </span>
    </li>
  {% endfor %}
</ul>
{% else %}
<p>No hay entradas en esta categoría.</p>
{% endif %}

<hr>

<h3 id="persona">Persona</h3>

{% assign persona_posts = site.categories.Persona %}
{% if persona_posts %}
<ul>
  {% for post in persona_posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span style="font-size:0.85rem; color:#777;">
        ({{ post.date | date: "%Y-%m-%d" }})
      </span>
    </li>
  {% endfor %}
</ul>
{% else %}
<p>No hay entradas en esta categoría.</p>
{% endif %}
