import React from 'react';
import { MonitorPlay, BookOpen, MessageCircle, Users } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const features = [
  {
    icon: <MonitorPlay size={40} />,
    title: "Ambiente Virtual (AVA)",
    description: "Plataforma simples e intuitiva com videoaulas, cadernos de exercícios, questionários e áudios das aulas.",
    color: "text-blue-400",
    border: "hover:border-blue-400/50",
    bg: "group-hover:bg-blue-400/10"
  },
  {
    icon: <BookOpen size={40} />,
    title: "Apostilas e Slides",
    description: "Apostilas digitais (com opção de impressão) e slides prontos para TODAS as aulas. O professor foca em ensinar.",
    color: "text-brand-orange",
    border: "hover:border-brand-orange/50",
    bg: "group-hover:bg-brand-orange/10"
  },
  {
    icon: <MessageCircle size={40} />,
    title: "Suporte ao Aluno",
    description: "Seu aluno nunca fica sem resposta. Oferecemos suporte online contínuo para dúvidas técnicas e de conteúdo.",
    color: "text-green-400",
    border: "hover:border-green-400/50",
    bg: "group-hover:bg-green-400/10"
  },
  {
    icon: <Users size={40} />,
    title: "Treinamento Docente",
    description: "Capacitação completa e orientação contínua para seus professores sobre como usar a plataforma e o material.",
    color: "text-brand-violet",
    border: "hover:border-brand-violet/50",
    bg: "group-hover:bg-brand-violet/10"
  }
];

const TheSolution: React.FC = () => {
  return (
    <section>
      <SectionTitle 
        subtitle="Tudo o que você precisa" 
        title="A Solução Completa em um só Lugar" 
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`group p-6 bg-gray-900/50 rounded-2xl border border-white/5 transition-all duration-300 ${feature.border}`}
          >
            <div className={`mb-4 p-3 rounded-xl bg-white/5 w-fit transition-colors duration-300 ${feature.bg} ${feature.color}`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TheSolution;