import { FiHeart, FiAward, FiUsers } from 'react-icons/fi'
import hero from '../assets/images/roti-about.png'
import '../styles/about-us.css'

const stats = [
  { icon: <FiAward />, value: '8+', label: 'Tahun Pengalaman' },
  { icon: <FiUsers />, value: '10.000+', label: 'Pelanggan Puas' },
  { icon: <FiHeart />, value: '100%', label: 'Bahan Berkualitas' },
]

export default function AboutUs() {
  return (
    <section id="tentang-kami" className="section about-us">
      <div className="container about-us__grid">
        <div className="about-us__image">
          <img src={hero} alt="Suasana Adib Bakery" />
        </div>
        <div className="about-us__content">
          <span className="section-eyebrow">
            <FiHeart /> Tentang Kami
          </span>
          <h2 className="section-title">Cerita di Balik Adib Bakery</h2>
          <p>
            Adib Bakery berawal dari dapur rumahan yang mencintai proses membuat roti dengan
            tangan sendiri. Kini kami telah berkembang menjadi toko roti dan cake yang dipercaya
            banyak keluarga, dengan resep yang selalu menjaga kualitas dan cita rasa premium di
            setiap produk.
          </p>
          <p>
            Setiap hari, tim kami memanggang roti dan cake segar menggunakan bahan pilihan tanpa
            pengawet berlebih, agar setiap gigitan memberikan kehangatan seperti buatan rumah.
          </p>
          <div className="about-us__stats">
            {stats.map((s) => (
              <div key={s.label} className="about-us__stat">
                <span className="about-us__stat-icon">{s.icon}</span>
                <strong>{s.value}</strong>
                <small>{s.label}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
