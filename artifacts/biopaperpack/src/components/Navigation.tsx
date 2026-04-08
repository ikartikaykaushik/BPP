import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/30 py-4"
          : "bg-transparent border-b border-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group"
          data-testid="nav-logo"
        >
          <span className="font-sans font-bold text-sm tracking-[0.28em] uppercase text-foreground group-hover:text-primary transition-colors duration-300">
            BIOPAPERPACK
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest font-medium">
          {[
            { label: "Ethos", id: "about" },
            { label: "Products", id: "products" },
            { label: "Sustainability", id: "sustainability" },
            { label: "Inquire", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => smoothScrollTo(item.id)}
              className="text-foreground/70 hover:text-primary transition-colors duration-200 cursor-pointer"
              data-testid={`nav-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => smoothScrollTo("contact")}
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-foreground/60 text-[11px] uppercase tracking-widest font-medium hover:bg-foreground hover:text-background transition-colors duration-300"
          data-testid="nav-partner"
        >
          Partner with us
        </button>
      </div>
    </motion.header>
  );
}
