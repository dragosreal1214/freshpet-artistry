import { motion } from "framer-motion";
import { Star, User } from "lucide-react";

const quotes = [
  { name: "Andreea M.", pet: "Biscuit · Golden Retriever", text: "Biscuit a ieșit superb! Echipa FreshPet e incredibil de atentă. Prima dată în viața lui nu a mai tremurat la salon." },
  { name: "Maria C.", pet: "Lola · Pisică British", text: "Recomand cu toată inima! Pisica mea e pretențioasă și nu se lasă tunsă, dar aici a stat cuminte tot timpul." },
  { name: "Radu I.", pet: "Rex · Husky", text: "Raportul calitate-preț e excelent. Programarea online e simplă, iar rezultatul e întotdeauna perfect." },
  { name: "Cristina P.", pet: "Coco · Bichon", text: "Am venit prima dată sceptică, am plecat fan total. Câinele meu arată ca scos din revistă!" },
  { name: "Alex D.", pet: "Mia · Shih Tzu", text: "Atmosfera e calmă și relaxantă — se simte că animalele sunt pe primul loc. Respect total pentru echipă." },
  { name: "Ioana V.", pet: "Max · Cocker Spaniel", text: "Singurul salon unde Max nu latră. Echipa știe exact cum să îl calmeze. Venim în fiecare lună!" },
];

const accents = [
  { ring: "border-primary/30 hover:border-primary", avatar: "bg-primary/10 border-primary/20 text-primary", quote: "text-primary" },
  { ring: "border-peach/40 hover:border-peach", avatar: "bg-peach-soft border-peach/30 text-[#b9603a]", quote: "text-[#b9603a]" },
  { ring: "border-gold/40 hover:border-gold", avatar: "bg-gold-soft border-gold/30 text-[#8a6a1f]", quote: "text-[#8a6a1f]" },
];

function Card({ q, i }: { q: typeof quotes[number]; i: number }) {
  const a = accents[i % accents.length];
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={`shrink-0 w-[320px] bg-card rounded-2xl border ${a.ring} p-6 mx-3 transition-colors duration-300 shadow-sm hover:shadow-luxe`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-14 h-14 rounded-full border flex items-center justify-center ${a.avatar}`}>
          <User size={24} />
        </div>
        <div>
          <div className="font-semibold text-[15px]">{q.name}</div>
          <div className="text-[13px] text-muted-foreground italic">{q.pet}</div>
        </div>
      </div>
      <div className="flex gap-1 mt-3">
        {Array.from({ length: 5 }).map((_, k) => (
          <Star key={k} size={14} className="fill-gold text-gold" />
        ))}
      </div>
      <p className="mt-4 text-sm italic text-foreground/80 leading-[1.7] relative">
        <span className={`font-serif text-4xl absolute -top-2 -left-1 leading-none ${a.quote}`}>"</span>
        <span className="relative pl-4">{q.text}</span>
      </p>
    </motion.div>
  );
}

export function Testimonials() {
  const row1 = [...quotes, ...quotes];
  const row2 = [...quotes.slice().reverse(), ...quotes.slice().reverse()];
  return (
    <section id="recenzii" className="py-24 md:py-32" style={{ background: "var(--cream)" }}>
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <span className="eyebrow mb-5">05 — Recenzii</span>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-4xl md:text-5xl text-balance max-w-xl leading-[1.1]">
            Ce spun <span className="italic text-gradient-primary">clienții</span> noștri
          </h2>
          <span className="px-4 py-2 rounded-full chip-gold text-sm font-semibold shadow-luxe">
            4.9 ★★★★★
          </span>
        </div>
        <div className="divider-fade mt-10" />
      </div>

      <div className="space-y-6 marquee-mask pause-on-hover">
        <div className="flex w-max animate-marquee-slow">
          {row1.map((q, i) => <Card key={"a" + i} q={q} i={i} />)}
        </div>
        <div className="flex w-max animate-marquee-reverse">
          {row2.map((q, i) => <Card key={"b" + i} q={q} i={i} />)}
        </div>
      </div>
    </section>
  );
}
