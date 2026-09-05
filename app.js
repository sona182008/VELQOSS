/**
 * VELQOSS - Core Functional Engine
 */
document.addEventListener("DOMContentLoaded", () => {
  initBusinessInfo();
  renderFeaturedProducts();
  renderFullCatalogue(PRODUCTS_DATA);
  renderGallery('all');
  setupEventListeners();
});

// Populate configuration details dynamic variables across page
function initBusinessInfo() {
  document.querySelectorAll(".val-phone").forEach(el => el.textContent = CONFIG.phone);
  document.querySelectorAll(".val-email").forEach(el => el.textContent = CONFIG.email);
  document.querySelectorAll(".val-location").forEach(el => el.textContent = CONFIG.location);
  document.querySelectorAll(".val-hours").forEach(el => el.textContent = CONFIG.businessHours);
  document.querySelectorAll(".val-insta").forEach(el => el.textContent = CONFIG.instagram);
}

// Render Featured Product Grid
function renderFeaturedProducts() {
  const container = document.getElementById("featured-grid");
  if (!container) return;

  const featured = PRODUCTS_DATA.filter(p => p.featured).slice(0, 6);
  container.innerHTML = featured.map(p => createProductCardHTML(p)).join("");
}

// Render Main Product Catalogue with scaling support
function renderFullCatalogue(data) {
  const container = document.getElementById("catalogue-grid");
  const emptyState = document.getElementById("catalogue-empty");
  if (!container) return;

  if (data.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  container.innerHTML = data.map(p => createProductCardHTML(p)).join("");
}

// Universal Product Card Builder
function createProductCardHTML(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-thumb" loading="lazy">
      <div class="product-body">
        <span class="product-cat">${product.category}</span>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-price">${product.priceLabel}</div>
        <div class="product-actions">
          <button class="btn-secondary" onclick="openProductModal('${product.id}')">Details</button>
          <button class="btn-primary" onclick="directWhatsAppOrder('${product.id}')">Order</button>
        </div>
      </div>
    </div>
  `;
}

// Filter Catalogue by Search & Category
function filterCatalogue() {
  const query = document.getElementById("catalogue-search").value.toLowerCase();
  const activeCategory = document.querySelector(".filter-btn.active")?.dataset.cat || "all";

  const filtered = PRODUCTS_DATA.filter(p => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  renderFullCatalogue(filtered);
}

// Open Detailed Product Modal
function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("product-modal");
  const modalBody = document.getElementById("modal-body-content");

  const sizes = product.options.sizes.map(s => `<option value="${s}">${s}</option>`).join("");
  const materials = product.options.materials.map(m => `<option value="${m}">${m}</option>`).join("");
  const quantities = product.options.quantities.map(q => `<option value="${q}">${q}</option>`).join("");

  modalBody.innerHTML = `
    <div class="modal-grid">
      <div>
        <img src="${product.image}" alt="${product.name}" class="modal-img">
      </div>
      <div>
        <span class="product-cat">${product.category}</span>
        <h2>${product.name}</h2>
        <p class="product-price" style="margin: 10px 0;">${product.priceLabel}</p>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 16px;">${product.description}</p>
        
        <form id="modal-order-form" onsubmit="handleModalSubmit(event, '${product.name}', '${product.category}')">
          <div class="form-group">
            <label>Select Size / Dimension</label>
            <select class="form-control" id="opt-size">${sizes}</select>
          </div>
          <div class="form-group">
            <label>Select Material / Finish</label>
            <select class="form-control" id="opt-material">${materials}</select>
          </div>
          <div class="form-group">
            <label>Select Quantity</label>
            <select class="form-control" id="opt-qty">${quantities}</select>
          </div>
          <div class="form-group">
            <label>Specific Customization Requirement</label>
            <textarea class="form-control" id="opt-req" rows="2" placeholder="e.g., Print company logo, specific text..."></textarea>
          </div>
          <button type="submit" class="btn-primary" style="width: 100%;">Order on WhatsApp</button>
        </form>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

function closeModal() {
  document.getElementById("product-modal").classList.remove("active");
}

// Compile Dynamic WhatsApp Order Link
function handleModalSubmit(e, productName, category) {
  e.preventDefault();
  const size = document.getElementById("opt-size").value;
  const material = document.getElementById("opt-material").value;
  const qty = document.getElementById("opt-qty").value;
  const req = document.getElementById("opt-req").value || "None specified";

  const message = `Hello VELQOSS, I am interested in:\n\n*Product:* ${productName}\n*Category:* ${category}\n*Size:* ${size}\n*Material:* ${material}\n*Quantity:* ${qty}\n*Requirement:* ${req}\n\nPlease provide me with details and final quote.`;

  window.open(`https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`, "_blank");
}

function directWhatsAppOrder(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const message = `Hello VELQOSS, I am interested in ordering:\n\n*Product:* ${product.name}\n*Category:* ${product.category}\n*Starting Price:* ${product.priceLabel}\n\nPlease guide me through the custom requirement submission.`;
  window.open(`https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`, "_blank");
}

function openGeneralWhatsApp() {
  window.open(`https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(CONFIG.whatsapp.defaultGreeting)}`, "_blank");
}

// Handle Custom Quote Submission
function handleCustomQuoteSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("cq-name").value;
  const phone = document.getElementById("cq-phone").value;
  const req = document.getElementById("cq-req").value;

  const message = `Hello VELQOSS, I need a Custom Order Quote:\n\n*Customer Name:* ${name}\n*Contact Number:* ${phone}\n*Custom Requirement Details:* ${req}\n\nNote: Design reference photos ready to send in chat.`;

  window.open(`https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`, "_blank");
}

// Render Gallery Elements
function renderGallery(filterCategory = 'all') {
  const container = document.getElementById("gallery-grid");
  if (!container) return;

  const filtered = filterCategory === 'all' ? GALLERY_DATA : GALLERY_DATA.filter(g => g.category === filterCategory);

  container.innerHTML = filtered.map(g => `
    <div class="product-card">
      <img src="${g.image}" alt="${g.title}" class="product-thumb" style="height: 240px;">
      <div class="product-body" style="padding: 12px;">
        <h4 style="font-size: 0.95rem;">${g.title}</h4>
      </div>
    </div>
  `).join("");
}

// Attach Event Handlers
function setupEventListeners() {
  // Mobile Navigation Toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  if (hamburger) {
    hamburger.addEventListener("click", () => navLinks.classList.toggle("active"));
  }

  // Catalogue Category Filters
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      filterCatalogue();
    });
  });

  // Category Card Navigation Filter
  window.selectCategory = function(catName) {
    const targetBtn = document.querySelector(`.filter-btn[data-cat="${catName}"]`);
    if (targetBtn) {
      filterBtns.forEach(b => b.classList.remove("active"));
      targetBtn.classList.add("active");
      filterCatalogue();
      document.getElementById("catalogue").scrollIntoView({ behavior: 'smooth' });
    }
  };
}
