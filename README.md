# 🚀 Max Design - Portfolio Professionnel

Portfolio moderne et élégant créé avec les dernières technologies web.

## 🛠️ Technologies utilisées

- **Framework** : Next.js 15 (App Router)
- **UI** : React 19
- **Langage** : TypeScript 5
- **Styling** : Tailwind CSS 3
- **Icons** : Lucide React
- **Animations** : Framer Motion

## ✨ Fonctionnalités

- ✅ Design ultra-moderne et épuré
- ✅ Animations fluides et professionnelles
- ✅ Responsive sur tous les appareils
- ✅ Mode sombre / clair automatique
- ✅ Performance optimisée
- ✅ SEO friendly
- ✅ Formulaire de contact interactif
- ✅ Section portfolio pour vos projets
- ✅ Effets visuels avancés (glassmorphism, gradients animés)

## 🚀 Installation

1. **Installer les dépendances** :
```bash
npm install
```

2. **Lancer le serveur de développement** :
```bash
npm run dev
```

3. **Ouvrir votre navigateur** :
Allez sur [http://localhost:3000](http://localhost:3000)

## 📦 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée la version de production
- `npm start` - Lance le serveur de production
- `npm run lint` - Vérifie le code

## 🎨 Personnalisation

### Modifier les informations personnelles

Éditez le fichier `app/page.tsx` pour personnaliser :
- Votre nom et titre
- Vos projets
- Vos compétences
- Vos liens de réseaux sociaux

### Modifier les couleurs

Les couleurs principales sont définies dans `tailwind.config.ts` et `app/globals.css`.

### Ajouter vos projets

Dans `app/page.tsx`, modifiez le tableau `projects` :
```typescript
const projects = [
  {
    title: "Votre Projet",
    description: "Description du projet",
    image: "/projects/votre-image.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://votre-site.com",
    github: "https://github.com/vous/projet",
  },
  // ... autres projets
];
```

## 📸 Ajouter vos images

Placez vos images dans le dossier `public/projects/` et référencez-les dans votre code.

## 🌐 Déploiement

### Vercel (Recommandé)

1. Poussez votre code sur GitHub
2. Importez sur [Vercel](https://vercel.com)
3. Déployez en un clic !

### Netlify

1. Connectez votre repo GitHub
2. Configuration de build : `npm run build`
3. Dossier de publication : `.next`

## 📝 SEO

Le site est optimisé pour le référencement :
- Métadonnées configurées dans `app/layout.tsx`
- Balises Open Graph pour les réseaux sociaux
- Sitemap automatique avec Next.js
- Performance optimale

## 🎯 Prochaines améliorations possibles

- [ ] Blog intégré
- [ ] CMS headless (Sanity, Contentful)
- [ ] Analytics (Google Analytics, Plausible)
- [ ] Formulaire de contact avec API (SendGrid, EmailJS)
- [ ] Témoignages clients
- [ ] Multilingue (i18n)

## 📄 Licence

Ce projet est open source et disponible sous licence MIT.

## 🤝 Support

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue ou me contacter.
