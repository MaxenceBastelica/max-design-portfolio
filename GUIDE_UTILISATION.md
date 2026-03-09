# 🎨 Guide d'Utilisation - Améliorations Graphiques

## 🚀 Installation

Les améliorations sont déjà intégrées ! Aucune installation supplémentaire nécessaire.

## 📂 Nouveaux Fichiers Créés

```
hooks/
  ├── useScrollReveal.ts    # Hook pour animations au scroll
  └── useParallax.ts        # Hook pour effet parallax

components/
  ├── CustomCursor.tsx      # Curseur personnalisé
  └── PageLoader.tsx        # Loader de page (optionnel)
```

## 🎯 Utilisation

### 1. Animations de Révélation au Scroll

Le hook `useScrollReveal` est déjà actif sur la page principale. Pour l'utiliser sur d'autres pages :

```tsx
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function MaPage() {
  useScrollReveal(); // Activer les animations
  
  return (
    <div>
      {/* Apparaît en fade-up */}
      <div className="reveal">
        <h2>Mon Titre</h2>
      </div>
      
      {/* Apparaît depuis la gauche */}
      <div className="reveal-left">
        <p>Mon contenu</p>
      </div>
      
      {/* Apparaît depuis la droite */}
      <div className="reveal-right">
        <p>Autre contenu</p>
      </div>
      
      {/* Apparaît avec scale */}
      <div className="reveal-scale">
        <div className="card">Ma carte</div>
      </div>
    </div>
  );
}
```

### 2. Effet Parallax

Pour ajouter un effet parallax sur un élément :

```tsx
import { useParallax } from '@/hooks/useParallax';

export default function MaSection() {
  const parallaxRef = useParallax(0.3); // Vitesse : 0.3
  
  return (
    <div ref={parallaxRef} className="my-element">
      {/* Contenu avec effet parallax */}
    </div>
  );
}
```

**Vitesses recommandées :**
- `0.2` : Très lent (arrière-plan lointain)
- `0.5` : Moyen (éléments décoratifs)
- `0.8` : Rapide (éléments au premier plan)

### 3. Classes CSS Utilitaires

#### Gradients Animés
```tsx
{/* Texte avec gradient animé */}
<h1 className="gradient-text-animated">Mon Titre</h1>

{/* Background avec gradient animé */}
<div className="animate-gradient bg-gradient-to-r from-blue-500 to-purple-500">
  Contenu
</div>
```

#### Glassmorphism
```tsx
<div className="glass-modern p-6 rounded-xl">
  Contenu avec effet de verre
</div>
```

#### Cartes 3D
```tsx
<div className="card-3d p-6 rounded-xl">
  Carte avec effet 3D au hover
</div>
```

#### Blobs Animés
```tsx
{/* Blob avec animation lente */}
<div className="blob-animated w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>

{/* Blob avec animation inversée */}
<div className="blob-animated-2 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"></div>
```

#### Effet de Lueur
```tsx
<div className="glow-effect">
  Élément avec lueur pulsante
</div>
```

### 4. Curseur Personnalisé

Le curseur est déjà activé sur la page principale. Pour l'ajouter à d'autres pages :

```tsx
import CustomCursor from '@/components/CustomCursor';

export default function MaPage() {
  return (
    <>
      <CustomCursor />
      {/* Votre contenu */}
    </>
  );
}
```

> **Note :** Le curseur est automatiquement désactivé sur mobile.

### 5. Loader de Page (Optionnel)

Pour ajouter un loader au chargement de la page :

```tsx
import PageLoader from '@/components/PageLoader';

export default function MaPage() {
  return (
    <>
      <PageLoader />
      {/* Votre contenu */}
    </>
  );
}
```

## 🎨 Personnalisation

### Modifier les Couleurs des Gradients

Dans `app/globals.css`, modifiez les gradients :

```css
.gradient-text-animated {
  background: linear-gradient(
    90deg,
    #VOTRE_COULEUR_1,
    #VOTRE_COULEUR_2,
    #VOTRE_COULEUR_3,
    #VOTRE_COULEUR_1
  );
}
```

### Ajuster la Vitesse des Animations

Dans `tailwind.config.ts`, modifiez les durées :

```typescript
animation: {
  'float': 'float 3s ease-in-out infinite', // Changez 3s
  'gradient': 'gradient 8s ease infinite',  // Changez 8s
}
```

### Changer les Seuils d'Apparition

Dans `hooks/useScrollReveal.ts`, modifiez le threshold :

```typescript
const observerOptions = {
  threshold: 0.1,  // Changez cette valeur (0 à 1)
  rootMargin: '0px 0px -100px 0px'  // Ou ajustez la marge
};
```

## 🎯 Bonnes Pratiques

### Performance
```tsx
// ✅ BON : Animation sur petit nombre d'éléments
<div className="reveal">
  <h2>Titre Important</h2>
</div>

// ❌ ÉVITER : Trop d'animations simultanées
{items.map(item => (
  <div className="reveal card-3d glow-effect blob-animated">
    {/* Trop d'effets à la fois */}
  </div>
))}
```

### Délais d'Animation
```tsx
{/* Ajouter des délais pour un effet de cascade */}
{items.map((item, index) => (
  <div 
    className="reveal-scale"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {item.content}
  </div>
))}
```

### Responsive
```tsx
{/* Simplifier les animations sur mobile */}
<div className="reveal md:reveal-scale lg:card-3d">
  Animations progressives selon la taille d'écran
</div>
```

## 🔧 Dépannage

### Les animations ne se déclenchent pas
1. Vérifiez que `useScrollReveal()` est appelé dans votre composant
2. Assurez-vous que les classes `.reveal`, `.reveal-left`, etc. sont bien appliquées
3. Vérifiez dans la console s'il y a des erreurs

### Le curseur ne s'affiche pas
- Le curseur est désactivé sur mobile (normal)
- Vérifiez que `<CustomCursor />` est bien dans le composant
- Assurez-vous que le z-index n'est pas masqué par d'autres éléments

### Les blobs ne bougent pas
- Vérifiez que les classes `blob-animated` ou `blob-animated-2` sont appliquées
- Assurez-vous que le CSS dans `globals.css` est bien chargé

### Performance lente
- Réduisez le nombre d'animations simultanées
- Utilisez `will-change` avec parcimonie
- Simplifiez les effets sur mobile

## 📱 Mode Sombre

Tous les effets sont compatibles avec le mode sombre ! Les couleurs s'adaptent automatiquement :

```tsx
{/* Adapté automatiquement */}
<div className="bg-white dark:bg-gray-900">
  <div className="glass-modern">
    Contenu avec glassmorphism
  </div>
</div>
```

## 🎉 Résultat

Votre site dispose maintenant de :
- ✅ Animations fluides et professionnelles
- ✅ Effets visuels modernes (glassmorphism, 3D, blobs)
- ✅ Curseur personnalisé unique
- ✅ Révélations au scroll automatiques
- ✅ Gradients animés tendance
- ✅ Performance optimisée
- ✅ Compatible mobile et mode sombre

Profitez de votre nouveau portfolio au niveau Awwwards ! 🚀
