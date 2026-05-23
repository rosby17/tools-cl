export default function About() {
  return (
    <div className="max-w-[800px] mx-auto py-12 md:py-20 px-4">
      <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-3xl p-8 md:p-12 backdrop-blur-md flex flex-col gap-8">
        <div>
          <span className="font-mono text-xs tracking-widest text-[#b06dff] uppercase block mb-2">
            // À propos de nous
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Pourquoi Tools-CL ?
          </h1>
        </div>

        <div className="text-[rgba(240,239,255,0.8)] leading-relaxed flex flex-col gap-6 font-light">
          <p>
            Créé par <strong>Roosevelt Mogo</strong>, <strong>Tools-CL</strong> est né d'un constat simple : 
            les créateurs de contenu sur YouTube ont souvent besoin de petits outils rapides au quotidien, 
            mais la plupart des services en ligne sont payants, limités, ou surchargés d'inscriptions et de publicités intrusives.
          </p>
          <p>
            Notre mission est de fournir des outils de haute qualité, entièrement gratuits, 
            sans aucune inscription requise et sans limites d'utilisation.
          </p>
          <p>
            Que vous ayez besoin de récupérer la miniature d'une vidéo en haute définition avec <strong>YT Minia</strong>, 
            de manipuler vos documents PDF en toute sécurité avec <strong>PDFLibre</strong>, 
            ou d'accélérer l'écriture de vos scripts avec <strong>SpeedScript</strong> (IA), 
            Tools-CL est là pour vous faire gagner du temps.
          </p>
        </div>

        <hr className="border-[rgba(255,255,255,0.08)] my-2" />

        <div className="flex flex-col md:flex-row items-center gap-6 justify-between bg-[rgba(255,255,255,0.02)] p-6 rounded-2xl border border-[rgba(255,255,255,0.04)]">
          <div>
            <h3 className="font-bold text-lg text-white mb-1">
              Des retours ou des suggestions ?
            </h3>
            <p className="text-sm text-[rgba(240,239,255,0.6)]">
              N'hésitez pas à nous envoyer un message pour proposer de nouveaux outils !
            </p>
          </div>
          <a
            href="/contact"
            className="btn-sub text-center w-full md:w-auto"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  );
}
