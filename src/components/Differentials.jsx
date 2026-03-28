import { FaUserTie, FaStar, FaAward, FaEye } from 'react-icons/fa'

const differentials = [
  {
    icon: FaUserTie,
    title: 'Atendimento Personalizado',
    description:
      'Cada cliente recebe atenção exclusiva. Nossos advogados dedicam tempo para entender profundamente cada situação antes de agir.',
    id: 'diff-atendimento',
  },
  {
    icon: FaStar,
    title: 'Equipe Especializada',
    description:
      'Contamos com advogados pós-graduados e especialistas em cada área de atuação, com atualização constante na legislação.',
    id: 'diff-equipe',
  },
  {
    icon: FaAward,
    title: 'Experiência Comprovada',
    description:
      'Mais de 5.000 casos bem-sucedidos ao longo de 15 anos, com reconhecimento em tribunais de todo o Brasil.',
    id: 'diff-experiencia',
  },
  {
    icon: FaEye,
    title: 'Transparência Total',
    description:
      'O cliente acompanha cada etapa do processo. Sem surpresas: honorários claros, prazos realistas e comunicação constante.',
    id: 'diff-transparencia',
  },
]

export default function Differentials() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full
                      translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full
                      -translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <p className="text-secondary font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            Por que nos escolher
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Nossos Diferenciais
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
          <p className="text-white/60 font-sans text-base leading-relaxed mt-4">
            O que nos move é a sua confiança. Veja o que torna Silva &amp; Associados único.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((diff, index) => {
            const Icon = diff.icon
            return (
              <div
                key={diff.id}
                id={diff.id}
                className="group p-8 rounded-sm border border-white/10 hover:border-secondary/50
                           hover:bg-white/5 transition-all duration-400 cursor-default animate-on-scroll
                           text-center"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Icon circle */}
                <div className="w-20 h-20 rounded-full border-2 border-secondary/40 flex items-center 
                                justify-center mx-auto mb-6 group-hover:border-secondary 
                                group-hover:bg-secondary/10 transition-all duration-300">
                  <Icon className="text-secondary text-3xl" />
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-secondary
                               transition-colors duration-300">
                  {diff.title}
                </h3>
                <p className="text-white/60 font-sans text-sm leading-relaxed group-hover:text-white/80
                              transition-colors duration-300">
                  {diff.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-16 p-8 bg-secondary/10 border border-secondary/30 rounded-sm 
                        flex flex-col md:flex-row items-center justify-between gap-6 animate-on-scroll">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-1">
              Pronto para defender seus direitos?
            </h3>
            <p className="text-white/60 font-sans text-sm">
              Agende uma consulta gratuita e conheça a nossa equipe.
            </p>
          </div>
          <a
            href="#contato"
            id="diff-cta"
            onClick={(e) => {
              e.preventDefault()
              const t = document.querySelector('#contato')
              if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
            }}
            className="btn-primary whitespace-nowrap flex-shrink-0"
          >
            Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  )
}
