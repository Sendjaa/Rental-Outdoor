"use client"

import { useState } from "react"
import products from "../data/products"
import "./productDetail.css"

/**
 * @param {{ productId?: string }} props
 */

export default function Detail({ productId } = {}) {
  const id = productId || "1"
  const product = products.find((p) => p.id.toString() === id)

  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [isBooking, setIsBooking] = useState(false)
  const [selectedQuantity, setSelectedQuantity] = useState(1)
  const [selectedDuration, setSelectedDuration] = useState(1)

  if (!product) return <h2 className="not-found">Produk tidak ditemukan</h2>

  const handleAddToCart = async () => {
    setIsAddingToCart(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Produk ditambahkan ke keranjang:", product.name)
    alert(`${product.name} berhasil ditambahkan ke keranjang!`)
    setIsAddingToCart(false)
  }

  const handleBooking = async () => {
    setIsBooking(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Booking produk:", product.name)
    alert(`Booking ${product.name} berhasil! Tim kami akan menghubungi Anda segera.`)
    setIsBooking(false)
  }

  const totalPrice = product.price * selectedQuantity * selectedDuration

  return (
    <div className="ecommerce-container">
      <nav className="breadcrumb">
        <span>Beranda</span> / <span>Produk</span> / <span className="current">{product.name}</span>
      </nav>

      <div className="product-layout">
        <div className="detail-image">
          <div className="main-image">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
            <div className="image-badge">Tersedia</div>
          </div>
          <div className="thumbnail-gallery">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="thumbnail active" />
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="thumbnail" />
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="thumbnail" />
          </div>
        </div>

        <div className="product-details">
          <div className="product-header">
            <h1 className="product-title">{product.name}</h1>
            <div className="rating">
              <div className="stars">★★★★★</div>
              <span className="rating-text">(4.8) • 127 ulasan</span>
            </div>
          </div>

          <div className="price-section">
            <div className="price-main">Rp {product.price.toLocaleString()}</div>
            <div className="price-unit">/hari</div>
          </div>

          <p className="product-description">{product.desc}</p>

          <div className="rental-options">
            <div className="option-group">
              <label className="option-label">Jumlah</label>
              <select
                className="option-select"
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} unit
                  </option>
                ))}
              </select>
            </div>

            <div className="option-group">
              <label className="option-label">Durasi Sewa</label>
              <select
                className="option-select"
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(Number(e.target.value))}
              >
                {[1, 2, 3, 7, 14, 30].map((days) => (
                  <option key={days} value={days}>
                    {days} {days === 1 ? "hari" : "hari"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="total-price">
            <div className="price-breakdown">
              <span>Total: Rp {totalPrice.toLocaleString()}</span>
              <small>
                ({selectedQuantity} unit × {selectedDuration} hari)
              </small>
            </div>
          </div>

          <div className="action-buttons">
            <button
              className={`btn btn-cart ${isAddingToCart ? "loading" : ""}`}
              onClick={handleAddToCart}
              disabled={isAddingToCart || isBooking}
            >
              {isAddingToCart ? "Menambahkan..." : "Tambah ke Keranjang"}
            </button>

            <button
              className={`btn btn-booking ${isBooking ? "loading" : ""}`}
              onClick={handleBooking}
              disabled={isAddingToCart || isBooking}
            >
              {isBooking ? "Memproses..." : "Sewa Sekarang"}
            </button>
          </div>

          <div className="trust-signals">
            <div className="trust-item">
              <span className="trust-icon">🚚</span>
              <span>Gratis pengiriman & penjemputan</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🛡️</span>
              <span>Garansi kerusakan</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">📞</span>
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-specs">
        <h3>Spesifikasi Produk</h3>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Kategori</span>
            <span className="spec-value">Elektronik</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Kondisi</span>
            <span className="spec-value">Sangat Baik</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Tahun</span>
            <span className="spec-value">2023</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Garansi</span>
            <span className="spec-value">Tersedia</span>
          </div>
        </div>
      </div>
    </div>
  )
}
