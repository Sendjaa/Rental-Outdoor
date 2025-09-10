"use client"

import { useState } from "react"
import "./ProductCard.css"
import products from "../data/products"

export default function ProductCard({ product, onAddToCart ,onSelectProduct}) {
  const [quantity, setQuantity] = useState(1)
  const [days, setDays] = useState(1)

  const handleAddToCart = () => {
    onAddToCart(product, quantity, days)
    setQuantity(1)
    setDays(1)
  }

const truncateDescription = (text, wordLimit) => {
  if (!text) return '';
  const words = text.split(' ');
  if (words.length <= wordLimit) {
    return text;
  }
  return words.slice(5, wordLimit).join(' ') + '...';
};


  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="product-card" onClick={() => onSelectProduct(product) }>
      <div className="product-image">
        <img src={product.image || "/placeholder.svg"} alt={product.name} />
        <div className="category-badge">{product.category}</div>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{truncateDescription(product.description)}</p>

        <div className="price-section">
          <span className="price">{formatPrice(product.price)}</span>
          <span className="price-unit">/hari</span>
        </div>
        {/* <div className="rental-controls">
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Keranjang
        </button>
        </div> */}
      </div>
    </div>
  )
}
