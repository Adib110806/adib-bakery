import { useEffect, useRef } from 'react'
import $ from 'jquery'
import { slides } from '../data/slides'
import '../styles/slide-banner.css'

// Slider promo menggunakan jQuery sesuai ketentuan tugas.
// Efek fade + auto slide, ukuran 960x250, minimal 5 slide.
export default function SlideBanner() {
  const sliderRef = useRef(null)
  const timerRef = useRef(null)
  const indexRef = useRef(0)

  useEffect(() => {
    const $slider = $(sliderRef.current)
    const $slides = $slider.find('.jq-slide')
    const total = $slides.length

    const goTo = (i) => {
      indexRef.current = ((i % total) + total) % total
      $slides.removeClass('jq-slide--active')
      $slides.eq(indexRef.current).addClass('jq-slide--active')
      $slider
        .find('.jq-dot')
        .removeClass('jq-dot--active')
        .eq(indexRef.current)
        .addClass('jq-dot--active')
    }

    const next = () => goTo(indexRef.current + 1)
    const prev = () => goTo(indexRef.current - 1)

    goTo(0)

    timerRef.current = setInterval(next, 3500)

    $slider.on('mouseenter', () => clearInterval(timerRef.current))
    $slider.on('mouseleave', () => {
      timerRef.current = setInterval(next, 3500)
    })

    $slider.find('.jq-next').on('click', next)
    $slider.find('.jq-prev').on('click', prev)
    $slider.find('.jq-dot').on('click', function () {
      goTo($(this).index())
    })

    return () => {
      clearInterval(timerRef.current)
      $slider.off()
    }
  }, [])

  return (
    <div className="slide-banner" ref={sliderRef}>
      <div className="slide-banner__frame">
        {slides.map((slide) => (
          <div key={slide.id} className="jq-slide">
            <img src={slide.gambar} alt={slide.judul} />
            <div className="jq-slide__caption">
              <h3>{slide.judul}</h3>
              <p>{slide.deskripsi}</p>
            </div>
          </div>
        ))}
        <button className="jq-prev slide-banner__arrow slide-banner__arrow--prev" aria-label="Slide sebelumnya">
          &#8249;
        </button>
        <button className="jq-next slide-banner__arrow slide-banner__arrow--next" aria-label="Slide berikutnya">
          &#8250;
        </button>
      </div>
      <div className="slide-banner__dots">
        {slides.map((slide, i) => (
          <span key={slide.id} className={`jq-dot ${i === 0 ? 'jq-dot--active' : ''}`} />
        ))}
      </div>
    </div>
  )
}
