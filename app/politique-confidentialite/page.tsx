import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Shield, Database, Eye, Lock, UserCheck, Mail } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Politique de confidentialité - MAX DESIGN',
  description: 'Politique de confidentialité et protection des données personnelles',
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline mb-8"
          >
            <ArrowLeft size={20} />
            Retour à l'accueil
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <div className="bg-purple-600 p-3 rounded-xl">
              <Shield className="text-white" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Politique de confidentialité</h1>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                MAX DESIGN accorde une grande importance à la protection de vos données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
            </section>

            {/* Responsable du traitement */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="text-purple-600 dark:text-purple-400" size={24} />
                <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  1. Responsable du traitement
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Le responsable du traitement de vos données personnelles est :
              </p>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Raison sociale :</strong> MAXENCE BASTELICA - MAX DESIGN</li>
                <li><strong>SIRET :</strong> 992 659 516 00015</li>
                <li><strong>Email :</strong> <a href="mailto:max.dev.design@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">max.dev.design@gmail.com</a></li>
              </ul>
            </section>

            {/* Données collectées */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-purple-600 dark:text-purple-400" size={24} />
                <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  2. Données personnelles collectées
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Nous collectons uniquement les données nécessaires au bon fonctionnement de nos services :
              </p>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Formulaire de contact</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Message</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Données de navigation</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Pages visitées</li>
                    <li>Date et heure de connexion</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Finalités */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-purple-600 dark:text-purple-400" size={24} />
                <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  3. Finalités du traitement
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Vos données sont collectées pour les finalités suivantes :
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                  <span>Répondre à vos demandes de contact et devis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                  <span>Améliorer l'expérience utilisateur du site</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                  <span>Analyser le trafic et l'utilisation du site (statistiques anonymisées)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                  <span>Assurer la sécurité du site</span>
                </li>
              </ul>
            </section>

            {/* Base légale */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                4. Base légale du traitement
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Le traitement de vos données personnelles repose sur :
              </p>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Votre consentement</strong> : formulaire de contact</li>
                <li><strong>L'intérêt légitime</strong> : sécurité du site et amélioration des services</li>
                <li><strong>L'exécution d'un contrat</strong> : traitement de vos demandes de devis</li>
              </ul>
            </section>

            {/* Durée de conservation */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                5. Durée de conservation
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Vos données sont conservées pendant :
              </p>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Demandes de contact :</strong> 3 ans après le dernier contact</li>
                <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                <li><strong>Contrats clients :</strong> Durée légale de conservation (10 ans)</li>
              </ul>
            </section>

            {/* Sécurité */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="text-purple-600 dark:text-purple-400" size={24} />
                <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  6. Sécurité des données
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données contre :
              </p>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>L'accès non autorisé</li>
                <li>La modification, divulgation ou destruction non autorisée</li>
                <li>La perte accidentelle</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Notre site utilise le protocole HTTPS pour garantir la sécurité des échanges de données.
              </p>
            </section>

            {/* Vos droits */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                7. Vos droits (RGPD)
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">✓ Droit d'accès</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Obtenir une copie de vos données</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">✓ Droit de rectification</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Corriger vos données inexactes</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">✓ Droit à l'effacement</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Supprimer vos données</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">✓ Droit à la portabilité</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Récupérer vos données</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">✓ Droit d'opposition</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Vous opposer au traitement</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">✓ Droit de limitation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Limiter le traitement</p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                8. Cookies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Ce site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
              </p>
            </section>

            {/* Partage des données */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                9. Partage des données
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, sauf :
              </p>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>Obligation légale ou réglementaire</li>
                <li>Protection de nos droits et de notre sécurité</li>
                <li>Prestataires techniques (hébergement) sous contrat de confidentialité</li>
              </ul>
            </section>

            {/* Exercer vos droits */}
            <section className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-purple-600 dark:text-purple-400" size={24} />
                <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  10. Exercer vos droits
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Pour exercer l'un de vos droits, contactez-nous :
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Par email :</strong> <a href="mailto:max.dev.design@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">max.dev.design@gmail.com</a></li>
                <li><strong>Délai de réponse :</strong> 1 mois maximum</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Vous avez également le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">www.cnil.fr</a>
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                11. Modifications de la politique
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Les modifications entrent en vigueur dès leur publication sur cette page.
              </p>
            </section>

            <p className="text-sm text-gray-500 dark:text-gray-400 text-center pt-8 border-t border-gray-200 dark:border-gray-700">
              Dernière mise à jour : 9 mars 2026
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
