import { Star, StarHalf } from 'lucide-react'

export default function RatingStars({ rating, size = 18, className = '' }) {
  const full = Math.floor(rating)
  const hasHalf = rating - full >= 0.4 && rating - full < 0.9
  const total = 5

  return (
    <div className={`flex items-center gap-1 ${className}`} role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: total }).map((_, i) => {
        if (i < full) {
          return <Star key={i} size={size} className="fill-gold text-gold" />
        }
        if (i === full && hasHalf) {
          return <StarHalf key={i} size={size} className="fill-gold text-gold" />
        }
        return <Star key={i} size={size} className="text-gold/30" />
      })}
    </div>
  )
}
