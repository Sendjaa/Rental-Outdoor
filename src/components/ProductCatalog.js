"use client"

import { useState } from "react"
import ProductCard from "./ProductCard"
import "./ProductCatalog.css"

const products = [
  {
    id: 1,
    name: "Tenda Dome 4 Orang",
    category: "Tenda",
    price: 50000,
    image: "/camping-tent-outdoor.jpg",
    description: "Tenda berkualitas tinggi untuk 4 orang, tahan air dan mudah dipasang",
  },
  {
    id: 2,
    name: "Sleeping Bag Premium",
    category: "Sleeping Gear",
    price: 30000,
    image: "/sleeping-bag-camping.jpg",
    description: "Sleeping bag hangat dan nyaman untuk cuaca dingin",
  },
  {
    id: 3,
    name: "Backpack 60L",
    category: "Tas",
    price: 40000,
    image: "/hiking-backpack-outdoor.jpg",
    description: "Tas gunung kapasitas 60L dengan sistem ventilasi punggung",
  },
  {
    id: 4,
    name: "Kompor Portable",
    category: "Peralatan Masak",
    price: 25000,
    image: "/portable-camping-stove.png",
    description: "Kompor portable ringan dengan efisiensi bahan bakar tinggi",
  },
  {
    id: 5,
    name: "Headlamp LED",
    category: "Penerangan",
    price: 15000,
    image: "/led-headlamp-outdoor.jpg",
    description: "Headlamp LED super terang dengan baterai tahan lama",
  },
  {
    id: 6,
    name: "Matras Lipat",
    category: "Sleeping Gear",
    price: 20000,
    image: "/placeholder-jap8o.png",
    description: "Matras lipat empuk dan ringan untuk kenyamanan tidur",
  },
  {
    id: 7,
    name: "Sepatu Hiking",
    category: "Sepatu",
    price: 60000,
    image: "/placeholder-sksac.png",
    description: "Sepatu hiking tahan air dengan grip maksimal",
  },
  {
    id: 8,
    name: "Jaket Windbreaker",
    category: "Pakaian",
    price: 45000,
    image: "/windbreaker-jacket-outdoor.jpg",
    description: "Jaket anti angin dan air untuk cuaca ekstrem",
  },
]

const categories = ["Semua", "Tenda", "Sleeping Gear", "Tas", "Peralatan Masak", "Penerangan", "Sepatu", "Pakaian"]

export default function ProductCatalog({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "Semua" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="product-catalog">

      <div className="filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Cari produk..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="catalog-header">
        <h2>Katalog Produk Rental</h2>
        <p className="catalog-subtitle">Pilih peralatan outdoor terbaik untuk petualangan Anda</p>
      </div>
      
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>

      {filteredProducts.length === 0 && ( 
        <div className="no-products">
          <p>Tidak ada produk yang ditemukan</p>
        </div>
      )}
    </div>
  )
}
