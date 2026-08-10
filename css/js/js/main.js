// Fungsi booking test drive
function submitBooking(event) {
    event.preventDefault();
    
    // Reset error messages
    document.querySelectorAll('.error').forEach(el => el.style.display = 'none');
    
    // Validasi
    let isValid = true;
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const model = document.getElementById('model').value;
    const tanggal = document.getElementById('tanggal').value;
    
    if (!nama) {
        document.getElementById('nama-error').textContent = 'Nama harus diisi';
        document.getElementById('nama-error').style.display = 'block';
        isValid = false;
    }
    
    if (!email) {
        document.getElementById('email-error').textContent = 'Email harus diisi';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('email-error').textContent = 'Format email tidak valid';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    }
    
    if (!model) {
        document.getElementById('model-error').textContent = 'Pilih model mobil';
        document.getElementById('model-error').style.display = 'block';
        isValid = false;
    }
    
    if (!tanggal) {
        document.getElementById('tanggal-error').textContent = 'Pilih tanggal test drive';
        document.getElementById('tanggal-error').style.display = 'block';
        isValid = false;
    } else {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDate = new Date(tanggal);
        if (selectedDate < today) {
            document.getElementById('tanggal-error').textContent = 'Tanggal tidak boleh di masa lalu';
            document.getElementById('tanggal-error').style.display = 'block';
            isValid = false;
        }
    }
    
    if (isValid) {
        alert(`Terima kasih ${nama}!\nBooking test drive untuk ${model} pada tanggal ${tanggal} telah diterima.\nKami akan menghubungi Anda melalui email ${email}.`);
        event.target.reset();
    }
}

// Set minimum date untuk input tanggal
function setMinDate() {
    const dateInput = document.getElementById('tanggal');
    if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        dateInput.min = `${yyyy}-${mm}-${dd}`;
    }
}

// Populate model select option
function populateModelSelect() {
    const select = document.getElementById('model');
    if (select) {
        mobilListrik.forEach(mobil => {
            const option = document.createElement('option');
            option.value = mobil.nama;
            option.textContent = `${mobil.nama} (${mobil.merek})`;
            select.appendChild(option);
        });
    }
}

// Inisialisasi saat DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    setMinDate();
    populateModelSelect();
    
    // Tambahkan event listener untuk form booking
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', submitBooking);
    }
});
