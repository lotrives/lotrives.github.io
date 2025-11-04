---
layout: page
title: Archivo
permalink: /archivo/
---

<ul style="list-style:none; padding:0;">
  {% assign posts_sorted = site.posts | sort: "date" | reverse %}
  {% for post in posts_sorted %}
    <li style="margin-bottom:1rem;">
      <span style="color:#6b7280;">{{ post.date | date: "%-d %B %Y" }}</span><br>
      <a href="{{ post.url | relative_url }}" style="font-weight:600;">{{ post.title }}</a>
      {% if post.tags %}
        <br><small style="color:#9ca3af;">Etiquetas: {{ post.tags | join: ", " }}</small>
      {% endif %}
    </li>
  {% endfor %}
</ul>
