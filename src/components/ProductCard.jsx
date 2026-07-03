import { FiStar, FiShoppingCart, FiEye } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import '../styles/product-card.css'

function formatRupiah(value) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value)
}

export default function ProductCard({ product, onDetail }) {
  const { addItem } = useCart()

  return (
    <div className="product-card fade-up">
      <div className="product-card__image-wrap">
        <img src={product.gambar} alt={product.nama} loading="lazy" />
        {product.diskon > 0 && (
          <span className="badge badge-discount product-card__badge">-{product.diskon}%</span>
        )}
        <span className="badge badge-rating product-card__rating">
          <FiStar /> {product.rating}
        </span>
      </div>
      <div className="product-card__body">
        <span className="product-card__category">{product.kategori}</span>
        <h3 className="product-card__title">{product.nama}</h3>
        <p className="product-card__desc">{product.deskripsi}</p>
        <div className="product-card__price">
          <strong>{formatRupiah(product.harga)}</strong>
          {product.diskon > 0 && <s>{formatRupiah(product.hargaAsli)}</s>}
        </div>
        <div className="product-card__actions">
          <button className="btn btn-outline-dark" onClick={() => onDetail(product)}>
            <FiEye /> Detail
          </button>
          <button className="btn btn-primary" onClick={() => addItem(product)}>
            <FiShoppingCart /> Tambah
          </button>
        </div>
      </div>
    </div>
  )
}

export { formatRupiah }
