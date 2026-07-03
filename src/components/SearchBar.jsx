import { FiSearch, FiX } from 'react-icons/fi'
import '../styles/search-bar.css'

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="search-bar">
      <FiSearch className="search-bar__icon" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || 'Cari nama produk...'}
      />
      {value && (
        <button className="search-bar__clear" onClick={() => onChange('')} aria-label="Hapus pencarian">
          <FiX />
        </button>
      )}
    </div>
  )
}
