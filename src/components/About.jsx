import { FaCheckCircle } from 'react-icons/fa'

const values = [
  {
    title: 'Missão',
    text: 'Oferecer soluções jurídicas eficazes, éticas e personalizadas, protegendo os direitos de nossos clientes com excelência.',
  },
  {
    title: 'Visão',
    text: 'Ser referência em advocacia no Brasil, reconhecidos pela qualidade, inovação e compromisso com a justiça.',
  },
  {
    title: 'Valores',
    text: 'Ética, transparência, dedicação e respeito são os pilares que guiam cada decisão que tomamos em nome de nossos clientes.',
  },
]

const highlights = [
  'Advogados com pós-graduação e especializações',
  'Atendimento humanizado e próximo',
  'Atuação em todo o território nacional',
  'Honorários transparentes e acessíveis',
]

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-left">
            <div className="relative rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop"
                alt="Equipe do escritório de advocacia"
                className="w-full h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-sm shadow-2xl max-w-[220px]">
              <p className="font-serif text-4xl font-bold text-secondary">+15</p>
              <p className="font-sans text-sm text-white/80 mt-1 leading-snug">
                Anos de atuação no mercado jurídico brasileiro
              </p>
            </div>

            {/* Gold accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-secondary rounded-sm -z-10" />
          </div>

          {/* Content Side */}
          <div className="animate-right">
            <p className="section-subtitle">Sobre o Escritório</p>
            <h2 className="section-title mb-4">
              Tradição, expertise e comprometimento com a sua causa
            </h2>
            <div className="gold-divider" />

            <p className="text-gray-600 font-sans text-base leading-relaxed mb-6">
              Fundado em 2009 na cidade de São Paulo, o escritório <strong>Silva &amp; Associados</strong> 
              construiu ao longo de mais de 15 anos uma sólida reputação baseada em resultados concretos 
              e atendimento humanizado. Nossa equipe multidisciplinar atua nas principais áreas do direito, 
              sempre com foco na solução mais eficiente para cada cliente.
            </p>

            <p className="text-gray-600 font-sans text-base leading-relaxed mb-8">
              Acreditamos que cada caso é único e merece atenção especializada. Por isso, nos dedicamos 
              integralmente a entender a situação de cada cliente antes de traçar a melhor estratégia jurídica.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-gray-700">
                  <FaCheckCircle className="text-secondary text-lg mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Mission/Vision/Values */}
            <div className="grid gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex gap-4 p-4 bg-neutral-light rounded-sm border-l-4 border-secondary
                             hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <h3 className="font-serif font-bold text-primary text-lg mb-1">{v.title}</h3>
                    <p className="text-gray-600 font-sans text-sm leading-relaxed">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
