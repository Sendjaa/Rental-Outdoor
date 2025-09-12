"use client"

import { useState } from "react"
import ProductCard from "./ProductCard"
import "./ProductCatalog.css"
import products from "../data/products"
import "./productDetail.css"

const categories = ["Semua", "Tenda", "Sleeping Gear", "Tas", "Peralatan Masak", "Penerangan", "Sepatu", "Pakaian"]

export default function ProductCatalog({ onAddToCart, onSelectProduct }) {
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

      <div className="catalog-header" >
        <h2>Katalog Produk Rental</h2>
        <p className="catalog-subtitle">Pilih peralatan outdoor terbaik untuk petualangan Anda</p>
      </div>
      
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart} 
          onSelectProduct={onSelectProduct} />
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
