import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "wouter";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        scrolled ? "bg-background/80 backdrop-blur-md border-border/50 py-4" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/biopaperpack-logo.png" 
            alt="BioPaperPack Logo" 
            className="h-8 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
          <a href="#about" className="hover:text-primary transition-colors">Ethos</a>
          <a href="#products" className="hover:text-primary transition-colors">Products</a>
          <a href="#sustainability" className="hover:text-primary transition-colors">Sustainability</a>
          <a href="#contact" className="hover:text-primary transition-colors">Inquire</a>
        </nav>

        <a href="#contact" className="hidden md:inline-flex items-center justify-center px-6 py-2 border border-foreground text-sm uppercase tracking-widest font-medium hover:bg-foreground hover:text-background transition-colors duration-300">
          Partner with us
        </a>
      </div>
    </motion.header>
  );
}
