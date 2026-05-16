import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PawPrint } from "lucide-react";

const links = [
  { label: "Servicii", href: "#servicii" },
  { label: "Despre", href: "#despre" },
  { label: "Galerie", href: "#galerie" },
  { label: "Recenzii", href: "#recenzii" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <PawPrint
              size={28}
              className={scrolled ? "text-primary" : "text-primary"}
            />
            <span
              className={`font-serif text-xl font-bold transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              FreshPet <span className="italic font-normal">Salon</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    scrolled ? "text-foreground" : "text-white/90"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#programare"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:brightness-110 transition"
          >
            Programează-te
          </a>

          <button
            className="md:hidden p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className={scrolled ? "text-foreground" : "text-white"} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-white p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-serif text-xl font-bold">FreshPet</span>
                <button onClick={() => setOpen(false)} aria-label="Close">
                  <X />
                </button>
              </div>
              <ul className="flex flex-col gap-5">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="font-serif text-2xl text-foreground hover:text-primary transition"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#programare"
                onClick={() => setOpen(false)}
                className="mt-auto inline-flex justify-center items-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium"
              >
                Programează-te acum →
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
