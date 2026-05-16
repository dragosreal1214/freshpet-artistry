import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow mb-5">07 — Contact</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-balance leading-[1.1]">
            Vino să ne <span className="italic text-gradient-primary">cunoști.</span>
          </h2>
          <ul className="mt-10 space-y-5">
            <Row icon={MapPin}>Strada Exemplu nr. 12, Iași, România</Row>
            <Row icon={Phone}><a href="tel:+40700000000" className="hover:text-primary transition">+40 700 000 000</a></Row>
            <Row icon={Mail}><a href="mailto:contact@freshpetsalon.ro" className="hover:text-primary transition">contact@freshpetsalon.ro</a></Row>
            <Row icon={Clock}>Luni–Vineri 9:00–19:00 · Sâmbătă 9:00–17:00 · Duminică — Închis</Row>
          </ul>
          <div className="mt-10 flex gap-3">
            {[Facebook, Instagram].map((Ic, i) => (
              <a
                key={i}
                href="#"
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
              >
                <Ic size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group h-[480px] rounded-2xl border-2 border-dashed border-primary/40 flex flex-col items-center justify-center gap-3 transition-shadow"
          style={{ background: "linear-gradient(135deg, #E1F5EE 0%, #F0FBF7 100%)" }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 0 3px #1D9E75")}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
        >
          <MapPin size={64} className="text-primary" strokeWidth={1.4} />
          <span className="italic text-muted-foreground">Google Maps · FreshPet Salon, Iași</span>
        </motion.div>
      </div>
    </section>
  );
}

function Row({ icon: Icon, children }: { icon: typeof MapPin; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <Icon size={18} className="text-primary" />
      </span>
      <span className="pt-2 text-foreground/90">{children}</span>
    </li>
  );
}
