import { FiCoffee } from 'react-icons/fi'
import ProductCard from './ProductCard'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/product-section.css'

export default function ProductSection({ id, eyebrow, title, subtitle, products, onDetail, emptyText }) {
  const gridRef = useScrollReveal()

  return (
    <section id={id} className="section product-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">
            <FiCoffee /> {eyebrow}
          </span>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>

        {products.length > 0 ? (
          <div className="product-grid" ref={gridRef}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onDetail={onDetail} />
            ))}
          </div>
        ) : (
          <p className="product-section__empty">{emptyText || 'Produk tidak ditemukan.'}</p>
        )}
      </div>
    </section>
  )
}
