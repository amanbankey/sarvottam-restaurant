import { Link } from 'react-router-dom'
import { Leaf, Utensils, Users, Clock, Phone, Truck } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import RevealOnScroll from '../components/RevealOnScroll'
import { restaurantInfo, getCallUrl, getWhatsappUrl } from '../data/restaurantInfo'

const experienceCards = [
  { icon: Leaf, title: 'Pure Vegetarian Kitchen', description: 'Every dish, from soups to biryani, is prepared without meat, fish or eggs — including vegan options.' },
  { icon: Utensils, title: 'North Indian, Punjabi & Chinese', description: 'Rich paneer curries, tandoori breads, fragrant biryanis and Indo-Chinese favourites, all on one menu.' },
  { icon: Clock, title: 'Lunch & Dinner', description: 'A comfortable spot for a relaxed lunch or a warm family dinner.' },
  { icon: Users, title: 'Solo, Family or Group Dining', description: 'A quiet, casual atmosphere that works equally well for a solo meal or a large table.' },
  { icon: Truck, title: 'Takeaway & Delivery', description: 'Enjoy Sarvottam at home with takeaway or delivery, including no-contact delivery.' },
]

export default function About() {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-charcoal-dark overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1600&auto=format&fit=crop"
            alt="Rich Indian paneer curry"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/80 to-charcoal-dark/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <RevealOnScroll>
            <p className="text-saffron-light text-sm tracking-wide mb-4">Our Story</p>
            <h1 className="font-display text-cream text-4xl sm:text-5xl md:text-6xl leading-tight">
              About Sarvottam Restaurant
            </h1>
            <p className="mt-6 text-cream/75 max-w-2xl mx-auto leading-relaxed text-lg">
              A pure vegetarian restaurant in Nizampura, Vadodara, serving North
              Indian, Punjabi and Indo-Chinese favourites in a warm, casual setting.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Who We Are"
              title="Comforting flavours, prepared with care"
              description="Sarvottam Restaurant brings together comforting Indian flavours, vegetarian favourites, rich gravies, freshly prepared breads, fragrant rice dishes and Indo-Chinese favourites in a welcoming dining environment. Our kitchen focuses on vegetarian cooking done well — from simple dal preparations to rich paneer and kaju curries."
            />
            <p className="mt-4 text-charcoal/70 leading-relaxed max-w-xl">
              Whether you are stopping in for a quick lunch, settling in for a family
              dinner, or ordering a takeaway on your way home, our team is here to
              make the experience comfortable and welcoming.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={100} className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-card aspect-square">
              <img src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop" alt="Paneer curry close up" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card aspect-square mt-8">
              <img src="https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=800&auto=format&fit=crop" alt="Cheese garlic naan bread" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card aspect-square">
              <img src="https://images.unsplash.com/photo-1631292784640-2b24be784d5d?q=80&w=800&auto=format&fit=crop" alt="Vegetable biryani" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card aspect-square mt-8">
              <img src="https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=800&auto=format&fit=crop" alt="Sweet lassi in a glass" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-charcoal-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Dining Experience"
              title="What to expect when you visit"
              align="center"
            />
          </RevealOnScroll>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceCards.map((card, i) => (
              <RevealOnScroll key={card.title} delay={i * 70}>
                <div className="h-full bg-cream rounded-2xl border border-charcoal/10 p-6 shadow-card transition-transform duration-400 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center mb-4">
                    <card.icon size={22} className="text-saffron-dark" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal-dark mb-1.5">{card.title}</h3>
                  <p className="text-sm text-charcoal/65 leading-relaxed">{card.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-charcoal-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-3xl sm:text-4xl text-cream">
              Planning a visit or a takeaway order?
            </h2>
            <p className="mt-4 text-cream/70">
              Call us or reach out on WhatsApp — reservations are accepted.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={getCallUrl()} className="flex items-center gap-2 bg-saffron hover:bg-saffron-light text-charcoal-dark font-semibold px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 focus-ring">
                <Phone size={17} /> Reserve a Table
              </a>
              <a href={getWhatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-cream/10 hover:bg-cream/20 text-cream border border-cream/25 px-6 py-3.5 rounded-full backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 focus-ring">
                <FaWhatsapp size={18} /> WhatsApp Us
              </a>
              <Link to="/menu" className="flex items-center gap-2 border border-gold/40 text-gold px-6 py-3.5 rounded-full hover:bg-gold/10 transition-colors focus-ring">
                Explore Menu
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
