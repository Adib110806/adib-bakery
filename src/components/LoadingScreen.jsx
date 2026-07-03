import logo from '../assets/images/logo.svg'
import '../styles/loading-screen.css'

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <img src={logo} alt="Adib Bakery" className="loading-screen__logo" />
      <div className="loading-screen__ring" />
      <p className="loading-screen__text">Menyiapkan roti hangat untuk Anda...</p>
    </div>
  )
}
