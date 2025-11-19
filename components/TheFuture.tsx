import React from 'react';
import { AlertTriangle, CheckCircle2, TrendingUp } from 'lucide-react';

const TheFuture: React.FC = () => {
  return (
    <section className="relative">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              O Futuro Chegou. <br />
              <span className="text-brand-orange">Sua Instituição Está Pronta?</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              O mercado de T.I. vive um déficit de milhares de profissionais. O 
              <strong className="text-brand-violet"> Desenvolvedor Full Stack </strong>
              é o mais valorizado por empresas de todos os tamanhos. 
            </p>
            <p className="text-gray-300 leading-relaxed">
              O <strong>Ensino Técnico e Profissionalizante</strong> é o momento ideal para iniciar uma jornada de formação profissional de alto impacto na área de Desenvolvimento de Sistemas.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-brand-violet/20 p-2 rounded-lg text-brand-violet">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Alta Demanda</h4>
                  <p className="text-sm text-gray-400">Profissão mais procurada no mercado atual.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-brand-orange/20 p-2 rounded-lg text-brand-orange">
                   <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Foco Profissionalizante</h4>
                  <p className="text-sm text-gray-400">Totalmente alinhado com a formação técnica prática.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/40 rounded-2xl p-8 border border-brand-violet/30 relative overflow-hidden group hover:border-brand-orange/50 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand-orange">ZERO Custo</span> de Desenvolvimento
            </h4>
            <p className="text-gray-300 mb-6">
              Esqueça a complexidade de criar um curso técnico de tecnologia do zero. Nós oferecemos um programa completo e validado.
            </p>
            <ul className="space-y-3">
              {[
                "Material didático técnico incluso",
                "Plataforma própria (LMS)",
                "Suporte técnico integral",
                "Currículo validado pelo mercado"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 size={16} className="text-brand-violet" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheFuture;