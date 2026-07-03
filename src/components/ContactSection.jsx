import {
  FiMapPin,
  FiPhone,
  FiClock,
  FiMail,
  FiInstagram,
  FiFacebook,
  FiYoutube,
} from 'react-icons/fi'
import { FaTiktok, FaWhatsapp } from 'react-icons/fa'
import '../styles/contact-section.css'

const socialLinks = [
  { icon: <FiInstagram />, label: 'Instagram', href: 'https://www.instagram.com/kyzaxx1_?igsh=MTJyb3J0bTVzdWU0dA==' },
  { icon: <FiFacebook />, label: 'Facebook', href: 'https://www.facebook.com/share/1GxFLLdyES/' },
  { icon: <FaTiktok />, label: 'TikTok', href: 'https://vt.tiktok.com/ZSC6FvTra/' },
  { icon: <FaWhatsapp />, label: 'WhatsApp', href: 'https://wa.me/628973513060' },
  { icon: <FiYoutube />, label: 'YouTube', href: 'https://youtube.com/@muhammadnaufaladib-g7p?si=e2SwLLAeq_qw_MyJ' },
]

export default function ContactSection() {
  return (
    <section id="kontak" className="section contact-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">
            <FiMapPin /> Kontak
          </span>
          <h2 className="section-title">Kunjungi &amp; Hubungi Kami</h2>
          <p className="section-subtitle">
            Datang langsung ke toko kami atau hubungi lewat media sosial dan WhatsApp.
          </p>
        </div>

        <div className="contact-section__grid">
          <div className="contact-info">
            <div className="contact-info__item">
              <FiMapPin />
              <div>
                <strong>Alamat</strong>
                <p>Jl. Sumatera Gg. 4 34, Sapuro Kebulen, Kec. Pekalongan Bar., Kota Pekalongan</p>
              </div>
            </div>
            <div className="contact-info__item">
              <FiPhone />
              <div>
                <strong>Telepon / WhatsApp</strong>
                <p>0897-3513-060</p>
              </div>
            </div>
            <div className="contact-info__item">
              <FiMail />
              <div>
                <strong>Email</strong>
                <p>naufaladib1108@gmail.com</p>
              </div>
            </div>
            <div className="contact-info__item">
              <FiClock />
              <div>
                <strong>Jam Operasional</strong>
                <p>Senin - Minggu, 07.00 - 21.00 WIB</p>
              </div>
            </div>

            <div className="contact-info__social">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="contact-info__social-icon"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-media">
            <div className="contact-media__map">
              {/* Ganti src iframe berikut dengan lokasi Adib Bakery yang sesungguhnya */}
              <iframe
                title="Lokasi Adib Bakery"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.236575269613!2d109.67120166953978!3d-6.897026468168552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7024258c25b6a7%3A0xc790602896ad18a5!2sGg.%204%2034%2C%20Sapuro%20Kebulen%2C%20Kec.%20Pekalongan%20Bar.%2C%20Kota%20Pekalongan%2C%20Jawa%20Tengah%2051112!5e0!3m2!1sid!2sid!4v1783030576882!5m2!1sid!2sid"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
