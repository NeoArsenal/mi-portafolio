'use client';
import React, { useEffect, useRef, useState } from 'react';

const TIMELINE = [
  {
    year: '2026',
    period: 'Presente',
    title: '8vo Ciclo — UPN',
    subtitle: 'Ingeniería de Sistemas',
    description: 'Cursando materias avanzadas de arquitectura de software, inteligencia artificial y gestión de proyectos TI.',
    color: '#D946EF',
    icon: '🎓',
    tags: ['IA', 'Arquitectura SW', 'Gestión TI'],
  },
  {
    year: '2025',
    period: 'Nov 2025',
    title: '1er Puesto — EXPOINGENIERÍA',
    subtitle: 'Proyecto: Robótica & Computer Vision',
    description: 'Ganador del primer lugar en la feria de innovación tecnológica de UPN con un sistema de visión computacional implementado en Raspberry Pi.',
    color: '#8B5CF6',
    icon: '🏆',
    tags: ['OpenCV', 'Python', 'Raspberry Pi', 'IoT'],
    highlight: true,
  },
  {
    year: '2025',
    period: 'Ago 2025',
    title: 'E-Commerce Project',
    subtitle: 'MedusaJS + Next.js + Strapi',
    description: 'Desarrollo completo de plataforma e-commerce con arquitectura headless, integrando tres tecnologías modernas para un stack robusto y escalable.',
    color: '#0EA5E9',
    icon: '🛒',
    tags: ['Next.js', 'MedusaJS', 'Strapi', 'PostgreSQL'],
  },
  {
    year: '2024',
    period: '2024',
    title: 'Inicio en Full-Stack',
    subtitle: 'React + TypeScript + Node.js',
    description: 'Primeros proyectos full-stack, aprendizaje de TypeScript y construcción de APIs REST. Inicio del camino en desarrollo web profesional.',
    color: '#34D399',
    icon: '💻',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    year: '2022',
    period: '2022',
    title: 'Ingreso a UPN',
    subtitle: 'Ingeniería de Sistemas — Lima, Perú',
    description: 'Inicio de la carrera universitaria con enfoque en fundamentos de programación, algoritmos y estructuras de datos.',
    color: '#FBBF24',
    icon: '🚀',
    tags: ['C++', 'Python', 'Algoritmos'],
  },
];

const ACHIEVEMENTS = [
  { value: 1, suffix: 'er', label: 'Puesto EXPOINGENIERÍA', icon: '🏆', color: '#8B5CF6' },
  { value: 3, suffix: '+', label: 'Proyectos completados', icon: '💻', color: '#D946EF' },
  { value: 8, suffix: 'vo', label: 'Ciclo universitario', icon: '🎓', color: '#0EA5E9' },
  { value: 9, suffix: '+', label: 'Tecnologías dominadas', icon: '⚡', color: '#34D399' },
];

function useCountUp(target: number, duration: number = 1500, started: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);

  return count;
}

function AchievementCounter({ achievement, started }: { achievement: typeof ACHIEVEMENTS[0]; started: boolean }) {
  const count = useCountUp(achievement.value, 1200, started);

  return (
    <div
      className="card-hover p-6 rounded-2xl text-center relative overflow-hidden"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
    >
      <div className="text-3xl mb-3">{achievement.icon}</div>
      <div
        className="font-display text-4xl font-black mb-1"
        style={{ color: achievement.color }}
      >
        {count}<span className="text-2xl">{achievement.suffix}</span>
      </div>
      <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
        {achievement.label}
      </div>
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${achievement.color}08 0%, transparent 70%)` }}
      />
    </div>
  );
}

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [countersStarted, setCountersStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #7C3AED 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4 reveal-on-scroll" data-delay="0">
          <div className="h-px flex-1 max-w-[60px]" style={{ background: 'var(--accent-violet)' }} />
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent-violet)' }}>
            Experiencia & Logros
          </span>
        </div>

        <h2
          className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-16 reveal-on-scroll"
          style={{ color: 'var(--text-primary)' }}
          data-delay="100"
        >
          El camino
          <br />
          <span className="gradient-text italic">recorrido</span>
        </h2>

        {/* Achievement counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 reveal-on-scroll" data-delay="200">
          {ACHIEVEMENTS.map((achievement) => (
            <AchievementCounter key={achievement.label} achievement={achievement} started={countersStarted} />
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--border-medium) 10%, var(--border-medium) 90%, transparent)' }}
          />

          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <div
                key={`${item.year}-${item.title}`}
                className="reveal-on-scroll flex gap-0 md:gap-8"
                data-delay={`${i * 100}`}
              >
                {/* Timeline dot (desktop) */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0 w-12 pt-6">
                  <div
                    className="timeline-dot"
                    style={{ background: item.color, boxShadow: `0 0 12px ${item.color}60` }}
                  />
                </div>

                {/* Card */}
                <div
                  className={`flex-1 card-hover card-shine p-6 md:p-8 rounded-2xl relative overflow-hidden ${item.highlight ? 'ring-1' : ''}`}
                  style={{
                    background: item.highlight
                      ? `linear-gradient(135deg, ${item.color}12, var(--bg-card))`
                      : 'var(--bg-card)',
                    border: `1px solid ${item.highlight ? item.color + '40' : 'var(--border-subtle)'}`,
                    boxShadow: item.highlight ? `0 8px 40px ${item.color}15` : 'var(--shadow-card)',
                    ...(item.highlight ? { '--tw-ring-color': item.color + '30' } as React.CSSProperties : {}),
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                    >
                      {item.icon}
                    </div>

                    <div className="flex-1">
                      {/* Period + highlight badge */}
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                          {item.period}
                        </span>
                        {item.highlight && (
                          <span
                            className="text-xs font-bold px-2 py-0.5 rounded-full"
                            style={{ background: `${item.color}20`, color: item.color, border: `1px solid ${item.color}30` }}
                          >
                            Destacado
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-xl md:text-2xl font-black mb-1" style={{ color: 'var(--text-primary)' }}>
                        {item.title}
                      </h3>
                      <div className="text-sm font-semibold mb-3" style={{ color: item.color }}>
                        {item.subtitle}
                      </div>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <span key={tag} className="project-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Highlight left border */}
                  {item.highlight && (
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                      style={{ background: `linear-gradient(to bottom, ${item.color}, ${item.color}60)` }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}