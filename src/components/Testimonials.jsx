import { FaStar } from 'react-icons/fa'
import { FiMessageCircle } from 'react-icons/fi'
import { testimonials } from '../data/testimonials'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLocalStorage } from '../hooks/useLocalStorage'
import ReviewForm from './ReviewForm'
import '../styles/testimonials.css'

// Warna latar untuk avatar inisial ulasan baru (tanpa foto upload)
const avatarColors = ['#E8873A', '#C96A24', '#6F4326', '#4C8B53', '#C2452D', '#C98A3E']

function getInitials(nama) {
  const parts = nama.trim().split(/\s+/)
  const initials = parts.slice(0, 2).map((p) => p[0]?.toUpperCase() || '')
  return initials.join('') || '?'
}

function getAvatarColor(nama) {
  let hash = 0
  for (let i = 0; i < nama.length; i++) {
    hash = nama.charCodeAt(i) + ((hash << 5) - hash)
  }
  return avatarColors[Math.abs(hash) % avatarColors.length]
}

export default function Testimonials() {
  const gridRef = useScrollReveal()
  const [userReviews, setUserReviews] = useLocalStorage('adib_bakery_reviews', [])

  const handleAddReview = (review) => {
    setUserReviews((prev) => [review, ...prev])
  }

  const allTestimonials = [...userReviews, ...testimonials]

  return (
    <section id="testimoni" className="section testimonials">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">
            <FiMessageCircle /> Testimoni
          </span>
          <h2 className="section-title">Apa Kata Pelanggan Kami</h2>
          <p className="section-subtitle">
            Kepuasan pelanggan adalah prioritas utama kami di setiap gigitan.
          </p>
        </div>

        <div className="testimonials__grid" ref={gridRef}>
          {allTestimonials.map((t) => (
            <div key={t.id} className="testimonial-card fade-up">
              {t.isBaru && <span className="testimonial-card__badge">Ulasan Baru</span>}
              <div className="testimonial-card__stars" aria-label={`Rating ${t.rating} dari 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className={i < t.rating ? 'is-filled' : 'is-empty'} />
                ))}
                <span className="testimonial-card__rating-number">{t.rating}.0</span>
              </div>
              <p className="testimonial-card__comment">&ldquo;{t.komentar}&rdquo;</p>
              <div className="testimonial-card__footer">
                {t.foto ? (
                  <img src={t.foto} alt={t.nama} />
                ) : (
                  <span
                    className="testimonial-card__avatar-fallback"
                    style={{ background: getAvatarColor(t.nama) }}
                  >
                    {getInitials(t.nama)}
                  </span>
                )}
                <div>
                  <strong>{t.nama}</strong>
                  <span>{t.tanggal}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ReviewForm onAddReview={handleAddReview} />
      </div>
    </section>
  )
}
