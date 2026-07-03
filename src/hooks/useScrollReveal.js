import { useEffect, useRef } from 'react'

// Menambahkan class 'is-visible' pada elemen ketika masuk ke viewport,
// dipakai bersama class CSS 'fade-up' untuk animasi kemunculan card.
// Terima parameter `deps` agar bisa mengamati ulang elemen baru yang muncul
// setelah render awal (misalnya hasil pencarian/filter produk).
export function useScrollReveal(deps = []) {
  const containerRef = useRef(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const targets = root.classList.contains('fade-up')
      ? [root]
      : Array.from(root.querySelectorAll('.fade-up:not(.is-visible)'))

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return containerRef
}
