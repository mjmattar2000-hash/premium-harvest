// HPI 1.7-V
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ArrowRight, Leaf, Package, Users, Globe, Sprout, ArrowUpRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { WholesaleProducts, CompanyActivities } from '@/entities';

// --- Custom Hook for Parallax ---
function useParallax(value: any, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function HomePage() {
  // --- Data Fidelity Protocol: Canonical Data Sources ---
  const [featuredProducts, setFeaturedProducts] = useState<WholesaleProducts[]>([]);
  const [recentActivities, setRecentActivities] = useState<CompanyActivities[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [isLoadingActivities, setIsLoadingActivities] = useState(true);

  // --- Data Fidelity Protocol: Preservation of Logic ---
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoadingProducts(true);
    setIsLoadingActivities(true);

    try {
      const productsResult = await BaseCrudService.getAll<WholesaleProducts>('wholesaleproducts', {}, { limit: 3 });
      setFeaturedProducts(productsResult.items);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setIsLoadingProducts(false);
    }

    try {
      const activitiesResult = await BaseCrudService.getAll<CompanyActivities>('companyactivities', {}, { limit: 2 });
      setRecentActivities(activitiesResult.items);
    } catch (error) {
      console.error('Error loading activities:', error);
    } finally {
      setIsLoadingActivities(false);
    }
  };

  // --- Scroll Progress for Global Parallax ---
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background font-paragraph text-foreground overflow-x-clip selection:bg-primary selection:text-primary-foreground">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      <Header />
      <main className="w-full">
        {/* --- HERO SECTION: Luxury Dates Image Background --- */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-0 px-4 overflow-hidden">
          {/* Luxury Dates Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://static.wixstatic.com/media/e51c33_1cd4559ca4064aa289147023b90258ae~mv2.png"
              alt="Premium Chocolate-Covered Dates Collection"
              className="w-full h-full object-cover"
              width={2070}
            />
            {/* Refined gradient overlay for elegant text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
          </div>

          <div className="relative z-10 text-center max-w-[100rem] mx-auto">
            <h1 className="font-heading text-[12vw] leading-[0.85] font-black text-white tracking-tighter uppercase mb-8 drop-shadow-2xl">
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Premium
              </motion.span>
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Dates
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-col items-center gap-4 mt-12"
            >
              <div className="h-16 w-px bg-white/40 mb-4" />
              <p className="font-paragraph text-lg md:text-xl text-white max-w-md mx-auto leading-relaxed drop-shadow-lg">
                Cultivating excellence. Delivering nature's finest dates to industry partners worldwide.
              </p>
            </motion.div>

            {/* Floating Badge - Moved below main content */}
            <motion.div
              style={{ y: useParallax(scrollYProgress, -30) }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-16 inline-block"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-lavenderaccent flex items-center justify-center p-4 text-center rotate-12 shadow-lg hover:scale-110 transition-transform duration-500 cursor-pointer group">
                <p className="font-heading text-primary font-bold text-sm md:text-base leading-tight group-hover:-rotate-12 transition-transform duration-500">
                  Natures<br/>Choice<br/><span className="font-paragraph font-normal text-xs">Parent Co.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        {/* --- CUSTOMER LOGOS SECTION: Infinite Scroller --- */}
        <section className="w-full py-16 bg-background border-b border-primary/10">
          <div className="max-w-[120rem] mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Trusted By Industry Leaders
            </h2>
            <div className="relative overflow-hidden">
              <motion.div
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
                className="flex gap-16 items-center"
              >
                {/* Duplicate logos for seamless loop */}
                {[...Array(2)].map((_, setIndex) => (
                  <React.Fragment key={setIndex}>
                    <div className="flex-shrink-0 w-40 h-24 bg-white rounded-lg flex items-center justify-center shadow-sm border border-primary/5 p-4">
                      <Image src="https://static.wixstatic.com/media/e51c33_f5236c738abc4afbbceeda9eb854fd5f~mv2.png" alt="Partner Logo 1" className="w-full h-full object-contain" width={160} />
                    </div>
                    <div className="flex-shrink-0 w-40 h-24 bg-white rounded-lg flex items-center justify-center shadow-sm border border-primary/5 p-4">
                      <Image src="https://static.wixstatic.com/media/e51c33_51f41e86c653475986e202d5bbe37997~mv2.jpg" alt="Partner Logo 2" className="w-full h-full object-contain" width={160} />
                    </div>
                    <div className="flex-shrink-0 w-40 h-24 bg-white rounded-lg flex items-center justify-center shadow-sm border border-primary/5 p-4">
                      <Image src="https://static.wixstatic.com/media/e51c33_7e7568f5161e470f871284b5b9b8dc82~mv2.png" alt="Partner Logo 3" className="w-full h-full object-contain" width={160} />
                    </div>
                    <div className="flex-shrink-0 w-40 h-24 bg-white rounded-lg flex items-center justify-center shadow-sm border border-primary/5 p-4">
                      <Image src="https://static.wixstatic.com/media/e51c33_192a564371d9436e91162e639b567a75~mv2.webp" alt="Partner Logo 4" className="w-full h-full object-contain" width={160} />
                    </div>
                    <div className="flex-shrink-0 w-40 h-24 bg-white rounded-lg flex items-center justify-center shadow-sm border border-primary/5 p-4">
                      <Image src="https://static.wixstatic.com/media/e51c33_f5236c738abc4afbbceeda9eb854fd5f~mv2.png" alt="Partner Logo 5" className="w-full h-full object-contain" width={160} />
                    </div>
                    <div className="flex-shrink-0 w-40 h-24 bg-white rounded-lg flex items-center justify-center shadow-sm border border-primary/5 p-4">
                      <Image src="https://static.wixstatic.com/media/e51c33_51f41e86c653475986e202d5bbe37997~mv2.jpg" alt="Partner Logo 6" className="w-full h-full object-contain" width={160} />
                    </div>
                    <div className="flex-shrink-0 w-40 h-24 bg-white rounded-lg flex items-center justify-center shadow-sm border border-primary/5 p-4">
                      <Image src="https://static.wixstatic.com/media/e51c33_7e7568f5161e470f871284b5b9b8dc82~mv2.png" alt="Partner Logo 7" className="w-full h-full object-contain" width={160} />
                    </div>
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
        {/* --- DATES CATALOGUE SECTION: Horizontal Scroller --- */}
        <section className="w-full py-24 bg-background relative">
          <div className="max-w-[120rem] mx-auto px-4 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Our Premium Collection</h2>
              <p className="text-foreground/70 text-lg max-w-2xl mx-auto">Discover our exquisite selection of premium dates and date based products, carefully sourced and curated for excellence.</p>
            </div>
            
            <div className="w-full overflow-x-auto pb-8 scrollbar-hide">
              <div className="flex gap-6 min-w-max px-4">
                {[
                  { id: 1, title: 'Our premium range', image: 'https://static.wixstatic.com/media/e51c33_9de954ba31744933b095c97558407f63~mv2.png' },
                  { id: 2, title: 'Our Gourmet range', image: 'https://static.wixstatic.com/media/e51c33_f8c6e67e8d2e409eac66cfe3772447b2~mv2.png' },
                  { id: 3, title: 'Value Added products', image: 'https://static.wixstatic.com/media/e51c33_26a93bb0852649eab0f6d4b2f791c0f8~mv2.png' },
                  { id: 4, title: 'Our everyday products', image: 'https://static.wixstatic.com/media/e51c33_163a1d43bb7f4c1081d65093291fb5bb~mv2.png' }
                ].map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative w-[350px] md:w-[450px] flex-shrink-0"
                  >
                    <div className="aspect-[4/5] overflow-hidden rounded-lg bg-secondary/5 relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        width={500}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">{item.title}</h3>
                        <p className="text-base text-white drop-shadow-md">High-quality selection</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* --- QUOTE WITH IMAGES SECTION: Showcase --- */}
        <section className="w-full py-24 bg-background relative">
          <div className="max-w-[120rem] mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Quote Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="max-w-xl">
                  <div className="mb-8">
                    <span className="text-[120px] leading-none text-lavenderaccent font-heading">"</span>
                  </div>
                  <blockquote className="font-heading text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">
                    Nature's finest, delivered with care and commitment to excellence
                  </blockquote>
                  <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
                    Every product we offer reflects our dedication to quality, sustainability, and the rich heritage of natural cultivation.
                  </p>
                </div>
              </motion.div>

              {/* Two Images Grid */}
              <div className="order-1 lg:order-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="aspect-[4/5] overflow-hidden rounded-lg"
                >
                  <Image
                    src="https://static.wixstatic.com/media/e51c33_f57d6224df564d13bbd987126d65f0ae~mv2.jpg"
                    alt="Premium Dates Collection"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    width={400}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="aspect-[4/5] overflow-hidden rounded-lg"
                >
                  <Image
                    src="https://static.wixstatic.com/media/e51c33_836136d8bab14691a98ebe8bad0439c6~mv2.jpg"
                    alt="Gourmet Dates Selection"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    width={400}
                  />
                </motion.div>
              </div>

            </div>
          </div>
        </section>
        {/* --- TEXT COLUMNS SECTION: Narrative Flow --- */}
        <section className="w-full py-32 bg-background border-t border-primary/10">
          <div className="max-w-[120rem] mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-5">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-heading text-5xl md:text-6xl font-bold text-primary leading-none tracking-tight sticky top-32"
                >
                  DISCOVER A NEW <br/>
                  WORLD OF <br/>
                  <span className="text-secondary italic">FLAVOR</span>
                </motion.h2>
              </div>
              
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-foreground/80 leading-relaxed">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="mb-6">
                    Imagine biting into nature's candy—each date a small treasure of concentrated sweetness, complex flavors, and velvety texture. We're not just importers; we're flavor curators on a mission to bring you the world's most exceptional dates.
                  </p>
                  <p>
                    From sun-drenched oases to your doorstep, we source premium varieties that most people have never experienced.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="mb-6">
                    Whether you're a chef seeking the perfect ingredient, a wellness enthusiast craving natural energy, or simply someone who appreciates the finer things, our carefully selected dates deliver an experience that supermarket varieties simply can't match.
                  </p>
                  <p>
                    This is where authentic flavor meets uncompromising quality.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* --- FEATURED PRODUCTS: Horizontal Scroll / Carousel --- */}
        {/* --- CTA SECTION: Full Bleed Impact --- */}
        <section className="w-full py-40 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             <Image
                src="https://static.wixstatic.com/media/e51c33_00ce0ad31c8e45a282a5207e35f9321c~mv2.png?originWidth=1152&originHeight=640"
                alt="Texture"
                className="w-full h-full object-cover"
                width={1200}
              />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-5xl md:text-7xl font-bold text-secondary-foreground mb-8">
                Ready to Grow?
              </h2>
              <p className="font-paragraph text-xl text-secondary-foreground/90 mb-12 leading-relaxed">
                Join our network of industry partners and experience the Premium Harvest difference.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-lavenderaccent text-primary font-heading font-bold text-lg rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Start the Conversation
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}