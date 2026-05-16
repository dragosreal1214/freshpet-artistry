import { motion } from "framer-motion";
import { PawPrint, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-[#0a1f17] text-white px-6 pt-20 pb-8 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-40 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2">
            <PawPrint size={28} className="text-primary" />
            <span className="font-serif text-2xl font-bold">FreshPet Salon</span>
          </div>
          <p className="mt-4 text-white/60 italic">Îngrijire cu drag, rezultate vizibile.</p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram].map((Ic, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition">
                <Ic size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Navigare</h4>
          <ul className="space-y-3 text-sm text-white/80">
            {[
              ["Servicii", "#servicii"],
              ["Despre noi", "#despre"],
              ["Galerie", "#galerie"],
              ["Recenzii", "#recenzii"],
              ["Programare", "#programare"],
            ].map(([l, h]) => (
              <li key={l}><a href={h} className="hover:text-primary transition">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>Strada Exemplu nr. 12, Iași</li>
            <li>+40 700 000 000</li>
            <li>contact@freshpetsalon.ro</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-white/10 text-center text-xs text-white/40">
        © 2025 FreshPet Salon · Iași · Toate drepturile rezervate.
      </div>
    </motion.footer>
  );
}
