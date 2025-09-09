"use client"

import { useState } from "react"
import "./BookingForm.css"
import { generateWhatsappMessage } from "../utils/whatsapp"

export default function BookingForm({ cartItems, totalPrice, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    noHp: "",
    alamat: "",
    tanggalMulai: "",
    tanggalSelesai: "",
    catatan: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.nama.trim()) {
      newErrors.nama = "Nama wajib diisi"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid"
    }

    if (!formData.noHp.trim()) {
      newErrors.noHp = "Nomor HP wajib diisi"
    } else if (!/^[0-9+\-\s()]+$/.test(formData.noHp)) {
      newErrors.noHp = "Format nomor HP tidak valid"
    }

    if (!formData.alamat.trim()) {
      newErrors.alamat = "Alamat wajib diisi"
    }

    if (!formData.tanggalMulai) {
      newErrors.tanggalMulai = "Tanggal mulai wajib diisi"
    }

    if (!formData.tanggalSelesai) {
      newErrors.tanggalSelesai = "Tanggal selesai wajib diisi"
    }

    if (formData.tanggalMulai && formData.tanggalSelesai) {
      if (new Date(formData.tanggalSelesai) <= new Date(formData.tanggalMulai)) {
        newErrors.tanggalSelesai = "Tanggal selesai harus setelah tanggal mulai"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      const bookingData ={
        ...formData,
        cartItems,
        totalPrice,
      }


      if (onsubmit) onSubmit(bookingData)

      const whatsappMessage = generateWhatsappMessage(bookingData)
      const whatsappUrl = `https://wa.me/6289509162484?text=${encodeURIComponent(whatsappMessage)}`
      window.open(whatsappUrl, "_blank")
    }
  }


  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split("T")[0]
  }

  return (
    <div className="booking-overlay">
      <div className="booking-modal">
        <div className="booking-header">
          <h3>Form Booking</h3>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="booking-content">
          <div className="booking-summary">
            <h4>Ringkasan Pesanan</h4>
            <div className="summary-items">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <span>{item.name}</span>
                  <span>
                    {item.quantity}x untuk {item.days} hari
                  </span>
                  <span>{formatPrice(item.price * item.quantity * item.days)}</span>
                </div>
              ))}
            </div>
            <div className="summary-total">
              <strong>Total: {formatPrice(totalPrice)}</strong>
            </div>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nama">Nama Lengkap *</label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                className={errors.nama ? "error" : ""}
                placeholder="Masukkan nama lengkap"
              />
              {errors.nama && <span className="error-message">{errors.nama}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
                placeholder="contoh@email.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="noHp">Nomor HP *</label>
              <input
                type="tel"
                id="noHp"
                name="noHp"
                value={formData.noHp}
                onChange={handleChange}
                className={errors.noHp ? "error" : ""}
                placeholder="08xxxxxxxxxx"
              />
              {errors.noHp && <span className="error-message">{errors.noHp}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="alamat">Alamat Lengkap *</label>
              <textarea
                id="alamat"
                name="alamat"
                value={formData.alamat}
                onChange={handleChange}
                className={errors.alamat ? "error" : ""}
                placeholder="Masukkan alamat lengkap"
                rows="3"
              />
              {errors.alamat && <span className="error-message">{errors.alamat}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="tanggalMulai">Tanggal Mulai *</label>
                <input
                  type="date"
                  id="tanggalMulai"
                  name="tanggalMulai"
                  value={formData.tanggalMulai}
                  onChange={handleChange}
                  className={errors.tanggalMulai ? "error" : ""}
                  min={getTodayDate()}
                />
                {errors.tanggalMulai && <span className="error-message">{errors.tanggalMulai}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="tanggalSelesai">Tanggal Selesai *</label>
                <input
                  type="date"
                  id="tanggalSelesai"
                  name="tanggalSelesai"
                  value={formData.tanggalSelesai}
                  onChange={handleChange}
                  className={errors.tanggalSelesai ? "error" : ""}
                  min={formData.tanggalMulai || getTodayDate()}
                />
                {errors.tanggalSelesai && <span className="error-message">{errors.tanggalSelesai}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="catatan">Catatan Tambahan</label>
              <textarea
                id="catatan"
                name="catatan"
                value={formData.catatan}
                onChange={handleChange}
                placeholder="Catatan khusus atau permintaan tambahan (opsional)"
                rows="3"
              />
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={onClose}>
                Batal
              </button>
              <button type="submit" className="submit-btn">
                Konfirmasi Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
