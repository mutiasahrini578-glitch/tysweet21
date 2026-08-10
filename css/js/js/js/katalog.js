document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const filterMerek = document.getElementById('filter-merek');
    const filterHarga = document.getElementById('filter-harga');
    const productCount = document.getElementById('product-count');
    
    // Populate filter merek
    const merekSet = [...new Set(mobilListrik.map(m => m.merek))];
    merekSet.forEach(merek => {
        const option = document.createElement('option');
        option.value = merek;
        option.textContent = merek;
        filterMerek.appendChild(option);
    });
    
    // Render produk
    function renderProduk(produkArray) {
        productGrid.innerHTML = '';
        
        if (produkArray.length === 0) {
            productGrid.innerHTML = '<p style="text-align:center;grid-column:1/-1;padding:3rem;">Tidak ada mobil yang sesuai filter.</p>';
            productCount.textContent = '0 mobil ditemukan';
            return;
        }
        
        produkArray.forEach(mobil => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${mobil.gambar[0]}" alt="${mobil.nama}" class="card-img">
                <div class="card-body">
                    <h3>${mobil.nama}</h3>
                    <p class="price">${formatRupiah(mobil.harga)}</p>
                    <p class="range">⚡ ${mobil.jarakTempuh} km</p>
                    <a href="detail.html?id=${mobil.id}" class="btn">Lihat Detail</a>
                </div>
            `;
            productGrid.appendChild(card);
        });
        
        productCount.textContent = `${produkArray.length} mobil ditemukan`;
    }
    
    // Filter produk
    function filterProduk() {
        let filtered = [...mobilListrik];
        
        const merekValue = filterMerek.value;
        const hargaValue = filterHarga.value;
        
        if (merekValue) {
            filtered = filtered.filter(m => m.merek === merekValue);
        }
        
        if (hargaValue === 'low') {
            filtered = filtered.filter(m => m.harga < 500000000);
        } else if (hargaValue === 'mid') {
            filtered = filtered.filter(m => m.harga >= 500000000 && m.harga < 1000000000);
        } else if (hargaValue === 'high') {
            filtered = filtered.filter(m => m.harga >= 1000000000);
        }
        
        renderProduk(filtered);
    }
    
    // Event listeners
    filterMerek.addEventListener('change', filterProduk);
    filterHarga.addEventListener('change', filterProduk);
    
    // Render awal
    renderProduk(mobilListrik);
});
