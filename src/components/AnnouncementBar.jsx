import { Phone } from 'lucide-react'
import { restaurantInfo, getCallUrl } from '../data/restaurantInfo'

export default function AnnouncementBar() {
  return (
    <div className="bg-charcoal-dark text-cream/80 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-3">
        {/* <p className="truncate">
          Pure vegetarian dining in Nizampura, Vadodara · Dine-in, Takeaway & Delivery
        </p> */}
        <a
          href={getCallUrl()}
          className="hidden sm:flex items-center gap-1.5 text-gold hover:text-gold-light transition-colors focus-ring rounded shrink-0"
          aria-label={`Call ${restaurantInfo.name}`}
        >
          <Phone size={14} />
          {restaurantInfo.phoneDisplay}
        </a>
      </div>
    </div>
  )
}
