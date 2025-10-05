---
layout: default
title: Lotrives
---

{% for post in site.posts %}
<article class="post-list">
  <p class="post-meta">{% include date_es.html date=post.date %} — {{ post.author }}</p>
  <h2 class="post-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>

  {% if post.excerpt %}
    <div class="post-excerpt">
      {{ post.excerpt }}
    </div>
  {% endif %}
</article>
{% endfor %}

<style>
.post-list { margin: 2rem 0; }
.post-meta { color:#6b7280; margin:0 0 .5rem 0; }
.post-title { margin:.25rem 0 1rem 0; font-weight:800; }
.post-excerpt { margin-top:.5rem; }
</style>
