import React from 'react';
import { Cpu, Code2, Rocket, FileDown } from 'lucide-react';

interface HeroProps {
  onDownloadPDF?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDownloadPDF }) => {
  return (
    <header className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-brand-orange"></span>
          <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">Metodologia para Cursos Técnicos</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1] md:leading-[1.2]">
          Revolucione o ensino médio<br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-purple-400 block md:inline mt-2 md:mt-0">Curso Técnico / Profissionalizante</span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-bold text-gray-200 mb-8">
          Forme Desenvolvedores <span className="text-brand-orange underline decoration-brand-orange/50 underline-offset-4">Full Stack</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          A solução educacional completa e "chave na mão" para <strong>Cursos Técnicos e Profissionalizantes em Desenvolvimento de Sistemas</strong>. Prepare seus alunos com a tecnologia mais requisitada do mercado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="https://wa.me/5511992268175" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-brand-orange text-white font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Solicite uma Demonstração <Rocket size={20} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          {onDownloadPDF && (
            <button 
              onClick={onDownloadPDF}
              className="group relative px-8 py-4 bg-white/10 text-white font-bold rounded-full overflow-hidden border border-white/20 hover:bg-white/20 transition-all"
            >
              <span className="flex items-center gap-2">
                <FileDown size={20} />
                Baixar Apresentação
              </span>
            </button>
          )}
        </div>
        
        <div className="mt-4 mb-12">
            <span className="text-sm text-gray-500 font-medium">Sem custo de desenvolvimento para sua escola técnica</span>
        </div>

        {/* Image Section - Full Width Container */}
        <div className="w-full relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-gray-900">
            {/* We use a generic local path. The user must place the file in public folder. */}
            <img 
              src="/qikbyte-ebooks.png" 
              alt="Coleção de Ebooks QIKBYTE - Desenvolvimento de Sistemas" 
              className="w-full h-auto object-contain max-h-[80vh] mx-auto"
            />
            
            {/* Removed overlay and badges to ensure the text in the image is fully visible */}
        </div>

      </div>

      {/* Abstract Tech Visuals */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 opacity-20 hidden xl:block">
         <Code2 size={120} className="text-brand-violet" />
      </div>
      <div className="absolute top-1/3 right-10 -z-10 opacity-20 hidden xl:block">
         <Cpu size={100} className="text-brand-orange" />
      </div>
    </header>
  );
};

export default Hero;