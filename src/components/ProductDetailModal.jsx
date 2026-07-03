import { FiX, FiStar, FiShoppingCart } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import { formatRupiah } from './ProductCard'
import '../styles/modal.css'

export default function ProductDetailModal({ product, onClose }) {
  const { addItem } = useCart()

  if (!product) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Tutup detail produk">
          <FiX />
        </button>
        <div className="product-modal__image">
          <img src={product.gambar} alt={product.nama} />
        </div>
        <div className="product-modal__info">
          <span className="product-card__category">{product.kategori}</span>
          <h2>{product.nama}</h2>
          <div className="product-modal__rating">
            <FiStar /> {product.rating} / 5.0
          </div>
          <p>{product.deskripsi}</p>
          <div className="product-card__price">
            <strong>{formatRupiah(product.harga)}</strong>
            {product.diskon > 0 && <s>{formatRupiah(product.hargaAsli)}</s>}
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              addItem(product)
              onClose()
            }}
          >
            <FiShoppingCart /> Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  )
}
