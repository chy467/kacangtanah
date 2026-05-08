/**
 * Data content statis untuk aplikasi dan kemudahan edit
 */
const CONTENT_DATA = {
    hero: {
        title: "Kami selesaikan masalah bisnis dengan teknologi.",
        subtitle: "Platform pembayaran digital tercepat, termurah, dan teraman untuk kebutuhan transaksi harianmu."
    },
    about: {
        description: "Biru Digital adalah mitra terpercaya bagi ribuan agen di seluruh Indonesia. Kami menghadirkan sistem otomasi yang memudahkan akses layanan perbankan dan tagihan.",
        strengths: [
            { icon: 'shield-check', title: 'Aman & Legal', text: 'Terdaftar resmi dengan sistem enkripsi data terkini.' },
            { icon: 'clock', title: '24/7 Otomatis', text: 'Transaksi tengah malam tetap lancar tanpa hambatan.' },
            { icon: 'zap', title: 'Proses Instan', text: 'Detik itu transaksi, detik itu juga sukses terkirim.' },
            { icon: 'smile', title: 'CS Responsif', text: 'Dukungan bantuan manusia, bukan sekadar bot otomatis.' }
        ]
    },
    services: [
        { icon: 'smartphone', name: 'Pulsa Seluler' },
        { icon: 'wifi', name: 'Paket Data' },
        { icon: 'plug', name: 'Token PLN' },
        { icon: 'tv', name: 'TV Berbayar' },
        { icon: 'wallet', name: 'E-Wallet' },
        { icon: 'gamepad-2', name: 'Voucher Game' },
        { icon: 'droplet', name: 'Tagihan PDAM' },
        { icon: 'heart-pulse', name: 'BPJS' }
    ],
    flow: [
        { title: 'Daftar Akun', desc: 'Download aplikasi atau daftar via WhatsApp CS kami secara gratis.' },
        { title: 'Topup Saldo', desc: 'Isi saldo via Bank Transfer, E-wallet, atau Alfamart/Indomaret.' },
        { title: 'Mulai Transaksi', desc: 'Gunakan saldo untuk beli produk atau bayar tagihan pelangganmu.' }
    ],
    howTo: [
        { title: 'Transaksi Isi ulang : ', accFormat: '<Kode_Produk>.<Tujuan>.<Pin>', desc: ['Contoh: 5.081234567890.1234'] },
        { title: 'Transaksi 2x Ke Tujuan Sama : ', accFormat: '<Kode_Produk>.<Tujuan>.2.<Pin>', desc: ['Contoh: 5.081234567890.2.1234'] },
        { title: 'Transaksi Multi (Lebih Dari 1 Nomor Max 3)', accFormat: '<Kode_Produk>.<Tujuan>.<Kode_Produk>.<Tujuan>.<Pin>', desc: ['Contoh: 5.081234567890.10.081234567891.1234'] },
        { title: "Cek Saldo / Deposit", accFormat: "S.<Pin>", desc: ["Contoh: S.1234"] },
        { title: "Format Ganti PIN", accFormat: "PIN.<PIN_Baru>.<PIN_Lama>", desc: ["Contoh: PIN.5678.1234"] },
        { title: "Cek Harga Per Nominal", accFormat: "H.<Kode_Produk>", desc: ["Contoh: H.S5"] },
        { title: "Cek Harga Berdasarkan Prefik Kode Produk", accFormat: "HRGALL.<Awalan_Kode_Produk>", desc: ["Contoh: HRGALL.S"] },
        { title: "TAMBAH NO Handphone Transaksi (Paralel)", accFormat: "PAR.<Nomer_baru>.<Pin>", desc: ["Contoh: PAR.081234567890.1234"] },
        { title: "Ganti Nomer Handphone Transksi", accFormat: "GHP.<Nomer_lama>.<Nomer_baru>.<Pin>", desc: ["Contoh: GANTI.081234567891.081234567890.1234"] },
        { title: "Daftar Member Baru (Kemitraan - Downline)", accFormat: "DAFTAR.<Nama_Mitra_Baru>.<Alamat_Mitra_Baru>.<No_Handphone_Mitra_Baru>.<Pin Anda>", desc: ["Contoh: DAFTAR.Joko.Surabaya.081234567890.1234"] },
        { title: "Kirim / Tarik deposit ke agen mitra / downline", accFormat: "TF.<Kode_Mitra atau Nomer_Mitra>.<Nominal>.<Pin>", desc: ["Nominal Positif untuk menambah deposit, Contoh: TF.081234567891.100000.1234","Nominal Negatif untuk mengurangi deposit agen, Contoh: TF.081234567891.-50000"] },
        { title: "Mengatur selisih harga dengan agen (MarkUp Harga, min Rp 25 max Rp 200)", accFormat: "MARKUP.<Kode_Mitra atau Nomer_Mitra>.<Jumlah_Markup>.<Pin>", desc: ["Contoh: MARKUP.081234567891.50.1234"] },
        { title: "Cek saldo mitra", accFormat: "SRS.<Kode_Mitra atau Nomer_Mitra>.<Pin>", desc: ["Contoh: SRS.081234567891.1234"] },
        { title: "Melihat daftar mitra yang sudah anda daftarkan", accFormat: "LDL", desc: ["Anda Cukup mengirim pesan LDL ke nomer SMS / Whatsapp Center kami"]},
        { title: "Melihat total markup yang sudah terkumpul", accFormat: "KOMISI.<Pin>", desc: ["Contoh: KOMISI.1234"] },
        { title: "Tukar total markup (komisi) menjadi saldo", accFormat: "TUKAR.<Pin>", desc: ["Nominal Komisi atau total markup belum bisa dipakai transaksi atau kirim saldo ke agen sebelum adan menukarnya menjadi saldo anda. Contoh: TUKAR.1234"] },
        { title: "Merubah status keagenan mitra", accFormat: "<LOCK / UNLOCK>.<Nomer_Mitra atau Kode_Mitra>.<Pin>", desc: ["Untuk menonaktifkan gunakan format LOCK. Contoh: LOCK.081234567891.1234","Untuk mengaktifkan kembali gunakan format UNLOCK. Contoh: UNLOCK.081234567891.1234"] }
    ]
};