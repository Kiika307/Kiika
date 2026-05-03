interface LetterMeaning {
  letter: string;
  word: string;
  desc: string;
}

const STORY: LetterMeaning[] = [
  { letter: "K", word: "Ki", desc: "L’énergie vitale, le mouvement initial" },
  { letter: "I", word: "Introspection", desc: "Le regard vers l’intérieur, tes questionnaires" },
  { letter: "I", word: "Intuition", desc: "La guidance inconsciente, l’hypnose" },
  { letter: "K", word: "Ka", desc: "L’essence de l’âme, l’identité profonde" },
  { letter: "A", word: "Alignement", desc: "L’osmose, le Oneness final" },
];

export function KiikaStory() {
  return (
    <>
      {/* Halo doré décoratif */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #C8A030 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #F5E8C0 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <header className="relative">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-gold)] mb-3">
          Espace praticien
        </p>
        <h1 className="font-serif text-[72px] xl:text-[88px] font-bold leading-none tracking-[0.08em] text-white">
          KIIKA
        </h1>
        <p className="mt-5 max-w-md text-[15px] xl:text-[16px] leading-[1.65] text-white/75">
          Le chemin du <em className="text-[var(--color-gold-light)] not-italic font-semibold">Ki</em>{" "}
          au <em className="text-[var(--color-gold-light)] not-italic font-semibold">Ka</em> —
          de l’énergie qui anime à l’âme qui s’aligne.
        </p>
      </header>

      <ol className="relative mt-10 xl:mt-14 space-y-3.5 xl:space-y-4 max-w-md">
        {STORY.map((item, i) => (
          <li
            key={i}
            className="group flex items-start gap-4 rounded-[12px] px-3 py-2.5 transition-colors hover:bg-white/[0.04]"
          >
            <span
              className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full font-serif text-[22px] font-bold transition-transform group-hover:scale-105"
              style={{
                background:
                  i === 2
                    ? "linear-gradient(135deg, #C8A030 0%, #F5E8C0 100%)"
                    : "rgba(245, 232, 192, 0.08)",
                color: i === 2 ? "var(--color-navy)" : "var(--color-gold-light)",
                border: i === 2 ? "none" : "1px solid rgba(245, 232, 192, 0.15)",
              }}
              aria-hidden="true"
            >
              {item.letter}
            </span>
            <div className="flex-1 pt-0.5">
              <div className="flex items-baseline gap-2.5">
                <span className="font-serif text-[17px] xl:text-[18px] font-semibold text-white">
                  {item.word}
                </span>
              </div>
              <p className="mt-0.5 text-[12.5px] xl:text-[13px] text-white/60 leading-[1.5]">
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <footer className="relative mt-10 xl:mt-12 max-w-md">
        <div
          className="h-px w-12 mb-5"
          style={{ background: "var(--color-gold)" }}
          aria-hidden="true"
        />
        <p className="text-[12.5px] xl:text-[13px] italic text-white/55 leading-[1.6]">
          « L’équilibre se trouve au centre. Entre ce qui s’éveille et ce qui s’accomplit, l’intuition trace le pont. »
        </p>
      </footer>
    </>
  );
}
