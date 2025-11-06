(function () {
  const $input = document.getElementById("search-input");
  const $results = document.getElementById("search-results");
  const $stats = document.getElementById("search-stats");

  let index = null;
  let documents = [];

  // Normaliza tildes y minúsculas para mejores coincidencias en español
  function norm(s) {
    return (s || "")
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function escapeHTML(s) {
    return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  function snippet(text, q, len = 160) {
    if (!text) return "";
    const t = norm(text);
    const i = t.indexOf(norm(q));
    if (i === -1) return text.slice(0, len) + (text.length > len ? "…" : "");
    const start = Math.max(0, i - Math.floor(len / 3));
    const end = Math.min(text.length, start + len);
    return (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");
  }

  async function buildIndex() {
    // Usa relative_url para que funcione siempre
    const jsonURL = "{{ '/search.json' | relative_url }}";
    const res = await fetch(jsonURL, { cache: "no-store" });
    documents = await res.json();

    // Prepara campos normalizados (sin tildes) para indexar
    const docsForIndex = documents.map(d => ({
      id: d.id,
      url: d.url,
      title: d.title || "",
      tags: (d.tags || []).join(" "),
      content: (d.title || "") + " " + (d.excerpt || "") + " " + (d.content || "")
    })).map(d => ({
      ...d,
      _title: norm(d.title),
      _tags: norm(d.tags),
      _content: norm(d.content)
    }));

    index = lunr(function () {
      this.ref("id");
      // Campos “invisibles” normalizados para mejores matches
      this.field("_title", { boost: 8 });
      this.field("_tags", { boost: 5 });
      this.field("_content");

      // Quita stemmer y stopwords (mejor para español sin paquete extra)
      this.pipeline.remove(lunr.stemmer);
      this.pipeline.remove(lunr.stopWordFilter);
      this.searchPipeline.remove(lunr.stemmer);
      this.searchPipeline.remove(lunr.stopWordFilter);

      docsForIndex.forEach(doc => this.add(doc));
    });

    // Guarda versión completa (no normalizada) para pintar
    documents = docsForIndex;
  }

  function render(results, q) {
    $results.innerHTML = "";
    $stats.textContent = results.length
      ? `${results.length} resultado(s) para “${q}”`
      : (q ? `Sin resultados para “${q}”` : "");

    if (!results.length) return;

    const frag = document.createDocumentFragment();
    results.slice(0, 50).forEach(r => {
      const doc = documents.find(d => d.id === r.ref);
      if (!doc) return;

      const li = document.createElement("li");
      li.style.margin = "0 0 1rem 0";
      li.innerHTML = `
        <a href="${doc.url}" style="font-weight:700; text-decoration:none;">
          ${escapeHTML(doc.title || doc.url)}
        </a>
        <div style="font-size:.9rem; color:#555; margin:.25rem 0;">
          ${escapeHTML(snippet(doc._content || "", q))}
        </div>
        ${doc._tags ? `
          <div style="font-size:.85rem; color:#666;">
            ${escapeHTML(doc.tags).split(" ").filter(Boolean).map(t => `#${t}`).join(" · ")}
          </div>` : ``}
      `;
      frag.appendChild(li);
    });
    $results.appendChild(frag);
  }

  function buildQuery(q) {
    // Tokeniza, elimina caracteres raros, aplica comodín por defecto
    const tokens = norm(q).replace(/[^\p{L}\p{N}\s#*]/gu, " ").trim().split(/\s+/).filter(Boolean);
    if (!tokens.length) return "";
    return tokens.map(token => {
      if (token.startsWith("#")) return token.slice(1) + "*";
      return token.endsWith("*") ? token : token + "*";
    }).join(" ");
  }

  function doSearch(q) {
    if (!q || !index) { render([], ""); return; }
    try {
      const query = buildQuery(q);
      if (!query) { render([], q); return; }
      const results = index.search(query);
      render(results, q);
    } catch (e) {
      render([], q);
    }
  }

  // Inicialización
  buildIndex().then(() => {
    // Buscar al pulsar Enter o al escribir (tras breve pausa)
    let t;
    $input.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") doSearch($input.value);
    });
    $input.addEventListener("input", () => {
      clearTimeout(t);
      t = setTimeout(() => doSearch($input.value), 200);
    });
    $input.addEventListener("change", () => doSearch($input.value));
  });
})();
