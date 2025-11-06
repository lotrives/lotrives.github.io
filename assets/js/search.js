(function () {
  const $input   = document.getElementById("search-input");
  const $results = document.getElementById("search-results");
  const $stats   = document.getElementById("search-stats");

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
    return (s || "").replace(/[&<>"']/g, c => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
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
    // Ruta absoluta: /search.json (sin Liquid aquí)
    const res = await fetch("/search.json", { cache: "no-store" });
    if (!res.ok) throw new Error("No se pudo cargar search.json");
    const raw = await res.json();

    // Versiones completas + campos normalizados
    documents = raw.map(d => ({
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
      this.field("_title",   { boost: 8 });
      this.field("_tags",    { boost: 5 });
      this.field("_content");

      // Sin stemmer ni stopwords (mejor para ES sin paquetes extra)
      this.pipeline.remove(lunr.stemmer);
      this.pipeline.remove(lunr.stopWordFilter);
      this.searchPipeline.remove(lunr.stemmer);
      this.searchPipeline.remove(lunr.stopWordFilter);

      documents.forEach(doc => this.add(doc));
    });
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

      // <a> de punta a punta para que un clic baste
      const li = document.createElement("li");
      li.className = "sr-item";
      li.innerHTML = `
        <a class="sr-link" href="${doc.url}">
          <strong>${escapeHTML(doc.title || doc.url)}</strong>
          <br>
          <small>${escapeHTML(snippet(doc._content || "", q))}</small>
          ${doc._tags ? `
            <div class="sr-tags">
              ${escapeHTML(doc.tags).split(" ").filter(Boolean).map(t => `#${t}`).join(" · ")}
            </div>` : ``}
        </a>
      `;
      frag.appendChild(li);
    });
    $results.appendChild(frag);
  }

  function buildQuery(q) {
    // Tokeniza, filtra y aplica comodín por defecto
    const tokens = norm(q)
      .replace(/[^\p{L}\p{N}\s#*]/gu, " ")
      .trim().split(/\s+/).filter(Boolean);

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
    } catch (_) {
      render([], q);
    }
  }

  // Inicialización
  buildIndex().then(() => {
    let t;
    $input.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") doSearch($input.value);
    });
    $input.addEventListener("input", () => {
      clearTimeout(t);
      t = setTimeout(() => doSearch($input.value), 200);
    });
    $input.addEventListener("change", () => doSearch($input.value));
  }).catch(err => {
    $stats.textContent = "Error al inicializar buscador: " + (err && err.message ? err.message : err);
  });

})();
