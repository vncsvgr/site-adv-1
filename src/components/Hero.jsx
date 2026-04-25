import { FaChevronDown } from 'react-icons/fa'

export default function Hero() {
  const handleScroll = (href) => {
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80&auto=format&fit=crop"
          alt="Escritório de advocacia"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
      </div>

      {/* Decorative gold line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-secondary to-transparent opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-10 section-container w-full pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-slow inline-block" />
            <span className="text-secondary text-xs font-semibold tracking-widest uppercase font-sans">
              Há mais de 15 anos defendendo você
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            Defendendo seus{' '}
            <span className="text-secondary italic">direitos</span>
            {' '}com
            <br />
            <span className="text-white">excelência e compromisso</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/75 text-lg md:text-xl font-sans font-light leading-relaxed mb-10 max-w-xl animate-fade-in-up">
            Uma equipe de advogados dedicados à sua causa, com atendimento
            personalizado, ética e resultados comprovados em mais de 5.000 casos.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <button
              id="hero-cta-consulta"
              onClick={() => handleScroll('#contato')}
              className="btn-primary text-base"
            >
              Agendar Consulta
            </button>
            <button
              id="hero-cta-saiba"
              onClick={() => handleScroll('#sobre')}
              className="btn-outline text-base"
            >
              Saiba Mais
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 mb-24 md:mb-0 grid grid-cols-3 gap-8 border-t border-white/20 pt-10 max-w-md animate-fade-in">
            {[
              { value: '+15', label: 'Anos de Experiência' },
              { value: '+5k', label: 'Casos Resolvidos' },
              { value: '98%', label: 'Clientes Satisfeitos' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl font-bold text-secondary">{stat.value}</p>
                <p className="text-white/60 text-xs font-sans mt-1 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        id="hero-scroll-indicator"
        onClick={() => handleScroll('#sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 
                   hover:text-secondary transition-colors duration-300 flex flex-col items-center gap-2"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs font-sans tracking-widest uppercase font-medium">Role para baixo</span>
        <FaChevronDown className="animate-bounce text-lg" />
      </button>
    </section>
  )
}
