import { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa'

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    label: 'Endereço',
    value: 'Av. Paulista, 1000 — 10º andar\nSão Paulo, SP — CEP 01310-100',
    id: 'contact-address',
  },
  {
    icon: FaPhone,
    label: 'Telefone',
    value: '(11) 3456-7890\n(11) 99876-5432',
    id: 'contact-phone',
  },
  {
    icon: FaEnvelope,
    label: 'E-mail',
    value: 'contato@silvaadvocacia.com.br\natendimento@silvaadvocacia.com.br',
    id: 'contact-email',
  },
  {
    icon: FaClock,
    label: 'Horário',
    value: 'Segunda a Sexta: 9h às 18h\nSábado: 9h às 13h',
    id: 'contact-hours',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setError('Por favor, preencha todos os campos obrigatórios (*).')
      return
    }
    setError('')
    
    const text = `Olá, gostaria de entrar em contato.
    
*Nome:* ${form.name}
*E-mail:* ${form.email}
*Telefone:* ${form.phone}

*Mensagem:* 
${form.message}`

    const whatsappNumber = '5511998765432' // Substitua pelo número real da empresa
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    
    window.open(whatsappUrl, '_blank')
    
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <p className="section-subtitle">Entre em Contato</p>
          <h2 className="section-title mb-4">Fale com Nossa Equipe</h2>
          <div className="gold-divider mx-auto" />
          <p className="text-gray-600 font-sans text-base leading-relaxed mt-4">
            Agende sua consulta hoje mesmo. Nossa equipe retornará o contato em até 24 horas úteis.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-6 items-start">
          {/* Form */}
          <div className="animate-left">
            {submitted ? (
              <div className="bg-neutral-light rounded-sm p-12 text-center border border-secondary/30 shadow-md">
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheckCircle className="text-secondary text-4xl" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                  Mensagem Enviada!
                </h3>
                <p className="text-gray-600 font-sans text-base leading-relaxed mb-6">
                  Obrigado por entrar em contato, <strong>{form.name}</strong>. Nossa equipe retornará em até 24 horas úteis.
                </p>
                <button
                  id="contact-reset"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                  className="btn-outline-dark text-sm"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="bg-neutral-light rounded-sm p-8 md:p-10 shadow-md border border-gray-100"
                noValidate
              >
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                  Solicite uma Consulta
                </h3>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-sans text-sm font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3
                                 font-sans text-sm text-gray-800 placeholder-gray-400
                                 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary
                                 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-sans text-sm font-medium mb-2">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3
                                 font-sans text-sm text-gray-800 placeholder-gray-400
                                 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary
                                 transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="phone" className="block text-gray-700 font-sans text-sm font-medium mb-2">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3
                               font-sans text-sm text-gray-800 placeholder-gray-400
                               focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary
                               transition-colors duration-300"
                  />
                </div>

                <div className="mb-7">
                  <label htmlFor="message" className="block text-gray-700 font-sans text-sm font-medium mb-2">
                    Sua Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Descreva brevemente sua situação jurídica..."
                    className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3
                               font-sans text-sm text-gray-800 placeholder-gray-400 resize-none
                               focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary
                               transition-colors duration-300"
                  />
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm font-sans rounded-sm border border-red-200">
                    {error}
                  </div>
                )}

                <button
                  id="contact-submit"
                  type="submit"
                  className="btn-primary w-full text-base flex items-center justify-center gap-3"
                >
                  Enviar Mensagem
                </button>

                <p className="text-gray-400 font-sans text-xs text-center mt-4">
                  Seus dados são protegidos e tratados com absoluta confidencialidade.
                </p>
              </form>
            )}
          </div>

          {/* Info + Map */}
          <div className="animate-right space-y-8">
            {/* Contact info cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <div
                    key={info.id}
                    id={info.id}
                    className="bg-neutral-light p-5 rounded-sm border border-gray-100 
                               hover:border-secondary/40 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="text-secondary text-sm" />
                      </div>
                      <div>
                        <p className="font-sans text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                          {info.label}
                        </p>
                        <p className="font-sans text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Map embed */}
            <div className="rounded-sm overflow-hidden shadow-md border border-gray-100 animate-on-scroll">
              <iframe
                id="contact-map"
                title="Localização do escritório"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6553!3d-23.5613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
