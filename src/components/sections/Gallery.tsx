import { motion } from "framer-motion";
import { Scissors, Dog, Star, Camera, type LucideIcon } from "lucide-react";

interface Item {
  icon: LucideIcon;
  label: string;
  h: string;
}

const items: Item[] = [
  { icon: Dog, label: "Labrador – Tuns complet", h: "h-[240px]" },
  { icon: Scissors, label: "Pudel – Tuns artistic", h: "h-[320px]" },
  { icon: Star, label: "Pisică Persană – Baie & Pieptănat", h: "h-[280px]" },
  { icon: Camera, label: "Golden Retriever – Pachet Premium", h: "h-[280px]" },
  { icon: Dog, label: "Bichon – Stilizare", h: "h-[240px]" },
  { icon: Scissors, label: "Spitz – Tuns sezonier", h: "h-[320px]" },
];

export function Gallery() {
  return (
    <section id="galerie" className="py-24 md:py-32 px-6 bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="eyebrow on-dark mb-5">04 — Galerie</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 text-balance">
            Transformări <span className="italic text-gradient-primary">reale</span>
          </h2>
          <p className="mt-5 text-white/60 max-w-md">
            Fiecare animal pleacă cu o nouă încredere. Iată câteva dintre rezultatele noastre preferate.
          </p>
          <div className="divider-fade-light mt-10" />
        </motion.div>

        <div className="masonry-3">
          {items.map((it, i) => {
            const accents = [
              { border: "border-primary/30", icon: "text-primary", overlay: "bg-primary" },
              { border: "border-gold/40", icon: "text-gold", overlay: "bg-gold" },
              { border: "border-peach/40", icon: "text-peach", overlay: "bg-peach" },
            ];
            const a = accents[i % accents.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`group relative ${it.h} rounded-2xl border-2 border-dashed ${a.border} bg-white/5 overflow-hidden flex items-center justify-center transition-colors`}
              >
                <it.icon size={56} className={a.icon} strokeWidth={1.4} />
                <div className={`absolute inset-x-0 bottom-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-95 transition-all duration-500 ${a.overlay} text-white p-6 text-center font-serif text-lg`}>
                  {it.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
