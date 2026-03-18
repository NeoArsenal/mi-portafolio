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
  links: {label: string;href: string;icon: 'github' | 'external';}[];
  highlights: string[];
  badge?: string;
}

const PROJECTS: Project[] = [
{
  id: 'robotics-cv',
  title: 'Robótica & Computer Vision',
  subtitle: 'Raspberry Pi + Python + OpenCV',
  description: 'Sistema de detección y seguimiento de objetos en tiempo real con Raspberry Pi.',
  longDescription: 'Proyecto ganador del 1er puesto en EXPOINGENIERÍA UPN. Sistema embebido que utiliza una Raspberry Pi 4 con cámara para detectar y rastrear objetos en tiempo real usando OpenCV y técnicas de procesamiento de imágenes. Incluye un dashboard web para monitoreo en vivo.',
  tags: ['Python', 'OpenCV', 'Raspberry Pi', 'Computer Vision', 'IoT'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15eda1954-1765038631239.png",
  imageAlt: 'Raspberry Pi board con cables conectados y pantalla mostrando detección de objetos en tiempo real',
  color: '#7C3AED',
  accent: '#A78BFA',
  links: [
  { label: 'GitHub', href: 'https://github.com/NeoArsenal/Ecom-Clothes-Frontend', icon: 'github' }],

  highlights: ['1er Puesto EXPOINGENIERÍA', 'Detección en tiempo real', 'Dashboard web integrado', 'Hardware embebido'],
  badge: '🏆 1er Puesto'
},
{
  id: 'ecommerce-shop',
  title: 'E-Commerce Shop',
  subtitle: 'MedusaJS + Next.js + Strapi',
  description: 'Plataforma de comercio electrónico moderna con headless CMS y backend robusto.',
  longDescription: 'E-commerce completo con arquitectura headless. Backend potenciado por MedusaJS para gestión de inventario, pedidos y pagos. Frontend en Next.js 14 con App Router para rendimiento óptimo. Strapi como CMS headless para gestión de contenido dinámico. Incluye carrito, checkout, panel de admin y sistema de usuarios.',
  tags: ['Next.js', 'MedusaJS', 'Strapi', 'TypeScript', 'PostgreSQL', 'Tailwind'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12c9ae853-1772778409011.png",
  imageAlt: 'Interfaz de e-commerce moderna con productos, carrito de compras y diseño limpio en pantalla de laptop',
  color: '#C026D3',
  accent: '#E879F9',
  links: [
  { label: 'GitHub', href: 'https://github.com/NeoArsenal/Ecom-Clothes-Frontend', icon: 'github' },
  { label: 'Demo', href: '#', icon: 'external' }],

  highlights: ['Arquitectura headless', 'SSR + ISR con Next.js 14', 'Panel admin completo', 'Integración de pagos']
},
{
  id: 'portfolio',
  title: 'Portfolio Personal',
  subtitle: 'Next.js + TypeScript + Tailwind',
  description: 'Este mismo portafolio: diseño premium con animaciones, tema oscuro/claro y cursor personalizado.',
  longDescription: 'Portfolio personal construido con Next.js 15, TypeScript y CSS personalizado. Incluye animaciones de gradiente en movimiento, cursor personalizado con seguimiento reactivo, modo oscuro/claro, tarjetas con hover effects, typewriter effect, y scroll-triggered animations. Diseño inspirado en portfolios premium de desarrolladores internacionales.',
  tags: ['Next.js', 'TypeScript', 'CSS Animations', 'Responsive', 'Dark Mode'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_167b9c5bc-1773063717864.png",
  imageAlt: 'Código fuente de portafolio web en editor de código con diseño moderno y animaciones en pantalla',
  color: '#0EA5E9',
  accent: '#38BDF8',
  links: [
  { label: 'GitHub', href: 'https://github.com/NeoArsenal/Ecom-Clothes-Frontend', icon: 'github' }],

  highlights: ['Cursor personalizado', 'Animaciones CSS avanzadas', 'Dark/Light mode', 'Fully responsive']
}];


function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>);

}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>);

}

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-1/3 right-[-150px] w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D946EF 0%, transparent 70%)', filter: 'blur(80px)' }} />


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
            data-delay="100">

            Lo que he
            <br />
            <span className="gradient-text italic">construido</span>
          </h2>
          <p className="text-base max-w-xs reveal-on-scroll" style={{ color: 'var(--text-muted)' }} data-delay="200">
            Proyectos reales que demuestran mis habilidades técnicas y creatividad.
          </p>
        </div>

        {/* Project cards */}
        <div className="space-y-6">
          {PROJECTS.map((project, i) => {
            const isExpanded = expandedId === project.id;

            return (
              <div
                key={project.id}
                className="reveal-on-scroll card-hover card-shine relative overflow-hidden rounded-3xl cursor-pointer"
                data-delay={`${i * 100}`}
                style={{
                  background: 'var(--bg-card)',
                  border: `1px solid ${isExpanded ? project.color + '40' : 'var(--border-subtle)'}`,
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  boxShadow: isExpanded ? `0 20px 60px ${project.color}20` : 'var(--shadow-card)'
                }}
                onClick={() => setExpandedId(isExpanded ? null : project.id)}>

                {/* Card header - always visible */}
                <div className="flex flex-col md:flex-row gap-0 md:gap-0">
                  {/* Image */}
                  <div
                    className="relative overflow-hidden"
                    style={{ height: isExpanded ? '240px' : '200px', width: '100%', maxWidth: isExpanded ? '100%' : '380px', transition: 'all 0.4s ease', flexShrink: 0 }}>

                    <AppImage
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700"
                      style={{ transform: isExpanded ? 'scale(1.05)' : 'scale(1)' }} />

                    {/* Overlay */}
                    <div className="project-img-overlay absolute inset-0" />

                    {/* Badge */}
                    {project.badge &&
                    <div
                      className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white"
                      style={{ background: `linear-gradient(135deg, ${project.color}, ${project.accent})` }}>

                        {project.badge}
                      </div>
                    }

                    {/* Expand indicator */}
                    <div className="absolute bottom-4 right-4">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                          background: isExpanded ? project.color : 'rgba(255,255,255,0.1)',
                          backdropFilter: 'blur(8px)',
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}>

                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 4).map((tag) =>
                        <span key={tag} className="project-tag">{tag}</span>
                        )}
                        {project.tags.length > 4 &&
                        <span className="project-tag" style={{ color: 'var(--text-muted)', borderColor: 'var(--border-subtle)', background: 'transparent' }}>
                            +{project.tags.length - 4}
                          </span>
                        }
                      </div>

                      <h3
                        className="font-display text-2xl md:text-3xl font-black mb-2"
                        style={{ color: 'var(--text-primary)' }}>

                        {project.title}
                      </h3>
                      <div className="text-sm font-semibold mb-3" style={{ color: project.accent }}>
                        {project.subtitle}
                      </div>
                      <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {project.description}
                      </p>
                    </div>

                    {/* Links - always visible */}
                    <div className="flex gap-3 mt-6" onClick={(e) => e.stopPropagation()}>
                      {project.links.map((link) =>
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
                        }}>

                          {link.icon === 'github' ? <GitHubIcon /> : <ExternalIcon />}
                          {link.label}
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded content */}
                <div
                  style={{
                    maxHeight: isExpanded ? '400px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
                  }}>

                  <div className="px-6 md:px-8 pb-8 pt-2">
                    <div
                      className="h-px mb-6"
                      style={{ background: `linear-gradient(to right, ${project.color}40, transparent)` }} />


                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Long description */}
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
                          Descripción detallada
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {project.longDescription}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
                          Highlights
                        </div>
                        <ul className="space-y-2">
                          {project.highlights.map((h) =>
                          <li key={h} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                              <div
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: project.accent }} />

                              {h}
                            </li>
                          )}
                        </ul>

                        {/* All tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tags.map((tag) =>
                          <span key={tag} className="project-tag">{tag}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Color accent left border */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl transition-opacity duration-300"
                  style={{ background: `linear-gradient(to bottom, ${project.color}, ${project.accent})`, opacity: isExpanded ? 1 : 0 }} />

              </div>);

          })}
        </div>
      </div>
    </section>);

}