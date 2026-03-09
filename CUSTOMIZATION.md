# 🎨 Guide de Personnalisation Rapide

## 📝 Modifier vos informations

### 1. Informations personnelles
Fichier : `app/page.tsx`

Cherchez et modifiez :
```typescript
// Titre principal
<h1>Créateur d'expériences web exceptionnelles</h1>

// Description
<p>Développeur web spécialisé en Next.js et React...</p>
```

### 2. Métadonnées SEO
Fichier : `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Votre Nom - Développeur Web",
  description: "Votre description...",
  // ...
};
```

### 3. Logo et nom
Fichier : `components/Header.tsx`

```typescript
<Link href="/" className="text-2xl font-bold gradient-text">
  Votre Nom
</Link>
```

## 🎨 Modifier les couleurs

### Couleurs principales
Fichier : `app/globals.css`

Modifiez les gradients :
```css
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600;
}

/* Changez les couleurs selon vos préférences :
   - blue-600 → orange-600
   - purple-600 → red-600
   - pink-600 → yellow-600
*/
```

### Animations
Fichier : `tailwind.config.ts`

Les animations sont définies dans la section `keyframes`.

## 📂 Ajouter vos projets

Fichier : `app/page.tsx`

Modifiez le tableau `projects` :

```typescript
const projects = [
  {
    title: "Nom de votre projet",
    description: "Description courte et impactante",
    image: "/projects/votre-image.jpg", // Placez l'image dans public/projects/
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://votre-site.com",
    github: "https://github.com/vous/projet",
  },
  // Ajoutez autant de projets que nécessaire
];
```

## 🔗 Modifier les liens sociaux

### Header
Fichier : `components/Header.tsx`

### Footer
Fichier : `components/Footer.tsx`

Modifiez :
```typescript
const socialLinks = [
  { href: 'https://github.com/VOTRE_GITHUB', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/VOTRE_LINKEDIN', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:VOTRE_EMAIL', icon: Mail, label: 'Email' },
];
```

## 💼 Modifier les compétences

Fichier : `app/page.tsx`

```typescript
const skills = [
  {
    icon: Code, // Importer depuis lucide-react
    title: "Votre Compétence",
    description: "Description de la compétence",
  },
  // ... autres compétences
];
```

## 📸 Images

### Structure recommandée
```
public/
├── projects/
│   ├── projet1.jpg
│   ├── projet2.jpg
│   └── projet3.jpg
├── favicon.ico
└── logo.svg
```

### Optimiser les images
- Format : WebP ou JPEG optimisé
- Taille recommandée : 1200x800px pour les projets
- Poids : < 200KB par image

## 🎭 Activer/Désactiver les animations

### Particules d'arrière-plan
Si vous voulez ajouter l'effet de particules, importez le composant dans `app/page.tsx` :

```typescript
import ParticlesBackground from '@/components/ParticlesBackground';

// Dans le composant Home :
return (
  <div className="min-h-screen">
    <ParticlesBackground />
    <Header />
    {/* ... reste du code */}
  </div>
);
```

## 📧 Configurer le formulaire de contact

Pour un vrai envoi d'emails, utilisez :
- [EmailJS](https://www.emailjs.com/)
- [SendGrid](https://sendgrid.com/)
- [Resend](https://resend.com/)

Modifiez la fonction `handleSubmit` dans `components/ContactForm.tsx`

## 🚀 Checklist avant le déploiement

- [ ] Remplacer toutes les informations personnelles
- [ ] Ajouter vos vrais projets
- [ ] Changer les liens sociaux
- [ ] Ajouter vos images de projets
- [ ] Tester sur mobile et desktop
- [ ] Vérifier les liens
- [ ] Configurer le formulaire de contact
- [ ] Ajouter Google Analytics (optionnel)
- [ ] Optimiser les images
- [ ] Tester les performances (Lighthouse)

## 🎯 Astuces Pro

1. **Performance** : Utilisez `next/image` pour les images
2. **SEO** : Ajoutez un sitemap.xml
3. **Analytics** : Intégrez Google Analytics ou Plausible
4. **Blog** : Ajoutez un blog avec MDX
5. **CMS** : Utilisez Sanity ou Contentful pour gérer le contenu

---

Besoin d'aide ? Consultez la [documentation Next.js](https://nextjs.org/docs)
