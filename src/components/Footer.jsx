import {
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiMapPin,
  FiPhone,
  FiClock,
} from 'react-icons/fi'
import { FaTiktok, FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/images/logo.svg'
import '../styles/footer.css'

const socialLinks = [
  { icon: <FiInstagram />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <FiFacebook />, href: 'https://facebook.com', label: 'Facebook' },
  { icon: <FaTiktok />, href: 'https://tiktok.com', label: 'TikTok' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/6281234567890', label: 'WhatsApp' },
  { icon: <FiYoutube />, href: 'https://youtube.com', label: 'YouTube' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="scallop-divider scallop-divider--flip footer__scallop" />
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="Logo Adib Bakery" />
          <h3>Adib Bakery</h3>
          <p>Roti, cake, pastry, dan donat premium yang dipanggang dengan cinta setiap hari.</p>
          <div className="footer__social">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Alamat</h4>
          <p>
            <FiMapPin /> Jl. Sumatera Gg. 4 34, Sapuro Kebulen, Kec. Pekalongan Bar., Kota Pekalongan, Jawa Tengah 51112
          </p>
        </div>

        <div className="footer__col">
          <h4>Kontak</h4>
          <p>
            <FiPhone /> 0897-3513-060
          </p>
          <p>naufaladib1108@gmail.com</p>
        </div>

        <div className="footer__col">
          <h4>Jam Operasional</h4>
          <p>
            <FiClock /> Senin - Minggu
          </p>
          <p>07.00 - 21.00 WIB</p>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>&copy; {year} Adib Bakery. Seluruh hak cipta dilindungi.</p>
        <p className="footer__academic">NIM : 25.240.0011 &nbsp;|&nbsp; Nama : Muhammad Naufal Adib</p>
      </div>
    </footer>
  )
}
