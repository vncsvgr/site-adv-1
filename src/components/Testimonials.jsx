import { useState } from 'react'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'

const testimonials = [
  {
    id: 'test-1',
    name: 'Marcos Oliveira',
    role: 'Cliente — Direito Trabalhista',
    text: 'Após anos de batalha judicial, o escritório Silva & Associados conseguiu reverter minha situação completamente. A dedicação e profissionalismo da equipe foram fundamentais para o sucesso do meu caso.',
    rating: 5,
    avatar: 'M',
  },
  {
    id: 'test-2',
    name: 'Ana Paula Rodrigues',
    role: 'Cliente — Direito de Família',
    text: 'Em um momento tão delicado da minha vida, encontrei em Dr. Silva um advogado que realmente se importou com minha situação. A resolução foi rápida, justa e com total transparência.',
    rating: 5,
    avatar: 'A',
  },
  {
    id: 'test-3',
    name: 'Fernando Costa',
    role: 'Cliente — Direito Empresarial',
    text: 'A assessoria jurídica prestada ao meu negócio foi impecável. Eles reestruturaram nossos contratos, evitando riscos que nem percebíamos. Qualidade e seriedade acima de qualquer expectativa.',
    rating: 5,
    avatar: 'F',
  },
  {
    id: 'test-4',
    name: 'Lúcia Fernanda Mendes',
    role: 'Cliente — Direito Previdenciário',
    text: 'Estava há 3 anos tentando minha aposentadoria pelo INSS sem sucesso. Em menos de 6 meses com Silva & Associados, consegui o benefício com valor maior do que eu esperava. Recomendo muito!',
    rating: 5,
    avatar: 'L',
  },
  {
    id: 'test-5',
    name: 'Ricardo Alves',
    role: 'Cliente — Direito Civil',
    text: 'Profissionalismo e eficiência. O resultado foi exatamente o que precisávamos. A equipe manteve contato constante e nos orientou em cada passo. Escritório de confiança, sem dúvida.',
    rating: 5,
    avatar: 'R',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const visibleItems = () => {
    const indices = []
    for (let i = -1; i <= 1; i++) {
      indices.push((current + i + testimonials.length) % testimonials.length)
    }
    return indices
  }

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <p className="section-subtitle">O que dizem nossos clientes</p>
          <h2 className="section-title mb-4">Depoimentos</h2>
          <div className="gold-divider mx-auto" />
        </div>

        {/* Carousel */}
        <div className="relative animate-on-scroll">
          {/* Main testimonial */}
          <div className="max-w-3xl mx-auto text-center px-4">
            <div className="relative bg-neutral-light rounded-sm p-10 md:p-14 shadow-md border border-gray-100
                            transition-all duration-500">
              {/* Quote icon */}
              <FaQuoteLeft className="text-secondary/30 text-6xl absolute top-8 left-8" />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <FaStar key={i} className="text-secondary text-lg" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="font-sans text-gray-700 text-lg leading-relaxed italic mb-8 relative z-10">
                "{testimonials[current].text}"
              </blockquote>

              {/* Avatar + Name */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center 
                                text-secondary font-serif text-xl font-bold shadow-md">
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <p className="font-serif font-bold text-primary text-lg leading-tight">
                    {testimonials[current].name}
                  </p>
                  <p className="text-gray-500 font-sans text-sm">{testimonials[current].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              id="testimonial-prev"
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-primary text-primary
                         hover:bg-primary hover:text-white transition-all duration-300 
                         flex items-center justify-center"
              aria-label="Depoimento anterior"
            >
              <FaChevronLeft />
            </button>
            <button
              id="testimonial-next"
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-primary text-primary
                         hover:bg-primary hover:text-white transition-all duration-300
                         flex items-center justify-center"
              aria-label="Próximo depoimento"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                id={`testimonial-dot-${i}`}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-secondary' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
