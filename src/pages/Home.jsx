import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Phone, MapPin, Utensils, Users, Baby, Car, Truck, ShieldCheck, Soup, Leaf,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import HeroCarousel from '../components/HeroCarousel'
import RatingStars from '../components/RatingStars'
import SectionHeading from '../components/SectionHeading'
import DishCard from '../components/DishCard'
import FeatureCard from '../components/FeatureCard'
import RevealOnScroll from '../components/RevealOnScroll'
import GalleryLightbox from '../components/GalleryLightbox'
import {
  restaurantInfo, getCallUrl, getWhatsappUrl, getMapsUrl, featuredDishes, gallery,
} from '../data/restaurantInfo'
import { menuCategories } from '../data/menuData'

const whyChooseUs = [
  { icon: Leaf, title: 'Pure Vegetarian', description: 'Every dish on our menu is prepared without meat, fish or eggs.' },
  { icon: Soup, title: 'Fresh & Flavorful', description: 'North Indian, Punjabi and Chinese favourites made to order.' },
  { icon: Utensils, title: 'Dine-In & Takeaway', description: 'Comfortable table service or a quick pick-up on your way home.' },
  { icon: Truck, title: 'Delivery Available', description: 'Including no-contact delivery for a safer experience.' },
  { icon: Baby, title: 'Family Friendly', description: 'A quiet, casual atmosphere that is comfortable for kids.' },
  { icon: Users, title: 'Great for Groups', description: 'Ample seating suited to family gatherings and get-togethers.' },
  { icon: Car, title: 'Easy Parking', description: 'Free street parking plus a dedicated paid parking lot.' },
  { icon: ShieldCheck, title: 'Secure Payments', description: 'Credit card, debit card and NFC mobile payments accepted.' },
]

export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <>
      <section className="relative h-[92vh] min-h-[560px] max-h-[880px] flex items-end sm:items-center overflow-hidden">
        <HeroCarousel />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-0 w-full">
          <div className="max-w-2xl">
            <p className="animate-fadeUp text-saffron-light tracking-wide text-sm sm:text-base mb-4">
              Authentic Vegetarian Indian Cuisine
            </p>
            <h1
              className="animate-fadeUp font-display text-cream text-[2.5rem] leading-[1.05] sm:text-6xl md:text-7xl"
              style={{ animationDelay: '120ms' }}
            >
              Rich Flavours. Warm Hospitality.
              <br className="hidden sm:block" /> Unforgettable Dining.
            </h1>
            <p
              className="animate-fadeUp mt-6 text-cream/75 text-base sm:text-lg max-w-xl leading-relaxed"
              style={{ animationDelay: '240ms' }}
            >
              Sarvottam Restaurant serves pure vegetarian Punjabi, North Indian and
              Indo-Chinese favourites in Nizampura, Vadodara — a warm, casual space
              for family lunches, quiet dinners and everything in between.
            </p>

            <div
              className="animate-fadeUp mt-8 flex flex-wrap gap-3 sm:gap-4"
              style={{ animationDelay: '360ms' }}
            >
              <Link
                to="/menu"
                className="bg-saffron hover:bg-saffron-light text-charcoal-dark font-semibold px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft focus-ring"
              >
                Explore Menu
              </Link>
              <a
                href={getCallUrl()}
                className="flex items-center gap-2 bg-cream/10 hover:bg-cream/20 text-cream border border-cream/25 px-6 py-3.5 rounded-full backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 focus-ring"
              >
                <Phone size={17} /> Call Now
              </a>
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-pine/30 hover:bg-pine/50 text-cream border border-pine-light/40 px-6 py-3.5 rounded-full backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 focus-ring"
              >
                <FaWhatsapp size={18} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:flex absolute top-28 right-8 z-10 animate-floatSlow bg-charcoal-dark/70 backdrop-blur-md border border-gold/25 rounded-2xl px-5 py-4 items-center gap-3 shadow-soft">
          <Leaf size={20} className="text-pine-light" />
          <div>
            <p className="text-cream text-sm font-semibold leading-none">Pure Vegetarian</p>
            <p className="text-cream/50 text-xs mt-1">Vegan options available</p>
          </div>
        </div>

        <div
          className="hidden md:flex absolute bottom-28 right-8 z-10 animate-floatSlow bg-charcoal-dark/70 backdrop-blur-md border border-gold/25 rounded-2xl px-5 py-4 flex-col shadow-soft"
          style={{ animationDelay: '1.5s' }}
        >
          <div className="flex items-center gap-2">
            <RatingStars rating={restaurantInfo.rating} size={14} />
            <span className="text-cream text-sm font-semibold">{restaurantInfo.rating}</span>
          </div>
          <p className="text-cream/50 text-xs mt-1">Google Rating</p>
        </div>
      </section>

      <section className="bg-charcoal text-cream py-6 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-cream/70">
          <span className="flex items-center gap-2"><Leaf size={16} className="text-pine-light" /> Pure Vegetarian</span>
          <span className="flex items-center gap-2"><Utensils size={16} className="text-gold" /> Dine-in · Takeaway · Delivery</span>
          <span className="flex items-center gap-2"><Users size={16} className="text-gold" /> Good for Groups & Kids</span>
          <span className="flex items-center gap-2"><Car size={16} className="text-gold" /> Plenty of Parking</span>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Chef's Selection"
              title="Signature dishes worth the drive"
              description="A handful of favourites from our menu, prepared fresh with rich Punjabi and North Indian spicing."
            />
          </RevealOnScroll>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish, i) => (
              <RevealOnScroll key={dish.name} delay={i * 80}>
                <DishCard dish={dish} tag={dish.category} />
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll className="mt-12 flex justify-center">
            <Link
              to="/menu"
              className="text-saffron-dark font-semibold underline-grow focus-ring rounded"
            >
              View the full menu
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-charcoal-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll className="relative">
            <div className="rounded-3xl overflow-hidden shadow-soft aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop"
                alt="Thali platter with Indian curries, dal and roti"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-40 h-40 rounded-2xl overflow-hidden shadow-soft border-4 border-cream">
              <img
                src="https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=600&auto=format&fit=crop"
                alt="Paneer tikka skewers on a plate"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <SectionHeading
              eyebrow="About Sarvottam"
              title="Comforting vegetarian food, served with care"
              description="Sarvottam Restaurant brings together comforting Indian flavours, vegetarian favourites, rich gravies, freshly prepared breads, fragrant rice dishes and Indo-Chinese favourites in a welcoming dining environment in Nizampura, Vadodara."
            />
            <ul className="mt-6 space-y-3 text-charcoal/75">
              <li className="flex items-start gap-2"><Leaf size={18} className="text-pine mt-0.5 shrink-0" /> Pure vegetarian menu with vegan options</li>
              <li className="flex items-start gap-2"><Utensils size={18} className="text-saffron-dark mt-0.5 shrink-0" /> Dine-in, takeaway and delivery, including no-contact delivery</li>
              <li className="flex items-start gap-2"><Users size={18} className="text-saffron-dark mt-0.5 shrink-0" /> Comfortable for solo diners, families and larger groups</li>
            </ul>
            <Link
              to="/about"
              className="inline-block mt-8 text-saffron-dark font-semibold underline-grow focus-ring rounded"
            >
              Read more about us
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-charcoal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Why Sarvottam"
              title="A dependable choice for vegetarian dining"
              dark
            />
          </RevealOnScroll>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseUs.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 60}>
                <FeatureCard {...item} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Browse the Menu"
              title="Fifteen categories, one full menu"
              description="From soups to ice cream, every category is easy to browse on our dedicated menu page."
              align="center"
            />
          </RevealOnScroll>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {menuCategories.map((cat, i) => (
              <RevealOnScroll key={cat} delay={i * 40}>
                <Link
                  to="/menu"
                  state={{ category: cat }}
                  className="group flex items-center justify-center text-center bg-charcoal-light/10 border border-charcoal/10 rounded-xl px-4 py-6 h-full hover:border-gold/40 hover:bg-charcoal-dark hover:text-cream transition-all duration-300 focus-ring"
                >
                  <span className="font-display text-lg">{cat}</span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-charcoal-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll delay={100} className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Google Rating"
              title="Rated by local diners in Vadodara"
            />
            <div className="mt-6 flex items-center gap-4">
              <span className="font-display text-5xl text-charcoal-dark">{restaurantInfo.rating}</span>
              <div>
                <RatingStars rating={restaurantInfo.rating} size={20} />
                <p className="text-sm text-charcoal/60 mt-1">out of 5 on Google</p>
              </div>
            </div>
            <p className="mt-6 text-charcoal/70 leading-relaxed max-w-md">
              Our Google rating reflects real feedback from diners who have visited
              Sarvottam Restaurant for lunch, dinner and everything in between.
            </p>
            <a
              href={getMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-saffron-dark font-semibold underline-grow focus-ring rounded"
            >
              <MapPin size={17} /> See us on Google Maps
            </a>
          </RevealOnScroll>

          <RevealOnScroll className="order-1 lg:order-2">
            <div className="rounded-3xl overflow-hidden shadow-soft aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=1200&auto=format&fit=crop"
                alt="Dining table set with Indian dishes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Gallery"
              title="A taste of what awaits you"
              align="center"
            />
          </RevealOnScroll>
          <div className="mt-12 columns-2 sm:columns-3 gap-4 space-y-4">
            {gallery.map((item, i) => (
              <RevealOnScroll key={item.image} delay={i * 40} className="break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="group block w-full rounded-xl overflow-hidden focus-ring"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <GalleryLightbox
        images={gallery}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />

      <section className="py-20 sm:py-28 bg-charcoal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Find Us"
              title="Nizampura, Vadodara"
              dark
              description={restaurantInfo.address}
            />
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-cream/70">
              {restaurantInfo.parking.map((item) => (
                <span key={item} className="flex items-center gap-2"><Car size={15} className="text-gold shrink-0" /> {item}</span>
              ))}
            </div>
            <a
              href={getMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-saffron hover:bg-saffron-light text-charcoal-dark font-semibold px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 focus-ring"
            >
              <MapPin size={17} /> Get Directions
            </a>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="rounded-3xl overflow-hidden shadow-soft h-72 sm:h-96 border border-gold/10">
              <iframe
                title="Sarvottam Restaurant location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(restaurantInfo.mapsQuery)}&output=embed`}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative py-20 sm:py-24 bg-gradient-to-br from-pine via-pine-light to-charcoal-dark overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <RevealOnScroll>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream leading-tight">
              Ready for your next meal at Sarvottam?
            </h2>
            <p className="mt-4 text-cream/80 max-w-xl mx-auto">
              Reserve a table, place a takeaway order, or simply drop by — we would
              love to serve you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={getCallUrl()}
                className="flex items-center gap-2 bg-saffron hover:bg-saffron-light text-charcoal-dark font-semibold px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 focus-ring"
              >
                <Phone size={17} /> Reserve a Table
              </a>
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-cream/10 hover:bg-cream/20 text-cream border border-cream/25 px-6 py-3.5 rounded-full backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 focus-ring"
              >
                <FaWhatsapp size={18} /> WhatsApp Us
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
