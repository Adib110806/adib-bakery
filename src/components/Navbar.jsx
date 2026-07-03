import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMenu, FiX, FiShoppingCart, FiLogOut, FiLogIn, FiChevronDown } from 'react-icons/fi'
import logo from '../assets/images/logo.svg'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import '../styles/navbar.css'

const primaryLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Produk', href: '#produk' },
  { label: 'Promo', href: '#promo' },
  { label: 'Best Seller', href: '#best-seller' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Kontak', href: '#kontak' },
]

const moreLinks = [
  { label: 'Produk Unggulan', href: '#produk-unggulan' },
  { label: 'Cara Pembayaran', href: '#cara-pembayaran' },
  { label: 'Tentang Kami', href: '#tentang-kami' },
]

export default function Navbar({ onCartClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const { isLoggedIn, logout } = useAuth()
  const { totalItems } = useCart()
  const navigate = useNavigate()
  const moreRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false)
      }
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [])

  const handleLinkClick = () => {
    setMenuOpen(false)
    setMoreOpen(false)
  }

  const handleAuthClick = () => {
    if (isLoggedIn) {
      logout()
    }
    navigate('/login')
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#beranda" className="navbar__brand" onClick={handleLinkClick}>
          <img src={logo} alt="Logo Adib Bakery" />
          <span>Adib Bakery</span>
        </a>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {primaryLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}

          <div className="navbar__more" ref={moreRef}>
            <button
              type="button"
              className={`navbar__more-toggle ${moreOpen ? 'is-open' : ''}`}
              onClick={() => setMoreOpen((o) => !o)}
            >
              Lainnya <FiChevronDown />
            </button>
            <div className={`navbar__more-menu ${moreOpen ? 'is-open' : ''}`}>
              {moreLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={handleLinkClick}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="navbar__mobile-actions">
            <button className="btn btn-secondary" onClick={handleAuthClick}>
              {isLoggedIn ? <FiLogOut /> : <FiLogIn />}
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
          </div>
        </nav>

        <div className="navbar__actions">
          <button
            className="navbar__cart"
            onClick={onCartClick}
            aria-label="Buka keranjang belanja"
          >
            <FiShoppingCart />
            {totalItems > 0 && <span className="navbar__cart-badge">{totalItems}</span>}
          </button>
          <button className="btn btn-secondary navbar__auth-btn" onClick={handleAuthClick}>
            {isLoggedIn ? <FiLogOut /> : <FiLogIn />}
            <span>{isLoggedIn ? 'Logout' : 'Login'}</span>
          </button>
          <button
            className="navbar__toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Buka menu navigasi"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}
