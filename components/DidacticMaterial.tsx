import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import Modal from './ui/Modal';
import { BookOpen } from 'lucide-react';

const books = [
  {
    id: 1,
    image: '/assets/images/modulo01/book-01.png',
    title: 'Lógica de Programação',
    description: 'Domine a base da programação com fluxogramas e algoritmos.'
  },
  {
    id: 2,
    image: '/assets/images/modulo01/book-02.png',
    title: 'JavaScript Fundamentos',
    description: 'A linguagem essencial para o desenvolvimento web moderno.'
  },
  {
    id: 3,
    image: '/assets/images/modulo01/book-03.png',
    title: 'Python Fundamentos',
    description: 'Introdução poderosa à linguagem mais versátil do mercado.'
  },
  {
    id: 4,
    image: '/assets/images/modulo01/book-04.png',
    title: 'Caderno de Exercícios JS',
    description: 'Pratique e fixe seus conhecimentos em JavaScript.'
  },
  {
    id: 5,
    image: '/assets/images/modulo01/book-05.png',
    title: 'Caderno de Exercícios Lógica',
    description: 'Exercícios práticos para desenvolver seu raciocínio lógico.'
  },
  {
    id: 6,
    image: '/assets/images/modulo01/book-06.png',
    title: 'Caderno de Exercícios Python',
    description: 'Aprofunde seu conhecimento em Python com exercícios desafiadores.'
  },
  {
    id: 7,
    image: '/assets/images/modulo01/book-07.png',
    title: 'Java Fundamentos',
    description: 'Aprenda a linguagem corporativa mais utilizada no mundo.'
  },
  {
    id: 8,
    image: '/assets/images/modulo01/book-08.png',
    title: 'Caderno de Exercícios Java',
    description: 'Pratique Java com exercícios focados em orientação a objetos.'
  },
  {
    id: 9,
    image: '/assets/images/modulo02/book-09.png',
    title: 'Engenharia de Software',
    description: 'Domine os processos e fundamentos da criação de software profissional.'
  },
  {
    id: 10,
    image: '/assets/images/modulo02/book-10.png',
    title: 'POO com Java - Livro 02',
    description: 'Aprenda os pilares da Orientação a Objetos com a linguagem Java.'
  },
  {
    id: 11,
    image: '/assets/images/modulo02/book-11.png',
    title: 'Caderno de Exercícios POO',
    description: 'Pratique encapsulamento, herança e polimorfismo.'
  },
  {
    id: 12,
    image: '/assets/images/modulo02/book-12.png',
    title: 'Caderno de Exercícios - Modelagem',
    description: 'Exercícios avançados de modelagem de sistemas.'
  },
  {
    id: 13,
    image: '/assets/images/modulo02/book-13.png',
    title: 'Caderno de Exercícios - Java Avançado',
    description: 'Desafios práticos para fixar conceitos de POO.'
  },
  {
    id: 14,
    image: '/assets/images/modulo02/book-14.png',
    title: 'Caderno de Exercícios - POO III',
    description: 'Exercícios de fixação sobre Programação Orientada a Objetos.'
  },
  {
    id: 15,
    image: '/assets/images/modulo02/book-15.png',
    title: 'Caderno de Exercícios - POO IV',
    description: 'Aprofundamento prático em conceitos avançados de POO.'
  },
  {
    id: 16,
    image: '/assets/images/modulo03/book-16.png',
    title: 'Frontend - HTML, CSS & Bootstrap',
    description: 'Crie interfaces modernas e responsivas para a web.'
  },
  {
    id: 17,
    image: '/assets/images/modulo03/book-17.png',
    title: 'Caderno de Exercícios - Frontend',
    description: 'Pratique a criação de layouts e estilização de páginas.'
  },
  {
    id: 18,
    image: '/assets/images/modulo03/book-18.png',
    title: 'React Fundamentos',
    description: 'Aprenda a biblioteca mais popular para interfaces de usuário.'
  },
  {
    id: 19,
    image: '/assets/images/modulo03/book-19.png',
    title: 'Caderno de Exercícios - React',
    description: 'Desenvolva componentes e aplicações interativas com React.'
  },
  {
    id: 20,
    image: '/assets/images/modulo04/book-20.png',
    title: 'Banco de Dados Relacional',
    description: 'Aprenda MySQL e fundamentos de bancos de dados relacionais.'
  },
  {
    id: 21,
    image: '/assets/images/modulo04/book-21.png',
    title: 'Caderno de Exercícios - BD Relacional',
    description: 'Pratique SQL com exercícios de consultas e modelagem.'
  },
  {
    id: 22,
    image: '/assets/images/modulo04/book-22.png',
    title: 'Banco de Dados NoSQL - MongoDB',
    description: 'Domine bancos de dados não relacionais com MongoDB.'
  },
  {
    id: 23,
    image: '/assets/images/modulo04/book-23.png',
    title: 'Caderno de Exercícios - NoSQL',
    description: 'Exercícios práticos com MongoDB e bancos NoSQL.'
  },
  {
    id: 24,
    image: '/assets/images/modulo05/book-24.png',
    title: 'Análise e Transformação de Dados com Python',
    description: 'Aprenda análise de dados com Python e Pandas.'
  },
  {
    id: 25,
    image: '/assets/images/modulo05/book-25.png',
    title: 'Fundamentos de Machine Learning',
    description: 'Introdução ao aprendizado de máquina com conceitos e prática.'
  },
  {
    id: 26,
    image: '/assets/images/modulo06/book-26.png',
    title: 'Backend Node.js',
    description: 'Desenvolva APIs e servidores com Node.js e JavaScript.'
  },
  {
    id: 27,
    image: '/assets/images/modulo06/book-27.png',
    title: 'Backend Java & Spring',
    description: 'Construa aplicações enterprise com Java e Spring Framework.'
  },
  {
    id: 28,
    image: '/assets/images/modulo06/book-28.png',
    title: 'Caderno de Exercícios - Backend Node.js',
    description: 'Pratique desenvolvimento backend com Node.js e Express.'
  },
];

const DidacticMaterial: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-violet/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-orange/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <SectionTitle
          subtitle="Material Didático"
          title="Conteúdo Técnico / Profissionalizante"
        />

        <p className="max-w-2xl text-gray-400 mb-10 px-4">
          Tenha acesso a um material didático completo, desenvolvido por especialistas para acelerar o aprendizado dos seus alunos. Apostilas, slides e exercícios práticos.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-white rounded-full font-bold text-lg transition-all duration-300 hover:bg-brand-orange/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,165,0,0.3)]"
        >
          <BookOpen size={24} />
          Ver Material Didático
          <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Material Didático - Módulos 01 a 06"
      >
        <div className="relative w-full py-8">
          {/* Gradient overlays for fade effect inside modal */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none hidden md:block" />

          <div className="flex overflow-x-auto pb-12 pt-8 gap-8 px-4 md:px-8 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
            {books.map((book) => (
              <div
                key={book.id}
                className="flex-none w-[280px] snap-center group perspective-1000"
              >
                <div className="relative transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                  <div className="relative rounded-lg overflow-hidden shadow-lg shadow-black/60 group-hover:shadow-2xl group-hover:shadow-brand-orange/20 border border-white/5 bg-[#151515]">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-auto object-cover aspect-[3/4]"
                    />
                    <div className="p-4 bg-[#151515] border-t border-white/5">
                      <h3 className="text-lg font-bold text-white mb-2 leading-tight">{book.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{book.description}</p>
                    </div>
                  </div>

                  {/* Reflection effect */}
                  <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-md blur-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default DidacticMaterial;
