import { Link } from 'react-router-dom'
import { Phone, MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { restaurantInfo, getCallUrl, getWhatsappUrl, getMapsUrl } from '../data/restaurantInfo'
import RatingStars from './RatingStars'
import logo from "../assets/sarvottamlogo.png"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-dark text-cream/80 pt-16 pb-28 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            {/* <span className="font-display text-2xl text-cream">Sarvottam Restaurant</span> */}
             <Link to="/" className="flex flex-col leading-none focus-ring rounded">
                  <img src={logo} className="text-[10px] w-16 h-14 sm:text-xs tracking-[0.2em] text-gold uppercase" />
              </Link>
            <p className="mt-3 text-sm leading-relaxed text-cream/60">{restaurantInfo.address}</p>
            <div className="mt-4 flex items-center gap-2">
              <RatingStars rating={restaurantInfo.rating} size={15} />
              <span className="text-sm text-cream/70">{restaurantInfo.rating} on Google</span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="underline-grow hover:text-cream">Home</Link></li>
              <li><Link to="/about" className="underline-grow hover:text-cream">About</Link></li>
              <li><Link to="/menu" className="underline-grow hover:text-cream">Menu</Link></li>
              <li><Link to="/contact" className="underline-grow hover:text-cream">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>Dine-In</li>
              <li>Takeaway</li>
              <li>Delivery</li>
              <li>Reservations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold mb-4">Cuisine</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>Vegetarian</li>
              <li>North Indian</li>
              <li>Punjabi</li>
              <li>Chinese</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <a href={getCallUrl()} className="flex items-center gap-2 bg-saffron text-charcoal-dark font-semibold px-5 py-2.5 rounded-full hover:bg-saffron-light transition-colors focus-ring">
            <Phone size={16} /> Call Now
          </a>
          <a href={getWhatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-pine-light/60 text-cream px-5 py-2.5 rounded-full hover:bg-pine/20 transition-colors focus-ring">
            <FaWhatsapp size={17} /> WhatsApp
          </a>
          <a href={getMapsUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-gold/40 text-gold px-5 py-2.5 rounded-full hover:bg-gold/10 transition-colors focus-ring">
            <MapPin size={16} /> Get Directions
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 text-xs text-cream/40">
          © {year} Sarvottam Restaurant, Vadodara. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
