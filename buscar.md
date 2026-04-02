---
layout: page
title: "Buscar"
permalink: /buscar/
---

<input type="search" id="buscador-q" placeholder="Busca títulos, textos, etiquetas…" autocomplete="off" disabled style="width:100%;max-width:480px;padding:0.75rem 1rem;font-size:1rem;box-sizing:border-box;margin-top:1rem;">

<div id="buscador-status" style="font-size:0.8rem;color:#888;margin:0.75rem 0 1rem;min-height:1.2em;"></div>
<div id="buscador-results"></div>

<style>
  .b-card { border:1px solid #e0e0e0; border-radius:4px; padding:1rem 1.2rem; margin-bottom:0.8rem; }
  .b-card:hover { border-color:#aaa; }
  .b-card a { font-weight:bold; display:block; margin-bottom:0.2rem; color:#3273dc; text-decoration:none; }
  .b-card a:hover { text-decoration:underline; }
  .b-date { font-size:0.75rem; color:#888; margin-bottom:0.4rem; }
  .b-excerpt { font-size:0.9rem; color:#555; line-height:1.5; }
  .b-excerpt mark { background:#ffeaa0; border-radius:2px; padding:0 2px; }
  .b-tags { margin-top:0.5rem; font-size:0.75rem; color:#888; }
  .b-nada { font-style:italic; color:#888; }
</style>

<script>
(function () {
  var posts = [];
  var input   = document.getElementById('buscador-q');
  var status  = document.getElementById('buscador-status');
  var results = document.getElementById('buscador-results');

  function esc(str) {
    return (str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function hl(text, q) {
    if (!q) return esc(text);
    var safe = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return esc(text).replace(new RegExp('(' + esc(safe) + ')', 'gi'), '<mark>$1</mark>');
  }

  function excerpt(text, q) {
    var idx = q ? (text||'').toLowerCase().indexOf(q.toLowerCase()) : -1;
    var s = idx > 60 ? idx - 60 : 0;
    var chunk = (text||'').slice(s, s + 220);
    if (s > 0) chunk = '…' + chunk;
    if (s + 220 < (text||'').length) chunk += '…';
    return hl(chunk, q);
  }

  function fmtDate(raw) {
    if (!raw) return '';
    var d = new Date(raw);
    return isNaN(d) ? raw : d.toLocaleDateString('es-ES', { year:'numeric', month:'long', day:'numeric' });
  }

  function search(query) {
    var q = query.trim();
    if (!q) {
      results.innerHTML = '';
      status.innerHTML = posts.length + ' entradas indexadas';
      return;
    }
    var ql = q.toLowerCase();
    var matched = posts.filter(function(p) {
      return (p.title||'').toLowerCase().indexOf(ql) !== -1 ||
             (p.excerpt||'').toLowerCase().indexOf(ql) !== -1 ||
             (p.tags||'').toLowerCase().indexOf(ql) !== -1;
    });
    var n = matched.length;
    status.innerHTML = n + ' resultado' + (n !== 1 ? 's' : '') + ' para "<strong>' + esc(q) + '</strong>"';
    if (!n) { results.innerHTML = '<p class="b-nada">No se encontró nada.</p>'; return; }
    results.innerHTML = matched.map(function(p) {
      return '<div class="b-card">' +
        '<a href="' + esc(p.url) + '">' + hl(p.title||'', q) + '</a>' +
        '<div class="b-date">' + fmtDate(p.date) + '</div>' +
        '<div class="b-excerpt">' + excerpt(p.excerpt||'', q) + '</div>' +
        (p.tags ? '<div class="b-tags">' + (p.tags).split(', ').map(function(t){ return '#' + esc(t.trim()); }).join(' ') + '</div>' : '') +
        '</div>';
    }).join('');
  }

  fetch('/search.json')
    .then(function(r) { return r.json(); })
    .then(function(data) {
      posts = data;
      input.disabled = false;
      input.focus();
      status.innerHTML = posts.length + ' entradas indexadas';
    })
    .catch(function() {
      status.innerHTML = 'Error al cargar el índice.';
    });

  var timer;
  input.addEventListener('input', function(e) {
    clearTimeout(timer);
    timer = setTimeout(function() { search(e.target.value); }, 250);
  });
})();
</script>
