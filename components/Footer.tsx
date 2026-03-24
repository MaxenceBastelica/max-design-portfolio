import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://github.com/MaxenceBastelica', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/maxence-bastelica-50a836305/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:max.dev.design@gmail.com', icon: Mail, label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* À propos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">MAX DESIGN</h3>
            <p className="text-sm leading-relaxed mb-4">
              Création et réalisation d'applications web et sites internet.
              Développeur web passionné, créant des expériences digitales exceptionnelles.
            </p>
            <p className="text-xs text-gray-400">
              SIRET : 992 659 516 00015
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#accueil" className="hover:text-purple-400 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#projets" className="hover:text-purple-400 transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-purple-400 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Réseaux sociaux */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Un projet en tête ?</h3>
            <p className="text-sm mb-4">Discutons-en !</p>
            <a 
              href="mailto:max.dev.design@gmail.com"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all mb-4"
            >
              Me contacter
            </a>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Liens légaux et Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} MAX DESIGN
            </p>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="hover:text-purple-400 transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-purple-400 transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
