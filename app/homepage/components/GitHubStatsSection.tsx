'use client';
import React from 'react';

const GITHUB_STATS = [
  { label: 'Repositorios públicos', value: '12+', icon: '📦', color: '#8B5CF6' },
  { label: 'Contribuciones 2025/2026', value: '380+', icon: '📊', color: '#D946EF' },
  { label: 'Lenguajes principales', value: '5+', icon: '💻', color: '#0EA5E9' },
  { label: 'Enfoque', value: 'Full-Stack', icon: '🚀', color: '#FBBF24' },
];

const LANG_BARS = [
  { name: 'TypeScript', pct: 40, color: '#3178C6' },
  { name: 'Java', pct: 25, color: '#F59E0B' },
  { name: 'Python', pct: 20, color: '#F7DC6F' },
  { name: 'HTML/CSS', pct: 10, color: '#A78BFA' },
  { name: 'Other', pct: 5, color: '#6B7280' },
];

export default function GitHubStatsSection() {
  // Enlace directo a WhatsApp (reemplazar 51XXXXXXXXX con el número real de Alonso)
  const WHATSAPP_URL = "https://wa.me/51986469123?text=Hola%20Alonso,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20una%20oportunidad.";

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
              {GITHUB_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="stat-card p-5 rounded-2xl"
                >
                  <div className="text-2xl mb-3">{stat.icon}</div>
                  <div className="font-display text-3xl font-black mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
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
                {LANG_BARS.map((lang) => (
                  <div
                    key={lang.name}
                    style={{ width: `${lang.pct}%`, background: lang.color }}
                    title={`${lang.name}: ${lang.pct}%`}
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4">
                {LANG_BARS.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: lang.color }} />
                    <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {lang.name}
                    </span>
                    <span className="text-xs font-bold" style={{ color: 'var(--text-muted)' }}>
                      {lang.pct}%
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
                  <span className="gradient-text italic">contáctame</span>
                </h3>

                <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: 'rgba(245,240,255,0.7)' }}>
                  Estoy buscando oportunidades para colaborar en proyectos desafiantes. Ya sea prácticas profesionales, freelance o un proyecto de alto impacto tecnológico — conversemos.
                </p>

                {/* Contact options */}
                <div className="space-y-3 mb-8">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/alonsoarrelucea/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 group"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#0A66C2]/20 border border-[#0A66C2]/40">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">LinkedIn</div>
                      <div className="text-xs" style={{ color: 'rgba(245,240,255,0.5)' }}>Conéctate conmigo</div>
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

                  {/* GitHub */}
                  <a
                    href="https://github.com/NeoArsenal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 group"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 border border-white/20">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">GitHub</div>
                      <div className="text-xs" style={{ color: 'rgba(245,240,255,0.5)' }}>Ve mi código y repositorios</div>
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

                  {/* Gmail Direct Web Compose */}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=alonsoarrelucea10@gmail.com&su=Contacto%20desde%20Portafolio%20Web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 group"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#EA4335]/20 border border-[#EA4335]/40">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#EA4335" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">Email (Gmail)</div>
                      <div className="text-xs" style={{ color: 'rgba(245,240,255,0.5)' }}>alonsoarrelucea10@gmail.com · Redactar mensaje</div>
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
                </div>

                {/* Primary CTA - WhatsApp button */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full py-4 rounded-full font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    boxShadow: '0 4px 24px rgba(37,211,102,0.4)',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 0C5.399 0 .015 5.384.015 12.016c0 2.12.553 4.186 1.605 6.009L0 24l6.168-1.618a11.96 11.96 0 005.863 1.523h.005c6.632 0 12.016-5.385 12.016-12.017C24.052 5.385 18.663 0 12.031 0zm0 21.99a9.96 9.96 0 01-5.085-1.39l-.365-.216-3.774.99.1-3.679-.237-.378a9.966 9.966 0 01-1.53-5.301c0-5.509 4.482-9.99 9.995-9.99 2.67 0 5.18 1.04 7.067 2.929a9.932 9.932 0 012.924 7.067c0 5.51-4.482 9.99-9.99 9.99zm5.474-7.487c-.3-.15-1.776-.876-2.052-.976-.275-.1-.476-.15-.677.15-.201.3-.777.976-.952 1.176-.176.2-.351.226-.652.076-.3-.15-1.267-.467-2.413-1.49-.893-.796-1.495-1.78-1.671-2.08-.176-.3-.019-.462.132-.612.136-.135.301-.351.451-.527.151-.176.201-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.586-.492-.507-.676-.516l-.577-.01c-.2 0-.527.075-.802.376s-1.053 1.028-1.053 2.508c0 1.48 1.078 2.91 1.228 3.111.151.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.899.12.579-.086 1.776-.726 2.027-1.428.251-.702.251-1.304.176-1.429-.075-.125-.276-.2-.577-.35z" />
                  </svg>
                  <span>Enviar mensaje por WhatsApp</span>
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
                    <path d="M5 12h14M12 5l7 7-7 7" />
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
