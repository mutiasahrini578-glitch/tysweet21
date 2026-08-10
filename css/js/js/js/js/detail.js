document.addEventListener('DOMContentLoaded', () => {
    // Ambil ID dari URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const mobilId = parseInt(urlParams.get('id'));
    
    const mobil = mobilListrik.find(m => m.id === mobilId);
    
    if (!mobil) {
        document.getElementById('detail-content').innerHTML = '<p style="text-align:center;padding:3rem;">Mobil tidak ditemukan.</p>';
        return;
    }
    
    // Set judul halaman
    document.title = `${mobil.nama} - EV Hub`;
    
    // Render detail
    const detailContent = document.getElementById('detail-content');
    detailContent.innerHTML = `
        <div class="gallery">
            <img src="${mobil.gambar[0]}" alt="${mobil.nama}" class="gallery-main" id="main-image">
            <div class="gallery-thumbs">
                <img src="${mobil.gambar[1]}" alt="${mobil.nama} 1" onclick="document.getElementById('main-image').src='${mobil.gambar[1]}'">
                <img src="${mobil.gambar[2]}" alt="${mobil.nama} 2" onclick="document.getElementById('main-image').src='${mobil.gambar[2]}'">
                <img src="${mobil.gambar[3]}" alt="${mobil.nama} 3" onclick="document.getElementById('main-image').src='${mobil.gambar[3]}'">
                <img src="${mobil.gambar[0]}" alt="${mobil.nama} 4" onclick="document.getElementById('main-image').src='${mobil.gambar[0]}'">
            </div>
        </div>
        
        <div class="detail-header">
            <div>
                <h1>${mobil.nama}</h1>
                <p style="color:#666;">${mobil.merek}</p>
            </div>
            <div class="detail-price">${formatRupiah(mobil.harga)}</div>
        </div>
        
        <table class="specs-table">
            <tr>
                <td>Jarak Tempuh</td>
                <td>${mobil.jarakTempuh} km</td>
            </tr>
            <tr>
                <td>Daya Baterai</td>
                <td>${mobil.dayaBaterai}</td>
            </tr>
            <tr>
                <td>Penggerak</td>
                <td>${mobil.penggerak}</td>
            </tr>
            <tr>
                <td>Akselerasi</td>
                <td>${mobil.akselerasi}</td>
            </tr>
            <tr>
                <td>Kecepatan Maksimal</td>
                <td>${mobil.kecepatanMax}</td>
            </tr>
        </table>
        
        <div class="cta-section">
            <a href="index.html#booking" class="btn" style="font-size:1.1rem;">Booking Test Drive Sekarang</a>
        </div>
    `;
});
