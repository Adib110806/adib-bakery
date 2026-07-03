import { FiShoppingBag, FiTag, FiChevronDown } from 'react-icons/fi'
import heroImage from '../assets/images/header-web.png'
import '../styles/header.css'

export default function Header() {
  return (
    <section id="beranda" className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="hero__overlay" />
      <div className="container hero__content">
        <span className="hero__eyebrow fade-up is-visible">
          <FiTag /> Toko Roti &amp; Cake Premium
        </span>
        <h1 className="hero__title fade-up is-visible">Selamat Datang di Adib Bakery</h1>
        <p className="hero__subtitle fade-up is-visible">
          Menyediakan roti, cake, pastry, donat dan berbagai makanan manis dengan kualitas
          premium.
        </p>
        <div className="hero__actions fade-up is-visible">
          <a href="#produk" className="btn btn-primary">
            <FiShoppingBag /> Belanja Sekarang
          </a>
          <a href="#promo" className="btn btn-outline">
            <FiTag /> Lihat Promo
          </a>
        </div>
      </div>
      <a href="#produk" className="hero__scroll-hint" aria-label="Gulir ke bawah">
        <FiChevronDown />
      </a>
      <div className="scallop-divider hero__scallop" />
    </section>
  )
}
