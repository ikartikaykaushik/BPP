import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, Leaf, ShieldCheck, PenTool, ArrowUpRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navigation />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[100svh] pt-32 pb-20 px-6 md:px-12 flex flex-col justify-between overflow-hidden">
        <div className="container mx-auto z-10 relative h-full flex flex-col justify-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1 
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-balance leading-[1.05]"
            >
              Precision <br /> Meets Nature.
            </motion.h1>
            <motion.p 
              variants={fadeUp}
              className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl font-light"
            >
              Premium corrugated box manufacturing where industrial craftsmanship 
              intersects with uncompromising environmental responsibility.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-12">
              <a href="#products" className="inline-flex items-center gap-4 border-b border-foreground pb-2 text-sm uppercase tracking-widest hover:text-primary hover:border-primary transition-colors">
                Explore Solutions <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Image / Parallax Element */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute right-0 bottom-0 w-full md:w-[60vw] h-[60vh] md:h-[80vh] z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 md:hidden" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background z-10 hidden md:block" />
          <img 
            src="/hero-box.png" 
            alt="Premium Corrugated Box" 
            className="w-full h-full object-cover object-left-top"
          />
        </motion.div>
      </section>

      {/* ETHOS / ABOUT SECTION */}
      <section id="about" className="py-32 px-6 md:px-12 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-sm uppercase tracking-widest text-primary font-medium mb-6">Our Ethos</motion.h2>
              <motion.h3 variants={fadeUp} className="text-3xl md:text-5xl font-serif leading-tight">
                We craft eco-conscious packaging solutions for brands that refuse to compromise.
              </motion.h3>
              <motion.p variants={fadeUp} className="mt-8 text-muted/80 text-lg font-light max-w-md">
                Every box we manufacture is a testament to quality and sustainability. From lightweight retail shippers to heavy-duty industrial cargo protection, we deliver exact specifications with a minimal footprint.
              </motion.p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Leaf, title: "Eco-Friendly", desc: "Sourced from responsibly managed forests and 100% recyclable." },
                { icon: ShieldCheck, title: "Premium Quality", desc: "Rigorous stress testing ensures maximum protection for your goods." },
                { icon: PenTool, title: "Made to Order", desc: "Custom dimensions and full-color brand printing." },
                { icon: Package, title: "Reliable Supply", desc: "Consistent manufacturing timelines you can depend on." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="border-l border-border/20 pl-6 py-2"
                >
                  <item.icon className="w-6 h-6 text-primary mb-4" />
                  <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                  <p className="text-sm text-muted/60">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-32 px-6 md:px-12">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          >
            <div>
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4">Engineering</h2>
              <h3 className="text-4xl md:text-6xl font-serif">Structural Integrity.</h3>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Engineered for specific use cases. We manufacture three distinct grades of corrugated board to meet your exact logistical requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "3-Ply Solutions",
                subtitle: "Lightweight & Retail",
                desc: "Ideal for retail packaging, light shipping, and subscription boxes. Offers excellent printability and presentation.",
              },
              {
                title: "5-Ply Solutions",
                subtitle: "Medium-Duty & Industrial",
                desc: "Double-wall construction providing enhanced structural support. Versatile for e-commerce and standard industrial distribution.",
              },
              {
                title: "7-Ply Solutions",
                subtitle: "Heavy-Duty Cargo",
                desc: "Triple-wall maximum protection. Engineered for heavy machinery, fragile exports, and rigorous international shipping routes.",
              }
            ].map((product, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group border border-border p-8 hover:bg-foreground hover:text-background transition-colors duration-500 cursor-pointer"
              >
                <div className="text-sm uppercase tracking-widest mb-16 text-muted-foreground group-hover:text-muted/60 transition-colors">
                  {product.subtitle}
                </div>
                <h4 className="text-3xl font-serif mb-4">{product.title}</h4>
                <p className="text-sm opacity-80 leading-relaxed">
                  {product.desc}
                </p>
                <div className="mt-12 flex justify-end">
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transform translate-y-4 -translate-x-4 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-16 border border-border p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 bg-card"
          >
            <div className="max-w-xl">
              <h4 className="text-2xl font-serif mb-4">Custom Dimensions & Printing</h4>
              <p className="text-muted-foreground">
                Beyond structural grades, we offer fully custom sizing down to the millimeter. Our advanced flexographic printing applies full-color brand logos and graphics with striking clarity.
              </p>
            </div>
            <a href="#contact" className="shrink-0 px-8 py-4 bg-foreground text-background text-sm uppercase tracking-widest hover:bg-primary transition-colors">
              Request Specs
            </a>
          </motion.div>
        </div>
      </section>

      {/* LARGE IMAGE BREAK */}
      <section className="h-[70vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          src="/manufacturing.png" 
          alt="Manufacturing Facility" 
          className="w-full h-full object-cover"
        />
      </section>

      {/* SUSTAINABILITY */}
      <section id="sustainability" className="py-32 px-6 md:px-12 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="/texture.png" 
                  alt="Corrugated Texture" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <div className="lg:col-span-7 lg:pl-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeUp} className="text-sm uppercase tracking-widest text-primary font-medium mb-6">
                  Environmental Commitment
                </motion.h2>
                <motion.h3 variants={fadeUp} className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                  Designed for the circular economy.
                </motion.h3>
                <motion.p variants={fadeUp} className="text-lg text-muted-foreground font-light mb-12">
                  At BioPaperPack, sustainability isn't an afterthought—it's the foundation of our engineering. We utilize water-based inks, high post-consumer recycled content, and strict waste-reduction manufacturing protocols. Our boxes return to the earth as cleanly as they came from it.
                </motion.p>

                <div className="grid grid-cols-2 gap-8 border-t border-border pt-12">
                  <motion.div variants={fadeUp}>
                    <div className="text-5xl font-serif mb-2">100%</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">Recyclable Material</div>
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <div className="text-5xl font-serif mb-2">0</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">Harmful Toxins</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / INQUIRY */}
      <section id="contact" className="py-32 px-6 md:px-12 bg-muted/30 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif mb-6">Start a conversation.</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground">
              Request a quote, discuss custom dimensions, or inquire about our manufacturing capacity.
            </motion.p>
          </motion.div>

          <motion.form 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <Input className="border-0 border-b border-border bg-transparent rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <Input type="email" className="border-0 border-b border-border bg-transparent rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground" placeholder="jane@company.com" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Company</label>
                <Input className="border-0 border-b border-border bg-transparent rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground" placeholder="Your Brand Ltd." />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Product Interest</label>
                <select className="w-full h-10 border-0 border-b border-border bg-transparent px-0 focus:outline-none focus:border-foreground appearance-none">
                  <option value="" disabled selected>Select an option</option>
                  <option>3-Ply Solutions</option>
                  <option>5-Ply Solutions</option>
                  <option>7-Ply Solutions</option>
                  <option>Custom / Undecided</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message / Specifications</label>
              <Textarea 
                className="border-0 border-b border-border bg-transparent rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground min-h-[120px] resize-none" 
                placeholder="Tell us about your volume, dimensions, and timeline..." 
              />
            </div>
            <div className="pt-8">
              <Button type="button" className="w-full md:w-auto px-12 py-6 rounded-none uppercase tracking-widest text-sm bg-foreground hover:bg-primary text-background transition-colors">
                Submit Inquiry
              </Button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background py-16 px-6 md:px-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src="/biopaperpack-logo.png" alt="BioPaperPack" className="h-8 w-auto grayscale brightness-200" />
            <span className="font-serif text-xl tracking-tight">BioPaperPack</span>
          </div>
          <div className="text-sm text-muted/50 font-light text-center md:text-right">
            &copy; {new Date().getFullYear()} BioPaperPack Manufacturing. <br className="md:hidden" />
            Precision meets nature.
          </div>
        </div>
      </footer>
    </div>
  );
}
