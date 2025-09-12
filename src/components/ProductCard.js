"use client"

import { useState } from "react"
import "./ProductCard.css"

export default function ProductCard({ product, onAddToCart ,onSelectProduct}) {
  const [quantity, setQuantity] = useState(1)
  const [days, setDays] = useState(1)

  const handleAddToCart = () => {
    onAddToCart(product, quantity, days)
    setQuantity(1)
    setDays(1)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="product-container">
    <div className="product-card" onClick={() => onSelectProduct(product) }>
        <img src={product.image || "/placeholder.svg"} alt={product.name} />
        <div className="category-badge">{product.category}</div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
      </div>

        <div className="price-info">
          <span className="price">{formatPrice(product.price)}</span>
          <span className="price-unit">/hari</span>
        </div>
      </div>
    </div>
  )
}
