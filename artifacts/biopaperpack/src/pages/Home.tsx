import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, Leaf, ShieldCheck, PenTool, ArrowUpRight, Package, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import logoTransparent from "@assets/MAIN_LOGO-removebg-preview_1774953447415.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } }
};

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navigation />

      {/* ── HERO ────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] overflow-hidden flex flex-col justify-center"
        data-testid="section-hero"
      >
        {/* Parallax photo — right side */}
        <motion.div
          style={{ y: imgY }}
          className="absolute right-0 top-0 w-full md:w-[58vw] h-full z-0"
        >
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-[75%] bg-gradient-to-r from-background via-background/75 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background via-background/85 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
          </div>
          <img
            src="/hero-box.png"
            alt="Premium Corrugated Box"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Hero text content */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-10 container mx-auto px-6 md:px-12 pt-36 pb-28"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] uppercase tracking-[0.35em] text-foreground/40 font-medium mb-5"
            >
              BIOPAPERPACK
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-6xl md:text-7xl lg:text-[90px] font-serif text-balance leading-[1.02] text-foreground"
            >
              Precision <br />Meets Nature.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-8 text-base md:text-lg text-muted-foreground max-w-lg font-light leading-relaxed"
            >
              Premium corrugated box manufacturing where industrial craftsmanship
              intersects with uncompromising environmental responsibility.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-12 flex items-center gap-8">
              <button
                onClick={() => smoothScrollTo("products")}
                className="inline-flex items-center gap-3 border-b border-foreground pb-2 text-[11px] uppercase tracking-widest hover:text-primary hover:border-primary transition-colors duration-300"
                data-testid="hero-explore"
              >
                Explore Solutions <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => smoothScrollTo("contact")}
                className="text-[11px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
                data-testid="hero-contact"
              >
                Get a Quote
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="absolute bottom-6 left-0 right-0 z-10 container mx-auto px-6 md:px-12 flex items-center justify-between"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/30 font-medium">Est. in India</span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/30">Manufacturing Excellence</span>
          </div>
        </motion.div>
      </section>

      {/* ── ETHOS / ABOUT ───────────────────────────────── */}
      <section id="about" className="py-32 px-6 md:px-12 bg-foreground text-background" data-testid="section-about">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeUp} className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium mb-6">
                Our Ethos
              </motion.p>
              <motion.h3 variants={fadeUp} className="text-3xl md:text-5xl font-serif leading-tight">
                We craft eco-conscious packaging for brands that refuse to compromise.
              </motion.h3>
              <motion.p variants={fadeUp} className="mt-8 text-background/55 text-base font-light max-w-md leading-relaxed">
                Every box we manufacture is a testament to quality and sustainability. From lightweight retail shippers to heavy-duty industrial cargo protection — exact specifications, minimal footprint.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Leaf, title: "Eco-Friendly", desc: "Sourced from responsibly managed forests. 100% recyclable materials." },
                { icon: ShieldCheck, title: "Premium Quality", desc: "Rigorous stress-testing ensures maximum protection across every shipment." },
                { icon: PenTool, title: "Made to Order", desc: "Custom dimensions and full-color brand printing to the millimeter." },
                { icon: Package, title: "Reliable Supply", desc: "Consistent manufacturing timelines you can build your business around." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="border-l border-background/15 pl-6 py-2"
                >
                  <item.icon className="w-5 h-5 text-primary mb-4" />
                  <h4 className="text-base font-medium mb-2">{item.title}</h4>
                  <p className="text-xs text-background/45 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND IDENTITY SHOWCASE ─────────────────────── */}
      <section className="py-16 px-6 md:px-12 bg-background" data-testid="section-brand">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="border border-border overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-center">
              {/* Logo block — left/center */}
              <div className="flex-1 flex items-center justify-center py-16 px-10 md:py-20 md:px-16 bg-[hsl(80,55%,94%)] relative overflow-hidden">
                {/* Subtle radial glow behind logo */}
                <div className="absolute inset-0 bg-radial from-[hsl(80,60%,88%)] to-transparent opacity-60 pointer-events-none" />
                <motion.img
                  src={logoTransparent}
                  alt="BioPaperPack"
                  className="relative z-10 w-56 md:w-72 h-auto object-contain drop-shadow-sm"
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                />
              </div>
              {/* Divider */}
              <div className="hidden md:block w-px self-stretch bg-border" />
              <div className="block md:hidden h-px w-full bg-border" />
              {/* Brand statement — right */}
              <div className="flex-1 flex flex-col justify-center py-14 px-10 md:py-20 md:px-16">
                <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium mb-5">Our Identity</p>
                <h3 className="text-2xl md:text-3xl font-serif leading-snug mb-6 text-foreground">
                  A brand rooted in<br />nature. Built to last.
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
                  BIOPAPERPACK was founded on the belief that premium packaging and environmental stewardship are not in opposition — they are one and the same.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCTS ────────────────────────────────────── */}
      <section id="products" className="py-32 px-6 md:px-12" data-testid="section-products">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium mb-4">Engineering</p>
              <h3 className="text-4xl md:text-6xl font-serif">Structural Integrity.</h3>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Three distinct grades of corrugated board, engineered for specific use cases to meet your exact logistical requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              { ply: "3-Ply", title: "Lightweight", subtitle: "Retail & Consumer", desc: "Ideal for retail packaging, light shipping, and subscription boxes. Excellent printability and presentation.", weight: "Light-duty" },
              { ply: "5-Ply", title: "Industrial", subtitle: "Medium-Duty Shipping", desc: "Double-wall construction providing enhanced structural support. Versatile for e-commerce and industrial distribution.", weight: "Medium-duty" },
              { ply: "7-Ply", title: "Maximum", subtitle: "Heavy Cargo & Export", desc: "Triple-wall maximum protection. Engineered for heavy machinery, fragile exports, and rigorous international routes.", weight: "Heavy-duty" }
            ].map((product, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-background p-8 md:p-10 hover:bg-foreground hover:text-background transition-colors duration-500 cursor-default flex flex-col justify-between min-h-[340px]"
                data-testid={`product-card-${i}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-12">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-background/40 transition-colors">{product.weight}</span>
                    <span className="font-serif text-4xl text-primary transition-colors">{product.ply}</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-serif mb-2">{product.title}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-background/40 mb-6 transition-colors">{product.subtitle}</p>
                  <p className="text-sm opacity-70 leading-relaxed">{product.desc}</p>
                </div>
                <div className="mt-8 flex justify-end">
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-px bg-card border border-border p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="max-w-xl">
              <h4 className="text-2xl font-serif mb-3">Custom Dimensions & Brand Printing</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Beyond structural grades, we manufacture to exact millimeter specifications. Our advanced flexographic printing delivers full-color brand logos and graphics with stunning clarity.
              </p>
            </div>
            <button
              onClick={() => smoothScrollTo("contact")}
              className="shrink-0 px-8 py-4 bg-foreground text-background text-[11px] uppercase tracking-widest hover:bg-primary transition-colors duration-300 whitespace-nowrap"
              data-testid="product-request-specs"
            >
              Request Specs
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── IMAGE BREAK ─────────────────────────────────── */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          src="/manufacturing.png"
          alt="Manufacturing Facility"
          className="w-full h-full object-cover"
        />
      </section>

      {/* ── SUSTAINABILITY ───────────────────────────────── */}
      <section id="sustainability" className="py-32 px-6 md:px-12" data-testid="section-sustainability">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="lg:col-span-5"
              >
                <div className="aspect-[3/4] overflow-hidden bg-muted/30">
                  <img src="/texture.png" alt="Corrugated Flute Texture" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              <div className="lg:col-span-7 lg:pl-8">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  <motion.p variants={fadeUp} className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium mb-6">
                    Environmental Commitment
                  </motion.p>
                  <motion.h3 variants={fadeUp} className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                    Designed for the circular economy.
                  </motion.h3>
                  <motion.p variants={fadeUp} className="text-base text-muted-foreground font-light mb-12 leading-relaxed">
                    At BIOPAPERPACK, sustainability is the foundation of our engineering. We utilize water-based inks, high post-consumer recycled content, and strict waste-reduction manufacturing protocols. Our boxes return to the earth as cleanly as they came from it.
                  </motion.p>

                  <div className="grid grid-cols-2 gap-8 border-t border-border pt-12">
                    {[
                      { num: "100%", label: "Recyclable Materials" },
                      { num: "0", label: "Harmful Toxins" },
                      { num: "FSC", label: "Certified Sourcing" },
                      { num: "H₂O", label: "Based Inks Only" },
                    ].map((stat, i) => (
                      <motion.div key={i} variants={fadeUp}>
                        <div className="text-4xl md:text-5xl font-serif text-foreground mb-2">{stat.num}</div>
                        <div className="text-[11px] text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
        </div>
      </section>

      {/* ── CONTACT / INQUIRY ────────────────────────────── */}
      <section
        id="contact"
        className="py-32 px-6 md:px-12 bg-[hsl(150,36%,13%)]"
        data-testid="section-contact"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-14"
          >
            <motion.p variants={fadeUp} className="text-[11px] uppercase tracking-[0.3em] text-[hsl(75,60%,65%)] font-medium mb-4">
              Get in Touch
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif text-[hsl(45,40%,96%)] leading-tight mb-6">
              Start a Conversation.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[hsl(150,15%,68%)] text-base font-light max-w-lg leading-relaxed">
              Request a quote, discuss custom dimensions, or inquire about our manufacturing capacity. We respond within 24 hours.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14"
          >
            {[
              { icon: Mail, label: "Email Us", value: "biopaperpack@gmail.com" },
              { icon: Phone, label: "Call Us", value: "+91 96961 60001" },
              { icon: MapPin, label: "Location", value: "Haryana, India" },
            ].map((info, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full border border-[hsl(75,60%,65%)]/25 flex items-center justify-center shrink-0 mt-0.5">
                  <info.icon className="w-3.5 h-3.5 text-[hsl(75,60%,65%)]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[hsl(150,15%,48%)] mb-1">{info.label}</p>
                  <p className="text-sm text-[hsl(45,30%,80%)] font-light">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-7"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[hsl(150,15%,55%)]">Name</label>
                <Input
                  className="border-0 border-b border-[hsl(150,15%,28%)] bg-transparent rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[hsl(75,60%,65%)] text-[hsl(45,35%,90%)] placeholder:text-[hsl(150,15%,33%)] transition-colors"
                  placeholder="Jane Doe"
                  data-testid="input-name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[hsl(150,15%,55%)]">Email</label>
                <Input
                  type="email"
                  className="border-0 border-b border-[hsl(150,15%,28%)] bg-transparent rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[hsl(75,60%,65%)] text-[hsl(45,35%,90%)] placeholder:text-[hsl(150,15%,33%)] transition-colors"
                  placeholder="jane@company.com"
                  data-testid="input-email"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[hsl(150,15%,55%)]">Company</label>
                <Input
                  className="border-0 border-b border-[hsl(150,15%,28%)] bg-transparent rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[hsl(75,60%,65%)] text-[hsl(45,35%,90%)] placeholder:text-[hsl(150,15%,33%)] transition-colors"
                  placeholder="Your Brand Ltd."
                  data-testid="input-company"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[hsl(150,15%,55%)]">Product Interest</label>
                <select
                  className="w-full h-10 border-0 border-b border-[hsl(150,15%,28%)] bg-transparent px-0 focus:outline-none focus:border-[hsl(75,60%,65%)] appearance-none text-sm text-[hsl(45,30%,78%)] transition-colors cursor-pointer"
                  defaultValue=""
                  data-testid="select-product"
                >
                  <option value="" disabled style={{ background: "hsl(150,40%,10%)" }}>Select an option</option>
                  <option style={{ background: "hsl(150,40%,10%)" }}>3-Ply Solutions</option>
                  <option style={{ background: "hsl(150,40%,10%)" }}>5-Ply Solutions</option>
                  <option style={{ background: "hsl(150,40%,10%)" }}>7-Ply Solutions</option>
                  <option style={{ background: "hsl(150,40%,10%)" }}>Custom / Undecided</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[hsl(150,15%,55%)]">Message / Specifications</label>
              <Textarea
                className="border-0 border-b border-[hsl(150,15%,28%)] bg-transparent rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[hsl(75,60%,65%)] text-[hsl(45,35%,90%)] placeholder:text-[hsl(150,15%,33%)] min-h-[100px] resize-none transition-colors"
                placeholder="Tell us about your volume, dimensions, and timeline..."
                data-testid="textarea-message"
              />
            </div>
            <div className="pt-6">
              <button
                type="submit"
                className="px-10 py-4 bg-[hsl(75,55%,62%)] text-[hsl(150,40%,8%)] text-[11px] uppercase tracking-widest font-semibold hover:bg-[hsl(75,55%,70%)] transition-colors duration-300"
                data-testid="button-submit"
              >
                Submit Inquiry
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer className="bg-[hsl(150,38%,8%)] text-[hsl(150,12%,55%)] py-14 px-6 md:px-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-[hsl(45,30%,82%)] font-bold text-sm tracking-[0.25em] uppercase">BIOPAPERPACK</p>
            <p className="text-[10px] tracking-widest uppercase text-[hsl(150,12%,40%)] mt-1">Precision Meets Nature</p>
          </div>
          <nav className="flex gap-8 text-[11px] uppercase tracking-widest">
            {[
              { label: "Instagram", href: "https://instagram.com/biopaperpack" },
              { label: "LinkedIn", href: "https://linkedin.com/company/biopaperpack" },
              { label: "WhatsApp", href: "https://wa.me/919696160001" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(45,30%,82%)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <p className="text-[10px] text-[hsl(150,12%,38%)] text-center md:text-right">
            &copy; {new Date().getFullYear()} BioPaperPack Manufacturing.<br />
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
