---
---
(function () {
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    const btn = document.createElement('button');
    btn.className = 'ltv-search-btn';
    btn.setAttribute('aria-label', 'Abrir buscador');
    btn.title = 'Buscar ( / )';
    btn.innerHTML = '🔍';
    document.body.appendChild(btn);

    const modal = document.createElement('div');
    modal.className = 'ltv-search-modal';
    modal.innerHTML = `
      <div class="ltv-search-panel" role="dialog" aria-modal="true" aria-label="Buscador">
        <div style="display:flex; align-items:center; gap:.5rem; justify-content:space-between;">
          <input class="ltv-search-input" type="search" placeholder="Buscar…" aria-label="Buscar">
          <button class="ltv-close" title="Cerrar (Esc)" aria-label="Cerrar">×</button>
        </div>
        <div class="ltv-search-meta">Sugerencia: escribe 2+ letras · Enter abre el primero · Esc cierra</div>
        <ul class="ltv-search-results" aria-live="polite"></ul>
      </div>
    `;
    document.body.appendChild(modal);

    const input = modal.querySelector('.ltv-search-input');
    const close = modal.querySelector('.ltv-close');
    const resultsEl = modal.querySelector('.ltv-search-results');

    btn.addEventListener('click', open);
    close.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === '/' && !isTypingInField(e)) { e.preventDefault(); open(); }
      if (e.key === 'Enter' && modal.style.display === 'block') {
        const first = resultsEl.querySelector('a');
        if (first) location.href = first.getAttribute('href');
      }
    });

    function open() { modal.style.display = 'block'; input.focus(); }
    function closeModal() { modal.style.display = 'none'; input.value = ''; resultsEl.innerHTML = ''; }
    function isTypingInField(ev) {
      const tag = (ev.target.tagName || '').toLowerCase();
      return tag === 'input' || tag === 'textarea' || ev.target.isContentEditable;
    }

    let idx = null;
    let docs = [];
    fetch('{{ "/search.json" | relative_url }}')
      .then(r => r.json())
      .then(json => {
        docs = json;
        idx = lunr(function () {
          this.ref('url');
          this.field('title', { boost: 10 });
          this.field('content');
          this.metadataWhitelist = ['position'];
          docs.forEach(d => this.add(d));
        });
      });

    let lastQuery = '';
    input.addEventListener('input', () => {
      const q = (input.value || '').trim();
      if (q === lastQuery) return;
      lastQuery = q;
      resultsEl.innerHTML = '';
      if (!idx || q.length < 2) return;

      let results = [];
      try { results = idx.search(q); } catch (e) { results = []; }

      results.slice(0, 20).forEach(r => {
        const doc = docs.find(d => d.url === r.ref);
        if (!doc) return;
        const snippet = makeSnippet(doc.content, q, 180);
        const li = document.createElement('li');
        li.innerHTML = `
          <a href="${doc.url}"><strong>${escapeHTML(doc.title || '(Sin título)')}</strong></a>
          <div class="ltv-snippet">${snippet}</div>
          <div class="ltv-search-meta">${doc.date ? doc.date : ''}</div>
        `;
        resultsEl.appendChild(li);
      });
    });

    function escapeHTML(str) {
      return (str || '').replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
    }
    function makeSnippet(text, query, width) {
      text = (text || '').replace(/\s+/g, ' ').trim();
      const q = query.split(/\s+/)[0];
      const i =

ls -l assets/js/search.js

