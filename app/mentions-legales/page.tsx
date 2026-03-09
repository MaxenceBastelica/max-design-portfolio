import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Mentions légales - MAX DESIGN',
  description: 'Mentions légales du site MAX DESIGN',
};

export default function MentionsLegales() {
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

          <h1 className="text-4xl md:text-5xl font-bold mb-8">Mentions légales</h1>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            {/* Éditeur du site */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                1. Éditeur du site
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Le site <strong>maxdesign.fr</strong> est édité par :
              </p>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Raison sociale :</strong> MAXENCE BASTELICA</li>
                <li><strong>Forme juridique :</strong> Entrepreneur individuel</li>
                <li><strong>Nom commercial :</strong> MAX DESIGN</li>
                <li><strong>SIRET :</strong> 992 659 516 00015</li>
                <li><strong>Activité :</strong> Programmation informatique (Code APE : 6201Z)</li>
                <li><strong>Email :</strong> <a href="mailto:max.dev.design@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">max.dev.design@gmail.com</a></li>
              </ul>
            </section>

            {/* Directeur de publication */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                2. Directeur de la publication
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Le directeur de la publication du site est <strong>Maxence BASTELICA</strong>.
              </p>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                3. Hébergement
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Le site est hébergé par :
              </p>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Hébergeur :</strong> Vercel Inc.</li>
                <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
                <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">vercel.com</a></li>
              </ul>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                4. Propriété intellectuelle
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) est la propriété exclusive de MAX DESIGN, sauf mention contraire.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de MAX DESIGN.
              </p>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                5. Limitation de responsabilité
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Les informations contenues sur ce site sont aussi précises que possible. Toutefois, MAX DESIGN ne pourra être tenu responsable des omissions, inexactitudes et carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
            </section>

            {/* Liens hypertextes */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                6. Liens hypertextes
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Le site peut contenir des liens hypertextes vers d'autres sites. MAX DESIGN n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                7. Cookies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
              </p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                8. Droit applicable
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut d'accord amiable, le litige sera porté devant les tribunaux français compétents.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                9. Contact
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Pour toute question concernant les mentions légales, vous pouvez nous contacter :
              </p>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Par email :</strong> <a href="mailto:max.dev.design@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">max.dev.design@gmail.com</a></li>
                <li><strong>Via le formulaire de contact</strong> disponible sur la page d'accueil</li>
              </ul>
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
