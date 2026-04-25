import React from 'react'

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Arthur Albuquerque',
    area: 'Direito Empresarial e Societário',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Dra. Beatriz Ferraz',
    area: 'Direito Tributário',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Dr. Carlos Moreira',
    area: 'Direito Civil e Família',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80&auto=format&fit=crop'
  }
]

export default function Team() {
  return (
    <section id="equipe" className="section-padding bg-[#192c4f] text-white">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-subtitle">Nossos Profissionais</p>
          <h2 className="section-title mb-4 text-white">Conheça Nossa Equipe</h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white/5 rounded-sm p-6 border border-white/10 hover:border-secondary transition-all duration-300 animate-on-scroll hover:-translate-y-1"
            >
              <div className="mb-6 overflow-hidden rounded-sm aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-white text-center mb-2">{member.name}</h3>
              <p className="text-secondary font-sans text-sm text-center font-medium">{member.area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
