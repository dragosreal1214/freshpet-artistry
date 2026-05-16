import { motion } from "framer-motion";
import {
  Scissors,
  Droplets,
  Cat,
  Stethoscope,
  Sparkles,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { ImageFrame } from "../ImageFrame";

interface Service {
  name: string;
  desc: string;
  price: string;
  icon: LucideIcon;
  span: string;
  popular?: boolean;
  imgHeight?: string;
}

const services: Service[] = [
  { name: "Tuns complet câine", desc: "Stilizare adaptată rasei tale, finisat cu blândețe.", price: "de la 80 lei", icon: Scissors, span: "md:col-span-2", imgHeight: "h-[200px]" },
  { name: "Baie & Uscare", desc: "Șampon hipoalergenic, uscare cu aer cald reglabil.", price: "de la 50 lei", icon: Droplets, span: "md:row-span-2", imgHeight: "h-[200px]" },
  { name: "Tuns pisică", desc: "Pentru pisici cu blană lungă, fără stres, fără sedare.", price: "de la 90 lei", icon: Cat, span: "", imgHeight: "h-[150px]" },
  { name: "Tuns unghii", desc: "Rapid, sigur, cu pilire fină la final.", price: "de la 20 lei", icon: Scissors, span: "", imgHeight: "h-[150px]" },
  { name: "Curățare urechi", desc: "Soluții blânde, recomandate de medic veterinar.", price: "de la 15 lei", icon: Stethoscope, span: "", imgHeight: "h-[150px]" },
  { name: "Pachet Premium", desc: "Tuns + baie + unghii + urechi + parfum natural.", price: "de la 120 lei", icon: Sparkles, span: "md:col-span-3", popular: true, imgHeight: "h-[180px]" },
];

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  return (
    <section id="servicii" className="relative py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-16"
      >
        <span className="eyebrow mb-5">01 — Servicii</span>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] mt-4 text-balance">
          Tot ce are nevoie <span className="italic text-gradient-primary">animalul tău</span>
        </h2>
        <p className="mt-5 text-muted-foreground text-base md:text-lg max-w-lg">
          Servicii profesionale, adaptate fiecărei rase și temperament — cu produse certificate și răbdare nelimitată.
        </p>
        <div className="divider-fade mt-10" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto"
      >
        {services.map((s, idx) => {
          const accents = ["bg-primary/10 text-primary", "chip-peach", "chip-blush", "bg-primary/10 text-primary", "chip-peach", "chip-gold"];
          const accent = accents[idx % accents.length];
          return (
          <motion.article
            key={s.name}
            variants={card}
            whileHover={{ y: -8, rotate: s.popular ? 0 : -0.3 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`group relative bg-card rounded-2xl overflow-hidden ${s.popular ? "border-gradient ring-gold" : "border border-border hover:border-primary"} transition-colors duration-300 ${s.span}`}
          >
            {s.popular && (
              <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full chip-gold text-[11px] font-bold uppercase tracking-wider">
                ★ Cel mai popular
              </span>
            )}
            <div className="p-4 pb-0 relative">
              <span className="absolute top-6 left-6 z-10 font-serif text-xs italic text-foreground/40">
                0{idx + 1}
              </span>
              <ImageFrame icon={s.icon} height={s.imgHeight ?? "h-[150px]"} />
            </div>
            <div className="p-6 flex flex-col">
              <h3 className="font-serif text-xl font-bold">{s.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
              <div className="flex items-center justify-between mt-5">
                <ArrowRight
                  size={18}
                  className="text-primary -translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition"
                />
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${accent}`}>
                  {s.price}
                </span>
              </div>
            </div>
          </motion.article>
        );})}
      </motion.div>
    </section>
  );
}
