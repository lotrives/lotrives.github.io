---
layout: page
title: "Buscar"
permalink: /buscar/
---

<div id="search-container">
  <input
    type="search"
    id="search-input"
    placeholder="Busca títulos, textos, etiquetas…"
    aria-label="Buscar en las entradas"
  >
  <ul id="results-container"></ul>
</div>

<noscript>El buscador requiere JavaScript.</noscript>

<style>
  #search-container { margin-top: 1rem; margin-bottom: 2rem; }
  #search-input {
    width: 100%;
    max-width: 480px;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    box-sizing: border-box;
  }
  #results-container { list-style: none; padding-left: 0; margin-top: 1.5rem; }
  #results-container li { margin-bottom: 1.25rem; }
  #results-container a { font-weight: 600; }
  #results-container small { color: #666; display: block; }
  #results-container span { display: block; margin-top: 0.25rem; }
</style>

<script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>
<script>
  window.addEventListener('DOMContentLoaded', function () {
    SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: '/search.json',
      searchResultTemplate:
        '<li>' +
          '<a href="{url}">{title}</a>' +
          '<small>{date}</small>' +
          '<small>{tags}</small>' +
          '<span>{excerpt}</span>' +
        '</li>',
      noResultsText: '<li>No se encontró nada.</li>',
      limit: 20,
      fuzzy: true
    });
  });
</script>