import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu as MenuIcon, Phone, MapPin } from 'lucide-react'
import { restaurantInfo, getCallUrl, getMapsUrl } from '../data/restaurantInfo'
import MobileDrawer from './MobileDrawer'
import logo from "../assets/sarvottamlogo.png"

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Menu', to: '/menu' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal/90 backdrop-blur-md shadow-soft border-b border-gold/10 py-2'
            : 'bg-charcoal/70 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-none focus-ring rounded">
           
            <img src={logo} className="text-[10px] w-16 h-14 sm:text-xs tracking-[0.2em] text-gold uppercase" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm tracking-wide underline-grow focus-ring rounded ${
                    isActive ? 'text-gold' : 'text-cream/90 hover:text-gold'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-cream/90 hover:text-gold transition-colors focus-ring rounded"
            >
              <MapPin size={16} />
              Directions
            </a>
            <a
              href={getCallUrl()}
              className="flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-charcoal-dark font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5 focus-ring"
            >
              <Phone size={15} />
              Call Now
            </a>
          </div>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="lg:hidden text-cream p-2 focus-ring rounded"
            aria-label="Open menu"
          >
            <MenuIcon size={26} />
          </button>
        </div>
      </header>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        links={navLinks}
      />
    </>
  )
}
