import { FiZap, FiShoppingCart } from 'react-icons/fi'
import { flashSaleProducts } from '../data/products'
import { useCountdown } from '../hooks/useCountdown'
import { useCart } from '../context/CartContext'
import { formatRupiah } from './ProductCard'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/flash-sale.css'

export default function FlashSale() {
  const { hours, minutes, seconds } = useCountdown(3 * 3600 + 24 * 60 + 15)
  const { addItem } = useCart()
  const gridRef = useScrollReveal()

  return (
    <section id="promo" className="section flash-sale">
      <div className="container">
        <div className="flash-sale__header">
          <div>
            <span className="section-eyebrow flash-sale__eyebrow">
              <FiZap /> Flash Sale
            </span>
            <h2 className="section-title">Diskon Kilat Hari Ini</h2>
            <p className="section-subtitle">Buruan sebelum promo berakhir dan stok habis!</p>
          </div>
          <div className="flash-sale__timer" aria-label="Waktu tersisa flash sale">
            <div className="flash-sale__timer-box">
              <span>{hours}</span>
              <small>Jam</small>
            </div>
            <span className="flash-sale__colon">:</span>
            <div className="flash-sale__timer-box">
              <span>{minutes}</span>
              <small>Menit</small>
            </div>
            <span className="flash-sale__colon">:</span>
            <div className="flash-sale__timer-box">
              <span>{seconds}</span>
              <small>Detik</small>
            </div>
          </div>
        </div>

        <div className="flash-sale__grid" ref={gridRef}>
          {flashSaleProducts.map((product) => (
            <div key={product.id} className="flash-card fade-up">
              <div className="flash-card__image">
                <img src={product.gambar} alt={product.nama} loading="lazy" />
                <span className="badge badge-discount flash-card__badge">
                  -{product.diskon}%
                </span>
              </div>
              <div className="flash-card__body">
                <h3>{product.nama}</h3>
                <div className="product-card__price">
                  <strong>{formatRupiah(product.harga)}</strong>
                  <s>{formatRupiah(product.hargaAsli)}</s>
                </div>
                <button className="btn btn-primary" onClick={() => addItem(product)}>
                  <FiShoppingCart /> Tambah
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
