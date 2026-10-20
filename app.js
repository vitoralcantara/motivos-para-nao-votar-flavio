document.addEventListener("DOMContentLoaded", () => {
  const feedContainer = document.getElementById("feed-list");
  const pillsContainer = document.getElementById("category-pills");
  const searchInput = document.getElementById("search-input");
  const searchClearBtn = document.getElementById("search-clear-btn");
  const countDisplay = document.getElementById("feed-count");
  const totalStatsCount = document.getElementById("total-topics-count");
  const toast = document.getElementById("toast");

  let activeCategory = "Todos";
  let searchQuery = "";

  // Atualiza contador total no header
  if (totalStatsCount) {
    totalStatsCount.textContent = topicsData.length;
  }

  // Gera categorias dinâmicas
  const categories = ["Todos", ...new Set(topicsData.map((item) => item.category))];

  function getCategorySlug(category) {
    if (!category || category === "Todos") return "todos";
    return category
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function renderPills() {
    pillsContainer.innerHTML = categories
      .map(
        (cat) => {
          const slug = getCategorySlug(cat);
          return `
          <button class="pill-btn pill-${slug} ${cat === activeCategory ? "active" : ""}" data-category="${cat}">
            <span class="pill-dot">●</span>
            <span>${cat}</span>
          </button>
        `;
        }
      )
      .join("");

    pillsContainer.querySelectorAll(".pill-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.getAttribute("data-category");
        renderPills();
        renderFeed();
      });
    });
  }

  function getFilteredData() {
    return topicsData.filter((item) => {
      const matchesCategory =
        activeCategory === "Todos" || item.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.sourceName.toLowerCase().includes(q) ||
        item.bullets.some((b) => b.toLowerCase().includes(q)) ||
        (item.fullContext && item.fullContext.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }

  function getFaviconUrl(url) {
    try {
      const hostname = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
    } catch (e) {
      return "";
    }
  }

  function renderFeed() {
    const items = getFilteredData();

    // Atualiza contador
    if (countDisplay) {
      countDisplay.textContent = `${items.length} ${items.length === 1 ? "tópico verificado" : "tópicos verificados"}`;
    }

    if (items.length === 0) {
      feedContainer.innerHTML = `
        <div class="empty-state">
          <h3>Nenhum tópico encontrado</h3>
          <p>Tente buscar por outros termos ou selecionar outra categoria.</p>
        </div>
      `;
      return;
    }

    feedContainer.innerHTML = items
      .map((item) => {
        const catSlug = getCategorySlug(item.category);
        const faviconUrl = getFaviconUrl(item.sourceUrl);
        return `
        <article class="topic-card category-${catSlug}" id="${item.id}" data-id="${item.id}">
          <div class="card-meta">
            <span class="card-category-badge">
              <span>●</span> ${item.category}
            </span>
            <span class="card-date">${item.date}</span>
          </div>

          <h2 class="card-title">${item.title}</h2>

          <ul class="card-bullets">
            ${item.bullets.map((b) => `<li>${b}</li>`).join("")}
          </ul>

          <div class="card-context-wrapper" id="context-${item.id}">
            <div class="card-context-inner">
              <strong>Contexto da Apuração</strong>
              <p>${item.fullContext}</p>
            </div>
          </div>

          <div class="card-footer">
            <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" class="source-badge">
              <img 
                src="${faviconUrl}" 
                alt="" 
                class="source-favicon" 
                loading="lazy" 
                onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';"
              >
              <span class="source-fallback-icon" style="display:none;">📰</span>
              <span><strong>Fonte:</strong> ${item.sourceName}</span>
              <span class="source-badge-link-icon">↗</span>
            </a>

            <div class="card-actions">
              <button class="btn-action btn-toggle-context" data-target="context-${item.id}">
                <span>Ver contexto</span>
                <span class="chevron">⌄</span>
              </button>

              <button class="btn-action btn-copy-link" data-id="${item.id}" title="Copiar link direto para este fato">
                <span>🔗</span>
                <span>Copiar link</span>
              </button>

              <button class="btn-action btn-whatsapp" data-id="${item.id}" data-title="${encodeURIComponent(item.title)}" data-url="${encodeURIComponent(window.location.origin + window.location.pathname + "#" + item.id)}" title="Compartilhar no WhatsApp">
                <span>💬</span>
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </article>
      `;
      })
      .join("");

    attachCardEvents();
    checkUrlHash();
  }

  function attachCardEvents() {
    // Alternar contexto
    feedContainer.querySelectorAll(".btn-toggle-context").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const contextEl = document.getElementById(targetId);
        const isOpen = contextEl.classList.contains("open");

        if (isOpen) {
          contextEl.classList.remove("open");
          btn.querySelector("span:first-child").textContent = "Ver contexto";
          btn.querySelector(".chevron").textContent = "⌄";
        } else {
          contextEl.classList.add("open");
          btn.querySelector("span:first-child").textContent = "Recolher";
          btn.querySelector(".chevron").textContent = "⌃";
        }
      });
    });

    // Copiar link
    feedContainer.querySelectorAll(".btn-copy-link").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const fullUrl = `${window.location.origin}${window.location.pathname}#${id}`;
        
        navigator.clipboard.writeText(fullUrl).then(() => {
          showToast("Link copiado para a área de transferência!");
        }).catch(() => {
          showToast("Erro ao copiar link.");
        });
      });
    });

    // WhatsApp share
    feedContainer.querySelectorAll(".btn-whatsapp").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const item = topicsData.find((t) => t.id === id);
        if (!item) return;

        const shareUrl = `${window.location.origin}${window.location.pathname}#${id}`;
        const message = `*Fato Verificado:* ${item.title}\n\n• ${item.bullets.slice(0, 2).join("\n• ")}\n\nFonte: ${item.sourceName}\nConfira a apuração completa: ${shareUrl}`;
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, "_blank");
      });
    });
  }

  function showToast(text) {
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  function checkUrlHash() {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const targetCard = document.getElementById(hash);
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
      targetCard.classList.add("highlight");
      
      // Abre o contexto automaticamente se tiver âncora direta
      const contextWrapper = targetCard.querySelector(".card-context-wrapper");
      if (contextWrapper) {
        contextWrapper.classList.add("open");
        const toggleBtn = targetCard.querySelector(".btn-toggle-context");
        if (toggleBtn) {
          toggleBtn.querySelector("span:first-child").textContent = "Recolher";
          toggleBtn.querySelector(".chevron").textContent = "⌃";
        }
      }

      setTimeout(() => {
        targetCard.classList.remove("highlight");
      }, 3500);
    }
  }

  // Busca em tempo real
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = searchQuery ? "block" : "none";
      }
      renderFeed();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      searchClearBtn.style.display = "none";
      searchInput.focus();
      renderFeed();
    });
  }

  // Controle do Modal de Sugestões
  const suggestModal = document.getElementById("suggest-modal");
  const btnOpenSuggest = document.getElementById("btn-open-suggest");
  const btnFooterSuggest = document.getElementById("btn-footer-suggest");
  const btnCloseModal = document.getElementById("btn-close-modal");
  const btnCancelModal = document.getElementById("btn-cancel-modal");
  const suggestForm = document.getElementById("suggest-form");
  const suggestSuccess = document.getElementById("suggest-success");
  const btnSuccessClose = document.getElementById("btn-success-close");

  function openSuggestModal() {
    if (!suggestModal) return;
    suggestModal.classList.add("open");
    suggestModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (suggestForm) suggestForm.style.display = "block";
    if (suggestSuccess) suggestSuccess.style.display = "none";
    const urlInput = document.getElementById("suggest-url");
    if (urlInput) setTimeout(() => urlInput.focus(), 100);
  }

  function closeSuggestModal() {
    if (!suggestModal) return;
    suggestModal.classList.remove("open");
    suggestModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (suggestForm) suggestForm.reset();
  }

  if (btnOpenSuggest) btnOpenSuggest.addEventListener("click", openSuggestModal);
  if (btnFooterSuggest) btnFooterSuggest.addEventListener("click", openSuggestModal);
  if (btnCloseModal) btnCloseModal.addEventListener("click", closeSuggestModal);
  if (btnCancelModal) btnCancelModal.addEventListener("click", closeSuggestModal);
  if (btnSuccessClose) btnSuccessClose.addEventListener("click", closeSuggestModal);

  // Fecha modal ao clicar fora do card
  if (suggestModal) {
    suggestModal.addEventListener("click", (e) => {
      if (e.target === suggestModal) {
        closeSuggestModal();
      }
    });
  }

  // Fecha com tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && suggestModal && suggestModal.classList.contains("open")) {
      closeSuggestModal();
    }
  });

  // Envio do formulário via Netlify Forms ou Ajax
  if (suggestForm) {
    suggestForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById("btn-submit-suggest");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = "<span>Enviando...</span>";
      }

      const formData = new FormData(suggestForm);

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      })
        .catch(() => {
          // Trata suavemente em caso de teste local sem backend
        })
        .finally(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = "<span>Enviar Sugestão</span> <span>↗</span>";
          }
          suggestForm.style.display = "none";
          if (suggestSuccess) suggestSuccess.style.display = "block";
          showToast("Sugestão enviada com sucesso!");
        });
    });
  }

  // Inicialização
  renderPills();
  renderFeed();
});
