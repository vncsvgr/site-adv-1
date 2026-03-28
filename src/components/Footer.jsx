import { FaBalanceScale, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de Atuação', href: '#areas' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contato', href: '#contato' },
]

const areas = [
  'Direito Civil',
  'Direito Trabalhista',
  'Direito Empresarial',
  'Direito Previdenciário',
  'Direito Penal',
]

const socials = [
  { icon: FaFacebookF, href: '#', label: 'Facebook', id: 'footer-facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram', id: 'footer-instagram' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn', id: 'footer-linkedin' },
  { icon: FaWhatsapp, href: '#', label: 'WhatsApp', id: 'footer-whatsapp' },
]

const handleNavClick = (e, href) => {
  e.preventDefault()
  const target = document.querySelector(href)
  if (target) {
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }
}

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Top section */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center">
                <FaBalanceScale className="text-primary text-lg" />
              </div>
              <div>
                <p className="font-serif text-white font-bold text-lg leading-none">Silva &amp; Associados</p>
                <p className="text-secondary text-xs tracking-widest mt-0.5">ADVOCACIA</p>
              </div>
            </div>
            <p className="text-white/60 font-sans text-sm leading-relaxed mb-6">
              Mais de 15 anos defendendo direitos com ética, transparência e resultados comprovados.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    id={s.id}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-sm border border-white/20 flex items-center justify-center
                               text-white/60 hover:bg-secondary hover:border-secondary hover:text-primary
                               transition-all duration-300 text-sm"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-secondary text-lg font-bold mb-5">Links Rápidos</h3>
            <nav aria-label="Links rápidos do rodapé">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      id={`footer-link-${link.href.replace('#', '')}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-white/60 hover:text-secondary font-sans text-sm 
                                 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary/40 group-hover:bg-secondary 
                                       transition-colors duration-300 flex-shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-serif text-secondary text-lg font-bold mb-5">Áreas de Atuação</h3>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area}>
                  <a
                    href="#areas"
                    id={`footer-area-${area.toLowerCase().replace(/\s/g, '-')}`}
                    onClick={(e) => handleNavClick(e, '#areas')}
                    className="text-white/60 hover:text-secondary font-sans text-sm 
                               transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/40 group-hover:bg-secondary 
                                     transition-colors duration-300 flex-shrink-0" />
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-secondary text-lg font-bold mb-5">Contato</h3>
            <div className="space-y-4 text-white/60 font-sans text-sm">
              <p>Av. Paulista, 1000 — 10º andar<br />São Paulo, SP</p>
              <p>(11) 3456-7890</p>
              <p>contato@silvaadvocacia.com.br</p>
              <p>Seg–Sex: 9h às 18h<br />Sáb: 9h às 13h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 font-sans text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Silva &amp; Associados Advocacia. Todos os direitos reservados.
          </p>
          <p className="text-white/30 font-sans text-xs">
            OAB/SP Nº 123.456
          </p>
        </div>
      </div>
    </footer>
  )
}
