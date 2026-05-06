import {
  Cormorant_Garamond,
  Fraunces,
  Instrument_Serif,
  Inter,
} from "next/font/google";
import {
  CalendarBlank,
  Books,
  ChartLineUp,
  Sparkle,
  ChatCircleDots,
  ArrowUpRight,
  Quotes,
} from "@phosphor-icons/react/dist/ssr";

// ---------------------------------------------------------------------------
// Editorial type pairing — tested combos for Dark Academia
// ---------------------------------------------------------------------------
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// ---------------------------------------------------------------------------
// Page : standalone preview, ne touche pas la prod
// ---------------------------------------------------------------------------
export const metadata = {
  title: "KIIKA — Dark Academia preview",
  robots: { index: false, follow: false },
};

export default function DarkAcademiaPreview() {
  return (
    <div
      className={`${cormorant.variable} ${fraunces.variable} ${instrument.variable} ${inter.variable} academia-root`}
    >
      <style>{ACADEMIA_CSS}</style>

      <div className="academia-grain" aria-hidden="true" />

      <div className="academia-page">
        <Header />

        <main className="academia-main">
          <Hero />
          <StatsRow />
          <TwoColumn />
          <CtaBand />
          <TypographyShowcase />
          <ColorTokens />
          <FooterNote />
        </main>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

function Header() {
  return (
    <header className="academia-header">
      <div className="academia-brand">
        <span className="academia-brand-mark">◆</span>
        <span className="academia-brand-word">KIIKA</span>
        <span className="academia-brand-tag">— studio</span>
      </div>
      <nav className="academia-nav">
        <a href="#" className="academia-nav-link is-active">
          Dashboard
        </a>
        <a href="#" className="academia-nav-link">
          Clients
        </a>
        <a href="#" className="academia-nav-link">
          Bibliothèque
        </a>
        <a href="#" className="academia-nav-link">
          Agenda
        </a>
      </nav>
      <button className="academia-button academia-button--ghost">
        <Sparkle size={14} weight="duotone" /> Nouveau RDV
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="academia-hero">
      <p className="academia-eyebrow">Vue éditoriale · Aperçu</p>
      <h1 className="academia-title">
        Une bibliothèque <em>vivante</em>,<br />
        un cabinet qui respire.
      </h1>
      <p className="academia-lede">
        Test du langage visuel <span className="academia-em">Dark Academia</span> appliqué à
        l'app KIIKA — typographie éditoriale, ombres diffuses, transitions lentes, grain de
        papier. Aucune page de production n'est modifiée.
      </p>
      <div className="academia-hero-actions">
        <a className="academia-button academia-button--solid" href="#">
          Voir l'agenda <ArrowUpRight size={14} weight="bold" />
        </a>
        <a className="academia-button academia-button--ghost" href="#">
          Sélection KIIKA
        </a>
      </div>
    </section>
  );
}

function StatsRow() {
  const items = [
    { val: "634", label: "Protocoles", sub: "bibliothèque vivante", icon: <Books size={20} weight="duotone" /> },
    { val: "12", label: "RDV cette semaine", sub: "5 en visio", icon: <CalendarBlank size={20} weight="duotone" /> },
    { val: "82%", label: "Émotionnel", sub: "Camille Dupont", icon: <ChartLineUp size={20} weight="duotone" /> },
    { val: "3", label: "Messages", sub: "à lire", icon: <ChatCircleDots size={20} weight="duotone" /> },
  ];
  return (
    <section className="academia-stats">
      {items.map((it) => (
        <article key={it.label} className="academia-stat">
          <span className="academia-stat-icon">{it.icon}</span>
          <span className="academia-stat-val">{it.val}</span>
          <span className="academia-stat-label">{it.label}</span>
          <span className="academia-stat-sub">{it.sub}</span>
        </article>
      ))}
    </section>
  );
}

function TwoColumn() {
  return (
    <section className="academia-two">
      {/* Featured protocol card */}
      <article className="academia-card academia-card--featured">
        <header className="academia-card-head">
          <span className="academia-tag">Recommandé</span>
          <h3 className="academia-card-title">
            La méthode <em>SUPER</em> objectif
          </h3>
          <p className="academia-card-sub">Anamnèse structurée — première séance</p>
        </header>
        <p className="academia-card-body">
          Un cadrage fin de l'objectif thérapeutique en cinq critères&nbsp;:
          <span className="academia-em"> Spécifique, Utile, Positif, Écologique, Réaliste.</span>
          Construit le pacte de la première séance et la trame du suivi.
        </p>
        <div className="academia-card-meta">
          <span>60 min</span>
          <span>·</span>
          <span>Débutant</span>
          <span>·</span>
          <span>Maître Praticien Hypnose</span>
        </div>
        <a className="academia-button academia-button--solid" href="#">
          Ouvrir la fiche <ArrowUpRight size={14} weight="bold" />
        </a>
      </article>

      {/* Quote card */}
      <aside className="academia-quote">
        <Quotes size={28} weight="fill" className="academia-quote-mark" />
        <blockquote>
          La lenteur n'est pas l'inverse de la vitesse&nbsp;: c'est l'attention que l'on porte
          à ce qui mérite de durer.
        </blockquote>
        <cite>— Pierre Sansot</cite>
      </aside>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="academia-cta">
      <div>
        <p className="academia-eyebrow academia-eyebrow--gold">Test psychométrique</p>
        <h3 className="academia-cta-title">Approfondir avec Selene</h3>
        <p className="academia-cta-lede">
          117 questions · 9 dimensions · 15 à 20 minutes. Le rapport éclaire la lecture du
          profil et oriente le matching de protocoles.
        </p>
      </div>
      <button className="academia-button academia-button--gold">
        Envoyer le test <ArrowUpRight size={14} weight="bold" />
      </button>
    </section>
  );
}

function TypographyShowcase() {
  return (
    <section className="academia-type">
      <h2 className="academia-section-title">Hiérarchie typographique</h2>
      <div className="academia-type-grid">
        <TypeSample
          label="Display · Cormorant Garamond italic"
          sample="Le silence aussi est une parole."
          className="academia-type-cormorant"
          big
        />
        <TypeSample
          label="Headline · Fraunces"
          sample="Une lecture nuancée du profil"
          className="academia-type-fraunces"
        />
        <TypeSample
          label="Editorial · Instrument Serif"
          sample="Bibliothèque, atelier, cabinet"
          className="academia-type-instrument"
        />
        <TypeSample
          label="UI · Inter"
          sample="Inter pour les libellés, boutons, formulaires et tableaux."
          className="academia-type-inter"
          small
        />
      </div>
    </section>
  );
}

function TypeSample({
  label,
  sample,
  className,
  big,
  small,
}: {
  label: string;
  sample: string;
  className: string;
  big?: boolean;
  small?: boolean;
}) {
  return (
    <article className="academia-type-card">
      <p className="academia-type-label">{label}</p>
      <p className={`${className} ${big ? "is-big" : ""} ${small ? "is-small" : ""}`}>
        {sample}
      </p>
    </article>
  );
}

function ColorTokens() {
  const swatches = [
    ["#110808", "Encre"],
    ["#1B130D", "Velours"],
    ["#3B2C24", "Cuir"],
    ["#5A3A2C", "Bois"],
    ["#7A1F2B", "Bordeaux"],
    ["#A88656", "Laiton"],
    ["#D9C9A8", "Parchemin"],
    ["#F2EAD8", "Chaux"],
  ];
  return (
    <section className="academia-tokens">
      <h2 className="academia-section-title">Palette</h2>
      <div className="academia-tokens-grid">
        {swatches.map(([hex, name]) => (
          <div key={hex} className="academia-swatch">
            <div className="academia-swatch-block" style={{ background: hex }} />
            <span className="academia-swatch-name">{name}</span>
            <span className="academia-swatch-hex">{hex}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FooterNote() {
  return (
    <footer className="academia-footer">
      <p>
        Preview interne · <span className="academia-em">/playground/dark-academia</span> · Aucune
        donnée de production sollicitée.
      </p>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// CSS scoped (tokens + composants)
// ---------------------------------------------------------------------------
const ACADEMIA_CSS = `
.academia-root {
  /* Palette (warm dark academia) */
  --aca-ink: #110808;
  --aca-velvet: #1B130D;
  --aca-leather: #3B2C24;
  --aca-wood: #5A3A2C;
  --aca-bordeaux: #7A1F2B;
  --aca-bordeaux-deep: #4F1118;
  --aca-brass: #A88656;
  --aca-brass-soft: #C4A472;
  --aca-parchment: #D9C9A8;
  --aca-chalk: #F2EAD8;
  --aca-line: rgba(217, 201, 168, 0.14);

  /* Diffuse shadows */
  --aca-shadow-sm: 0 1px 1px rgba(0,0,0,.20), 0 4px 16px rgba(0,0,0,.22);
  --aca-shadow-md: 0 1px 1px rgba(0,0,0,.25), 0 18px 40px rgba(0,0,0,.34);
  --aca-shadow-lg: 0 1px 1px rgba(0,0,0,.30), 0 30px 80px rgba(0,0,0,.45);

  /* Easings (slow, controlled) */
  --aca-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --aca-dur-fast: 320ms;
  --aca-dur: 600ms;
  --aca-dur-slow: 900ms;

  background: radial-gradient(120% 100% at 0% 0%, #1A100A 0%, var(--aca-ink) 55%, #050203 100%);
  color: var(--aca-chalk);
  font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
  letter-spacing: 0.005em;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

/* Subtle paper grain — SVG turbulence at 2% opacity */
.academia-grain {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.05;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='420' height='420'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95  0 0 0 0 0.92  0 0 0 0 0.85  0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
}

.academia-page {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
  padding: 24px 28px 96px;
}

/* ============ Header ============ */
.academia-header {
  display: flex;
  align-items: center;
  gap: 28px;
  padding: 18px 26px;
  border: 1px solid var(--aca-line);
  border-radius: 999px;
  background: rgba(15, 8, 5, 0.55);
  backdrop-filter: blur(8px);
  margin-bottom: 56px;
}
.academia-brand {
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.academia-brand-mark {
  color: var(--aca-brass);
  font-size: 14px;
}
.academia-brand-word {
  font-family: var(--font-fraunces);
  font-weight: 600;
  letter-spacing: 0.18em;
  font-size: 14px;
  color: var(--aca-chalk);
}
.academia-brand-tag {
  font-family: var(--font-instrument);
  font-style: italic;
  font-size: 14px;
  color: var(--aca-brass-soft);
  opacity: 0.7;
}
.academia-nav {
  display: flex;
  gap: 24px;
  margin-left: auto;
}
.academia-nav-link {
  color: var(--aca-parchment);
  font-size: 13px;
  letter-spacing: 0.04em;
  opacity: 0.75;
  position: relative;
  text-decoration: none;
  padding: 4px 0;
  transition: opacity var(--aca-dur) var(--aca-ease), color var(--aca-dur) var(--aca-ease);
}
.academia-nav-link:hover { opacity: 1; }
.academia-nav-link.is-active {
  opacity: 1;
  color: var(--aca-brass-soft);
}
.academia-nav-link.is-active::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: -8px;
  height: 1px;
  background: var(--aca-brass-soft);
  opacity: 0.6;
}

/* ============ Buttons ============ */
.academia-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 999px;
  font-family: var(--font-inter);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition:
    background var(--aca-dur) var(--aca-ease),
    border-color var(--aca-dur) var(--aca-ease),
    transform var(--aca-dur-fast) var(--aca-ease),
    box-shadow var(--aca-dur) var(--aca-ease);
}
.academia-button--solid {
  background: var(--aca-bordeaux);
  color: var(--aca-chalk);
  box-shadow: var(--aca-shadow-sm);
}
.academia-button--solid:hover {
  background: var(--aca-bordeaux-deep);
  transform: translateY(-1px);
  box-shadow: var(--aca-shadow-md);
}
.academia-button--gold {
  background: var(--aca-brass);
  color: var(--aca-ink);
  box-shadow: var(--aca-shadow-sm);
  font-weight: 600;
}
.academia-button--gold:hover {
  background: var(--aca-brass-soft);
  transform: translateY(-1px);
  box-shadow: var(--aca-shadow-md);
}
.academia-button--ghost {
  background: transparent;
  color: var(--aca-parchment);
  border-color: var(--aca-line);
}
.academia-button--ghost:hover {
  border-color: var(--aca-brass);
  color: var(--aca-chalk);
}

/* ============ Hero ============ */
.academia-hero {
  text-align: center;
  padding: 56px 16px 72px;
}
.academia-eyebrow {
  font-family: var(--font-inter);
  font-size: 11px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--aca-brass-soft);
  margin: 0 0 22px;
}
.academia-eyebrow--gold {
  color: var(--aca-brass);
}
.academia-title {
  font-family: var(--font-cormorant);
  font-weight: 500;
  font-size: clamp(40px, 5.6vw, 76px);
  line-height: 1.05;
  letter-spacing: -0.012em;
  color: var(--aca-chalk);
  margin: 0;
}
.academia-title em {
  font-family: var(--font-instrument);
  font-style: italic;
  color: var(--aca-brass-soft);
}
.academia-lede {
  max-width: 600px;
  margin: 22px auto 0;
  color: var(--aca-parchment);
  font-size: 15px;
  line-height: 1.7;
  opacity: 0.85;
}
.academia-em {
  font-family: var(--font-fraunces);
  font-style: italic;
  color: var(--aca-brass-soft);
}
.academia-hero-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
}

/* ============ Stats ============ */
.academia-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin: 0 0 56px;
}
.academia-stat {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 22px 22px 20px;
  border: 1px solid var(--aca-line);
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(31, 22, 17, 0.6), rgba(15, 8, 5, 0.4));
  box-shadow: var(--aca-shadow-sm);
  transition: transform var(--aca-dur) var(--aca-ease), box-shadow var(--aca-dur) var(--aca-ease);
}
.academia-stat:hover {
  transform: translateY(-2px);
  box-shadow: var(--aca-shadow-md);
}
.academia-stat-icon {
  color: var(--aca-brass);
  margin-bottom: 6px;
}
.academia-stat-val {
  font-family: var(--font-fraunces);
  font-weight: 500;
  font-size: 30px;
  line-height: 1;
  color: var(--aca-chalk);
}
.academia-stat-label {
  font-size: 13px;
  color: var(--aca-parchment);
  margin-top: 2px;
}
.academia-stat-sub {
  font-size: 11.5px;
  color: var(--aca-brass-soft);
  opacity: 0.75;
  letter-spacing: 0.02em;
}
@media (max-width: 760px) {
  .academia-stats { grid-template-columns: repeat(2, 1fr); }
}

/* ============ Two columns ============ */
.academia-two {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 18px;
  margin-bottom: 56px;
}
@media (max-width: 880px) {
  .academia-two { grid-template-columns: 1fr; }
}
.academia-card {
  border-radius: 18px;
  padding: 32px 32px 28px;
  border: 1px solid var(--aca-line);
  background: linear-gradient(160deg, rgba(43, 27, 19, 0.65), rgba(15, 8, 5, 0.55));
  box-shadow: var(--aca-shadow-md);
  transition: transform var(--aca-dur) var(--aca-ease), box-shadow var(--aca-dur) var(--aca-ease);
}
.academia-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--aca-shadow-lg);
}
.academia-card-head {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 14px;
}
.academia-tag {
  align-self: flex-start;
  font-size: 10.5px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--aca-bordeaux);
  background: rgba(122, 31, 43, 0.18);
  border: 1px solid rgba(122, 31, 43, 0.40);
  padding: 4px 10px;
  border-radius: 999px;
  margin-bottom: 8px;
}
.academia-card-title {
  font-family: var(--font-fraunces);
  font-weight: 500;
  font-size: 28px;
  line-height: 1.2;
  color: var(--aca-chalk);
  margin: 0;
}
.academia-card-title em {
  font-family: var(--font-instrument);
  font-style: italic;
  color: var(--aca-brass-soft);
}
.academia-card-sub {
  font-size: 13px;
  color: var(--aca-parchment);
  opacity: 0.75;
  margin: 0;
}
.academia-card-body {
  font-size: 14px;
  line-height: 1.75;
  color: var(--aca-parchment);
  opacity: 0.92;
  margin: 0 0 16px;
}
.academia-card-meta {
  display: flex;
  gap: 8px;
  font-size: 12px;
  color: var(--aca-brass-soft);
  opacity: 0.7;
  margin-bottom: 22px;
  letter-spacing: 0.02em;
}
.academia-quote {
  border-radius: 18px;
  padding: 32px 28px;
  border: 1px solid var(--aca-line);
  background: linear-gradient(180deg, rgba(34, 18, 22, 0.55), rgba(15, 8, 5, 0.6));
  box-shadow: var(--aca-shadow-md);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.academia-quote-mark {
  color: var(--aca-bordeaux);
  opacity: 0.55;
  margin-bottom: 8px;
}
.academia-quote blockquote {
  font-family: var(--font-cormorant);
  font-size: 22px;
  line-height: 1.45;
  color: var(--aca-chalk);
  font-style: italic;
  margin: 0 0 16px;
}
.academia-quote cite {
  font-family: var(--font-inter);
  font-size: 12px;
  color: var(--aca-brass-soft);
  font-style: normal;
  letter-spacing: 0.05em;
}

/* ============ CTA band ============ */
.academia-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 36px 40px;
  border: 1px solid var(--aca-line);
  border-radius: 18px;
  background:
    radial-gradient(80% 100% at 100% 50%, rgba(168, 134, 86, 0.12), transparent 60%),
    linear-gradient(180deg, rgba(31, 18, 12, 0.85), rgba(15, 8, 5, 0.85));
  box-shadow: var(--aca-shadow-md);
  margin-bottom: 56px;
}
.academia-cta-title {
  font-family: var(--font-cormorant);
  font-weight: 500;
  font-size: 36px;
  line-height: 1.1;
  margin: 6px 0 8px;
  color: var(--aca-chalk);
}
.academia-cta-lede {
  font-size: 13.5px;
  line-height: 1.7;
  color: var(--aca-parchment);
  opacity: 0.78;
  max-width: 540px;
  margin: 0;
}
@media (max-width: 760px) {
  .academia-cta { flex-direction: column; align-items: flex-start; }
}

/* ============ Typography showcase ============ */
.academia-section-title {
  font-family: var(--font-fraunces);
  font-weight: 500;
  font-size: 22px;
  color: var(--aca-chalk);
  margin: 0 0 18px;
  letter-spacing: -0.005em;
}
.academia-type-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-bottom: 56px;
}
@media (max-width: 760px) {
  .academia-type-grid { grid-template-columns: 1fr; }
}
.academia-type-card {
  padding: 26px 28px;
  border: 1px solid var(--aca-line);
  border-radius: 14px;
  background: rgba(15, 8, 5, 0.45);
  box-shadow: var(--aca-shadow-sm);
}
.academia-type-label {
  font-family: var(--font-inter);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--aca-brass-soft);
  opacity: 0.7;
  margin: 0 0 14px;
}
.academia-type-cormorant {
  font-family: var(--font-cormorant);
  font-style: italic;
  font-weight: 500;
  font-size: 28px;
  line-height: 1.2;
  color: var(--aca-chalk);
}
.academia-type-cormorant.is-big { font-size: 44px; }
.academia-type-fraunces {
  font-family: var(--font-fraunces);
  font-weight: 500;
  font-size: 26px;
  line-height: 1.2;
  color: var(--aca-chalk);
}
.academia-type-instrument {
  font-family: var(--font-instrument);
  font-style: italic;
  font-size: 26px;
  line-height: 1.25;
  color: var(--aca-chalk);
}
.academia-type-inter {
  font-family: var(--font-inter);
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--aca-parchment);
}
.academia-type-inter.is-small { font-size: 13px; }

/* ============ Tokens ============ */
.academia-tokens-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  margin-bottom: 56px;
}
@media (max-width: 760px) {
  .academia-tokens-grid { grid-template-columns: repeat(4, 1fr); }
}
.academia-swatch {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.academia-swatch-block {
  aspect-ratio: 1;
  border-radius: 10px;
  border: 1px solid var(--aca-line);
  box-shadow: var(--aca-shadow-sm);
}
.academia-swatch-name {
  font-family: var(--font-inter);
  font-size: 11px;
  color: var(--aca-parchment);
}
.academia-swatch-hex {
  font-family: ui-monospace, "SF Mono", Menlo, monospace;
  font-size: 10.5px;
  color: var(--aca-brass-soft);
  opacity: 0.7;
  letter-spacing: 0.02em;
}

/* ============ Footer ============ */
.academia-footer {
  text-align: center;
  font-family: var(--font-inter);
  font-size: 11.5px;
  color: var(--aca-brass-soft);
  opacity: 0.5;
  letter-spacing: 0.06em;
  padding-top: 32px;
  border-top: 1px solid var(--aca-line);
}
`;
