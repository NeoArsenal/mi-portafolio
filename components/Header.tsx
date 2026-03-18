'use client';
import React, { useEffect, useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import { useTheme } from '@/app/homepage/components/ThemeProvider';

const NAV_LINKS = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Contacto', href: '#contact' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(var(--bg-primary-rgb, 10, 0, 8), 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <AppLogo size={32} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          <span
            className="font-display text-lg font-black tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            <span className="gradient-text">Alonso</span> Arrelucea
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              className="text-sm font-medium transition-colors duration-200 hover:opacity-100"
              style={{ color: 'var(--text-muted)' }}
            >
              {link?.label}
            </a>
          ))}
        </div>

        {/* Right: theme toggle + CTA */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-violet)' }}>
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-violet)' }}>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #C026D3)', boxShadow: '0 4px 16px rgba(139,92,246,0.3)' }}
          >
            Contáctame
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-primary)' }}>
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-primary)' }}>
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}
        >
          {NAV_LINKS?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              className="text-sm font-semibold py-2"
              style={{ color: 'var(--text-secondary)' }}
              onClick={() => setMenuOpen(false)}
            >
              {link?.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex justify-center py-3 rounded-full font-bold text-sm text-white"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #C026D3)' }}
            onClick={() => setMenuOpen(false)}
          >
            Contáctame
          </a>
        </div>
      )}
    </header>
  );
}