'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  imageAlt: string;
  color: string;
  accent: string;
  links: { label: string; href: string; icon: 'github' | 'external'; }[];
  highlights: string[];
  badge?: string;
}

const PROJECTS: Project[] = [
  {
    id: 'it-gamified-helpdesk',
    title: 'HelpDesk Clínico & Inventario de TI',
    subtitle: 'Next.js 15 + TypeScript + SLAs + Analítica',
    description: 'Sistema integral de gestión de tickets de incidencias hospitalarias con monitoreo de SLAs, control de inventario de equipos y analítica.',
    longDescription: 'Plataforma web modular diseñada para optimizar los flujos de soporte técnico en clínicas y hospitales. Incorpora seguimiento estricto de SLAs por nivel de prioridad, gestión del ciclo de vida y asignación de inventario tecnológico, panel analítico en tiempo real y dinámicas de gamificación para incrementar el rendimiento y la resolución ágil de incidencias.',
    tags: ['Next.js 15', 'TypeScript', 'Node.js', 'SLAs', 'Inventario TI', 'PostgreSQL', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Dashboard moderno de gestión de incidencias, tickets hospitalarios e inventario',
    color: '#3B82F6',
    accent: '#60A5FA',
    links: [
      { label: 'Frontend', href: 'https://github.com/NeoArsenal/it-gamified-helpdesk', icon: 'github' },
      { label: 'Backend', href: 'https://github.com/NeoArsenal/it-gamified-backend', icon: 'github' },
      { label: 'Demo', href: 'https://it-gamified-helpdesk-chi.vercel.app', icon: 'external' }
    ],
    highlights: ['Gestión de tickets e incidencias en tiempo real', 'Monitoreo de SLAs clínicos y criticidad', 'Inventario y asignación de activos tecnológicos', 'Arquitectura desacoplada (Frontend + Backend)'],
    badge: '⚡ En Desarrollo Activo'
  },
  {
    id: 'kallp-elite',
    title: 'Kallp Elite - Sistema de Entrenamiento & Nutrición',
    subtitle: 'Next.js + Spring Boot + AI Vision + 3D',
    description: 'Plataforma de alto rendimiento que fusiona visión computacional por IA y modelos 3D para nutrición y planificación de entrenamiento.',
    longDescription: 'Ecosistema de optimización física para atletas de alto rendimiento. Desarrollado con Next.js y Spring Boot, integra Kallp AI Vision para escaneo y reconocimiento de alimentos mediante cámara en tiempo real (LogMeal API / Deep Learning), planificador de rutinas con curvas de fuerza máxima (Recharts) y un visor interactivo de composición corporal en 3D.',
    tags: ['Next.js', 'Spring Boot', 'Computer Vision', 'Three.js', 'PostgreSQL', 'Recharts', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Plataforma atlética con analítica de entrenamiento y visión artificial para nutrición',
    color: '#10B981',
    accent: '#34D399',
    links: [
      { label: 'GitHub', href: 'https://github.com/NeoArsenal/calculadora-fit-frontend', icon: 'github' },
      { label: 'Demo', href: 'https://calculadora-fit-frontend-dvna.vercel.app/login', icon: 'external' }
    ],
    highlights: ['Escaneo de alimentos con Visión Artificial', 'Planificador de entrenamientos y curvas de fuerza', 'Mapa interactivo de composición corporal 3D', 'Integración RESTful con Spring Boot & PostgreSQL'],
    badge: '🔥 AI Vision + 3D'
  },
  {
    id: 'machine-learning-prediction',
    title: 'Predicción de Datos con Machine Learning',
    subtitle: 'Python + Scikit-Learn + Pandas + EDA',
    description: 'Modelado predictivo y análisis exploratorio de datos (EDA) para la estimación precisa de ingresos a partir de variables socioeconómicas.',
    longDescription: 'Proyecto de ciencia de datos y aprendizaje automático enfocado en la predicción analítica de ingresos. Abarca el preprocesamiento exhaustivo y limpieza de datasets, análisis exploratorio estadístico (EDA), selección e ingeniería de variables relevantes (feature engineering) y entrenamiento de modelos predictivos supervisados con evaluación rigurosa de métricas de precisión.',
    tags: ['Python', 'Machine Learning', 'Scikit-Learn', 'Pandas', 'EDA', 'Modelos Predictivos'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Visualización de datos analíticos y curvas de entrenamiento de Machine Learning',
    color: '#06B6D4',
    accent: '#22D3EE',
    links: [
      { label: 'GitHub', href: 'https://github.com/NeoArsenal/MachineLearning', icon: 'github' },
      { label: 'Demo', href: 'https://machinelearning-mmdml3phhouzvezjhuhixv.streamlit.app', icon: 'external' }
    ],
    highlights: ['Análisis exploratorio de datos (EDA)', 'Modelado predictivo supervisado', 'Ingeniería de variables y métricas', 'Evaluación de precisión de ingresos'],
    badge: '📊 Predictivo & Analítica'
  },
  {
    id: 'java-play-app',
    title: 'Java & Spring Boot Interview Duolingo',
    subtitle: 'Java Core + Spring Boot + Gamified Engine',
    description: 'Aplicación interactiva gamificada estilo Duolingo para dominar entrevistas técnicas de Java, JVM Internals y Spring Boot.',
    longDescription: 'Plataforma gamificada orientada a desarrolladores que preparan entrevistas técnicas rigurosas en Java y Spring Boot. Estructurada en mundos temáticos progresivos (JVM Internals, Colecciones, Concurrencia con Java 21 Virtual Threads, Spring Core/AOP y Spring Data JPA), con sistema de vidas, rachas, feedback técnico instantáneo y simulador de mock interviews con temporizador.',
    tags: ['Java', 'Spring Boot', 'JVM Internals', 'Virtual Threads', 'Spring Data JPA', 'Gamificación'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Entorno de desarrollo de código Java y Spring Boot con arquitectura interactiva',
    color: '#F59E0B',
    accent: '#FBBF24',
    links: [
      { label: 'GitHub', href: 'https://github.com/NeoArsenal/java-play-app', icon: 'github' }
    ],
    highlights: ['Árbol de aprendizaje modular por mundos técnicos', 'Motor de quiz interactivo con retroalimentación inmediata', 'Simulador de entrevistas técnicas con temporizador', 'Enfoque profundo en Java 21 y arquitectura Spring'],
    badge: '🎮 Gamificado'
  },
  {
    id: 'robotics-cv',
    title: 'Robótica de Rescate & Computer Vision',
    subtitle: 'Raspberry Pi 4 + Python + OpenCV',
    description: 'Sistema autónomo de detección y seguimiento de objetos/víctimas en tiempo real para robots de rescate.',
    longDescription: 'Proyecto galardonado con el 1er puesto en EXPOINGENIERÍA UPN. Sistema embebido implementado sobre una Raspberry Pi 4 con módulo de cámara para detección y seguimiento de objetivos en tiempo real mediante algoritmos de visión artificial con OpenCV. Incluye panel de telemetría y monitoreo remoto para operaciones de rescate.',
    tags: ['Python', 'OpenCV', 'Raspberry Pi 4', 'Computer Vision', 'IoT', 'Hardware Embebido'],
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_15eda1954-1765038631239.png',
    imageAlt: 'Procesamiento de visión computacional y hardware embebido Raspberry Pi',
    color: '#8B5CF6',
    accent: '#A78BFA',
    links: [
      { label: 'GitHub', href: 'https://github.com/NeoArsenal/robot-rescate', icon: 'github' }
    ],
    highlights: ['1er Puesto EXPOINGENIERÍA UPN', 'Detección y tracking en tiempo real', 'Dashboard de telemetría y control remoto', 'Procesamiento en hardware embebido'],
    badge: '🏆 1er Puesto EXPOINGENIERÍA'
  }
];

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-1/3 right-[-150px] w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D946EF 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4 reveal-on-scroll" data-delay="0">
          <div className="h-px flex-1 max-w-[60px]" style={{ background: 'var(--accent-fuchsia)' }} />
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent-fuchsia)' }}>
            Proyectos
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] reveal-on-scroll"
            style={{ color: 'var(--text-primary)' }}
            data-delay="100"
          >
            Lo que he
            <br />
            <span className="gradient-text italic">construido</span>
          </h2>
          <p className="text-base max-w-xs reveal-on-scroll" style={{ color: 'var(--text-muted)' }} data-delay="200">
            Proyectos reales que demuestran mis habilidades técnicas, modelos predictivos y arquitectura de software.
          </p>
        </div>

        {/* Project cards */}
        <div className="space-y-6">
          {PROJECTS.map((project, i) => {
            const isExpanded = expandedId === project.id;

            return (
              <div
                key={project.id}
                className="reveal-on-scroll card-shine relative overflow-hidden rounded-3xl transition-all duration-300"
                data-delay={`${i * 100}`}
                style={{
                  background: 'var(--bg-card)',
                  border: `1px solid ${isExpanded ? project.color + '55' : 'var(--border-subtle)'}`,
                  boxShadow: isExpanded ? `0 20px 50px -10px ${project.color}25` : 'var(--shadow-card)'
                }}
              >
                {/* Header row: Left Image & Right Main Details (Always consistent layout) */}
                <div className="flex flex-col md:flex-row items-stretch">
                  {/* Image container - stays proportional and never pushes content away */}
                  <div className="relative w-full md:w-[320px] lg:w-[380px] min-h-[220px] md:min-h-[260px] flex-shrink-0 overflow-hidden bg-black/40">
                    <AppImage
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="project-img-overlay absolute inset-0 pointer-events-none" />

                    {/* Badge */}
                    {project.badge && (
                      <div
                        className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg pointer-events-none"
                        style={{ background: `linear-gradient(135deg, ${project.color}, ${project.accent})` }}
                      >
                        {project.badge}
                      </div>
                    )}
                  </div>

                  {/* Main card info */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      {/* Top row: Tags + Expand Button */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span key={tag} className="project-tag">{tag}</span>
                          ))}
                          {project.tags.length > 4 && (
                            <span className="project-tag" style={{ color: 'var(--text-muted)', borderColor: 'var(--border-subtle)', background: 'transparent' }}>
                              +{project.tags.length - 4}
                            </span>
                          )}
                        </div>

                        {/* Expand toggle pill button */}
                        <button
                          type="button"
                          onClick={() => toggleExpand(project.id)}
                          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-300 flex-shrink-0"
                          style={{
                            background: isExpanded ? `${project.color}25` : 'rgba(255,255,255,0.06)',
                            border: `1px solid ${isExpanded ? project.color + '60' : 'var(--border-subtle)'}`,
                            color: isExpanded ? project.accent : 'var(--text-secondary)'
                          }}
                        >
                          <span>{isExpanded ? 'Ver menos' : 'Detalles'}</span>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform duration-300"
                            style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </button>
                      </div>

                      <h3
                        className="font-display text-2xl md:text-3xl font-black mb-2"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {project.title}
                      </h3>
                      <div className="text-sm font-semibold mb-3" style={{ color: project.accent }}>
                        {project.subtitle}
                      </div>
                      <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {project.description}
                      </p>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 mt-6">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5"
                          style={{
                            background: link.icon === 'external' ? `linear-gradient(135deg, ${project.color}, ${project.accent})` : 'var(--bg-secondary)',
                            border: link.icon === 'external' ? 'none' : '1px solid var(--border-medium)',
                            color: link.icon === 'external' ? '#fff' : 'var(--text-primary)',
                            boxShadow: link.icon === 'external' ? `0 4px 16px ${project.color}40` : 'none'
                          }}
                        >
                          {link.icon === 'github' ? <GitHubIcon /> : <ExternalIcon />}
                          {link.label}
                        </a>
                      ))}

                      {/* Helper hint to expand if collapsed */}
                      {!isExpanded && (
                        <button
                          type="button"
                          onClick={() => toggleExpand(project.id)}
                          className="text-xs font-medium ml-auto transition-colors duration-200 hover:underline hidden sm:inline-block"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          Más información ▾
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                <div
                  className="transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: isExpanded ? '600px' : '0',
                    opacity: isExpanded ? 1 : 0,
                    overflow: 'hidden'
                  }}
                >
                  <div className="p-6 md:p-8 pt-0">
                    {/* Subtle divider with project accent color */}
                    <div
                      className="h-px mb-6"
                      style={{ background: `linear-gradient(to right, ${project.color}60, transparent)` }}
                    />

                    {/* Themed drawer container */}
                    <div
                      className="rounded-2xl p-6 md:p-8"
                      style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Left: Detailed Architecture / Description */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="w-2 h-2 rounded-full" style={{ background: project.accent }} />
                            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                              Descripción en profundidad
                            </span>
                          </div>
                          <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {project.longDescription}
                          </p>
                        </div>

                        {/* Right: Key highlights & Full tags */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="w-2 h-2 rounded-full" style={{ background: project.color }} />
                            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                              Puntos Clave & Logros
                            </span>
                          </div>

                          <ul className="space-y-2.5 mb-6">
                            {project.highlights.map((h) => (
                              <li key={h} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                                <svg
                                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                                  viewBox="0 0 20 20"
                                  fill={project.accent}
                                >
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Full tech tags list */}
                          <div>
                            <div className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                              Tecnologías utilizadas:
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[11px] px-2.5 py-1 rounded-md font-mono font-medium"
                                  style={{
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--border-subtle)',
                                    color: 'var(--text-primary)'
                                  }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glowing left accent border */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to bottom, ${project.color}, ${project.accent})`,
                    opacity: isExpanded ? 1 : 0.4
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
