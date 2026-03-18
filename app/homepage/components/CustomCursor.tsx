'use client';
import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.innerWidth <= 768) return;

    const handleMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animateRing);
    };

    const handleHoverIn = () => {
      dotRef.current?.classList.add('hovering');
      ringRef.current?.classList.add('hovering');
    };
    const handleHoverOut = () => {
      dotRef.current?.classList.remove('hovering');
      ringRef.current?.classList.remove('hovering');
    };

    document.addEventListener('mousemove', handleMove);
    rafRef.current = requestAnimationFrame(animateRing);

    const interactables = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleHoverIn);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    return () => {
      document.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(rafRef.current);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverIn);
        el.removeEventListener('mouseleave', handleHoverOut);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor hidden md:block" />
      <div ref={ringRef} className="custom-cursor-ring hidden md:block" />
    </>
  );
}