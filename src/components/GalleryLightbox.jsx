import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function GalleryLightbox({ images, activeIndex, onClose, onNavigate }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % images.length)
      if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeIndex, images.length, onClose, onNavigate])

  if (activeIndex === null) return null
  const current = images[activeIndex]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-dark/90 backdrop-blur-sm p-4 animate-fadeIn">
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 text-cream p-2 focus-ring rounded"
        aria-label="Close gallery"
      >
        <X size={28} />
      </button>
      <button
        type="button"
        onClick={() => onNavigate((activeIndex - 1 + images.length) % images.length)}
        className="absolute left-3 sm:left-8 text-cream p-2 focus-ring rounded"
        aria-label="Previous image"
      >
        <ChevronLeft size={30} />
      </button>
      <img
        src={current.image}
        alt={current.alt}
        className="max-h-[80vh] max-w-full rounded-xl shadow-soft object-contain"
      />
      <button
        type="button"
        onClick={() => onNavigate((activeIndex + 1) % images.length)}
        className="absolute right-3 sm:right-8 text-cream p-2 focus-ring rounded"
        aria-label="Next image"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  )
}
