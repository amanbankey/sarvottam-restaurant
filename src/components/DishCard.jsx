import { useState } from 'react'
import { Leaf } from 'lucide-react'

export default function DishCard({ dish, tag }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div className="group bg-cream rounded-2xl overflow-hidden shadow-card border border-charcoal/5 transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-soft">
      <div className="relative h-56 overflow-hidden">
        {!imgFailed ? (
          <img
            src={dish.image}
            alt={dish.name}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-pine/30 to-charcoal/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/60 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 flex items-center gap-1 bg-cream/95 text-pine text-xs font-semibold px-2.5 py-1 rounded-full">
          <Leaf size={12} />
          Veg
        </span>
        {tag && (
          <span className="absolute top-3 right-3 bg-charcoal-dark/85 text-gold text-[11px] tracking-wide px-2.5 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl text-charcoal-dark leading-snug">{dish.name}</h3>
          <span className="text-saffron-dark font-semibold whitespace-nowrap">₹{dish.price.toFixed(2)}</span>
        </div>
        {dish.description && (
          <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">{dish.description}</p>
        )}
      </div>
    </div>
  )
}
