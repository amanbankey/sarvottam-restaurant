import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides } from '../data/restaurantInfo'

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [failed, setFailed] = useState({})
  const timerRef = useRef(null)

  const goTo = useCallback((next) => {
    setIndex((current) => (next + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== index}
        >
          {!failed[i] ? (
            <img
              src={slide.image}
              alt={slide.alt}
              className={`w-full h-full object-cover ${i === index ? 'animate-slowZoom' : ''}`}
              onError={() => setFailed((prev) => ({ ...prev, [i]: true }))}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-charcoal via-charcoal-light to-pine" />
          )}
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/60 to-charcoal-dark/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/70 via-transparent to-transparent" />

      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex items-center justify-center gap-4 px-4">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 text-cream backdrop-blur-sm transition-colors focus-ring"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-500 focus-ring ${
                i === index ? 'w-8 bg-gold' : 'w-2 bg-cream/40 hover:bg-cream/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 text-cream backdrop-blur-sm transition-colors focus-ring"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
