import { motion } from "framer-motion";
import { MessageCircle, Check, ChevronDown } from "lucide-react";

export function BookingCTA() {
  return (
    <section id="programare" className="relative py-24 md:py-32 px-6 mesh-dark overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-peach/15 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <span className="eyebrow on-dark mb-5" style={{ color: "#A7E9CF" }}>06 — Programare</span>
          <h2 className="mt-4 font-serif text-4xl md:text-[48px] leading-[1.1] text-balance">
            Programează-ți animalul <span className="italic">astăzi.</span>
          </h2>
          <ul className="mt-8 space-y-3">
            {[
              "Confirmare instant pe email",
              "Anulare gratuită cu 24h înainte",
              "Primul tuns — reducere 10%",
            ].map((b) => (
              <li key={b} className="flex items-center gap-3 text-white/90">
                <Check size={18} className="text-gold shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <motion.a
            href="https://wa.me/40700000000"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0a1f17] text-white font-medium"
          >
            <MessageCircle size={18} />
            Scrie-ne pe WhatsApp →
          </motion.a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={(e) => e.preventDefault()}
          className="border-gradient p-8 shadow-2xl"
        >
          <h3 className="font-serif text-[22px] font-bold mb-6">Rezervă o ședință</h3>
          <div className="space-y-4">
            <SelectField label="Alege serviciul">
              <option>Tuns complet câine</option>
              <option>Baie & Uscare</option>
              <option>Tuns pisică</option>
              <option>Pachet Premium</option>
            </SelectField>
            <SelectField label="Alege ziua">
              <option>Luni</option><option>Marți</option><option>Miercuri</option>
              <option>Joi</option><option>Vineri</option><option>Sâmbătă</option>
            </SelectField>
            <Input placeholder="Numele animalului" />
            <Input placeholder="Numărul tău de telefon" type="tel" />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 w-full h-12 rounded-xl bg-primary text-white font-medium"
          >
            Trimite cererea →
          </motion.button>
          <p className="mt-3 text-xs text-muted-foreground text-center">
            Vei fi contactat în maxim 1 oră în zilele lucrătoare.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function SelectField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative">
      <select
        className="w-full appearance-none h-12 px-4 pr-10 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-primary"
        defaultValue=""
      >
        <option value="" disabled>{label}</option>
        {children}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
    </div>
  );
}
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-primary"
    />
  );
}
