import {
  FaHandshake, FaBriefcase, FaBuilding, FaShieldAlt, FaGavel,
} from 'react-icons/fa'

const areas = [
  {
    icon: FaHandshake,
    title: 'Direito Civil',
    description:
      'Atuamos em contratos, responsabilidade civil, direito das famílias, sucessões e direito do consumidor, garantindo seus direitos nas relações civis.',
    id: 'area-civil',
  },
  {
    icon: FaBriefcase,
    title: 'Direito Trabalhista',
    description:
      'Representamos trabalhadores e empresas em disputas trabalhistas, rescisões, assédio moral, horas extras e demissões injustas.',
    id: 'area-trabalhista',
  },
  {
    icon: FaBuilding,
    title: 'Direito Empresarial',
    description:
      'Assessoria jurídica para empresas de todos os portes: contratos societários, fusões, recuperação judicial e compliance empresarial.',
    id: 'area-empresarial',
  },
  {
    icon: FaShieldAlt,
    title: 'Direito Previdenciário',
    description:
      'Aposentadorias, pensões, benefícios por incapacidade e revisões de benefícios junto ao INSS, com alta taxa de aprovação.',
    id: 'area-previdenciario',
  },
  {
    icon: FaGavel,
    title: 'Direito Penal',
    description:
      'Defesa técnica em processos criminais, habeas corpus, crimes contra patrimônio, crimes de trânsito e crimes financeiros.',
    id: 'area-penal',
  },
]

export default function PracticeAreas() {
  return (
    <section id="areas" className="section-padding bg-neutral-light">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <p className="section-subtitle">O que fazemos</p>
          <h2 className="section-title mb-4">Áreas de Atuação</h2>
          <div className="gold-divider mx-auto" />
          <p className="text-gray-600 font-sans text-base leading-relaxed mt-4">
            Oferecemos suporte jurídico especializado em diversas áreas do direito, 
            sempre com equipe dedicada e foco no seu resultado.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.id}
                id={area.id}
                className="card p-8 group cursor-default animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary rounded-sm flex items-center justify-center mb-6
                                group-hover:bg-secondary transition-colors duration-300 shadow-md">
                  <Icon className="text-secondary text-2xl group-hover:text-primary transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-bold text-primary mb-3 group-hover:text-secondary 
                               transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-gray-600 font-sans text-sm leading-relaxed">
                  {area.description}
                </p>

                {/* Hover line */}
                <div className="mt-6 w-0 h-0.5 bg-secondary group-hover:w-12 transition-all duration-500 rounded-full" />
              </div>
            )
          })}

          {/* CTA Card */}
          <div className="animate-on-scroll" style={{ transitionDelay: '500ms' }}>
            <div className="bg-primary p-8 rounded-sm h-full flex flex-col justify-between min-h-[280px]
                            hover:bg-primary-light transition-colors duration-300 shadow-xl group">
              <div>
                <p className="text-secondary font-sans text-sm font-semibold tracking-widest uppercase mb-4">
                  Sua situação é única
                </p>
                <h3 className="font-serif text-2xl font-bold text-white leading-tight mb-4">
                  Não encontrou sua área? Entre em contato.
                </h3>
                <p className="text-white/70 font-sans text-sm leading-relaxed">
                  Nossa equipe analisará o seu caso e indicará o melhor caminho.
                </p>
              </div>
              <a
                href="#contato"
                id="areas-cta"
                onClick={(e) => {
                  e.preventDefault()
                  const t = document.querySelector('#contato')
                  if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
                }}
                className="btn-primary inline-block text-center text-sm mt-6"
              >
                Fale com um Advogado
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
