// Data dummy 6 mobil listrik
const mobilListrik = [
    {
        id: 1,
        nama: "Tesla Model 3 Standard",
        merek: "Tesla",
        harga: 1500000000,
        jarakTempuh: 495,
        dayaBaterai: "57.5 kWh",
        penggerak: "Rear-Wheel Drive",
        akselerasi: "5.8 detik (0-100 km/jam)",
        kecepatanMax: "225 km/jam",
        gambar: [
            "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1619767886558-efdc7b9ae5db?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1617704548623-340376564e68?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1625505826533-5c80aca7d4d6?w=300&h=200&fit=crop"
        ],
        featured: true
    },
    {
        id: 2,
        nama: "Hyundai IONIQ 5 Long Range",
        merek: "Hyundai",
        harga: 750000000,
        jarakTempuh: 481,
        dayaBaterai: "72.6 kWh",
        penggerak: "Rear-Wheel Drive",
        akselerasi: "7.4 detik (0-100 km/jam)",
        kecepatanMax: "185 km/jam",
        gambar: [
            "https://images.unsplash.com/photo-1652509525608-6b44097ea5d2?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1652783785703-7c4060e2a3ad?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1652783785703-7c4060e2a3ad?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1652509525608-6b44097ea5d2?w=300&h=200&fit=crop"
        ],
        featured: true
    },
    {
        id: 3,
        nama: "Wuling Air ev Long Range",
        merek: "Wuling",
        harga: 275000000,
        jarakTempuh: 300,
        dayaBaterai: "26.7 kWh",
        penggerak: "Rear-Wheel Drive",
        akselerasi: "15 detik (0-100 km/jam)",
        kecepatanMax: "100 km/jam",
        gambar: [
            "https://images.unsplash.com/photo-1669146605701-0b6b7f30ab62?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1669146605701-0b6b7f30ab62?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1669146605701-0b6b7f30ab62?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1669146605701-0b6b7f30ab62?w=300&h=200&fit=crop"
        ],
        featured: true
    },
    {
        id: 4,
        nama: "Toyota bZ4X",
        merek: "Toyota",
        harga: 1150000000,
        jarakTempuh: 500,
        dayaBaterai: "71.4 kWh",
        penggerak: "All-Wheel Drive",
        akselerasi: "6.9 detik (0-100 km/jam)",
        kecepatanMax: "160 km/jam",
        gambar: [
            "https://images.unsplash.com/photo-1652832920996-0a8e12be2727?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1652832920996-0a8e12be2727?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1652832920996-0a8e12be2727?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1652832920996-0a8e12be2727?w=300&h=200&fit=crop"
        ],
        featured: false
    },
    {
        id: 5,
        nama: "BMW i4 eDrive40",
        merek: "BMW",
        harga: 1850000000,
        jarakTempuh: 590,
        dayaBaterai: "83.9 kWh",
        penggerak: "Rear-Wheel Drive",
        akselerasi: "5.7 detik (0-100 km/jam)",
        kecepatanMax: "190 km/jam",
        gambar: [
            "https://images.unsplash.com/photo-1652204721999-123b1e7f4a00?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1652204721999-123b1e7f4a00?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1652204721999-123b1e7f4a00?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1652204721999-123b1e7f4a00?w=300&h=200&fit=crop"
        ],
        featured: false
    },
    {
        id: 6,
        nama: "Nissan Leaf",
        merek: "Nissan",
        harga: 650000000,
        jarakTempuh: 385,
        dayaBaterai: "40 kWh",
        penggerak: "Front-Wheel Drive",
        akselerasi: "7.9 detik (0-100 km/jam)",
        kecepatanMax: "144 km/jam",
        gambar: [
            "https://images.unsplash.com/photo-1638353949221-cb5e81ad9b40?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1638353949221-cb5e81ad9b40?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1638353949221-cb5e81ad9b40?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1638353949221-cb5e81ad9b40?w=300&h=200&fit=crop"
        ],
        featured: false
    }
];

// Format harga ke Rupiah
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(angka);
}
