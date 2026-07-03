import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiUpload, FiCreditCard, FiCheckCircle, FiArrowLeft } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import { formatRupiah } from '../components/ProductCard'
import qrisPlaceholder from '../assets/images/QRIS-AdibBakery.png'
import '../styles/checkout.css'

export default function Checkout() {
  const { items, totalPrice, totalItems, clearCart } = useCart()
  const { showToast } = useToast()
  const navigate = useNavigate()
  const fileInputRef = useRef(null)

  const [qrisImage, setQrisImage] = useState(null)
  const [showPopup, setShowPopup] = useState(false)

  // Pastikan halaman checkout selalu dimulai dari paling atas
  // sehingga QRIS langsung terlihat tanpa perlu scroll manual.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  const ongkosKirim = items.length > 0 ? 10000 : 0
  const grandTotal = totalPrice + ongkosKirim

  const handleUploadQris = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setQrisImage(reader.result)
    reader.readAsDataURL(file)
  }

  const handleBayar = (e) => {
    e.preventDefault()

    if (items.length === 0) {
      showToast('Keranjang masih kosong.', 'error')
      return
    }

    setShowPopup(true)
  }

  const handleSelesai = () => {
    setShowPopup(false)
    clearCart()
    navigate('/')
    showToast('Pesanan berhasil dibuat, terima kasih!', 'success')
  }

  return (
    <div className="checkout-page section">
      <div className="container">
        <button className="checkout-back" onClick={() => navigate('/')}>
          <FiArrowLeft /> Kembali Belanja
        </button>

        <div className="section-heading">
          <span className="section-eyebrow">
            <FiCreditCard /> Checkout
          </span>
          <h2 className="section-title">Pembayaran QRIS</h2>
          <p className="section-subtitle">
            Adib Bakery hanya menerima pembayaran melalui QRIS untuk kemudahan dan keamanan
            transaksi Anda.
          </p>
        </div>

        <div className="checkout-grid">
          <form className="checkout-form" onSubmit={handleBayar}>
            <div className="qris-box">
              <h4>QRIS Pembayaran</h4>
              <div className="qris-box__image" onClick={() => fileInputRef.current?.click()}>
                <img src={qrisImage || qrisPlaceholder} alt="QRIS Pembayaran" />
              </div>
            </div>

            <div className="checkout-total-row">
              <span>Total Pembayaran</span>
              <strong>{formatRupiah(grandTotal)}</strong>
            </div>

            <button type="submit" className="btn btn-primary checkout-pay-btn">
              Bayar
            </button>
          </form>

          <aside className="checkout-summary">
            <h3>Ringkasan Belanja</h3>
            {items.length === 0 ? (
              <p className="cart-drawer__empty">Keranjang masih kosong.</p>
            ) : (
              <div className="checkout-summary__items">
                {items.map((item) => (
                  <div key={item.id} className="checkout-summary__item">
                    <img src={item.gambar} alt={item.nama} />
                    <div>
                      <strong>{item.nama}</strong>
                      <span>
                        {item.qty} x {formatRupiah(item.harga)}
                      </span>
                    </div>
                    <b>{formatRupiah(item.harga * item.qty)}</b>
                  </div>
                ))}
              </div>
            )}

            <div className="checkout-summary__row">
              <span>Total Item</span>
              <span>{totalItems}</span>
            </div>
            <div className="checkout-summary__row">
              <span>Subtotal</span>
              <span>{formatRupiah(totalPrice)}</span>
            </div>
            <div className="checkout-summary__row">
              <span>Ongkos Kirim</span>
              <span>{formatRupiah(ongkosKirim)}</span>
            </div>
            <div className="checkout-summary__row checkout-summary__row--total">
              <span>Total Pembayaran</span>
              <span>{formatRupiah(grandTotal)}</span>
            </div>
          </aside>
        </div>
      </div>

      {showPopup && (
        <div className="modal-overlay" onClick={() => setShowPopup(false)}>
          <div className="modal-box qris-popup" onClick={(e) => e.stopPropagation()}>
            <FiCheckCircle className="qris-popup__icon" />
            <h3>Silakan scan QRIS untuk menyelesaikan pembayaran.</h3>
            <p>Setelah pembayaran berhasil, pesanan Anda akan segera kami proses.</p>
            <button className="btn btn-primary" onClick={handleSelesai}>
              Selesai
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
