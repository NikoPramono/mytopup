// --- Data Fiktif untuk Simulasi Admin Dashboard ---

// Data Kunci Kinerja (KPIs)
export const kpiData = {
    totalSales: 45, // Total Penjualan Hari Ini
    totalRevenue: 12500, // Total Pendapatan
    pendingOrders: 12, // Pesanan Menunggu Proses
    registeredUsers: 1240, // Pengguna Terdaftar
};

// Array untuk nama bulan dalam Bahasa Indonesia (singkat)
const INDONESIAN_MONTHS = [
    'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 
    'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
];

/**
 * Fungsi untuk menghasilkan data chart simulasi untuk N hari terakhir.
 * @param {number} days - Jumlah hari yang akan dimasukkan dalam grafik (7, 30, atau 90).
 * @returns {Array<{name: string, sales: number}>} Data grafik.
 */
export const generateChartData = (days) => {
    const data = [];
    const today = new Date();
    
    // Faktor skala untuk menyesuaikan angka penjualan agar tampak masuk akal untuk periode yang lebih panjang
    let scaleFactor;
    if (days === 90) {
        scaleFactor = 1.5;
    } else if (days === 30) {
        scaleFactor = 1.2;
    } else {
        scaleFactor = 1.0;
    }

    for (let i = days - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        
        const day = date.getDate();
        const monthIndex = date.getMonth(); 
        const monthName = INDONESIAN_MONTHS[monthIndex];
        
        // Formatnya adalah "Bln Tgl" (e.g., Des 10)
        const formattedDate = `${monthName} ${day}`; 
        
        // Menghasilkan nilai penjualan acak yang diskalakan
        const randomBase = Math.floor(Math.random() * 400 + 100); 
        let salesValue = randomBase * scaleFactor;
        
        data.push({
            name: formattedDate,
            sales: Math.round(salesValue)
        });
    }
    return data;
};

// Default data untuk tampilan awal (7 hari)
export const chartData = generateChartData(7);