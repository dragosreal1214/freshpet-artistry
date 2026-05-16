import { motion } from "framer-motion";
import { Leaf, Shield, Award, Users } from "lucide-react";
import { ImageFrame } from "../ImageFrame";

const features = [
  { icon: Leaf, text: "Produse 100% ecologice și hipoalergenice", bg: "bg-primary/10", color: "text-primary" },
  { icon: Shield, text: "Salon dezinfectat între fiecare client", bg: "bg-peach-soft", color: "text-[#b9603a]" },
  { icon: Award, text: "3 ani de excelență în grooming", bg: "bg-gold-soft", color: "text-[#8a6a1f]" },
];

export function About() {
  return (
    <section id="despre" className="relative py-24 md:py-32 px-6 mesh-warm overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-7 relative"
        >
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-peach-soft blur-2xl opacity-70 animate-drift" />
          <div className="absolute -bottom-8 -right-6 w-32 h-32 rounded-full bg-gold-soft blur-3xl opacity-60 animate-drift" style={{ animationDelay: "3s" }} />
          <ImageFrame icon={Users} height="aspect-[3/4] h-auto" iconSize={80} label="Echipa FreshPet" />
          <motion.div
            whileHover={{ scale: 1.05, rotate: 0 }}
            initial={{ rotate: -2 }}
            className="absolute bottom-6 left-6 max-w-xs bg-white border-l-[3px] border-primary rounded-lg p-4 shadow-xl"
          >
            <p className="text-sm font-medium text-foreground">
              🏅 Certificat profesional · Groomer atestat național
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 4 }}
            whileHover={{ rotate: 0, y: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block absolute -top-4 -right-4 chip-gold rounded-2xl px-5 py-4 shadow-luxe"
          >
            <div className="font-serif text-3xl font-bold leading-none">98%</div>
            <div className="text-[10px] uppercase tracking-[0.18em] mt-1 opacity-80">clienți revin</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="md:col-span-5"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
            className="eyebrow"
          >
            02 — Despre FreshPet
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
            className="mt-5 font-serif text-4xl md:text-[44px] leading-[1.1] text-balance"
          >
            Pasionați de animale, <span className="italic">dedicați excelenței.</span>
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
            className="mt-6 text-base text-foreground/80 leading-[1.8]"
          >
            FreshPet Salon s-a născut dintr-o convingere simplă: animalele de companie merită aceeași
            îngrijire atentă ca oamenii. Lucrăm cu produse certificate, tehnici blânde și multă răbdare —
            indiferent dacă e prima vizită sau a suta.
          </motion.p>
          <ul className="mt-8 space-y-4">
            {features.map((f) => (
              <motion.li
                key={f.text}
                variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                className="flex items-center gap-3"
              >
                <span className={`flex items-center justify-center w-10 h-10 rounded-full ${f.bg}`}>
                  <f.icon size={20} className={f.color} />
                </span>
                <span className="text-foreground/90">{f.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
