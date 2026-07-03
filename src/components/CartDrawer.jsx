import { useNavigate } from 'react-router-dom'
import { FiX, FiPlus, FiMinus, FiTrash2, FiShoppingBag } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import { formatRupiah } from './ProductCard'
import '../styles/cart-drawer.css'

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQty, totalItems, totalPrice } = useCart()
  const navigate = useNavigate()

  const handleCheckout = () => {
    onClose()
    navigate('/checkout')
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }

  return (
    <>
      <div className={`cart-drawer__overlay ${open ? 'is-open' : ''}`} onClick={onClose} />
      <aside className={`cart-drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="cart-drawer__header">
          <h3>
            <FiShoppingBag /> Keranjang Belanja ({totalItems})
          </h3>
          <button onClick={onClose} aria-label="Tutup keranjang">
            <FiX />
          </button>
        </div>

        <div className="cart-drawer__body">
          {items.length === 0 ? (
            <p className="cart-drawer__empty">Keranjang Anda masih kosong. Yuk pilih roti favorit!</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.gambar} alt={item.nama} />
                <div className="cart-item__info">
                  <strong>{item.nama}</strong>
                  <span>{formatRupiah(item.harga)}</span>
                  <div className="cart-item__qty">
                    <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Kurangi jumlah">
                      <FiMinus />
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Tambah jumlah">
                      <FiPlus />
                    </button>
                  </div>
                </div>
                <button
                  className="cart-item__remove"
                  onClick={() => removeItem(item.id)}
                  aria-label={`Hapus ${item.nama}`}
                >
                  <FiTrash2 />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__summary">
              <span>Total Item</span>
              <strong>{totalItems}</strong>
            </div>
            <div className="cart-drawer__summary">
              <span>Total Harga</span>
              <strong>{formatRupiah(totalPrice)}</strong>
            </div>
            <button className="btn btn-primary cart-drawer__checkout" onClick={handleCheckout}>
              Checkout Sekarang
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
