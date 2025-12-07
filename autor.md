---
layout: page
title: "José Manuel Grau Navarro"
permalink: /autor/jose-manuel-grau-navarro/
---

Director de _Nueva Revista_, doctor en Periodismo (Universidad de Navarra) y licenciado en Ciencias Físicas (Universidad Complutense de Madrid).  
Ha sido corresponsal de _ABC_ y director de Comunicación del Ministerio de Educación.

---

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
