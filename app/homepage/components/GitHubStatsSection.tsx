'use client';
import React from 'react';

const GITHUB_STATS = [
  { label: 'Repositorios públicos', value: '12+', icon: '📁', color: '#8B5CF6' },
  { label: 'Contribuciones 2025', value: '340+', icon: '📊', color: '#D946EF' },
  { label: 'Lenguajes principales', value: '5', icon: '💻', color: '#0EA5E9' },
  { label: 'Stars recibidas', value: '18+', icon: '⭐', color: '#FBBF24' },
];

const LANG_BARS = [
  { name: 'TypeScript', pct: 42, color: '#3178C6' },
  { name: 'Python', pct: 28, color: '#F7DC6F' },
  { name: 'JavaScript', pct: 18, color: '#F0DB4F' },
  { name: 'CSS', pct: 8, color: '#A78BFA' },
  { name: 'Other', pct: 4, color: '#6B7280' },
];

export default function GitHubStatsSection() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(139,92,246,0.04) 50%, transparent)' }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4 reveal-on-scroll" data-delay="0">
          <div className="h-px flex-1 max-w-[60px]" style={{ background: 'var(--accent-fuchsia)' }} />
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent-fuchsia)' }}>
            GitHub & Contacto
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: GitHub stats */}
          <div>
            <h2
              className="font-display text-4xl md:text-5xl font-black leading-[1.05] mb-8 reveal-on-scroll"
              style={{ color: 'var(--text-primary)' }}
              data-delay="100"
            >
              Actividad en
              <br />
              <span className="gradient-text italic">GitHub</span>
            </h2>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4 mb-8 reveal-on-scroll" data-delay="200">
              {GITHUB_STATS?.map((stat) => (
                <div
                  key={stat?.label}
                  className="stat-card p-5 rounded-2xl"
                >
                  <div className="text-2xl mb-3">{stat?.icon}</div>
                  <div className="font-display text-3xl font-black mb-1" style={{ color: stat?.color }}>
                    {stat?.value}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{stat?.label}</div>
                </div>
              ))}
            </div>

            {/* Language breakdown */}
            <div
              className="p-6 rounded-2xl reveal-on-scroll"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
              data-delay="300"
            >
              <div className="text-xs font-bold uppercase tracking-wider mb-5" style={{ color: 'var(--text-muted)' }}>
                Distribución de lenguajes
              </div>

              {/* Bar */}
              <div className="flex rounded-full overflow-hidden h-2 mb-5">
                {LANG_BARS?.map((lang) => (
                  <div
                    key={lang?.name}
                    style={{ width: `${lang?.pct}%`, background: lang?.color }}
                    title={`${lang?.name}: ${lang?.pct}%`}
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4">
                {LANG_BARS?.map((lang) => (
                  <div key={lang?.name} className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: lang?.color }} />
                    <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {lang?.name}
                    </span>
                    <span className="text-xs font-bold" style={{ color: 'var(--text-muted)' }}>
                      {lang?.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub link */}
            <a
              href="https://github.com/NeoArsenal"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 reveal-on-scroll"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-medium)',
                color: 'var(--text-primary)',
              }}
              data-delay="400"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Ver perfil completo en GitHub
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>

          {/* Right: CTA / Contact */}
          <div className="reveal-on-scroll" data-delay="200">
            <div
              className="relative overflow-hidden rounded-3xl p-8 md:p-10 noise-overlay"
              style={{
                background: 'linear-gradient(135deg, #1a0533 0%, #2d0a4e 40%, #1a0030 100%)',
                border: '1px solid rgba(139,92,246,0.3)',
                boxShadow: '0 20px 60px rgba(139,92,246,0.2)',
              }}
            >
              {/* Background blobs */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-30 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)', filter: 'blur(50px)' }}
              />
              <div
                className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #D946EF 0%, transparent 70%)', filter: 'blur(40px)' }}
              />

              <div className="relative z-10">
                {/* Badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                  style={{ background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.3)', color: '#A78BFA' }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" />
                  </span>
                  Disponible · Lima, Perú
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                  Estoy disponible para nuevas oportunidades
                  <br />
                  <span className="gradient-text italic">contactame</span>
                </h3>

                <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: 'rgba(245,240,255,0.7)' }}>
                  Estoy buscando oportunidades para colaborar en proyectos desafiantes. Ya sea prácticas profesionales, freelance o un proyecto académico — hablemos.
                </p>

                {/* Contact options */}
                <div className="space-y-3 mb-8">
                  {[
                    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alonsoarrelucea/', icon: '💼', sub: 'Conéctate conmigo' },
                    { label: 'GitHub', href: 'https://github.com/NeoArsenal', icon: '💻', sub: 'Ve mi código' },
                    { label: 'Email', href: 'alonsoarrelucea10@gmail.com', icon: '📧', sub: 'alonsoarrelucea10@gmail.com.pe' },
                  ]?.map((contact) => (
                    <a
                      key={contact?.label}
                      href={contact?.href}
                      target={contact?.href?.startsWith('http') ? '_blank' : undefined}
                      rel={contact?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 group"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      <span className="text-xl">{contact?.icon}</span>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-white">{contact?.label}</div>
                        <div className="text-xs" style={{ color: 'rgba(245,240,255,0.5)' }}>{contact?.sub}</div>
                      </div>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white opacity-30 group-hover:opacity-70 group-hover:translate-x-1 transition-all"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>

                {/* Primary CTA */}
                <a
                  href="mailto:alonsoarrelucea10@gmail.com"
                  className="group flex items-center justify-center gap-2 w-full py-4 rounded-full font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #7C3AED, #C026D3)',
                    boxShadow: '0 4px 24px rgba(139,92,246,0.5)',
                  }}
                >
                  Enviar mensaje
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}