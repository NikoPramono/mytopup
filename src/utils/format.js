// src/utils/format.js

/**
 * Mengubah angka menjadi format mata uang Rupiah (Rp) tanpa desimal.
 * @param {number} amount - Jumlah uang.
 * @returns {string} Format mata uang (e.g., "Rp 10.000").
 */
export function formatCurrency(amount) {
  if (typeof amount !== 'number' || isNaN(amount)) {
    amount = 0;
  }
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Mengubah ISO string menjadi format tanggal dan waktu yang lengkap.
 * @param {string} iso - ISO date string.
 * @returns {string} Tanggal dan waktu lokal (e.g., "05 Desember 2025, 12.50").
 */
export function formatDateISO(iso) {
  if (!iso) return "Tanggal tidak tersedia";
  const d = new Date(iso);
  if (isNaN(d)) return "Tanggal tidak tersedia";
  return d.toLocaleString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * Mengubah ISO string menjadi format tanggal saja (tanpa waktu).
 * BARU: Ditambahkan untuk kegunaan yang lebih sederhana.
 * @param {string} iso - ISO date string.
 * @returns {string} Tanggal lokal (e.g., "05 Desember 2025").
 */
export function formatDate(iso) {
  if (!iso) return "Tanggal tidak tersedia";
  const d = new Date(iso);
  if (isNaN(d)) return "Tanggal tidak tersedia";
  return d.toLocaleString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}


/**
 * Menghitung dan mengembalikan durasi waktu sejak tanggal yang diberikan.
 * @param {string} iso - ISO date string.
 * @returns {string} Durasi waktu (e.g., "10 menit lalu").
 */
export function timeAgo(iso) {
  if (!iso) return "";
  const now = Date.now();
  const then = new Date(iso).getTime();
  if (isNaN(then)) return "";
  const sec = Math.floor((now - then) / 1000);
  if (sec < 60) return `${sec} detik lalu`;
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min} menit lalu`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr} jam lalu`;
  const day = Math.floor(hr / 24);
  return `${day} hari lalu`;
}

// --- FUNGSI TAMBAHAN UNTUK MANAJEMEN DATA ---

/**
 * Menghapus pesanan spesifik dari Local Storage berdasarkan ID.
 * @param {string | number} id - ID pesanan yang akan dihapus.
 * @returns {boolean} True jika pesanan berhasil dihapus, false jika tidak ditemukan.
 */
export function deleteOrder(id) {
    const orderId = String(id);
    const stored = JSON.parse(localStorage.getItem("orders") || "[]");
    
    const initialLength = stored.length;
    
    // Filter array, simpan hanya pesanan yang ID-nya TIDAK cocok
    const newStored = stored.filter(o => String(o.id) !== orderId);
    
    if (newStored.length < initialLength) {
        localStorage.setItem("orders", JSON.stringify(newStored));
        return true;
    }
    return false;
}