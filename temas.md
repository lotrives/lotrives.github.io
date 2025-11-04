---
layout: page
title: Temas
permalink: /temas/
---

<h2 style="margin-bottom:1.5rem;">Temas y etiquetas</h2>

{% assign sorted_tags = site.tags | sort %}
<ul style="list-style:none; padding:0;">
  {% for tag in sorted_tags %}
    <li style="margin-bottom:2rem;">
      <h3 style="margin-bottom:.5rem;">{{ tag[0] | capitalize }}</h3>
      <ul style="list-style:none; padding-left:1rem;">
        {% for post in tag[1] %}
          <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <span style="color:#6b7280;">({{ post.date | date: "%-d %B %Y" }})</span>
          </li>
        {% endfor %}
      </ul>
    </li>
  {% endfor %}
</ul>
