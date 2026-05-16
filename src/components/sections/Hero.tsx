import { motion } from "framer-motion";
import { Dog, PawPrint, Sparkles, Star } from "lucide-react";
import { Counter } from "../Counter";
import { CircleText } from "../CircleText";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-white px-6 pt-28 pb-0"
      style={{ background: "radial-gradient(ellipse at 50% 0%, #133324 0%, #0a1f17 55%, #06150f 100%)" }}
    >
      {/* Grain */}
      <div className="grain-overlay" />

      {/* Decorative paw prints */}
      <PawPrint className="absolute top-[22%] left-[6%] text-primary/15 animate-float" size={42} style={{ animationDelay: "0s" }} />
      <PawPrint className="absolute top-[68%] right-[8%] text-primary/15 animate-float" size={56} style={{ animationDelay: "1.5s", transform: "rotate(15deg)" }} />
      <Sparkles className="absolute top-[30%] right-[14%] text-primary/30 animate-float" size={20} style={{ animationDelay: "2.5s" }} />
      <Star className="absolute top-[58%] left-[12%] text-primary/25 animate-float" size={16} style={{ animationDelay: "3.2s" }} />

      {/* Floating blurs */}
      <div className="absolute top-[15%] left-[8%] w-40 h-40 rounded-full bg-primary blur-3xl opacity-25 animate-pulse-soft" />
      <div className="absolute top-[40%] right-[10%] w-56 h-56 rounded-full bg-gold blur-3xl opacity-[0.12] animate-pulse-soft" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-[35%] left-[20%] w-32 h-32 rounded-full bg-peach blur-3xl opacity-20 animate-pulse-soft" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-[20%] right-[25%] w-24 h-24 rounded-full bg-mint blur-2xl opacity-25 animate-pulse-soft" style={{ animationDelay: "5s" }} />

      {/* Side rails */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.4em] text-white/40 [writing-mode:vertical-rl] rotate-180">
        Iași · 2022 — Present
      </div>
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-white/40">
        <span className="[writing-mode:vertical-rl]">Premium Pet Care</span>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center max-w-4xl"
      >
        <motion.div variants={item} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-xs uppercase tracking-wider text-white/90">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
              <span className="relative w-2 h-2 rounded-full bg-primary" />
            </span>
            Salonul premium pentru animale din Iași
          </span>
        </motion.div>

        <h1 className="font-serif font-normal leading-[1.05] text-[40px] md:text-[78px] text-balance">
          <motion.span variants={item} className="block">
            Animalul tău
          </motion.span>
          <motion.span variants={item} className="block italic">
            merită să{" "}
            <span className="relative inline-block">
              arate
              <svg
                className="absolute left-0 -bottom-2 w-full"
                height="14"
                viewBox="0 0 200 14"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 7 Q 25 1, 50 7 T 100 7 T 150 7 T 198 7"
                  stroke="#6BD4A8"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, delay: 0.9, ease: "easeInOut" }}
                />
              </svg>
            </span>
          </motion.span>
          <motion.span variants={item} className="block font-bold text-gradient-primary">
            impecabil.
          </motion.span>
        </h1>

        <motion.p variants={item} className="mt-8 text-base md:text-lg text-white/60 max-w-xl text-balance">
          Grooming profesional · Produse premium · Rezultate garantate · Iași
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row gap-4">
          <motion.a
            href="#programare"
            whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.97 }}
            className="group relative px-8 py-4 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/40 overflow-hidden"
          >
            <span className="relative z-10">Programează-te acum →</span>
            <span className="absolute inset-0 shimmer-line opacity-60" />
          </motion.a>
          <motion.a
            href="#servicii"
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#0a1f17" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-full border border-white/60 text-white font-medium backdrop-blur-sm"
          >
            Descoperă serviciile
          </motion.a>
        </motion.div>

        <motion.div variants={item} className="mt-16 grid grid-cols-3 gap-6 md:gap-12">
          {[
            { v: 500, suffix: "+", label: "Clienți fericiți" },
            { v: 4.9, suffix: "★", label: "Rating Google" },
            { v: 3, suffix: " ani", label: "Experiență" },
          ].map((s, i) => {
            const accent = ["bg-mint", "bg-gold", "bg-peach"][i];
            return (
              <div key={i} className="border-t border-white/25 pt-3 min-w-[90px] relative">
                <div className={`absolute -top-px left-0 w-8 h-px ${accent}`} />
                <div className="font-serif text-3xl md:text-4xl font-bold">
                  <Counter to={s.v} suffix={s.suffix} />
                </div>
                <div className="text-xs md:text-sm text-white/60 mt-1">{s.label}</div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="relative z-10 mt-12 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">scroll</span>
        <div className="relative h-12 w-px bg-white/20 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-4 bg-primary animate-scroll-hint" />
        </div>
      </div>

      {/* Peeking image frame with rotating seal */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 18, stiffness: 80, delay: 1.1 }}
        className="relative z-10 mt-16 w-full max-w-6xl"
      >
        <div className="relative w-full h-[280px] md:h-[480px] rounded-t-3xl border border-white/10 border-b-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-white/[0.06] to-transparent backdrop-blur-sm overflow-hidden">
          {/* corner brackets */}
          <span className="absolute top-5 left-5 w-6 h-6 border-t border-l border-primary/60" />
          <span className="absolute top-5 right-5 w-6 h-6 border-t border-r border-primary/60" />
          <span className="absolute bottom-5 left-5 w-6 h-6 border-b border-l border-primary/60" />
          <span className="absolute bottom-5 right-5 w-6 h-6 border-b border-r border-primary/60" />
          <Dog size={80} className="text-white" strokeWidth={1.2} />
          <span className="italic text-white/60">FreshPet Salon — Iași</span>

          {/* rotating seal */}
          <div className="absolute -top-12 right-6 md:right-12 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#0a1f17] border border-primary/40 flex items-center justify-center shadow-2xl">
            <CircleText size={120} text=" · GROOMING PREMIUM · IAȘI · 2025 " color="#6BD4A8" />
            <PawPrint className="absolute text-primary" size={28} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
