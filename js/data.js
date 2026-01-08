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
    ]
};