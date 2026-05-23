import ToolCard from '@/components/ToolCard';
import SoonCard from '@/components/SoonCard';

export default function Home() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col gap-24">
      {/* HERO SECTION */}
      <section className="text-center flex flex-col items-center gap-8">
        <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#b06dff] to-[#ff3d3d]">
            Des outils pour
            <br />
            créer sans limites
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[rgba(240,239,255,0.7)] max-w-xl mx-auto font-light leading-relaxed">
          Une suite d'outils gratuits pensés pour les créateurs YouTube. Rapides, sans inscription, sans limite.
        </p>

        {/* STATS */}
        <div className="flex flex-col sm:flex-row items-stretch bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-2xl backdrop-blur-md overflow-hidden mt-6">
          <div className="px-8 py-6 text-center flex flex-col gap-1 border-b sm:border-b-0 sm:border-r border-[rgba(255,255,255,0.08)] min-w-[150px]">
            <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#b06dff]">
              5+
            </span>
            <span className="text-[10px] tracking-widest text-[rgba(240,239,255,0.45)] uppercase font-mono">
              Outils
            </span>
          </div>
          <div className="px-8 py-6 text-center flex flex-col gap-1 border-b sm:border-b-0 sm:border-r border-[rgba(255,255,255,0.08)] min-w-[150px]">
            <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#b06dff]">
              100%
            </span>
            <span className="text-[10px] tracking-widest text-[rgba(240,239,255,0.45)] uppercase font-mono">
              Gratuit
            </span>
          </div>
          <div className="px-8 py-6 text-center flex flex-col gap-1 min-w-[150px]">
            <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#b06dff]">
              0
            </span>
            <span className="text-[10px] tracking-widest text-[rgba(240,239,255,0.45)] uppercase font-mono">
              Inscription
            </span>
          </div>
        </div>
      </section>

      {/* TOOLS GRID */}
      <section className="flex flex-col gap-8">
        <div>
          <div className="flex items-center gap-3 text-xs tracking-widest text-[rgba(240,239,255,0.45)] uppercase font-mono mb-2">
            <span className="w-6 h-[1px] bg-gradient-to-r from-[#b06dff] to-transparent" />
            Nos outils
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Tout ce dont tu as besoin.
          </h2>
        </div>

        {/* Row 1 (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ToolCard
            href="https://ytminia.tools-cl.com/"
            title="YT Minia"
            description="Récupère les miniatures d'une vidéo YouTube en 4 qualités. Téléchargement direct."
            chip="Miniatures"
            chipColor="red"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff3d3d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="3" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            }
          />
          <ToolCard
            href="https://pdflibre.tools-cl.com/"
            title="PDFLibre"
            description="Fusionne, compresse et convertis tes PDF. Gratuit, illimité, sans compte."
            chip="PDF"
            chipColor="orange"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff8c42" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="9" y1="13" x2="15" y2="13" />
                <line x1="9" y1="17" x2="13" y2="17" />
              </svg>
            }
          />
          <ToolCard
            href="https://speedscript.tools-cl.com/"
            title="SpeedScript"
            description="Génère des scripts YouTube percutants en quelques secondes grâce à l'IA."
            chip="Script IA"
            chipColor="cyan"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            }
          />
        </div>

        {/* Row 2 (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ToolCard
            href="https://prenom-magique.tools-cl.com/"
            title="Prénom Magique"
            description="Trouve le prénom idéal pour ton enfant avec l'aide de l'IA. Personnalisé, rapide, gratuit."
            chip="IA · Famille"
            chipColor="purple"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b06dff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
                <path d="M2 20c0-4 4-7 10-7s10 3 10 7" />
              </svg>
            }
          />
          <ToolCard
            href="https://piloto.tools-cl.com/"
            title="Piloto"
            description="Navigue et pilote tes projets créatifs avec clarté. L'outil de productivité du créateur."
            chip="Productivité"
            chipColor="green"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3dffa0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 12l-4-4-4 4M12 8v8" />
              </svg>
            }
          />
        </div>
      </section>

      {/* COMING SOON */}
      <section className="flex flex-col gap-8">
        <div>
          <div className="flex items-center gap-3 text-xs tracking-widest text-[rgba(240,239,255,0.45)] uppercase font-mono mb-2">
            <span className="w-6 h-[1px] bg-gradient-to-r from-[#b06dff] to-transparent" />
            En développement
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Bientôt disponible.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SoonCard
            title="Sous-titres YT"
            description="Téléchargez les sous-titres en SRT ou TXT."
            eta="Q3 2025"
          />
          <SoonCard
            title="Tags SEO"
            description="Extrayez les tags d'une vidéo YouTube."
            eta="Q3 2025"
          />
          <SoonCard
            title="Générateur de titres"
            description="Maximisez votre CTR avec le bon titre."
            eta="Q4 2025"
          />
        </div>
      </section>

      {/* CREATOR PROMO */}
      <section className="promo-card">
        <div className="promo-inner">
          <div className="promo-avatar">RM</div>
          <div className="promo-content">
            <div className="promo-eyebrow font-mono text-[10px] tracking-widest text-[#c084fc] uppercase mb-2">
              // Créateur des outils
            </div>
            <h3 className="promo-name text-3xl font-extrabold tracking-tight mb-2">
              Roosevelt Mogo
            </h3>
            <p className="promo-desc text-[rgba(240,239,255,0.7)] text-sm md:text-base leading-relaxed">
              Tutoriels, coulisses et nouvelles sorties d'outils pour créateurs YouTube. Rejoins la communauté et ne rate aucune mise à jour.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@rooseveltmogo/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sub flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.2 2.8 12 2.8 12 2.8s-4.2 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.8 9.2.8 11.4v2.1C.8 15.7 1 17.9 1 17.9s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.6 22.1 12 22.1 12 22.1s4.2 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.2-2.2.2-4.4v-2.1C23.2 9.2 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z" />
            </svg>
            S'abonner
          </a>
        </div>
      </section>
    </div>
  );
}
