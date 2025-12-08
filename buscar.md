---
layout: page
title: "Buscar"
permalink: /buscar/
---

<h3>Busca por texto, título y etiquetas</h3>

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

<style>
  /* Contenedor general del buscador */
  #search-container {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  /* Caja de búsqueda: más ancha y cómoda */
  #search-input {
    width: 100%;
    max-width: 480px; /* ancho máximo razonable */
    padding: 0.75rem 1rem;
    font-size: 1rem;
    box-sizing: border-box;
  }

  /* Lista de resultados */
  #results-container {
    list-style: none;
    padding-left: 0;
    margin-top: 1.5rem;
  }

  #results-container li {
    margin-bottom: 1.25rem;
  }

  #results-container a {
    font-weight: 600;
  }

  #results-container small {
    color: #666;
    display: block;
  }

  #results-container span {
    display: block;
    margin-top: 0.25rem;
  }
</style>

<script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>
<script>
  window.addEventListener('DOMContentLoaded', function () {
    SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: '{{ "/search.json" | relative_url }}',
      searchResultTemplate:
        '<li>' +
          '<a href="{url}">{title}</a>' +
          '<small>{date}</small>' +
          '<small>{tags}</small>' +
          '<span>{excerpt}</span>' +
        '</li>',
      noResultsText: '<li>No se han encontrado resultados.</li>',
      limit: 20,
      fuzzy: true
    });
  });
</script>
