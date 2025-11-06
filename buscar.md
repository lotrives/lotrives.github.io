---
layout: page
title: Buscar
permalink: /buscar/
description: "Busca por texto, título y etiquetas"
---

<div style="max-width:720px;margin:1rem 0;">
  <label for="search-input" style="display:block;font-weight:600;margin-bottom:.25rem;">
    Busca por texto, título y etiquetas
  </label>
  <input id="search-input" type="search" placeholder="Escribe para buscar…" 
         style="width:100%;padding:.6rem;border:1px solid #ddd;border-radius:6px;">
  <p id="search-stats" style="margin:.5rem 0;color:#666;"></p>
</div>

<noscript>El buscador requiere JavaScript.</noscript>

<ul id="search-results" style="list-style:none;padding-left:0;margin:1rem 0;"></ul>

<!-- Librería Lunr (primero) y tu script (después). Ambos con defer. -->
<script defer src="https://cdn.jsdelivr.net/npm/lunr/lunr.min.js"></script>
<script defer src="{{ '/assets/js/search.js' | relative_url }}"></script>

<style>
  /* Enlace ocupa todo el resultado: 1 clic basta */
  #search-results .sr-link {
    display: block;
    padding: .5rem .25rem;
    text-decoration: none;
  }
  #search-results .sr-link:hover,
  #search-results .sr-link:focus {
    text-decoration: underline;
  }
  #search-results .sr-tags {
    font-size: .85rem; color:#666; margin-top:.25rem;
  }
</style>
