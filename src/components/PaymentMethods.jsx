import { FiSmartphone, FiCreditCard, FiCheckCircle } from 'react-icons/fi'
import qrisPlaceholder from '../assets/images/qris-placeholder.svg'
import '../styles/payment-methods.css'

const steps = [
  'Pilih produk dan tambahkan ke keranjang',
  'Buka Keranjang lalu klik Checkout Sekarang',
  'Scan kode QRIS menggunakan e-wallet atau m-banking',
  'Klik Bayar lalu tunggu konfirmasi pesanan',
]

export default function PaymentMethods() {
  return (
    <section id="cara-pembayaran" className="section payment-methods">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">
            <FiCreditCard /> Cara Pembayaran
          </span>
          <h2 className="section-title">Mudah &amp; Aman dengan QRIS</h2>
          <p className="section-subtitle">
            Adib Bakery menerima pembayaran melalui QRIS agar transaksi Anda lebih cepat
            dan aman.
          </p>
        </div>

        <div className="payment-methods__grid payment-methods__grid--single">
          <div className="payment-method-card">
            <div className="payment-method-card__icon">
              <FiSmartphone />
            </div>
            <h3>QRIS</h3>
            <p>Scan kode QRIS menggunakan aplikasi e-wallet atau m-banking favorit Anda.</p>
          </div>
        </div>

        <div className="payment-steps">
          <h3 className="payment-steps__title">Langkah Checkout</h3>
          <ol className="payment-steps__list">
            {steps.map((step, i) => (
              <li key={i}>
                <FiCheckCircle />
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
