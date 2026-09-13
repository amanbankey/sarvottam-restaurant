import { useState } from 'react'
import { Phone, MapPin, CreditCard, Car, ShieldCheck } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import RevealOnScroll from '../components/RevealOnScroll'
import RatingStars from '../components/RatingStars'
import { restaurantInfo, getCallUrl, getWhatsappUrl, getMapsUrl } from '../data/restaurantInfo'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-charcoal-dark py-16 sm:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <RevealOnScroll>
            <p className="text-saffron-light text-sm tracking-wide mb-3">Get in Touch</p>
            <h1 className="font-display text-cream text-4xl sm:text-5xl">Visit or Reach Sarvottam</h1>
            <p className="mt-4 text-cream/70">
              Call, WhatsApp, or drop by our Nizampura location — we look forward to serving you.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <RevealOnScroll className="lg:col-span-2 space-y-6">
            <div className="bg-charcoal-dark rounded-2xl p-7 text-cream">
              <h2 className="font-display text-2xl mb-1">{restaurantInfo.name}</h2>
              <div className="flex items-center gap-2 mt-2">
                <RatingStars rating={restaurantInfo.rating} size={15} />
                <span className="text-sm text-cream/70">{restaurantInfo.rating} on Google</span>
              </div>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-cream/80">{restaurantInfo.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gold shrink-0" />
                  <a href={getCallUrl()} className="text-cream/80 hover:text-cream underline-grow">{restaurantInfo.phoneDisplay}</a>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <a href={getCallUrl()} className="flex items-center justify-center gap-2 bg-saffron hover:bg-saffron-light text-charcoal-dark font-semibold px-5 py-3 rounded-full transition-colors focus-ring">
                  <Phone size={16} /> Call Now
                </a>
                <a href={getWhatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-pine-light/50 text-cream px-5 py-3 rounded-full hover:bg-pine/20 transition-colors focus-ring">
                  <FaWhatsapp size={17} /> WhatsApp Us
                </a>
                <a href={getMapsUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-gold/40 text-gold px-5 py-3 rounded-full hover:bg-gold/10 transition-colors focus-ring">
                  <MapPin size={16} /> Get Directions
                </a>
              </div>
            </div>

            <div className="bg-charcoal-light/10 border border-charcoal/10 rounded-2xl p-7">
              <h3 className="font-display text-xl text-charcoal-dark mb-4">Service &amp; Parking</h3>
              <div className="space-y-3 text-sm text-charcoal/70">
                {restaurantInfo.serviceOptions.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <ShieldCheck size={15} className="text-pine shrink-0" /> {item}
                  </div>
                ))}
                {restaurantInfo.parking.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Car size={15} className="text-saffron-dark shrink-0" /> {item}
                  </div>
                ))}
                {restaurantInfo.payments.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CreditCard size={15} className="text-gold shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="lg:col-span-3 space-y-8">
            <div className="rounded-2xl overflow-hidden shadow-card h-72 sm:h-96 border border-charcoal/10">
              <iframe
                title="Sarvottam Restaurant location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(restaurantInfo.mapsQuery)}&output=embed`}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-charcoal-light/5 border border-charcoal/10 rounded-2xl p-7">
              <SectionHeading
                eyebrow="Reservations"
                title="Send us a message"
                description="Tell us your preferred date, time and party size, and our team will get back to you."
              />

              {submitted ? (
                <div className="mt-6 bg-pine/10 border border-pine/30 text-pine rounded-xl p-5">
                  Thank you, {form.name || 'friend'}. We have received your message and
                  will get back to you shortly. For a faster response, please call or
                  WhatsApp us directly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="block text-sm text-charcoal/70 mb-1.5">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-charcoal/15 px-4 py-2.5 focus-ring bg-cream"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="block text-sm text-charcoal/70 mb-1.5">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-charcoal/15 px-4 py-2.5 focus-ring bg-cream"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm text-charcoal/70 mb-1.5">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="e.g. Table for 4 this Saturday at 8 PM"
                      className="w-full rounded-lg border border-charcoal/15 px-4 py-2.5 focus-ring bg-cream resize-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="bg-saffron hover:bg-saffron-light text-charcoal-dark font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 focus-ring"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
