export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group bg-charcoal-light/40 border border-gold/10 rounded-2xl p-6 transition-all duration-400 hover:border-gold/40 hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 transition-colors duration-400 group-hover:bg-gold/20">
        <Icon size={22} className="text-gold" />
      </div>
      <h3 className="font-display text-xl text-cream mb-1.5">{title}</h3>
      <p className="text-sm text-cream/60 leading-relaxed">{description}</p>
    </div>
  )
}
