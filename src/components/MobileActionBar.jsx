import { Phone, MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { getCallUrl, getWhatsappUrl, getMapsUrl } from '../data/restaurantInfo'

export default function MobileActionBar() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-charcoal-dark/95 backdrop-blur-md border-t border-gold/15"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="grid grid-cols-3 divide-x divide-cream/10">
        <a
          href={getCallUrl()}
          className="flex flex-col items-center justify-center gap-1 py-3 text-cream focus-ring"
          aria-label="Call restaurant"
        >
          <Phone size={19} className="text-saffron" />
          <span className="text-[11px] font-medium">Call</span>
        </a>
        <a
          href={getWhatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-cream focus-ring"
          aria-label="Message on WhatsApp"
        >
          <FaWhatsapp size={19} className="text-pine-light" />
          <span className="text-[11px] font-medium">WhatsApp</span>
        </a>
        <a
          href={getMapsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-cream focus-ring"
          aria-label="Get directions"
        >
          <MapPin size={19} className="text-gold" />
          <span className="text-[11px] font-medium">Directions</span>
        </a>
      </div>
    </div>
  )
}
