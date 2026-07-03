import { useMemo, useState } from 'react'
import { FiGrid } from 'react-icons/fi'
import Header from '../components/Header'
import SlideBanner from '../components/SlideBanner'
import FlashSale from '../components/FlashSale'
import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'
import ProductSection from '../components/ProductSection'
import ProductDetailModal from '../components/ProductDetailModal'
import Testimonials from '../components/Testimonials'
import PaymentMethods from '../components/PaymentMethods'
import AboutUs from '../components/AboutUs'
import ContactSection from '../components/ContactSection'
import { products, bestSellerProducts, unggulanProducts } from '../data/products'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/home.css'

export default function Home() {
  const [search, setSearch] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return products
    return products.filter((p) => p.nama.toLowerCase().includes(q))
  }, [search])

  const gridRef = useScrollReveal([filteredProducts.length])

  return (
    <>
      <Header />

      <section className="section slide-banner-section">
        <div className="container">
          <SlideBanner />
        </div>
      </section>

      <FlashSale />

      <section id="produk" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">
              <FiGrid /> Semua Produk
            </span>
            <h2 className="section-title">Jelajahi Produk Kami</h2>
            <p className="section-subtitle">
              Temukan roti, cake, pastry, dan donat favorit Anda dengan mudah.
            </p>
          </div>

          <SearchBar value={search} onChange={setSearch} />

          {filteredProducts.length > 0 ? (
            <div className="product-grid" ref={gridRef}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onDetail={setSelectedProduct} />
              ))}
            </div>
          ) : (
            <p className="product-section__empty">
              Produk &ldquo;{search}&rdquo; tidak ditemukan. Coba kata kunci lain.
            </p>
          )}
        </div>
      </section>

      <ProductSection
        id="best-seller"
        eyebrow="Best Seller"
        title="Produk Best Seller"
        subtitle="Paling banyak dipesan dan disukai pelanggan setia kami."
        products={bestSellerProducts}
        onDetail={setSelectedProduct}
      />

      <ProductSection
        id="produk-unggulan"
        eyebrow="Pilihan Terbaik"
        title="Produk Unggulan"
        subtitle="Rekomendasi spesial dari Adib Bakery untuk Anda coba."
        products={unggulanProducts}
        onDetail={setSelectedProduct}
      />

      <Testimonials />

      <PaymentMethods />

      <AboutUs />

      <ContactSection />

      <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  )
}
