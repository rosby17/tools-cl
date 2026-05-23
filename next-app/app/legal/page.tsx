export default function Legal() {
  return (
    <div className="max-w-[800px] mx-auto py-12 md:py-20 px-4">
      <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-3xl p-8 md:p-12 backdrop-blur-md flex flex-col gap-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          Mentions Légales
        </h1>
        
        <section className="flex flex-col gap-3 text-[rgba(240,239,255,0.8)] font-light leading-relaxed">
          <h2 className="text-xl font-bold text-white mt-4">1. Éditeur du Site</h2>
          <p>
            Le site <strong>tools-cl.com</strong> est édité par <strong>Roosevelt Mogo</strong>, résidant au Cameroun.
          </p>
          <p>
            Contact Email : <a href="mailto:rooseveltmkr@gmail.com" className="underline hover:text-purple-400">rooseveltmkr@gmail.com</a>
          </p>

          <h2 className="text-xl font-bold text-white mt-4">2. Hébergement du Site</h2>
          <p>
            Le site est hébergé par la société <strong>Vercel Inc.</strong>, située au 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
          </p>
          <p>
            Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-400">vercel.com</a>
          </p>

          <h2 className="text-xl font-bold text-white mt-4">3. Propriété Intellectuelle</h2>
          <p>
            L'ensemble des contenus de ce site (textes, graphismes, logos, icônes) est la propriété exclusive de Roosevelt Mogo, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires (notamment YouTube et PDFLibre).
          </p>

          <h2 className="text-xl font-bold text-white mt-4">4. Limitation de Responsabilité</h2>
          <p>
            Les outils fournis sur Tools-CL sont mis à disposition gratuitement et "en l'état". L'éditeur ne peut être tenu responsable des pannes de service, pertes de données ou tout autre dommage indirect lié à l'utilisation de ces outils.
          </p>
        </section>
      </div>
    </div>
  );
}
