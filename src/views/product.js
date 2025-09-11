// App.js (atau HomePage.js)

"use client"

import { useState } from "react"
import ProductCatalog from "../components/ProductCatalog"
import Cart from "../components/Cart"
import BookingForm from "../components/BookingForm"
import "./product.css"
import Navbar8 from "../components/navbar8"
import ProductCard from "../components/ProductCard"
import Detail from "../components/productDetail"

export default function Product() { 
     const [cartItems, setCartItems] = useState([])
     const [isCartOpen, setIsCartOpen] = useState(false)
     const [isBookingFormOpen, setIsBookingFormOpen] = useState(false)
     const [SelectProduct, setSelectProduct] = useState(null)

     const handleAddToCart = (product, quantity, days) => {
         setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id)
            if (existingItem) {
              return prevItems.map((item) =>
                   item.id === product.id
                       ? { ...item, quantity: item.quantity + quantity, days: days }
                       : item
              )
            } else {
              return [...prevItems, { ...product, quantity, days }]
            }
         })
         setIsCartOpen(true)
     }

    if (SelectProduct) {
        return (
          <div>
            <Detail productId={SelectProduct.id.toString()} product={SelectProduct} onAddToCart={handleAddToCart} onSelectProduct={setSelectProduct} />
          </div>
        )
    }
     const handleUpdateItem = (id, newQuantity, newDays) => {
         if (newQuantity < 1) newQuantity = 1
         if (newDays < 1) newDays = 1

         setCartItems((prevItems) =>
            prevItems.map((item) =>
              item.id === id ? { ...item, quantity: newQuantity, days: newDays } : item
            )
         )
     }
     const handleRemoveItem = (id) => {
         setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
     }

     const handleBooking = () => {
         setIsCartOpen(false)
         setIsBookingFormOpen(true)
     }

     const handleBookingSubmit = (bookingData) => {
         console.log("Booking Dikonfirmasi:", bookingData)
         alert("Booking Anda telah dikonfirmasi! Cek console untuk detail.")
         setCartItems([])
         setIsBookingFormOpen(false)
     }

     const calculateTotalPrice = () => {
         return cartItems.reduce(
            (total, item) => total + item.price * item.quantity * item.days,
            0
         )
     }

     return (
         <div>
              <div className="cart-icon" onClick={() => setIsCartOpen(true)}>
                   <span>🛒</span>
                   <span className="cart-count">{cartItems.length}</span>
              </div>
            <Navbar8/>

            <ProductCatalog onAddToCart={handleAddToCart}  onSelectProduct={setSelectProduct}/>

            {isCartOpen && (
              <Cart
                   items={cartItems}
                   onUpdateItem={handleUpdateItem}
                   onRemoveItem={handleRemoveItem}
                   totalPrice={calculateTotalPrice()}
                   onClose={() => setIsCartOpen(false)}
                   onBooking={handleBooking}
              />
            )}

            {isBookingFormOpen && (
              <BookingForm
                   cartItems={cartItems}
                   totalPrice={calculateTotalPrice()}
                   onSubmit={handleBookingSubmit}
                   onClose={() => setIsBookingFormOpen(false)}
              />
            )}
         </div>
     )
}