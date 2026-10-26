// ==========================================
// ⚠️ PENGATURAN PENTING (SUDAH DIISI OTOMATIS)
// ==========================================

// Nomor WhatsApp Admin
export const NOMOR_WA = "6282279073719"; 

// Link Gambar QRIS
export const URL_QRIS = "https://cdn.phototourl.com/member/2026-10-26-90591836-c725-42bc-9b87-05e37274733e.jpg"; 


// ==========================================
// DAFTAR PRODUK PANEL
// ==========================================
// Keterangan:
// - hargaAsli: Harga normal (WAJIB DIISI)
// - hargaDiskon: Harga setelah diskon (Isi null jika TIDAK ada diskon)
// - teksDiskon: Tulisan label (Isi null jika TIDAK ada diskon)

export const panelPterodactyl = [
  { nama: "Panel Pterodactyl 1GB",  hargaAsli: 1000,  hargaDiskon: 800,  teksDiskon: "DISKON 20%" },
  { nama: "Panel Pterodactyl 2GB",  hargaAsli: 2000,  hargaDiskon: 1500, teksDiskon: "PROMO" },
  { nama: "Panel Pterodactyl 3GB",  hargaAsli: 3000,  hargaDiskon: null, teksDiskon: null },
  { nama: "Panel Pterodactyl 4GB",  hargaAsli: 4000,  hargaDiskon: 3500, teksDiskon: "DISKON" },
  { nama: "Panel Pterodactyl 5GB",  hargaAsli: 5000,  hargaDiskon: null, teksDiskon: null },
  { nama: "Panel Pterodactyl Unlimited", hargaAsli: 5000, hargaDiskon: 8000, teksDiskon: "DISKON PENGGUNA BARU" },
];


// ==========================================
// DAFTAR PRODUK SEWA BOT
// ==========================================

export const sewaBot = [
  { nama: "Sewa Bot 1 Hari",  hargaAsli: 1000,  hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 2 Hari",  hargaAsli: 2000,  hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 3 Hari",  hargaAsli: 3000,  hargaDiskon: 2500, teksDiskon: "HEMAT" },
  { nama: "Sewa Bot 4 Hari",  hargaAsli: 4000,  hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 5 Hari",  hargaAsli: 5000,  hargaDiskon: 4000, teksDiskon: "PROMO" },
  { nama: "Sewa Bot 6 Hari",  hargaAsli: 6000,  hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 7 Hari (1 Minggu)",  hargaAsli: 7000,  hargaDiskon: 6000, teksDiskon: "DISKON" },
  { nama: "Sewa Bot 8 Hari",  hargaAsli: 8000,  hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 9 Hari",  hargaAsli: 9000,  hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 10 Hari", hargaAsli: 10000, hargaDiskon: 8500, teksDiskon: "DISKON 15%" },
  { nama: "Sewa Bot 11 Hari", hargaAsli: 11000, hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 12 Hari", hargaAsli: 12000, hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 13 Hari", hargaAsli: 13000, hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 14 Hari (2 Minggu)", hargaAsli: 14000, hargaDiskon: 12000, teksDiskon: "PROMO" },
  { nama: "Sewa Bot 15 Hari", hargaAsli: 15000, hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 16 Hari", hargaAsli: 16000, hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 17 Hari", hargaAsli: 17000, hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 18 Hari", hargaAsli: 18000, hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 19 Hari", hargaAsli: 19000, hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 20 Hari", hargaAsli: 20000, hargaDiskon: 18000, teksDiskon: "DISKON 10%" },
  { nama: "Sewa Bot 21 Hari (3 Minggu)", hargaAsli: 21000, hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 22 Hari", hargaAsli: 22000, hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 23 Hari", hargaAsli: 23000, hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 24 Hari", hargaAsli: 24000, hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 25 Hari", hargaAsli: 25000, hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 26 Hari", hargaAsli: 26000, hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 27 Hari", hargaAsli: 27000, hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 28 Hari (4 Minggu)", hargaAsli: 28000, hargaDiskon: 25000, teksDiskon: "DISKON" },
  { nama: "Sewa Bot 29 Hari", hargaAsli: 29000, hargaDiskon: null, teksDiskon: null },
  { nama: "Sewa Bot 30 Hari (1 Bulan)", hargaAsli: 30000, hargaDiskon: 20000, teksDiskon: "DISKON PENGGUNA BARU" },
];


// ==========================================
// FUNGSI BANTUAN
// ==========================================

// Helper bikin link WhatsApp dengan pesan otomatis
export function linkWA(pesan) {
  return `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`;
}
