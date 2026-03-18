import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import GitHubStatsSection from './components/GitHubStatsSection';
import CustomCursor from './components/CustomCursor';
import ThemeProvider from './components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollRevealInit from './components/ScrollRevealInit';

export default function Homepage() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <ScrollRevealInit />
      <Header />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <GitHubStatsSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}