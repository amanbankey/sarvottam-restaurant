import { X, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { getCallUrl, getWhatsappUrl } from '../data/restaurantInfo'

export default function MobileDrawer({ open, onClose, links }) {
  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-visibility ${open ? 'visible' : 'invisible pointer-events-none'}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-charcoal-dark/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 h-full w-[82%] max-w-xs bg-charcoal border-l border-gold/20 shadow-soft transition-transform duration-400 ease-out flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream/10">
          <span className="font-display text-xl text-cream">Sarvottam</span>
          <button
            type="button"
            onClick={onClose}
            className="text-cream/80 p-2 focus-ring rounded"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-8 gap-2" aria-label="Mobile Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `py-3 text-lg border-b border-cream/5 focus-ring rounded ${
                  isActive ? 'text-gold' : 'text-cream/90'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto px-6 py-6 flex flex-col gap-3">
          <a
            href={getCallUrl()}
            className="flex items-center justify-center gap-2 bg-saffron text-charcoal-dark font-semibold py-3 rounded-full focus-ring"
          >
            <Phone size={17} />
            Call Now
          </a>
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-pine bg-pine/20 text-cream font-semibold py-3 rounded-full focus-ring"
          >
            <FaWhatsapp size={18} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  )
}
