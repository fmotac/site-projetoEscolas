import React from 'react';
import { Cpu, CheckCircle2, School, UserCog, GraduationCap, ArrowRight, TrendingUp, Wallet } from 'lucide-react';

const PresentationPDF = React.forwardRef<HTMLDivElement>((props, ref) => {
  // A4 Dimensions: 794px x 1123px (96 DPI)
  // Layout adjustments: Increased font sizes for better readability while maintaining structural integrity.
  return (
    <div ref={ref} className="bg-[#050505] text-white w-[794px] h-[1123px] relative overflow-hidden flex flex-col box-border selection:bg-transparent font-sans">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-violet/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="flex flex-col h-full p-10 justify-between relative z-10 gap-5">
        
        {/* 1. HEADER */}
        <header className="border-b border-gray-800/50 pb-5 flex justify-between items-start shrink-0">
          <div className="flex-1 mr-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2.5 h-2.5 bg-brand-orange rounded-full"></div>
              <span className="text-gray-400 text-xs tracking-[0.3em] uppercase font-semibold">QIKBYTE Education Systems</span>
            </div>
            <h1 className="text-3xl font-black leading-none tracking-tight text-white mb-3">
              Revolucione o ensino médio<br/>
              <span className="text-brand-orange">Curso Técnico / Profissionalizante</span>
            </h1>
            <p className="text-gray-300 text-sm font-medium">
              Forme Desenvolvedores <span className="text-brand-violet font-bold">Full Stack</span> • Solução Educacional Completa
            </p>
          </div>
          <div className="w-16 h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center shrink-0 mt-2">
             <Cpu size={32} className="text-brand-orange" />
          </div>
        </header>

        {/* 2. CONTEXTO & VANTAGEM (The Future) */}
        <section className="grid grid-cols-2 gap-6 shrink-0">
          <div className="bg-gray-900/40 p-5 rounded-xl border border-white/5">
             <div className="flex items-center gap-2.5 mb-3 text-brand-violet">
               <TrendingUp size={20} />
               <h3 className="font-bold text-base uppercase">O Futuro Chegou</h3>
             </div>
             <p className="text-xs text-gray-200 leading-relaxed text-justify">
               O mercado de T.I. vive um déficit de milhares de profissionais. O Ensino Técnico é o momento ideal para iniciar uma jornada de alto impacto. Prepare sua escola para a alta demanda.
             </p>
          </div>
          <div className="bg-gray-900/40 p-5 rounded-xl border border-white/5">
             <div className="flex items-center gap-2.5 mb-3 text-brand-orange">
               <Wallet size={20} />
               <h3 className="font-bold text-base uppercase">Custo Zero de Desenvolvimento</h3>
             </div>
             <p className="text-xs text-gray-200 leading-relaxed text-justify">
               Esqueça a complexidade de criar um curso do zero. Oferecemos programa completo, validado, com material didático, plataforma e suporte inclusos.
             </p>
          </div>
        </section>

        {/* 3. SOLUÇÃO COMPLETA (The Solution) */}
        <section className="shrink-0">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-gray-800 flex-1"></div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">A Solução Completa</h3>
            <div className="h-px bg-gray-800 flex-1"></div>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {[
              { title: "Ambiente Virtual (AVA)", desc: "Plataforma intuitiva com videoaulas e exercícios.", icon: <Cpu size={20}/> },
              { title: "Apostilas e Slides", desc: "Material digital pronto para TODAS as aulas.", icon: <CheckCircle2 size={20}/> },
              { title: "Suporte ao Aluno", desc: "Monitoria online contínua para dúvidas técnicas.", icon: <UserCog size={20}/> },
              { title: "Treinamento Docente", desc: "Capacitação completa para seus professores.", icon: <School size={20}/> }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/5 flex flex-col gap-2">
                <div className="text-brand-violet">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-xs text-white mb-1 leading-tight">{item.title}</h4>
                  <p className="text-[11px] text-gray-300 leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. ECOSSISTEMA (Ecosystem) */}
        <section className="flex-1 min-h-0">
           <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 h-full flex flex-col">
              <h3 className="text-sm font-bold text-center text-brand-orange uppercase tracking-widest mb-5">
                Um Ecossistema de Vantagens
              </h3>
              
              <div className="grid grid-cols-3 gap-8 h-full">
                {/* Escola */}
                <div className="flex flex-col gap-3 border-r border-gray-800 pr-6 last:border-0">
                  <div className="flex items-center gap-3 mb-2">
                    <School size={24} className="text-brand-violet" />
                    <h4 className="font-bold text-sm text-white">PARA A ESCOLA</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="text-xs text-gray-300 leading-snug">• Diferencial competitivo para captação.</li>
                    <li className="text-xs text-gray-300 leading-snug">• Implementação rápida e alinhada ao mercado.</li>
                    <li className="text-xs text-gray-300 leading-snug">• Custo zero de produção de conteúdo.</li>
                  </ul>
                </div>

                {/* Professor */}
                <div className="flex flex-col gap-3 border-r border-gray-800 pr-6 last:border-0">
                  <div className="flex items-center gap-3 mb-2">
                    <UserCog size={24} className="text-brand-orange" />
                    <h4 className="font-bold text-sm text-white">PARA O PROFESSOR</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="text-xs text-gray-300 leading-snug">• Material de aula 100% pronto.</li>
                    <li className="text-xs text-gray-300 leading-snug">• Treinamento completo da plataforma.</li>
                    <li className="text-xs text-gray-300 leading-snug">• Foco total na mentoria do aluno.</li>
                  </ul>
                </div>

                {/* Aluno */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap size={24} className="text-white" />
                    <h4 className="font-bold text-sm text-white">PARA O ALUNO</h4>
                  </div>
                   <ul className="space-y-3">
                    <li className="text-xs text-gray-300 leading-snug">• Formação em área de alta demanda.</li>
                    <li className="text-xs text-gray-300 leading-snug">• Suporte para dúvidas de código.</li>
                    <li className="text-xs text-gray-300 leading-snug">• Portfólio prático de projetos.</li>
                  </ul>
                </div>
              </div>
           </div>
        </section>

        {/* 5. PREÇOS (Pricing) */}
        <section className="shrink-0">
           <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-gray-700"></span> Investimento Mensal
           </h3>
           <div className="grid grid-cols-2 gap-8">
              <div className="border border-gray-800 rounded-2xl p-5 flex justify-between items-center bg-gray-900/30">
                <div>
                  <p className="text-brand-orange text-xs font-bold uppercase mb-1">Pacote Inicial</p>
                  <p className="text-[11px] text-gray-400">Até 50 Alunos</p>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bold text-white">R$ 2.700</span>
                </div>
              </div>

              <div className="border border-brand-violet/50 rounded-2xl p-5 flex justify-between items-center bg-brand-violet/10 relative overflow-hidden">
                <div className="absolute right-0 top-0 bg-brand-violet text-white text-[9px] px-3 py-1 rounded-bl font-bold tracking-wider">MELHOR CUSTO</div>
                <div>
                  <p className="text-brand-violet text-xs font-bold uppercase mb-1">Pacote Expansão</p>
                  <p className="text-[11px] text-gray-300">Até 100 Alunos</p>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bold text-white">R$ 3.500</span>
                </div>
              </div>
           </div>
        </section>

        {/* 6. FOOTER */}
        <footer className="border-t border-gray-800 pt-6 flex justify-between items-end shrink-0">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-base">
              adm@qikbyte.com.br
            </div>
            <p className="text-xs text-gray-500 mt-1">www.qikbyte.com.br</p>
          </div>
          
          <div className="flex flex-col items-end">
             <div className="flex items-center gap-2 px-4 py-2 bg-[#25D366] rounded-lg">
               <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
               <span className="text-sm font-bold text-white">(11) 99226-8175</span>
             </div>
          </div>
        </footer>

      </div>
    </div>
  );
});

export default PresentationPDF;