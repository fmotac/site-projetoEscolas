import React, { useRef } from 'react';
import Hero from './components/Hero';
import TheFuture from './components/TheFuture';
import TheSolution from './components/TheSolution';
import Ecosystem from './components/Ecosystem';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import PresentationPDF from './components/PresentationPDF';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const pdfRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    if (pdfRef.current) {
      // @ts-ignore - html2pdf is loaded via CDN
      if (window.html2pdf) {
        const opt = {
          margin: 0,
          filename: 'Apresentacao_Qikbyte_Tecnico.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          // High scale for crisp text on the 794px container
          html2canvas: { scale: 2.5, useCORS: true, backgroundColor: '#050505', scrollY: 0 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        // @ts-ignore
        window.html2pdf().set(opt).from(pdfRef.current).save();
      } else {
        alert("O gerador de PDF ainda está carregando. Tente novamente em alguns segundos.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 overflow-x-hidden selection:bg-brand-orange selection:text-white">
      {/* Background Ambient Effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-violet/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20 pb-20">
        <Hero onDownloadPDF={handleDownloadPDF} />
        <TheFuture />
        <TheSolution />
        <Ecosystem />
        <Pricing />
      </div>
      
      <Footer />
      <WhatsAppButton />

      {/* Hidden container for PDF generation. 
          Important: It must render, but be hidden from view. 
          Using absolute positioning off-screen ensures layout integrity. */}
      <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
        <PresentationPDF ref={pdfRef} />
      </div>
    </div>
  );
};

export default App;