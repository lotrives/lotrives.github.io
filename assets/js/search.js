(function () {
  const $input = document.getElementById("search-input");
  const $results = document.getElementById("search-results");
  const $stats = document.getElementById("search-stats");

  let index = null;
  let documents = [];

  function escapeHTML(s) {
    return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  function snippet(text, q, len = 160) {
    if (!text) return "";
    const i = text.toLowerCase().indexOf(q.toLowerCase());
    if (i === -1) return text.slice(0, len) + (text.length > len ? "…" : "");
    const start = Math.max(0, i - Math.floor(len / 3));
    const end = Math.min(text.length, start + len);
    return (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");
  }

  async function buildIndex() {
    const res = await fetch("/search.json", { cache: "no-store" });
    documents = await res.json();

    index = lunr(function () {
      this.ref("id");
      this.field("title", { boost: 8 });
      this.field("tags", { boost: 5 });
      this.field("content");

      documents.forEach(doc => this.add({
        id: doc.id,
        title: doc.title || "",
        tags: (doc.tags || []).join(" "),
        content: (doc.title || "") + " " + (doc.excerpt || "") + " " + (doc.content || "")
      }));
    });
  }

  function render(results, q) {
    $results.innerHTML = "";
    $stats.textContent = results.length
      ? `${results.length} resultado(s) para “${q}”`
      : (q ? `Sin resultados para “${q}”` : "");

    if (!results.length) return;

    const frag = document.createDocumentFragment();
    results.slice(0, 30).forEach(r => {
      const doc = documents.find(d => d.id === r.ref);
      if (!doc) return;

      const li = document.createElement("li");
      li.style.margin = "0 0 1rem 0";
      li.innerHTML = `
        <a href="${doc.url}" style="font-weight:700; text-decoration:none;">
          ${escapeHTML(doc.title || doc.url)}
        </a>
        <div style="font-size:.9rem; color:#555; margin:.25rem 0;">
          ${escapeHTML(snippet(doc.excerpt || doc.content || "", q))}
        </div>
        ${Array.isArray(doc.tags) && doc.tags.length ? `
          <div style="font-size:.85rem; color:#666;">
            ${doc.tags.map(t => `#${escapeHTML(t)}`).join(" · ")}
          </div>` : ``}
      `;
      frag.appendChild(li);
    });
    $results.appendChild(frag);
  }

  function doSearch(q) {
    if (!q || !index) { render([], ""); return; }
    try {
      // Permite búsquedas “normales” y también prefijos (cat*)
      const safe = q.replace(/[^\p{L}\p{N}\s#*]/gu, " ").trim();
      const results = index.search(safe.split(/\s+/).map(token => {
        if (token.startsWith("#")) return token.slice(1) + "*";
        if (!/[*]$/.test(token)) return token + "*";
        return token;
      }).join(" "));
      render(results, q);
    } catch (e) {
      render([], q);
    }
  }

  // Inicialización
  buildIndex().then(() => {
    // Buscar al pulsar Enter
    $input.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") doSearch($input.value);
    });
    // Y también al perder foco
    $input.addEventListener("change", () => doSearch($input.value));
  });
})();
