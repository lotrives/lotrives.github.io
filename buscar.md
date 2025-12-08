---
layout: page
title: "Buscar"
permalink: /buscar/
---

<h1>Buscar</h1>
<p>Busca por texto, título y etiquetas</p>

<div id="search-container">
  <input
    type="search"
    id="search-input"
    placeholder="Escribe y pulsa Enter o empieza a teclear…"
    aria-label="Buscar en los artículos"
  >
  <ul id="results-container"></ul>
</div>

<noscript>
  El buscador requiere JavaScript.
</noscript>

<script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>
<script>
  window.addEventListener('DOMContentLoaded', function () {
    SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: '{{ "/search.json" | relative_url }}',
      searchResultTemplate: '<li><a href="{url}">{title}</a><br><small>{date}</small><br><small>{tags}</small><br><span>{excerpt}</span></li>',
      noResultsText: '<li>No se han encontrado resultados.</li>',
      limit: 20,
      fuzzy: true
    });
  });
</script>
