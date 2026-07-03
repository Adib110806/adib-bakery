import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { FiMail, FiLock, FiEye, FiEyeOff, FiLogIn } from 'react-icons/fi'
import logo from '../assets/images/logo.svg'
import loginBg from '../assets/images/login-bg.svg'
import { useAuth } from '../context/AuthContext'
import '../styles/login.css'

export default function Login() {
  const { isLoggedIn, login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  if (isLoggedIn) {
    return <Navigate to="/" replace />
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!email.trim() || !password.trim()) {
      setError('Email dan password wajib diisi.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setError('Format email tidak valid.')
      return
    }

    if (password.length < 6) {
      setError('Password minimal 6 karakter.')
      return
    }

    login(email)
    navigate('/')
  }

  return (
    <div className="login-page" style={{ backgroundImage: `url(${loginBg})` }}>
      <div className="login-card">
        <div className="login-card__brand">
          <img src={logo} alt="Logo Adib Bakery" />
          <h1>Adib Bakery</h1>
          <p>Masuk untuk mulai belanja roti dan cake favorit Anda</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <label className="login-form__field">
            <span>Email</span>
            <div className="login-form__input-wrap">
              <FiMail />
              <input
                type="email"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
          </label>

          <label className="login-form__field">
            <span>Password</span>
            <div className="login-form__input-wrap">
              <FiLock />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Minimal 6 karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="login-form__toggle"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? 'Sembunyikan password' : 'Lihat password'}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </label>

          {error && <p className="login-form__error">{error}</p>}

          <button type="submit" className="btn btn-primary login-form__submit">
            <FiLogIn /> Masuk
          </button>

          <p className="login-form__hint">
            Gunakan email &amp; password apa saja (min. 6 karakter) untuk masuk ke demo ini.
          </p>
        </form>
      </div>
    </div>
  )
}
