import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { useToast } from '../context/ToastContext'

export default function ReviewForm({ onAddReview }) {
  const { showToast } = useToast()
  const [nama, setNama] = useState('')
  const [komentar, setKomentar] = useState('')
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!nama.trim()) {
      setError('Nama wajib diisi.')
      return
    }
    if (rating === 0) {
      setError('Silakan pilih rating bintang terlebih dahulu.')
      return
    }
    if (!komentar.trim()) {
      setError('Ulasan tidak boleh kosong.')
      return
    }

    const tanggal = new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date())

    onAddReview({
      id: `u-${Date.now()}`,
      nama: nama.trim(),
      rating,
      komentar: komentar.trim(),
      tanggal,
      isBaru: true,
    })

    showToast('Terima kasih! Ulasan Anda berhasil ditambahkan.', 'success')

    setNama('')
    setKomentar('')
    setRating(0)
    setHoverRating(0)
  }

  return (
    <div className="review-form-wrapper">
      <h3 className="review-form__title">Tulis Ulasan Anda</h3>
      <p className="review-form__subtitle">
        Sudah pernah mencoba produk kami? Yuk, bagikan pengalaman Anda.
      </p>

      <form className="review-form" onSubmit={handleSubmit} noValidate>
        <label className="review-form__field">
          <span>Nama</span>
          <input
            type="text"
            placeholder="Masukkan nama Anda"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </label>

        <div className="review-form__field">
          <span>Rating</span>
          <div className="review-form__stars" role="radiogroup" aria-label="Pilih rating">
            {Array.from({ length: 5 }).map((_, i) => {
              const starValue = i + 1
              const isFilled = starValue <= (hoverRating || rating)
              return (
                <button
                  type="button"
                  key={starValue}
                  className="review-form__star-btn"
                  role="radio"
                  aria-checked={rating === starValue}
                  aria-label={`${starValue} bintang`}
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHoverRating(starValue)}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  <FaStar className={isFilled ? 'is-filled' : 'is-empty'} />
                </button>
              )
            })}
            {rating > 0 && <span className="review-form__rating-label">{rating}.0 / 5</span>}
          </div>
        </div>

        <label className="review-form__field">
          <span>Ulasan / Komentar</span>
          <textarea
            placeholder="Ceritakan pengalaman Anda dengan produk kami..."
            rows={4}
            value={komentar}
            onChange={(e) => setKomentar(e.target.value)}
          />
        </label>

        {error && <p className="review-form__error">{error}</p>}

        <button type="submit" className="btn btn-primary review-form__submit">
          <FiSend /> Kirim Ulasan
        </button>
      </form>
    </div>
  )
}
