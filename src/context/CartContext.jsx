import { createContext, useContext, useMemo } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useToast } from './ToastContext'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage('adib_bakery_cart', [])
  const { showToast } = useToast()

  const addItem = (product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((it) => it.id === product.id)
      if (existing) {
        return prev.map((it) =>
          it.id === product.id ? { ...it, qty: it.qty + qty } : it
        )
      }
      return [...prev, { ...product, qty }]
    })
    showToast(`${product.nama} ditambahkan ke keranjang`, 'success')
  }

  const removeItem = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id))
  }

  const updateQty = (id, qty) => {
    if (qty < 1) return
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty } : it)))
  }

  const clearCart = () => setItems([])

  const totalItems = useMemo(() => items.reduce((sum, it) => sum + it.qty, 0), [items])
  const totalPrice = useMemo(
    () => items.reduce((sum, it) => sum + it.harga * it.qty, 0),
    [items]
  )

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQty, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart harus digunakan di dalam CartProvider')
  return ctx
}
