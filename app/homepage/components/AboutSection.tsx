'use client';
import React from 'react';

const TECH_STACK = [
  { name: 'Next.js', icon: '▲', color: '#A78BFA', desc: 'Full-stack framework' },
  { name: 'React', icon: '⚛', color: '#60A5FA', desc: 'UI library' },
  { name: 'TypeScript', icon: 'TS', color: '#34D399', desc: 'Type safety' },
  { name: 'Python', icon: '🐍', color: '#FBBF24', desc: 'Backend & AI' },
  { name: 'OpenCV', icon: '👁', color: '#F472B6', desc: 'Computer Vision' },
  { name: 'PostgreSQL', icon: '🐘', color: '#818CF8', desc: 'Base de datos' },
  { name: 'MedusaJS', icon: '🛒', color: '#34D399', desc: 'E-commerce' },
  { name: 'Strapi', icon: '🎯', color: '#FB923C', desc: 'CMS headless' },
  { name: 'Raspberry Pi', icon: '🍓', color: '#F87171', desc: 'Hardware' },
  { name: 'Java', icon: '☕', color: '#EAB308', desc: 'Backend'},
  { name: 'Angular', icon: 'A', color: '#DD1B16', desc: 'Frontend framework' },
  { name: 'GitHub', icon: '🐙', color: '#333', desc: 'Version control' }
  
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-[-200px] w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4 reveal-on-scroll" data-delay="0">
          <div className="h-px flex-1 max-w-[60px]" style={{ background: 'var(--accent-violet)' }} />
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent-violet)' }}>
            Sobre mí
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Bio */}
          <div>
            <h2
              className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-8 reveal-on-scroll"
              style={{ color: 'var(--text-primary)' }}
              data-delay="100"
            >
              Construyendo el
              <br />
              <span className="gradient-text italic">futuro digital</span>
              <br />
              desde Lima
            </h2>

            <div className="space-y-5 reveal-on-scroll" data-delay="200">
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Soy estudiante de <strong style={{ color: 'var(--text-primary)' }}>Ingeniería de Sistemas Computacionales</strong> en la Universidad Privada del Norte (UPN), actualmente en el 8vo ciclo. Disfruto abordando problemas desde diferentes ángulos: ya sea creando interfaces dinámicas con {''}
                <strong style={{ color: 'var(--text-primary)' }}>Next.js</strong> o <strong style={{ color: 'var(--text-primary)' }}>Angular</strong>, estructurando lógica backend con <strong style={{ color: 'var(--text-primary)' }}>Java</strong>, o procesando grandes volúmenes de información mediante herramientas de Big Data y Data Analytics.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Desarrollé un proyecto de robótica y detección de objetos en tiempo real <strong style={{ color: 'var(--text-primary)' }}>(Python, OpenCV, Raspberry Pi)</strong> que fue galardonado con el <strong style={{ color: 'var(--accent-violet)' }}>1er lugar en EXPOINGENIERÍA</strong>. Siempre estoy buscando el próximo reto técnico para seguir creciendo y aportando valor a través de la tecnología.
              </p>

            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 mt-10 reveal-on-scroll" data-delay="300">
              {[
                { label: 'Universidad', value: 'UPN Lima' },
                { label: 'Carrera', value: 'Ing. Sistemas' },
                { label: 'Ciclo', value: '8vo ciclo' },
                { label: 'Idiomas', value: 'ES / EN' },
              ]?.map((fact) => (
                <div
                  key={fact?.label}
                  className="p-4 rounded-xl"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
                >
                  <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>
                    {fact?.label}
                  </div>
                  <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {fact?.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tech stack bento grid */}
          <div className="reveal-on-scroll" data-delay="200">
            <div className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: 'var(--text-muted)' }}>
              Stack técnico
            </div>

            <div className="grid grid-cols-3 gap-3">
              {TECH_STACK?.map((tech, i) => (
                <div
                  key={tech?.name}
                  data-cursor-hover
                  className="card-hover card-shine relative p-4 rounded-2xl flex flex-col items-center text-center cursor-default"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    animationDelay: `${i * 0.05}s`,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-3 font-mono font-bold"
                    style={{ background: `${tech?.color}15`, color: tech?.color, border: `1px solid ${tech?.color}30` }}
                  >
                    {tech?.icon}
                  </div>
                  <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                    {tech?.name}
                  </div>
                  <div className="text-[10px] mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    {tech?.desc}
                  </div>

                  {/* Hover accent */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${tech?.color}08 0%, transparent 70%)` }}
                  />
                </div>
              ))}
            </div>

            {/* Currently learning */}
            <div
              className="mt-6 p-5 rounded-2xl flex items-center gap-4"
              style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(217,70,239,0.08))', border: '1px solid var(--border-medium)' }}
            >
              <div className="text-2xl animate-float">🚀</div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--accent-violet)' }}>
                  Aprendiendo ahora
                </div>
                <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  AWS · Docker · Machine Learning · React Native
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}