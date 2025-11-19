import React from 'react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  align?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="uppercase tracking-widest text-brand-orange font-bold text-sm mb-2 block">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
        {title}
      </h2>
      <div className={`h-1 w-24 bg-gradient-to-r from-brand-orange to-brand-violet mt-4 rounded-full ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;