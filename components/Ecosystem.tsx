import React from 'react';
import { School, GraduationCap, UserCog } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const Ecosystem: React.FC = () => {
  return (
    <section>
      <SectionTitle 
        subtitle="Benefícios para todos" 
        title="Um Ecossistema de Vantagens" 
      />

      <div className="grid md:grid-cols-3 gap-8">
        {/* School Card */}
        <div className="relative p-8 rounded-3xl bg-gradient-to-b from-gray-900 to-black border border-white/10 overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <School size={120} />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-brand-violet rounded-full flex items-center justify-center mb-6 shadow-lg shadow-brand-violet/30">
              <School size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Para a ESCOLA</h3>
            <ul className="space-y-4">
              <li className="text-gray-300 text-sm border-l-2 border-brand-violet pl-4">
                Diferencial competitivo para captação de alunos para cursos técnicos.
              </li>
              <li className="text-gray-300 text-sm border-l-2 border-brand-violet pl-4">
                Custo zero de desenvolvimento de conteúdo especializado.
              </li>
              <li className="text-gray-300 text-sm border-l-2 border-brand-violet pl-4">
                Implementação rápida para cursos profissionalizantes e itinerários formativos.
              </li>
            </ul>
          </div>
        </div>

        {/* Teacher Card */}
        <div className="relative p-8 rounded-3xl bg-gradient-to-b from-gray-900 to-black border border-white/10 overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <UserCog size={120} />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mb-6 shadow-lg shadow-brand-orange/30">
              <UserCog size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Para o PROFESSOR</h3>
            <ul className="space-y-4">
              <li className="text-gray-300 text-sm border-l-2 border-brand-orange pl-4">
                Material de aula 100% pronto (slides técnicos, apostilas).
              </li>
              <li className="text-gray-300 text-sm border-l-2 border-brand-orange pl-4">
                Treinamento completo para uso da plataforma.
              </li>
              <li className="text-gray-300 text-sm border-l-2 border-brand-orange pl-4">
                Foco na mentoria técnica e no desenvolvimento do aluno.
              </li>
            </ul>
          </div>
        </div>

        {/* Student Card */}
        <div className="relative p-8 rounded-3xl bg-gradient-to-b from-gray-900 to-black border border-white/10 overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <GraduationCap size={120} />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-white/20">
              <GraduationCap size={24} className="text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Para o ALUNO</h3>
            <ul className="space-y-4">
              <li className="text-gray-300 text-sm border-l-2 border-white pl-4">
                Formação técnica sólida em área de alta demanda.
              </li>
              <li className="text-gray-300 text-sm border-l-2 border-white pl-4">
                Suporte online contínuo para tirar dúvidas de código.
              </li>
              <li className="text-gray-300 text-sm border-l-2 border-white pl-4">
                Criação de um portfólio prático de projetos Full Stack.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Ecosystem;