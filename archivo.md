---
layout: page
title: "Archivo"
permalink: /archivo/
---

{% assign posts_por_anio = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for grupo in posts_por_anio %}
## {{ grupo.name }}

{% for post in grupo.items %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: "%d/%m/%Y" }}
{% endfor %}

{% endfor %}
