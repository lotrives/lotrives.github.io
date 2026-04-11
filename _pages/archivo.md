---
layout: page
title: "Archivo"
permalink: /archivo/
---

<style>
.archivo-anio {
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}
.archivo-lista {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}
.archivo-lista li {
  margin-bottom: 0.5em;
}
.archivo-fecha {
  font-size: 0.75em;
  color: #bbb;
  margin-left: 0.4em;
  letter-spacing: 0.04em;
}
</style>

{% assign posts_por_anio = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for grupo in posts_por_anio %}
<h2 class="archivo-anio">{{ grupo.name }}</h2>
<ul class="archivo-lista">
  {% for post in grupo.items %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a><span class="archivo-fecha">{{ post.date | date: "%d/%m/%Y" }}</span>
  </li>
  {% endfor %}
</ul>
{% endfor %}
