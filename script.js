let products = [];
const list = document.getElementById("productList");

let activePin = "all";
let searchText = "";

function renderProducts(items) {
  list.innerHTML = "";

  if (items.length === 0) {
    list.innerHTML = "<p>Sonuç bulunamadı.</p>";
    return;
  }

  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}" 
           onerror="this.onerror=null;this.src='images/no-image.png';">
      <h3>${product.name}</h3>
      <span>${product.code}</span>
    `;

    card.onclick = () => {
      window.location.href = "product.html?id=" + product.id;
    };

    list.appendChild(card);
  });
}

/* 🔥 TÜM FİLTRELERİ BİRLEŞTİREN ANA FONKSİYON */
function applyFilters() {
  let filtered = products;

  // Pin filtresi
  if (activePin !== "all") {
    filtered = filtered.filter(p => p.pins === activePin);
  }

  // Arama filtresi
  if (searchText !== "") {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(searchText) ||
      p.code.toLowerCase().includes(searchText)
    );
  }

  renderProducts(filtered);
}

/* PIN */
window.filterByPin = function (pin) {
  activePin = pin;
  applyFilters();
};

/* ARAMA */
window.searchProducts = function () {
  searchText = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  applyFilters();
};

/* İlk yükleme */
fetch("/api/products")
  .then(res => res.json())
  .then(data => {
    products = data;
    renderProducts(products);
  });
