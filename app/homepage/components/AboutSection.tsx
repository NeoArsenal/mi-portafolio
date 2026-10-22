'use client';
import React from 'react';

interface TechItem {
  name: string;
  desc: string;
  color: string;
  icon: React.ReactNode;
}

const TECH_STACK: TechItem[] = [
  {
    name: 'Next.js',
    desc: 'Full-stack framework',
    color: '#E2E8F0',
    icon: (
      <svg width="22" height="22" viewBox="0 0 180 180" fill="none">
        <mask id="nextjs-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#nextjs-mask)">
          <circle cx="90" cy="90" r="90" fill="#000000" stroke="#FFFFFF" strokeWidth="6" />
          <path d="M149.508 157.086L69.142 54H54V125.97H66.1135V69.3831L139.999 164.845C143.333 162.614 146.509 159.978 149.508 157.086Z" fill="url(#nextjs-grad)" />
          <rect x="115" y="54" width="12" height="72" fill="url(#nextjs-grad-2)" />
        </g>
        <defs>
          <linearGradient id="nextjs-grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nextjs-grad-2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: 'React',
    desc: 'UI library',
    color: '#61DAFB',
    icon: (
      <svg width="24" height="24" viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    )
  },
  {
    name: 'TypeScript',
    desc: 'Type safety',
    color: '#3178C6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M11.5 8H5.5V10H7.5V17H9.5V10H11.5V8ZM13.5 14.5C13.5 15.6 14.4 16.5 15.5 16.5H17.5C18.6 16.5 19.5 15.6 19.5 14.5V13.5C19.5 12.4 18.6 11.5 17.5 11.5H15.5V10H19.5V8H15.5C14.4 8 13.5 8.9 13.5 10V11.5C13.5 12.6 14.4 13.5 15.5 13.5H17.5V14.5H13.5V14.5Z" fill="white" />
      </svg>
    )
  },
  {
    name: 'Spring Boot',
    desc: 'Backend enterprise',
    color: '#6DB33F',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21.57 10.43c-.45-.63-1.07-1.12-1.78-1.42l-5.83-2.48c-1.25-.53-2.67-.53-3.92 0L4.21 9.01c-.71.3-1.33.79-1.78 1.42-.45.63-.7 1.38-.7 2.16 0 .78.25 1.53.7 2.16.45.63 1.07 1.12 1.78 1.42l5.83 2.48c.63.27 1.3.4 1.96.4s1.33-.13 1.96-.4l5.83-2.48c.71-.3 1.33-.79 1.78-1.42.45-.63.7-1.38.7-2.16 0-.78-.25-1.53-.7-2.16z" fill="#6DB33F" />
        <path d="M14.6 15.35c-1.38 1.05-3.32.96-4.59-.22-1.27-1.17-1.52-3.03-.59-4.48.33-.51.81-.9 1.37-1.12-.13.3-.17.63-.12.95.07.45.31.85.67 1.12.36.27.81.38 1.26.31.45-.07.85-.31 1.12-.67.09-.12.16-.25.21-.39.52.88.58 1.98.15 2.92-.12.27-.29.5-.48.58z" fill="white" />
      </svg>
    )
  },
  {
    name: 'Java',
    desc: 'Core & Concurrencia',
    color: '#F59E0B',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M8.85 17.5c0 0-1.25.15-1.75-.45-.4-.45.15-.95.15-.95s1.45.3 2.1-.2c.6-.5.45-1.25.45-1.25s.45.5-.1 1.15c-.5.6-.85 1.7-.85 1.7z" fill="#EA2D2E" />
        <path d="M12.9 14.9s.75.5 1.5-.1c.75-.6 1.4-.45 1.4-.45s-.5.4-1.1.75c-.6.35-1.8-.2-1.8-.2z" fill="#EA2D2E" />
        <path d="M10.75 19.45s-3 .3-4.1-.7c-1-1 .35-1.85.35-1.85s-1.1.9-.3 1.65c.8.75 4.05.9 4.05.9z" fill="#EA2D2E" />
        <path d="M16.5 18.25s1.1-.35 1.6-.9c.45-.55.25-1.1.25-1.1s.1.65-.45 1.15c-.55.5-1.4.85-1.4.85z" fill="#007396" />
        <path d="M14.3 21.2s-4.65.65-7.55-.7c-1.1-.55-.7-1.4-.7-1.4s-.35.7.8 1.25c2.6 1.25 7.45.85 7.45.85z" fill="#007396" />
        <path d="M11.5 3s2.3 2.2-.4 4.35c-2.3 1.8.4 2.85 1.4 3.65.95.8 1.5 1.6 1.1 2.5-.4.8-1.5 1.3-1.5 1.3s1.2-.5 1.7-1.25c.5-.8.35-1.8-.6-2.55-.9-.75-1.7-1.5-.7-2.65 1.35-1.5 1.7-2.75-.9-5.4z" fill="#007396" />
      </svg>
    )
  },
  {
    name: 'Python',
    desc: 'Data & Vision',
    color: '#3776AB',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M11.87 2c-3.1 0-2.92 1.35-2.92 1.35l.01 1.4h2.98v.42H6.38S4 4.88 4 8c0 3.12 1.45 3 1.45 3h.86V9.75c0-1.45 1.26-1.43 1.26-1.43h4.92s1.22-.02 1.22-1.2V3.41S13.9 2 11.87 2zm-1.63 1.1a.57.57 0 110 1.14.57.57 0 010-1.14z" fill="#3776AB" />
        <path d="M12.13 22c3.1 0 2.92-1.35 2.92-1.35l-.01-1.4h-2.98v-.42h5.56s2.38.29 2.38-2.83c0-3.12-1.45-3-1.45-3h-.86v1.25c0 1.45-1.26 1.43-1.26 1.43h-4.92s-1.22.02-1.22 1.2v3.71s-.19 1.41 1.84 1.41zm1.63-1.1a.57.57 0 110-1.14.57.57 0 010 1.14z" fill="#FFD438" />
      </svg>
    )
  },
  {
    name: 'Machine Learning',
    desc: 'Scikit-Learn & Pandas',
    color: '#F59E0B',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a3 3 0 00-3 3c0 .35.07.69.18 1L6.4 8.78A3 3 0 005 8a3 3 0 00-3 3 3 3 0 003 3c.53 0 1.02-.14 1.45-.38l2.76 2.76c-.13.36-.21.75-.21 1.16a3 3 0 003 3 3 3 0 003-3c0-.41-.08-.8-.21-1.16l2.76-2.76c.43.24.92.38 1.45.38a3 3 0 003-3 3 3 0 00-3-3c-.55 0-1.05.15-1.48.41L14.8 6c.12-.31.2-.65.2-1a3 3 0 00-3-3zm0 2a1 1 0 110 2 1 1 0 010-2zM5 10a1 1 0 110 2 1 1 0 010-2zm14 0a1 1 0 110 2 1 1 0 010-2zm-7 7a1 1 0 110 2 1 1 0 010-2z" fill="#F59E0B" />
        <circle cx="12" cy="12" r="2" fill="#38BDF8" />
        <line x1="12" y1="5" x2="12" y2="10" stroke="#F59E0B" strokeWidth="1.5" />
        <line x1="6" y1="11" x2="10" y2="12" stroke="#F59E0B" strokeWidth="1.5" />
        <line x1="14" y1="12" x2="18" y2="11" stroke="#F59E0B" strokeWidth="1.5" />
        <line x1="12" y1="14" x2="12" y2="17" stroke="#F59E0B" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: 'OpenCV',
    desc: 'Computer Vision',
    color: '#00AA00',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="7" r="3.5" stroke="#EA212D" strokeWidth="2.2" />
        <circle cx="7" cy="16" r="3.5" stroke="#5C8EE6" strokeWidth="2.2" />
        <circle cx="17" cy="16" r="3.5" stroke="#00AA00" strokeWidth="2.2" />
      </svg>
    )
  },
  {
    name: 'PostgreSQL',
    desc: 'Bases de datos SQL',
    color: '#336791',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#336791">
        <path d="M12.016 2.002c-4.437 0-8.242 2.76-9.676 6.685C1.868 9.988 1.5 11.455 1.5 13.018c0 4.195 2.68 7.784 6.46 9.155.15-.353.305-.73.473-1.144-.812-.348-1.528-.86-2.102-1.493.415-.17 1.012-.338 1.706-.474-.298-.674-.51-1.408-.62-2.179-.475-.02-.93-.07-1.345-.152.09-.345.228-.68.41-.994.346.06.723.098 1.118.113-.016-.388-.007-.783.033-1.182-.87-.336-1.547-.852-1.954-1.494.354-.257.868-.445 1.488-.557.194-.834.568-1.63 1.106-2.336-.593-.657-.96-1.486-1.008-2.392.48-.063 1.077.03 1.727.27.653-.618 1.47-1.076 2.385-1.32-.236-.88-.198-1.785.127-2.607.458.196.953.535 1.42 1.004.91-.225 1.884-.344 2.9-.344 1.007 0 1.972.117 2.875.339.462-.464.95-.798 1.403-.993.322.815.358 1.714.126 2.589.907.243 1.717.697 2.365 1.31.643-.238 1.233-.33 1.708-.268-.049.897-.412 1.719-.997 2.37.534.7.905 1.488 1.096 2.316.614.11 1.123.296 1.474.55-.404.636-1.074 1.148-1.936 1.482.04.396.048.788.032 1.173.393-.016.766-.053 1.109-.112.18.31.317.643.406.985-.41.08-.86.13-1.329.15-.11.764-.32 1.492-.615 2.16.687.135 1.28.3 1.691.468-.57.627-1.28 1.135-2.083 1.48.167.412.32.788.468 1.14 3.75-1.378 6.41-4.953 6.41-9.135 0-1.55-.362-3.006-.998-4.298-1.43-3.923-5.234-6.685-9.667-6.685z" />
      </svg>
    )
  },
  {
    name: 'Three.js',
    desc: 'Gráficos 3D',
    color: '#38BDF8',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 6.5L12 1.6 3.5 6.5v11L12 22.4l8.5-4.9v-11zM12 3.9l6.5 3.8-3.3 1.9-6.4-3.7 3.2-2zm-1 .6v7.4L4.5 8.2l6.5-3.7zm1 8.6l6.5-3.8v7.5L12 20.1v-7zm-1 .6v7L4.5 15.6v-7.5l6.5 4.5z" />
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    desc: 'Modern styling',
    color: '#38BDF8',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    )
  },
  {
    name: 'Git & GitHub',
    desc: 'Control de versiones',
    color: '#E2E8F0',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    )
  }
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
                Soy estudiante de <strong style={{ color: 'var(--text-primary)' }}>Ingeniería de Sistemas Computacionales</strong> en la Universidad Privada del Norte (UPN, ingreso 2022-2), actualmente cursando el <strong style={{ color: 'var(--accent-violet)' }}>9no ciclo</strong> con más de 170 créditos aprobados. Me especializo en el ciclo integral de desarrollo de software: desde interfaces modernas con <strong style={{ color: 'var(--text-primary)' }}>Next.js</strong> y <strong style={{ color: 'var(--text-primary)' }}>TypeScript</strong>, diseño de bases de datos relacionales (<strong style={{ color: 'var(--text-primary)' }}>SQL / PostgreSQL</strong>), hasta el diseño y arquitectura de software escalable con <strong style={{ color: 'var(--text-primary)' }}>Java & Spring Boot</strong>.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Cuento con sólida experiencia en <strong style={{ color: 'var(--text-primary)' }}>Machine Learning, Análisis Predictivo de Datos y Visión Computacional</strong>. Mi proyecto de robótica con <strong style={{ color: 'var(--text-primary)' }}>Python, OpenCV y Raspberry Pi 4</strong> obtuvo el <strong style={{ color: 'var(--accent-violet)' }}>1er lugar en EXPOINGENIERÍA UPN</strong>. Actualmente enfocado en sistemas clínicos con SLAs, arquitecturas distribuidas de alta disponibilidad y soluciones de Cloud Computing.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 mt-10 reveal-on-scroll" data-delay="300">
              {[
                { label: 'Universidad', value: 'UPN Lima' },
                { label: 'Carrera', value: 'Ing. Sistemas' },
                { label: 'Ciclo', value: '9no ciclo' },
                { label: 'Idiomas', value: 'ES / EN' },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="p-4 rounded-xl"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
                >
                  <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>
                    {fact.label}
                  </div>
                  <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {fact.value}
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
              {TECH_STACK.map((tech, i) => (
                <div
                  key={tech.name}
                  data-cursor-hover
                  className="card-hover card-shine relative p-4 rounded-2xl flex flex-col items-center text-center cursor-default group"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    animationDelay: `${i * 0.05}s`,
                  }}
                >
                  {/* Original Logo Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                    style={{ background: `${tech.color}18`, border: `1px solid ${tech.color}35` }}
                  >
                    {tech.icon}
                  </div>
                  <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                    {tech.name}
                  </div>
                  <div className="text-[10px] mt-0.5 line-clamp-1" style={{ color: 'var(--text-muted)' }}>
                    {tech.desc}
                  </div>

                  {/* Hover accent */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${tech.color}12 0%, transparent 70%)` }}
                  />
                </div>
              ))}
            </div>

            {/* Currently learning / Specialization */}
            <div
              className="mt-6 p-5 rounded-2xl flex items-center gap-4"
              style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(217,70,239,0.08))', border: '1px solid var(--border-medium)' }}
            >
              <div className="text-2xl animate-float">🚀</div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--accent-violet)' }}>
                  Enfoque profesional (9no ciclo)
                </div>
                <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  Machine Learning & Predicción · Arquitectura de Software · Bases de Datos SQL · Cloud
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
