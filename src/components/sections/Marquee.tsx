const items = [
  { t: "Produse hipoalergenice", c: "text-white" },
  { t: "Groomer certificat", c: "text-gold-soft" },
  { t: "Mediu steril", c: "text-white" },
  { t: "Fără stress pentru animale", c: "text-peach-soft" },
  { t: "Programare online 24/7", c: "text-white" },
  { t: "Parcare gratuită", c: "text-gold-soft" },
  { t: "Iași", c: "text-white" },
  { t: "Luni–Sâmbătă 9–19", c: "text-peach-soft" },
];

export function Marquee() {
  const all = [...items, ...items, ...items];
  return (
    <div className="relative bg-secondary py-5 overflow-hidden marquee-mask border-y border-primary/30">
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div className="relative flex w-max animate-marquee">
        {all.map((it, i) => (
          <span key={i} className="flex items-center gap-5 px-6 whitespace-nowrap">
            <span className={`text-[12px] font-semibold uppercase tracking-[0.22em] ${it.c}`}>
              {it.t}
            </span>
            <span className="text-gold text-lg leading-none">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
