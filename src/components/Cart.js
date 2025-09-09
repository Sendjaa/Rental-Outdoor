import "./Cart.css"

export default function Cart({ items, onUpdateItem, onRemoveItem, totalPrice, onClose, onBooking }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  if (items.length === 0) {
    return (
      <div className="cart-overlay">
        <div className="cart-modal">
          <div className="cart-header">
            <h3>Keranjang Rental</h3>
            <button className="close-btn" onClick={onClose}>
              ×
            </button>
          </div>
          <div className="empty-cart">
            <p>Keranjang Anda kosong</p>
            <button className="continue-shopping" onClick={onClose}>
              Lanjut Belanja
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <div className="cart-header">
          <h3>Keranjang Rental</h3>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="item-image" />

              <div className="item-details">
                <h4>{item.name}</h4>
                <p className="item-category">{item.category}</p>
                <p className="item-price">{formatPrice(item.price)}/hari</p>
              </div>

              <div className="item-controls">
                <div className="control-row">
                  <label>Jumlah:</label>
                  <div className="quantity-controls">
                    <button onClick={() => onUpdateItem(item.id, item.quantity - 1, item.days)} className="qty-btn">
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button onClick={() => onUpdateItem(item.id, item.quantity + 1, item.days)} className="qty-btn">
                      +
                    </button>
                  </div>
                </div>

                <div className="control-row">
                  <label>Hari:</label>
                  <div className="quantity-controls">
                    <button onClick={() => onUpdateItem(item.id, item.quantity, item.days - 1)} className="qty-btn">
                      -
                    </button>
                    <span className="quantity">{item.days}</span>
                    <button onClick={() => onUpdateItem(item.id, item.quantity, item.days + 1)} className="qty-btn">
                      +
                    </button>
                  </div>
                </div>

                <div className="item-total">{formatPrice(item.price * item.quantity * item.days)}</div>

                <button className="remove-btn" onClick={() => onRemoveItem(item.id)}>
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="total-section">
            <h3>Total: {formatPrice(totalPrice)}</h3>
          </div>

          <div className="cart-actions">
            <button className="continue-shopping" onClick={onClose}>
              Lanjut Belanja
            </button>
            <button className="checkout-btn" onClick={onBooking}>
              Booking Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
