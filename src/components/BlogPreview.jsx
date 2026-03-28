import { FaArrowRight, FaCalendarAlt, FaUser } from 'react-icons/fa'

const articles = [
  {
    id: 'blog-1',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&auto=format&fit=crop',
    category: 'Direito Trabalhista',
    title: 'O que mudou nas leis trabalhistas em 2024 e como isso afeta você',
    summary:
      'As recentes atualizações na legislação trabalhista brasileira trouxeram mudanças importantes para trabalhadores e empregadores. Saiba o que mudou e como se proteger.',
    author: 'Dr. Carlos Silva',
    date: '15 Mar 2024',
  },
  {
    id: 'blog-2',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80&auto=format&fit=crop',
    category: 'Direito Previdenciário',
    title: 'Guia completo: Como requerer sua aposentadoria sem erros',
    summary:
      'Muitas pessoas perdem benefícios por erros evitáveis no processo de aposentadoria. Preparamos um guia passo a passo para você não perder nenhum direito.',
    author: 'Dra. Mariana Santos',
    date: '02 Fev 2024',
  },
  {
    id: 'blog-3',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80&auto=format&fit=crop',
    category: 'Direito Empresarial',
    title: 'Compliance jurídico: Por que sua empresa precisa disso agora',
    summary:
      'Empresas que investem em compliance reduzem drasticamente os riscos de processos e penalidades. Entenda a importância e como implementar em seu negócio.',
    author: 'Dr. Carlos Silva',
    date: '18 Jan 2024',
  },
]

export default function BlogPreview() {
  return (
    <section id="blog" className="section-padding bg-neutral-light">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 animate-on-scroll">
          <div>
            <p className="section-subtitle">Conteúdo Jurídico</p>
            <h2 className="section-title mb-2">Blog &amp; Artigos</h2>
            <div className="gold-divider" />
          </div>
          <a
            href="#blog"
            id="blog-see-all"
            className="btn-outline-dark text-sm whitespace-nowrap self-start md:self-auto"
          >
            Ver Todos os Artigos
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              id={article.id}
              className="card overflow-hidden group animate-on-scroll"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="overflow-hidden h-52">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                {/* Category badge */}
                <span className="inline-block bg-secondary/15 text-secondary font-sans text-xs 
                                 font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-4">
                  {article.category}
                </span>

                <h3 className="font-serif text-xl font-bold text-primary mb-3 leading-snug
                               group-hover:text-secondary transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-gray-600 font-sans text-sm leading-relaxed mb-5 line-clamp-3">
                  {article.summary}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-gray-400 text-xs font-sans mb-5 
                                border-t border-gray-100 pt-4">
                  <span className="flex items-center gap-1.5">
                    <FaUser className="text-secondary" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-secondary" />
                    {article.date}
                  </span>
                </div>

                {/* Read more */}
                <a
                  href="#blog"
                  id={`${article.id}-read-more`}
                  className="inline-flex items-center gap-2 text-secondary font-sans text-sm 
                             font-semibold hover:gap-4 transition-all duration-300 group/link"
                >
                  Ler Artigo Completo
                  <FaArrowRight className="text-xs group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
