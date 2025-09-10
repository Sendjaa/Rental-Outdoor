import React, { useState } from 'react';
import './product.css';

// Komponen Card produk
const ProductCard = ({ product }) => (
  <div className="product-card">
  
    <img
      src={product.imageUrl}
      alt={product.name}
      className="product-image"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/400x300/e5e7eb/6b7280?text=Gambar+Tidak+Tersedia";
      }}
    />
    <div className="p-6">
      <h3 className="product-title">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <div className="product-footer">
        <span className="product-price">{product.price}</span>
      </div>
    </div>
  </div>
);

const categories = [
  'Semua',
  'Tenda',
  'Tas Carrier',
  'Kompor',
  'Sleeping Bag',
  'Matras',
  'Jas Hujan'
];

const products = [
  // Tenda
  {
    id: 1,
    name: 'Tenda Dome 4-6 Orang',
    category: 'Tenda',
    description: 'Tenda dome kapasitas 4-6 orang, ringan dan mudah dipasang.',
    price: 'Rp 50.000/hari',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1669047668443-4789192d329c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Tenda Kapasitas 2 Orang',
    category: 'Tenda',
    description: 'Tenda ringan untuk 2 orang, cocok untuk hiking singkat.',
    price: 'Rp 35.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Tenda Family',
    category: 'Tenda',
    description: 'Tenda keluarga, ruang luas dan ventilasi baik.',
    price: 'Rp 70.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Tenda Waterproof',
    category: 'Tenda',
    description: 'Tenda anti air, cocok untuk musim hujan.',
    price: 'Rp 60.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Tenda Ultra Ringan',
    category: 'Tenda',
    description: 'Tenda super ringan, mudah dibawa untuk solo hiking.',
    price: 'Rp 40.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Tenda Kapasitas 8 Orang',
    category: 'Tenda',
    description: 'Tenda besar untuk rombongan, tahan hujan dan angin.',
    price: 'Rp 80.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
  },

  // Tas Carrier
  {
    id: 7,
    name: 'Carrier 60L',
    category: 'Tas Carrier',
    description: 'Tas carrier 60L, waterproof dan bantalan punggung nyaman.',
    price: 'Rp 30.000/hari',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyIwkev5rcbKjncY44tMQQh9QXzYldsz0k6g&s',
  },
  {
    id: 8,
    name: 'Carrier 80L',
    category: 'Tas Carrier',
    description: 'Tas carrier besar untuk ekspedisi panjang.',
    price: 'Rp 40.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    name: 'Daypack 25L',
    category: 'Tas Carrier',
    description: 'Tas daypack ringan untuk perjalanan singkat.',
    price: 'Rp 15.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1514474959185-147d077df3b9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10,
    name: 'Tas Lipat',
    category: 'Tas Carrier',
    description: 'Tas lipat praktis, mudah disimpan.',
    price: 'Rp 10.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 11,
    name: 'Tas Gunung 40L',
    category: 'Tas Carrier',
    description: 'Tas gunung kapasitas sedang, cocok untuk hiking.',
    price: 'Rp 25.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 12,
    name: 'Tas Pinggang',
    category: 'Tas Carrier',
    description: 'Tas pinggang multifungsi untuk barang kecil.',
    price: 'Rp 8.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?auto=format&fit=crop&w=800&q=80',
  },

  // Kompor
  {
    id: 13,
    name: 'Kompor Portable',
    category: 'Kompor',
    description: 'Kompor gas portable mini, efisien dan mudah dibawa.',
    price: 'Rp 15.000/hari',
    imageUrl: 'https://antarestar.com/wp-content/uploads/2022/07/KOMPOR-WINDPROOF.png',
  },
  {
    id: 14,
    name: 'Kompor Lipat',
    category: 'Kompor',
    description: 'Kompor lipat, hemat tempat di tas.',
    price: 'Rp 12.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 15,
    name: 'Kompor 2 Tungku',
    category: 'Kompor',
    description: 'Kompor dua tungku untuk masak lebih cepat.',
    price: 'Rp 20.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 16,
    name: 'Kompor Mini',
    category: 'Kompor',
    description: 'Kompor mini, cocok untuk solo camping.',
    price: 'Rp 10.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 17,
    name: 'Kompor Windproof',
    category: 'Kompor',
    description: 'Kompor tahan angin, api tetap stabil.',
    price: 'Rp 18.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 18,
    name: 'Kompor Camping Set',
    category: 'Kompor',
    description: 'Paket kompor dan alat masak camping.',
    price: 'Rp 25.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
  },

  // Sleeping Bag
  {
    id: 19,
    name: 'Sleeping Bag Standar',
    category: 'Sleeping Bag',
    description: 'Sleeping bag hangat dan nyaman.',
    price: 'Rp 20.000/hari',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIx3U-DXD3dFzxCzymiL_7EyqttIBdvl7dg&s',
  },
  {
    id: 20,
    name: 'Sleeping Bag Tebal',
    category: 'Sleeping Bag',
    description: 'Sleeping bag ekstra tebal untuk suhu dingin.',
    price: 'Rp 25.000/hari',
    imageUrl: 'https://m.media-amazon.com/images/I/718rEgdI53L._UF1000,1000_QL80_.jpg',
  },
  {
    id: 21,
    name: 'Sleeping Bag Anak',
    category: 'Sleeping Bag',
    description: 'Sleeping bag ukuran anak-anak, motif lucu.',
    price: 'Rp 15.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 22,
    name: 'Sleeping Bag Waterproof',
    category: 'Sleeping Bag',
    description: 'Sleeping bag anti air, tetap kering saat hujan.',
    price: 'Rp 23.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1514474959185-147d077df3b9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 23,
    name: 'Sleeping Bag Ultra Light',
    category: 'Sleeping Bag',
    description: 'Sleeping bag super ringan, mudah dibawa.',
    price: 'Rp 18.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 24,
    name: 'Sleeping Bag Double',
    category: 'Sleeping Bag',
    description: 'Sleeping bag untuk dua orang, cocok pasangan.',
    price: 'Rp 30.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
  },

  // Matras
  {
    id: 25,
    name: 'Matras Gulung',
    category: 'Matras',
    description: 'Matras gulung ringan dan mudah dibawa.',
    price: 'Rp 8.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 26,
    name: 'Matras Aluminium',
    category: 'Matras',
    description: 'Matras dengan lapisan aluminium, tahan dingin.',
    price: 'Rp 12.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 27,
    name: 'Matras Lipat',
    category: 'Matras',
    description: 'Matras lipat praktis untuk camping.',
    price: 'Rp 10.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1514474959185-147d077df3b9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 28,
    name: 'Matras Double',
    category: 'Matras',
    description: 'Matras ukuran besar untuk 2 orang.',
    price: 'Rp 15.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 29,
    name: 'Matras Angin',
    category: 'Matras',
    description: 'Matras angin, empuk dan nyaman.',
    price: 'Rp 18.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 30,
    name: 'Matras Camping',
    category: 'Matras',
    description: 'Matras khusus camping, tahan air dan mudah dibersihkan.',
    price: 'Rp 14.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  },

  // Jas Hujan
  {
    id: 31,
    name: 'Jas Hujan Setelan',
    category: 'Jas Hujan',
    description: 'Jas hujan setelan celana dan jaket, anti bocor.',
    price: 'Rp 10.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 32,
    name: 'Jas Hujan Ponco',
    category: 'Jas Hujan',
    description: 'Jas hujan model ponco, bisa untuk 2 orang.',
    price: 'Rp 12.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 33,
    name: 'Jas Hujan Transparan',
    category: 'Jas Hujan',
    description: 'Jas hujan transparan, ringan dan stylish.',
    price: 'Rp 8.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 34,
    name: 'Jas Hujan Anak',
    category: 'Jas Hujan',
    description: 'Jas hujan ukuran anak-anak, motif lucu.',
    price: 'Rp 7.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 35,
    name: 'Jas Hujan Premium',
    category: 'Jas Hujan',
    description: 'Jas hujan bahan tebal, tahan lama.',
    price: 'Rp 15.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1514474959185-147d077df3b9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 36,
    name: 'Jas Hujan Mantel',
    category: 'Jas Hujan',
    description: 'Jas hujan model mantel, panjang dan menutup seluruh tubuh.',
    price: 'Rp 13.000/hari',
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
  },
];

// Fungsi untuk ambil 1 produk dari setiap kategori (untuk kategori "Semua")
function getSampleProductsPerCategory(products, categories) {
  return categories
    .filter(cat => cat !== 'Semua')
    .map(cat => products.find(p => p.category === cat))
    .filter(Boolean);
}

// Komponen utama
const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredProducts =
    selectedCategory === 'Semua'
      ? getSampleProductsPerCategory(products, categories)
      : products.filter(p => p.category === selectedCategory);

  return (
    <div className="container">
      <div className="header-section">
        <h1 className="main-heading">
          Produk Rental
        </h1>
        <p className="sub-heading">
          Temukan perlengkapan petualangan outdoor terbaik kami.
        </p>
        
        {/* Kategori */}
        <div style={{ margin: '2rem 0 1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-btn${selectedCategory === cat ? ' active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.5rem 1.2rem',
                borderRadius: '999px',
                border: selectedCategory === cat ? '2px solid var(--dl-color-theme-primary2)' : '1px solid #d1d5db',
                background: selectedCategory === cat ? 'var(--dl-color-theme-primary2)' : '#fff',
                color: selectedCategory === cat ? '#fff' : '#1f2937',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', color: '#6b7280' }}>
            Tidak ada produk di kategori ini.
          </div>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Product;
