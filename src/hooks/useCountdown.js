import { useEffect, useState } from 'react'

// Menghitung mundur menuju target waktu tertentu. Jika sudah lewat, akan
// otomatis mengulang dari durasi awal agar Flash Sale terlihat terus aktif.
export function useCountdown(durationInSeconds) {
  const [target, setTarget] = useState(() => Date.now() + durationInSeconds * 1000)
  const [remaining, setRemaining] = useState(durationInSeconds)

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = Math.max(0, Math.floor((target - Date.now()) / 1000))
      setRemaining(diff)
      if (diff <= 0) {
        setTarget(Date.now() + durationInSeconds * 1000)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [target, durationInSeconds])

  const hours = String(Math.floor(remaining / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((remaining % 3600) / 60)).padStart(2, '0')
  const seconds = String(remaining % 60).padStart(2, '0')

  return { hours, minutes, seconds, remaining }
}
