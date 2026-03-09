'use client';

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // Éviter l'exécution côté serveur
    if (typeof window === 'undefined') return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Désactiver l'observation après activation pour performance
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Petite attente pour laisser le DOM se stabiliser
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale'
      );
      
      revealElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
}
