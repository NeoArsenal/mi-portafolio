'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from "@/components/ui/AppImage";


const ROLES = [
'Ingeniero de Sistemas',
'Full-Stack Developer',
'Computer Vision Enthusiast',
'Next.js Developer',
'Python & OpenCV Dev'];


export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [typing, setTyping] = useState(true);
  const blobRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayedRole.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
        }, 55);
      } else {
        timeout = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayedRole.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedRole(displayedRole.slice(0, -1));
        }, 28);
      } else {
      // SOLUCIÓN: Envolverlo en un timeout con medio segundo de pausa
        timeout = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % ROLES.length);
          setTyping(true);
        }, 500);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedRole, typing, roleIndex]);

  // Cursor-reactive blob parallax
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return;
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      blobRef.current.style.transform = `translate(${x * 40}px, ${y * 30}px)`;
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const techBadges = ['Next.js', 'React', 'TypeScript', 'Python', 'OpenCV', 'PostgreSQL', 'Tailwind CSS', 'Git', 'JavaScript', 'HTML', 'CSS', 'Vercel', 'Node.js', 'Angular', 'C#', 'Java'];

  return (
    <section
      ref={heroRef}
      className="animated-gradient-bg noise-overlay relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Atmospheric depth layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Far background blob */}
        <div
          className="blob-1 absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)', filter: 'blur(80px)' }} />

        {/* Mid blob - cursor reactive */}
        <div
          ref={blobRef}
          className="blob-2 absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #D946EF 0%, transparent 70%)', filter: 'blur(100px)', transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' }} />

        {/* Foreground accent blob */}
        <div
          className="blob-3 absolute bottom-[10%] right-[20%] w-[300px] h-[300px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #A78BFA 0%, transparent 70%)', filter: 'blur(60px)' }} />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,92,246,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }} />

      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-semibold uppercase tracking-widest animate-fade-slide-up"
              style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)', color: '#A78BFA', animationDelay: '0.1s' }}>

              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" />
              </span>
              Disponible para proyectos · Lima, Perú
            </div>

            {/* Name - massive display */}
            <h1
              className="font-display hero-name font-black leading-[0.9] mb-4 animate-fade-slide-up"
              style={{
                fontSize: 'clamp(4rem, 11vw, 9rem)',
                animationDelay: '0.2s',
                opacity: 0,
                animationFillMode: 'forwards'
              }}>

              <span className="gradient-text text-glow">Alonso</span>
              <br />
              <span style={{ color: 'var(--text-primary)' }}>Arrelucea</span>
            </h1>

            {/* Typewriter role */}
            <div
              className="font-sans text-xl md:text-2xl font-medium mb-8 h-8 animate-fade-slide-up"
              style={{ color: 'var(--text-secondary)', animationDelay: '0.35s', opacity: 0, animationFillMode: 'forwards' }}>

              <span>{displayedRole}</span>
              <span className="typing-cursor ml-0.5 inline-block w-0.5 h-6 align-middle" style={{ background: 'var(--accent-fuchsia)' }} />
            </div>

            {/* Description */}
            <p
              className="text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-slide-up"
              style={{ color: 'var(--text-muted)', animationDelay: '0.45s', opacity: 0, animationFillMode: 'forwards' }}>

              Estudiante de{' '}
              <span style={{ color: 'var(--accent-violet)', fontWeight: 600 }}>Ingeniería de Sistemas</span>
              {' '}en UPN, 8vo ciclo. Me apasiona el desarrollo web moderno y la robotica.
              Ese mismo enfoque práctico fue el que me permitió destacar con el{' '}
              <span style={{ color: 'var(--accent-fuchsia)', fontWeight: 600 }}>1er puesto en EXPOINGENIERÍA</span>.
              Actualmente construyendo proyectos y buscando nuevas formas de innovar.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-slide-up"
              style={{ animationDelay: '0.55s', opacity: 0, animationFillMode: 'forwards' }}>

              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #C026D3)', boxShadow: '0 4px 24px rgba(139,92,246,0.4)' }}>

                <span>Ver proyectos</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://github.com/NeoArsenal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-medium)', color: 'var(--text-primary)' }}>

                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/alonsoarrelucea/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-medium)', color: 'var(--text-primary)' }}>

                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Tech badges */}
            <div
              className="flex flex-wrap gap-2 justify-center lg:justify-start animate-fade-slide-up"
              style={{ animationDelay: '0.65s', opacity: 0, animationFillMode: 'forwards' }}>

              {techBadges.map((badge, i) =>
              <span
                key={badge}
                className="project-tag animate-float"
                style={{ animationDelay: `${i * 0.3}s` }}>

                  {badge}
                </span>
              )}
            </div>
          </div>

          {/* Right: Avatar / visual */}
          <div
            className="relative flex-shrink-0 animate-fade-slide-up"
            style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>

            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-[-3px] rounded-full opacity-60"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #D946EF)', filter: 'blur(8px)' }} />

              {/* Avatar container */}
              <div
                className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden"
                style={{ border: '2px solid rgba(139,92,246,0.4)' }}>

                <AppImage
                  src='/perfil.png'
                  alt="Alonso, estudiante de Ingeniería de Sistemas en UPN Lima, sonriendo con ropa casual"
                  fill
                  className="object-cover"
                  priority />

                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2) 0%, transparent 60%)' }} />

              </div>

              {/* Floating achievement badge */}
              <div
                className="absolute -bottom-4 -right-4 animate-float-delayed px-3 py-2 rounded-2xl text-xs font-bold"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #C026D3)', boxShadow: '0 8px 24px rgba(139,92,246,0.5)', color: '#fff' }}>

                🏆 1er Puesto
                <div className="text-[10px] opacity-80 font-normal">EXPOINGENIERÍA</div>
              </div>

              {/* UPN badge */}
              <div
                className="absolute -top-4 -left-4 animate-float px-3 py-2 rounded-2xl text-xs font-bold"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-medium)', color: 'var(--text-primary)' }}>

                📍 UPN · Lima
                <div className="text-[10px] opacity-60 font-normal">8vo ciclo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-3 gap-4 mt-16 max-w-lg mx-auto lg:mx-0 animate-fade-slide-up"
          style={{ animationDelay: '0.75s', opacity: 0, animationFillMode: 'forwards' }}>

          {[
          { value: '3+', label: 'Proyectos' },
          { value: '8vo', label: 'Ciclo UPN' },
          { value: '1er', label: 'Puesto Expo' }].
          map((stat) =>
          <div
            key={stat.label}
            className="text-center p-4 rounded-2xl"
            style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid var(--border-subtle)' }}>

              <div className="font-display text-2xl font-black gradient-text">{stat.value}</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>Scroll</span>
        <div className="animate-scroll-bounce">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-violet)' }}>
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>);

}