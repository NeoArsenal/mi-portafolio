import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 lg:px-12"
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo + brand */}
        <div className="flex items-center gap-2">
          <AppLogo size={28} />
          <span className="font-display font-black text-base" style={{ color: 'var(--text-primary)' }}>
            <span className="gradient-text">Alonso</span>Dev
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
          <Link href="#about" className="hover:opacity-100 transition-opacity">Sobre mí</Link>
          <Link href="#projects" className="hover:opacity-100 transition-opacity">Proyectos</Link>
          <a href="https://github.com/NeoArsenal" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">GitHub</a>
          <a href="https://www.linkedin.com/in/alonsoarrelucea/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">LinkedIn</a>
        </div>

        {/* Copyright */}
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          © 2026 AlonsoArrelucea · Lima, Perú
        </p>
      </div>
    </footer>
  );
}