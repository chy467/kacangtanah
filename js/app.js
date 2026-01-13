/**
 * Aplikasi utama (percobaan ku pakai Alpine.js peratama kali)
 */
function landingPage() {
    return {
        content: CONTENT_DATA,
        prices: [],        
        updates: [],
        isLoading: true,
        searchQuery: '',
        activeTab: 'All',
        
        async init() {
            try {
                const [priceData, updateData] = await Promise.all([
                    PriceService.fetchPrices(),
                    this.fetchUpdates()
                ]);
                this.updates = await updateData;
                //this.prices = await priceData;
                this.prices = await PriceService.fetchPrices();

                // render icon lucidone setelah data dimuat
                this.$nextTick(() => {
                    lucide.createIcons(); 
                });
            } catch (err) {
                console.error("Gagal memuat harga:", err);
            } finally {
                this.isLoading = false;
            }
        },

        // Filter pencarian harga
                get filteredPrices() {
                    const q = this.searchQuery.trim().toLowerCase();

                    return this.prices.filter(item => {
                        const type = item.type || '';
                        const code = (item.code || '').toLowerCase();
                        const desc = (item.description || '').toLowerCase();

                        const matchesTab = this.activeTab === type || this.activeTab === 'All';
                        const matchesSearch = !q || code.includes(q) || desc.includes(q); 

                        return matchesTab && matchesSearch;
                    });
                },

        async fetchUpdates() {
            const response = await fetch('./content/updates.json');
            if (!response.ok) return [];
            return await response.json();
        },

        formatIDR(val) {
            return new Intl.NumberFormat('id-ID').format(val);
        }
    };
}
// Inisialisasi Alpine.js