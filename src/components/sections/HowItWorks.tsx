import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles, type LucideIcon } from "lucide-react";

interface Step {
  n: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

const steps: Step[] = [
  { n: "01", icon: Calendar, title: "Programează în 2 minute", desc: "Alege serviciul, ziua și ora direct de pe site. Confirmare automată pe email." },
  { n: "02", icon: MapPin, title: "Vino la noi în Iași", desc: "Salonul nostru e ușor de găsit în centrul orașului, cu parcare disponibilă." },
  { n: "03", icon: Sparkles, title: "Ridici un animal fericit", desc: "Animalul tău pleacă curat, mirositor și relaxat. Garantat." },
];

export function HowItWorks() {
  return (
    <section className="relative py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center flex flex-col items-center"
      >
        <span className="eyebrow mb-5">03 — Procesul</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-4 text-balance">
          <span className="italic">Simplu.</span> Rapid. <span className="italic text-gradient-primary">Impecabil.</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-md">Trei pași până la un animal radiant și relaxat.</p>
      </motion.div>

      <div className="mt-20 relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Dashed connector */}
        <svg
          className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-1"
          viewBox="0 0 800 4"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="0" y1="2" x2="800" y2="2"
            stroke="#1D9E75"
            strokeWidth="2"
            strokeDasharray="6 8"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </svg>

        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative text-center"
          >
            <span className="absolute inset-x-0 -top-12 font-serif text-[120px] font-bold opacity-[0.08] leading-none pointer-events-none select-none" style={{ color: ["#1D9E75", "#C9A24C", "#F4A988"][i] }}>
              {s.n}
            </span>
            <motion.div
              whileHover={{ scale: 1.08, rotate: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-lg mb-6"
              style={{
                background: ["#1D9E75", "#C9A24C", "#F4A988"][i],
                boxShadow: `0 20px 40px -15px ${["rgba(29,158,117,0.5)", "rgba(201,162,76,0.5)", "rgba(244,169,136,0.5)"][i]}`,
              }}
            >
              <s.icon size={32} className="text-white" />
            </motion.div>
            <h3 className="font-serif text-[22px] font-bold">{s.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
