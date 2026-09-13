export default function SectionHeading({ eyebrow, title, description, align = 'left', dark = false }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className={`text-sm tracking-wide mb-3 ${dark ? 'text-gold' : 'text-saffron-dark'}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-tight ${
          dark ? 'text-cream' : 'text-charcoal-dark'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? 'text-cream/70' : 'text-charcoal/70'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
