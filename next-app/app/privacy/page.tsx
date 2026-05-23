export default function Privacy() {
  return (
    <div className="max-w-[800px] mx-auto py-12 md:py-20 px-4">
      <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-3xl p-8 md:p-12 backdrop-blur-md flex flex-col gap-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          Politique de Confidentialité
        </h1>

        <section className="flex flex-col gap-3 text-[rgba(240,239,255,0.8)] font-light leading-relaxed">
          <h2 className="text-xl font-bold text-white mt-4">1. Collecte de données</h2>
          <p>
            Nous ne collectons aucune donnée personnelle sur ce site, à l'exception des informations saisies volontairement dans le formulaire de contact (nom, email et contenu du message) afin de répondre à vos demandes.
          </p>

          <h2 className="text-xl font-bold text-white mt-4">2. Cookies et traceurs</h2>
          <p>
            Ce site utilise des services tiers comme <strong>Google AdSense</strong> (publicité) et <strong>Google Analytics</strong> (statistiques d'audience) qui peuvent stocker des cookies sur votre appareil. Ces cookies aident à personnaliser les annonces et à analyser notre trafic.
          </p>

          <h2 className="text-xl font-bold text-white mt-4">3. Publicité Google AdSense</h2>
          <p>
            Google utilise des cookies pour diffuser des annonces basées sur les visites antérieures des internautes sur ce site ou sur d'autres sites. Vous pouvez choisir de désactiver la publicité personnalisée dans les paramètres des annonces de votre compte Google.
          </p>

          <h2 className="text-xl font-bold text-white mt-4">4. Sécurité des données</h2>
          <p>
            Toutes les communications sur ce site sont sécurisées via le protocole HTTPS. Aucune donnée saisie dans nos formulaires n'est revendue à des tiers.
          </p>

          <h2 className="text-xl font-bold text-white mt-4">5. Droits de l'utilisateur</h2>
          <p>
            Conformément à la réglementation sur la protection des données personnelles, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant (par exemple, les messages de contact envoyés). Vous pouvez exercer ce droit en nous écrivant via le formulaire de contact.
          </p>
        </section>
      </div>
    </div>
  );
}
