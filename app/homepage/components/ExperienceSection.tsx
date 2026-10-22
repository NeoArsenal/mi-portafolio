'use client';
import React, { useEffect, useRef, useState } from 'react';

const TIMELINE = [
  {
    year: '2026',
    period: 'Presente (9no Ciclo)',
    title: 'Sistemas Inteligentes, Machine Learning & Cloud Computing',
    subtitle: 'Sistemas de Alta Disponibilidad & Modelado Predictivo',
    description: 'Formación avanzada en Sistemas Inteligentes y Machine Learning (modelado y predicción de datos), Cloud Computing y Tesis/Capstone. Desarrollo de HelpDesk hospitalario con SLAs clínicos y la plataforma Kallp Elite integrando visión artificial y modelos 3D.',
    color: '#3B82F6',
    icon: '⚡',
    tags: ['Machine Learning', 'Cloud Computing', 'Spring Boot', 'Next.js 15', 'SLAs', 'IA'],
    highlight: true,
  },
  {
    year: '2025',
    period: '2025 (Ciclos 7 & 8)',
    title: 'Diseño y Arquitectura de Software & 1er Puesto EXPOINGENIERÍA',
    subtitle: 'Arquitectura de Software, Soluciones Web Distribuidas & Robótica',
    description: '1er lugar en EXPOINGENIERÍA UPN con visión computacional en Raspberry Pi (Taller de Robótica). Especialización en Diseño y Arquitectura de Software, Soluciones Web y Aplicaciones Distribuidas, Calidad y Pruebas de Software (QA), y Prácticas Preprofesionales.',
    color: '#8B5CF6',
    icon: '🏆',
    tags: ['Arquitectura de Software', 'OpenCV', 'Raspberry Pi', 'Aplicaciones Distribuidas', 'Calidad y Pruebas'],
    highlight: true,
  },
  {
    year: '2024',
    period: '2024 (Ciclos 5 & 6)',
    title: 'Bases de Datos Relacionales (SQL), Big Data & POO Avanzada',
    subtitle: 'Modelado Relacional, Big Data, Análisis de Software & Java',
    description: 'Dominio de diseño y optimización de bases de datos relacionales (SQL), Bases de Datos Avanzadas y Big Data, Modelamiento y Análisis de Software, Computación Gráfica y Visual, junto con Técnicas de Programación Orientada a Objetos (Java / Spring Boot).',
    color: '#F59E0B',
    icon: '🐘',
    tags: ['SQL', 'PostgreSQL', 'Big Data', 'Modelamiento de Software', 'POO Java', 'Computación Gráfica'],
  },
  {
    year: '2023',
    period: '2023 (Ciclos 3 & 4)',
    title: 'Estructuras de Datos & Análisis de Algoritmos',
    subtitle: 'Lógica Algorítmica, Optimización & Análisis de Datos',
    description: 'Consolidación de Fundamentos de Programación, Estructuras de Datos complejas, Análisis de Algoritmos y Estrategias de Programación, Probabilidad y Estadística, y Matemática Discreta para resolución eficiente de problemas computacionales.',
    color: '#34D399',
    icon: '💻',
    tags: ['Estructuras de Datos', 'Algoritmos', 'Probabilidad y Estadística', 'Matemática Discreta'],
  },
  {
    year: '2022',
    period: '2022-2 (Ciclos 1 & 2)',
    title: 'Ingreso a Ingeniería de Sistemas Computacionales (2022-2)',
    subtitle: 'Universidad Privada del Norte — Lima, Perú',
    description: 'Inicio de la formación universitaria con sólidos pilares en Fundamentos de Algoritmos, Introducción a la Ingeniería de Sistemas Computacionales, ciencias exactas y metodologías de ingeniería.',
    color: '#EC4899',
    icon: '🎓',
    tags: ['Ingreso 2022-2', 'Fundamentos de Algoritmos', 'Lógica Computacional', 'UPN Lima'],
  },
];

const ACHIEVEMENTS = [
  { value: 1, suffix: 'er', label: 'Puesto EXPOINGENIERÍA', icon: '🏆', color: '#8B5CF6' },
  { value: 5, suffix: '+', label: 'Proyectos Clave', icon: '🚀', color: '#3B82F6' },
  { value: 9, suffix: 'no', label: 'Ciclo universitario', icon: '🎓', color: '#0EA5E9' },
  { value: 170, suffix: '+', label: 'Créditos Aprobados', icon: '📚', color: '#34D399' },
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
    </div>
  );
}

export default function ExperienceSection() {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute bottom-1/4 left-[-150px] w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4 reveal-on-scroll" data-delay="0">
          <div className="h-px flex-1 max-w-[60px]" style={{ background: 'var(--accent-violet)' }} />
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent-violet)' }}>
            Trayectoria
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] reveal-on-scroll"
            style={{ color: 'var(--text-primary)' }}
            data-delay="100"
          >
            Mi camino
            <br />
            <span className="gradient-text italic">académico y técnico</span>
          </h2>
          <p className="text-base max-w-xs reveal-on-scroll" style={{ color: 'var(--text-muted)' }} data-delay="200">
            Evolución continua desde los fundamentos hasta proyectos premiados y software en producción.
          </p>
        </div>

        {/* Achievements counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 reveal-on-scroll" data-delay="200">
          {ACHIEVEMENTS.map((achievement) => (
            <AchievementCounter key={achievement.label} achievement={achievement} started={started} />
          ))}
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-[var(--border-subtle)] ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {TIMELINE.map((item, index) => (
            <div
              key={index}
              className="relative reveal-on-scroll"
              data-delay={`${index * 100}`}
            >
              {/* Dot */}
              <div
                className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-4 border-[var(--bg-primary)] transition-all duration-300"
                style={{
                  background: item.color,
                  boxShadow: item.highlight ? `0 0 16px ${item.color}` : 'none',
                }}
              />

              <div
                className="p-6 rounded-2xl transition-all duration-300 card-hover"
                style={{
                  background: 'var(--bg-card)',
                  border: item.highlight ? `1px solid ${item.color}40` : '1px solid var(--border-subtle)',
                }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{ background: `${item.color}15`, color: item.color }}
                  >
                    {item.period}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
                    {item.year}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <div className="text-sm font-medium mb-3" style={{ color: item.color }}>
                  {item.subtitle}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
