'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { ArrowRight, Code, Sparkles, Zap, Globe, Palette, Rocket, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const projects = [
    {
      title: "L'Atelier du Chat Noir",
      description: "Site web élégant pour un atelier artisanal, avec une interface intuitive et un design raffiné.",
      image: "/projects/chat-noir.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "#",
      github: "#",
    },
    {
      title: "Wonder Home Conciergerie",
      description: "Plateforme moderne de conciergerie avec système de réservation et gestion de services.",
      image: "/projects/wonder-home.jpg",
      tags: ["React", "Next.js", "TypeScript"],
      link: "#",
      github: "#",
    },
    {
      title: "E-Commerce Premium",
      description: "Boutique en ligne haut de gamme avec paiement sécurisé et expérience utilisateur optimale.",
      image: "/projects/ecommerce.jpg",
      tags: ["Next.js", "Stripe", "Tailwind"],
      link: "#",
      github: "#",
    },
  ];

  const skills = [
    {
      icon: Code,
      title: "Développement Web",
      description: "Création de sites et applications web modernes avec Next.js, React et TypeScript",
    },
    {
      icon: Globe,
      title: "Applications Mobiles",
      description: "Développement d'applications mobiles performantes et intuitives",
    },
    {
      icon: Palette,
      title: "Design UI/UX",
      description: "Interfaces élégantes et intuitives pour une expérience utilisateur exceptionnelle",
    },
    {
      icon: Zap,
      title: "Performance & SEO",
      description: "Optimisation poussée pour des sites ultra-rapides et bien référencés",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        id="accueil"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        {/* Background gradient animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 animate-gradient"></div>
        
        {/* Cercles décoratifs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-6 animate-slide-down">
              <Sparkles className="text-purple-600 dark:text-purple-400" size={20} />
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                Disponible pour vos projets
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up leading-tight">
              Créateur d'applications
              <br />
              <span className="gradient-text">web & mobiles</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 animate-fade-in leading-relaxed">
              Développeur Full Stack
              <br />
              Je conçois des applications mobiles et sites internet professionnels.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <a
                href="#projets"
                className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Voir mes projets
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#contact"
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ce que je fais de <span className="gradient-text">mieux</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Des compétences techniques pointues au service de vos ambitions digitales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-24 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mes <span className="gradient-text">créations</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Une sélection de projets qui illustrent mon savoir-faire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
              >
                {/* Image placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Rocket className="text-white/50" size={64} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Voir le site
                    </a>
                    <a
                      href={project.github}
                      className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                      aria-label="Voir sur GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="a-propos" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                À propos de <span className="gradient-text">moi</span>
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                <p>
                  Entrepreneur et développeur passionné, je crée des 
                  applications web et mobiles qui allient esthétique moderne et performance technique.
                </p>
                <p>
                  Spécialisé en <strong className="text-purple-600 dark:text-purple-400">Next.js</strong>, 
                  <strong className="text-purple-600 dark:text-purple-400"> React</strong> et 
                  <strong className="text-purple-600 dark:text-purple-400"> TypeScript</strong>, 
                  j'accompagne mes clients dans la création de solutions digitales innovantes adaptées à leurs besoins.
                </p>
                <p>
                  <strong className="text-purple-600 dark:text-purple-400">MAX DESIGN</strong> propose une expertise complète : 
                  de la conception à la réalisation de vos projets web et mobiles, avec un focus sur la qualité et l'expérience utilisateur.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
                  <div className="text-3xl font-bold gradient-text mb-1">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projets réalisés</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                  <div className="text-3xl font-bold gradient-text mb-1">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Clients satisfaits</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 animate-gradient"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="text-white/30" size={120} />
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Disponible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Travaillons <span className="gradient-text">ensemble</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Un projet en tête ? Discutons-en autour d'un café (virtuel ou réel) !
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
