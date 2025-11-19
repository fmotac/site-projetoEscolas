import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-10">
      <SectionTitle 
        subtitle="Investimento Transparente" 
        title="Escolha o Plano Ideal" 
      />

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        {/* Standard Plan */}
        <div className="bg-gray-900/60 backdrop-blur-md rounded-3xl border border-white/10 p-8 flex flex-col hover:border-brand-orange/30 transition-colors duration-300">
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-400 uppercase tracking-wide">Pacote Inicial</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-5xl font-extrabold text-white">R$ 2.700</span>
              <span className="ml-2 text-xl text-gray-500">/mês</span>
            </div>
            <p className="mt-4 text-gray-400">Ideal para turmas iniciais ou projetos piloto.</p>
          </div>
          
          <div className="flex-1 border-t border-white/10 pt-6 mb-8">
            <ul className="space-y-4">
              <li className="flex items-center text-gray-200">
                <Check className="w-5 h-5 text-brand-orange mr-3" />
                <span>Acesso para até <strong>50 alunos</strong></span>
              </li>
              <li className="flex items-center text-gray-200">
                <Check className="w-5 h-5 text-brand-orange mr-3" />
                <span>Plataforma AVA Completa</span>
              </li>
              <li className="flex items-center text-gray-200">
                <Check className="w-5 h-5 text-brand-orange mr-3" />
                <span>Material Didático Digital</span>
              </li>
              <li className="flex items-center text-gray-200">
                <Check className="w-5 h-5 text-brand-orange mr-3" />
                <span>Suporte Técnico</span>
              </li>
            </ul>
          </div>

          <button className="w-full py-4 rounded-xl border border-brand-orange text-brand-orange font-bold hover:bg-brand-orange hover:text-white transition-all duration-300">
            Selecionar Plano
          </button>
        </div>

        {/* Pro Plan */}
        <div className="relative bg-gradient-to-b from-brand-violet/10 to-gray-900/80 backdrop-blur-md rounded-3xl border border-brand-violet/40 p-8 flex flex-col transform md:-translate-y-4 shadow-2xl shadow-brand-violet/20">
          <div className="absolute top-0 right-0 -mt-3 mr-4">
             <span className="bg-brand-violet text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider">
               <Sparkles size={12} /> Melhor Custo
             </span>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-brand-violet uppercase tracking-wide">Pacote Expansão</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-5xl font-extrabold text-white">R$ 3.500</span>
              <span className="ml-2 text-xl text-gray-500">/mês</span>
            </div>
            <p className="mt-4 text-gray-300">Para escolas que querem escalar o ensino de tecnologia.</p>
          </div>
          
          <div className="flex-1 border-t border-brand-violet/20 pt-6 mb-8">
            <ul className="space-y-4">
              <li className="flex items-center text-white">
                <div className="bg-brand-violet rounded-full p-1 mr-3">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>Acesso para até <strong>100 alunos</strong></span>
              </li>
              <li className="flex items-center text-white">
                <div className="bg-brand-violet rounded-full p-1 mr-3">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>Custo reduzido por aluno</span>
              </li>
              <li className="flex items-center text-white">
                <div className="bg-brand-violet rounded-full p-1 mr-3">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>Todos os benefícios do AVA</span>
              </li>
              <li className="flex items-center text-white">
                <div className="bg-brand-violet rounded-full p-1 mr-3">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>Treinamento de Professores Prioritário</span>
              </li>
            </ul>
          </div>

          <button className="w-full py-4 rounded-xl bg-brand-violet text-white font-bold hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-brand-violet/30">
            Selecionar Plano
          </button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;