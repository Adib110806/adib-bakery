import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CartDrawer from '../components/CartDrawer'
import ScrollToTopButton from '../components/ScrollToTopButton'

export default function MainLayout({ children }) {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <Navbar onCartClick={() => setCartOpen(true)} />
      <main>{children}</main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <ScrollToTopButton />
    </>
  )
}
