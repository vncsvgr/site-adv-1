import { FaWhatsapp } from 'react-icons/fa'

export default function FloatingWhatsApp() {
  const phoneNumber = '5511999999999'
  const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta jurídica.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      id="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap
                       bg-gray-900 text-white font-sans text-xs font-medium px-3 py-2 rounded-sm shadow-lg
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Falar pelo WhatsApp
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
      </span>

      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-10 animation-delay-700" />

      {/* Button */}
      <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center
                      shadow-lg hover:bg-green-400 hover:shadow-xl transition-all duration-300
                      transform hover:scale-110">
        <FaWhatsapp className="text-white text-2xl" />
      </div>
    </a>
  )
}
