# 📧 Configuration du Formulaire de Contact

Le formulaire utilise **Nodemailer** avec Gmail pour envoyer les emails.

## ⚙️ Configuration (5 minutes)

### 1. Créer un fichier `.env.local`

À la racine du projet, créez un fichier `.env.local` (copie de `.env.example`) :

```bash
cp .env.example .env.local
```

### 2. Générer un mot de passe d'application Gmail

1. **Allez sur** : https://myaccount.google.com/apppasswords
2. **Connectez-vous** à votre compte Gmail (max.dev.design@gmail.com)
3. **Activez la validation en 2 étapes** (si ce n'est pas déjà fait)
   - Allez dans "Sécurité" > "Validation en 2 étapes"
4. **Retournez sur** : https://myaccount.google.com/apppasswords
5. **Créez une nouvelle application** :
   - Nom : "Portfolio MAX DESIGN"
   - Cliquez sur "Créer"
6. **Copiez le mot de passe** généré (16 caractères)

### 3. Configurer `.env.local`

Éditez le fichier `.env.local` :

```env
EMAIL_USER=max.dev.design@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
```

Remplacez `xxxx xxxx xxxx xxxx` par le mot de passe d'application Gmail que vous avez généré.

### 4. Redémarrer le serveur

```bash
npm run dev
```

## ✅ Test du formulaire

1. Allez sur http://localhost:3001
2. Remplissez le formulaire de contact
3. Cliquez sur "Envoyer"
4. Vous devriez recevoir l'email sur **max.dev.design@gmail.com**

## 🔒 Sécurité

- ❌ Ne commitez **JAMAIS** le fichier `.env.local` (il est dans `.gitignore`)
- ✅ Le mot de passe d'application est **uniquement** pour cette app
- ✅ Vous pouvez le révoquer à tout moment depuis votre compte Google

## 🚨 Dépannage

### Erreur "Invalid login"
- Vérifiez que la validation en 2 étapes est activée
- Vérifiez que vous utilisez un **mot de passe d'application**, pas votre mot de passe Gmail
- Vérifiez qu'il n'y a pas d'espaces dans le mot de passe

### Erreur "Authentication failed"
- Copiez-collez le mot de passe directement depuis Google
- Vérifiez que l'email est correct

### L'email n'arrive pas
- Vérifiez vos spams
- Attendez 1-2 minutes
- Vérifiez les logs du terminal pour voir les erreurs

## 📬 Alternative : Autre fournisseur email

Si vous préférez utiliser un autre fournisseur (SendGrid, Mailgun, etc.), modifiez le fichier `app/api/contact/route.ts` :

```typescript
const transporter = nodemailer.createTransport({
  host: 'smtp.votre-fournisseur.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
```

---

Une fois configuré, votre formulaire enverra automatiquement les messages à votre boîte mail ! 📧
