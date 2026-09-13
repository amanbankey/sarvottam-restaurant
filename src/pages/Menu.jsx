import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Search, Leaf, X } from 'lucide-react'
import RevealOnScroll from '../components/RevealOnScroll'
import { menuCategories, menuItems } from '../data/menuData'

export default function Menu() {
  const location = useLocation()
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState(menuCategories[0])
  const sectionRefs = useRef({})
  const navRef = useRef(null)

  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category)
      setTimeout(() => scrollToCategory(location.state.category), 150)
    }
  }, [location.state])

  const filteredByQuery = useMemo(() => {
    if (!query.trim()) return null
    const q = query.trim().toLowerCase()
    return menuItems.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.description || '').toLowerCase().includes(q)
    )
  }, [query])

  const groupedByCategory = useMemo(() => {
    return menuCategories.map((cat) => ({
      category: cat,
      items: menuItems.filter((item) => item.category === cat),
    }))
  }, [])

  const scrollToCategory = (cat) => {
    setActiveCategory(cat)
    const node = sectionRefs.current[cat]
    if (node) {
      const offset = 140
      const top = node.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (query) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.dataset.category)
          }
        })
      },
      { rootMargin: '-160px 0px -70% 0px' }
    )
    Object.values(sectionRefs.current).forEach((node) => node && observer.observe(node))
    return () => observer.disconnect()
  }, [query])

  return (
    <>
      <section className="bg-charcoal-dark py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <RevealOnScroll>
            <p className="text-saffron-light text-sm tracking-wide mb-3">Our Menu</p>
            <h1 className="font-display text-cream text-4xl sm:text-5xl">
              Fifteen categories of vegetarian favourites
            </h1>
            <p className="mt-4 text-cream/70 max-w-xl mx-auto">
              Search for a dish or browse by category — every price is exactly as
              listed on our menu.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="mt-8 max-w-lg mx-auto relative">
            <Search size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes, e.g. paneer, naan, biryani"
              aria-label="Search menu"
              className="w-full bg-cream rounded-full pl-11 pr-11 py-3.5 text-charcoal-dark placeholder:text-charcoal/40 focus-ring"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-charcoal-dark p-1 focus-ring rounded"
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </RevealOnScroll>
        </div>
      </section>

      {!query && (
        <div
          ref={navRef}
          className="sticky top-[64px] sm:top-[76px] z-30 bg-cream/95 backdrop-blur-md border-b border-charcoal/10 shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 overflow-x-auto">
            <div className="flex gap-2 w-max" role="tablist" aria-label="Menu categories">
              {menuCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat}
                  onClick={() => scrollToCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 focus-ring ${
                    activeCategory === cat
                      ? 'bg-charcoal-dark text-gold'
                      : 'bg-charcoal/5 text-charcoal/70 hover:bg-charcoal/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <section className="py-14 sm:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {query ? (
            filteredByQuery.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredByQuery.map((item) => (
                  <MenuRow key={`${item.category}-${item.name}`} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-display text-2xl text-charcoal-dark">No dishes found</p>
                <p className="mt-2 text-charcoal/60">
                  Try a different search term, or clear the search to browse by category.
                </p>
              </div>
            )
          ) : (
            groupedByCategory.map(({ category, items }) => (
              <div
                key={category}
                data-category={category}
                ref={(node) => (sectionRefs.current[category] = node)}
                className="mb-14 scroll-mt-40"
              >
                <h2 className="font-display text-2xl sm:text-3xl text-charcoal-dark mb-6 pb-3 border-b border-gold/20">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {items.map((item) => (
                    <MenuRow key={item.name} item={item} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  )
}

function MenuRow({ item }) {
  return (
    <div className="group flex items-start justify-between gap-4 bg-charcoal-light/5 hover:bg-charcoal-light/10 border border-charcoal/8 rounded-xl px-5 py-4 transition-colors duration-300">
      <div className="min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-display text-lg text-charcoal-dark leading-snug">{item.name}</h3>
          {item.unitNote && (
            <span className="text-xs text-charcoal/50">({item.unitNote})</span>
          )}
          <Leaf size={13} className="text-pine shrink-0" aria-label="Vegetarian" />
          {item.featured && (
            <span className="text-[10px] tracking-wide bg-gold/15 text-gold-light px-2 py-0.5 rounded-full">
              Chef's Selection
            </span>
          )}
        </div>
        {item.description && (
          <p className="mt-1 text-sm text-charcoal/60 leading-relaxed">{item.description}</p>
        )}
      </div>
      <span className="text-saffron-dark font-semibold whitespace-nowrap shrink-0">
        ₹{item.price.toFixed(2)}
      </span>
    </div>
  )
}
