---
layout: page
title: "Buscar"
permalink: /buscar/
---

<div style="max-width:720px;margin:1rem auto;">
  <label for="search-input" style="display:block;font-weight:600;margin:.25rem 0;">Busca por texto, título y etiquetas</label>
  <input id="search-input" type="search" placeholder="" style="width:100%;padding:.6rem .75rem;border:1px solid #ddd;border-radius:.5rem;outline:0;">
  <div id="search-stats" style="font-size:.9rem;color:#666;margin:.5rem 0;"></div>
  <ul id="search-results" style="list-style:none;padding:0;margin:0;"></ul>
</div>

<!-- Librería de búsqueda (ligera) -->
<script src="https://unpkg.com/lunr/lunr.js"></script>

<!-- Lógica del buscador -->
<script src="{{ '/assets/js/search.js' | relative_url }}"></script>
