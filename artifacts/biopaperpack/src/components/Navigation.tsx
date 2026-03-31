import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logoSrc from "@assets/MAIN_LOGO_1774952568047.png";

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-border/40 py-3"
          : "bg-transparent border-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
          data-testid="nav-logo"
        >
          <img
            src={logoSrc}
            alt="BioPaperPack Logo"
            className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-sm"
          />
          <span className="hidden sm:block font-sans font-bold text-sm tracking-[0.2em] uppercase text-foreground/90 group-hover:text-primary transition-colors">
            BIOPAPERPACK
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium">
          {[
            { label: "Ethos", id: "about" },
            { label: "Products", id: "products" },
            { label: "Sustainability", id: "sustainability" },
            { label: "Inquire", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => smoothScrollTo(item.id)}
              className="hover:text-primary transition-colors duration-200 cursor-pointer"
              data-testid={`nav-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => smoothScrollTo("contact")}
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-foreground text-xs uppercase tracking-widest font-medium hover:bg-foreground hover:text-background transition-colors duration-300"
          data-testid="nav-partner"
        >
          Partner with us
        </button>
      </div>
    </motion.header>
  );
}
