import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaBalanceScale } from 'react-icons/fa'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de Atuação', href: '#areas' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const navHeight = 80
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a1f44] shadow-[0_4px_20px_rgba(0,0,0,0.3)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="flex items-center gap-3 group"
          id="navbar-logo"
        >
          <div className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center shadow-md
                          group-hover:bg-secondary-light transition-colors duration-300">
            <FaBalanceScale className="text-primary text-lg" />
          </div>
          <div>
            <span className="font-serif text-white font-bold text-xl leading-none tracking-wide">
              Silva &amp; Associados
            </span>
            <p className="text-secondary text-xs tracking-widest font-sans font-medium mt-0.5">
              ADVOCACIA &amp; CONSULTORIA
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-${link.href.replace('#', '')}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white/80 hover:text-secondary font-sans text-sm font-medium
                         transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary
                               group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
          <a
            href="#contato"
            id="nav-cta"
            onClick={(e) => handleNavClick(e, '#contato')}
            className="btn-primary text-sm ml-4"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Hamburger */}
        <button
          id="hamburger-btn"
          className="lg:hidden text-white text-2xl p-2 hover:text-secondary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0a1f44] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`mobile-nav-${link.href.replace('#', '')}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white/80 hover:text-secondary font-sans text-base font-medium
                         transition-colors duration-300 border-b border-white/10 pb-4"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            id="mobile-nav-cta"
            onClick={(e) => handleNavClick(e, '#contato')}
            className="btn-primary text-sm text-center mt-2"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  )
}
