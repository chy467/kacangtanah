/**
 * PriceService
 * Untuk handle API data harga produk digital
 */
const PriceService = (() => {
    // Test Database (Mock)
    const _mockDatabase = [];

    const _mapData = (raw) => raw.map(item => ({
        code: item[0],
        description: item[1],
        price: parseInt(item[2]),
        type: item[3],
        status: item[4]
    }));

    const API_URL = '/api/pricelist'; 
    
    const API_CONFIG = {
        headers: {
            'Content-Type': 'application/json',
            //'X-API-KEY': 'oksdfuHSy85452522', 
            // 'Authorization': 'Bearer your_token' // Jika menggunakan Bearer Token
        }
    };

    /**
     * Data Mapper: Mengubah format mentah dari API 
     * menjadi format yang konsisten untuk UI kita.
     */
    const _mapToViewModel = (rawItems) => {
        return rawItems.map(item => ({
            // Format: UI property <- API property
            code: item.kodeProduk,
            description: item.namaProduk,
            price: parseInt(item.hargaJual),
            type: item.jenisProduk, // 'Prepaid' atau 'Postpaid'
            status: item.gangguan
        }));
    };

    return {
        /**
         * Mengambil daftar harga dari server
         * @returns {Promise<Array>}
         */
        async fetchPrices() {
        /*  if (!_mockDatabase || _mockDatabase.length === 0 ) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(_mapData(_mockDatabase));
                }, 800);
            }); */
            try {
                const response = await fetch(API_URL, {
                    method: 'GET',
                    ...API_CONFIG
                });
                
                if (!response.ok) {
                  console.log('none')
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }

                const data = await response.json();
                
                const items = Array.isArray(data) ? data : data.data;
                
                return _mapToViewModel(items);

            } catch (error) {
                console.error("PriceService Error:", error.message);                
                return [];
                
            }
        }
    };
})();
