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
        {/* --- HERO SECTION: The Countdown Begins (Reinterpreted) --- */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-4 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-px h-full bg-primary/5" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-primary/5" />
            <motion.div 
              style={{ y: useParallax(scrollYProgress, 100) }}
              className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-lavenderaccent/20 blur-3xl" 
            />
          </div>

          <div className="relative z-10 text-center max-w-[100rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-4"
            >
              <span className="font-heading italic text-2xl md:text-3xl text-secondary">the</span>
            </motion.div>

            <h1 className="font-heading text-[12vw] leading-[0.85] font-black text-primary tracking-tighter uppercase mb-8">
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
                Harvest
              </motion.span>
            </h1>

            {/* Floating Badge - Parallax */}
            <motion.div
              style={{ y: useParallax(scrollYProgress, -50) }}
              className="absolute top-[5%] left-[5%] md:top-[15%] md:left-[10%] z-20 hidden md:block"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-lavenderaccent flex items-center justify-center p-4 text-center rotate-12 shadow-lg hover:scale-110 transition-transform duration-500 cursor-pointer group">
                <p className="font-heading text-primary font-bold text-sm md:text-base leading-tight group-hover:-rotate-12 transition-transform duration-500">
                  Natures<br/>Choice<br/><span className="font-paragraph font-normal text-xs">Parent Co.</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-col items-center gap-4 mt-12"
            >
              <div className="h-16 w-px bg-primary/20 mb-4" />
              <p className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-md mx-auto leading-relaxed">
                Cultivating excellence. Delivering nature's finest to industry partners worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- COLLAGE GRID SECTION: Inspiration Image Layout --- */}
        <section className="w-full py-24 bg-background relative">
          <div className="max-w-[120rem] mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12 items-start">
              
              {/* Block 1: Brown Box (Left) */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="md:col-span-5 lg:col-span-4 aspect-square bg-secondary relative flex items-center justify-center p-12 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="relative z-10 bg-background p-4 shadow-2xl transform group-hover:scale-105 transition-transform duration-700 w-3/5 aspect-[3/4]">
                   <Image
                    src="https://static.wixstatic.com/media/e51c33_f110f8dd5ba3462284c259c28f46d0e8~mv2.png?originWidth=576&originHeight=576"
                    alt="Premium Product Detail"
                    className="w-full h-full object-cover"
                    width={400}
                  />
                </div>
              </motion.div>

              {/* Block 2: Vertical Image (Middle) - Parallax Effect */}
              <div className="md:col-span-3 lg:col-span-3 relative h-[60vh] md:h-auto md:aspect-[9/16] mt-12 md:mt-24 overflow-hidden">
                <motion.div 
                  style={{ y: useParallax(scrollYProgress, 40) }}
                  className="w-full h-[120%] relative -top-[10%]"
                >
                  <Image
                    src="https://static.wixstatic.com/media/e51c33_6cc21678eb7e430abe9efa4246a5355e~mv2.png?originWidth=576&originHeight=576"
                    alt="Organic Texture"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    width={600}
                  />
                </motion.div>
              </div>

              {/* Block 3: Content & Lavender Box (Right) */}
              <div className="md:col-span-4 lg:col-span-5 flex flex-col justify-between h-full gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                    EXCITING NEW <br/>
                    <span className="italic font-light">Possibilities</span> <br/>
                    ON THE HORIZON
                  </h2>
                  <Link to="/shop" className="group inline-flex items-center gap-2 text-lg font-medium text-secondary hover:text-primary transition-colors">
                    Don't Miss Out 
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-lavenderaccent w-full aspect-square md:aspect-[4/3] relative overflow-hidden group"
                >
                   <Image
                    src="https://static.wixstatic.com/media/e51c33_26b525a8ae6d47d38cd9cb18fb9ea530~mv2.png?originWidth=576&originHeight=576"
                    alt="Quality Assurance"
                    className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-1000"
                    width={600}
                  />
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="font-heading text-primary font-bold text-xl">Quality First</p>
                  </div>
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
                    This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It's an opportunity to tell the story behind the business or describe a special service or product it offers.
                  </p>
                  <p>
                    You can use this section to share the company's history or highlight a particular feature that sets it apart from competitors.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="mb-6">
                    Let the writing speak for itself. Keep a consistent tone and voice throughout the website to stay true to the brand image and give visitors a taste of the company's values and personality.
                  </p>
                  <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors mt-4">
                    Read Our Story
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FEATURED PRODUCTS: Horizontal Scroll / Carousel --- */}
        <section className="w-full py-32 bg-primary text-primary-foreground overflow-hidden">
          <div className="max-w-[120rem] mx-auto px-4 md:px-8 lg:px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Wholesale Collection</h2>
              <p className="text-primary-foreground/70 max-w-xl">Curated selections for our industry partners. Bulk availability guaranteed.</p>
            </div>
            <Link to="/shop" className="px-8 py-4 border border-primary-foreground/30 rounded-full hover:bg-primary-foreground hover:text-primary transition-all duration-300">
              View Full Catalog
            </Link>
          </div>

          <div className="w-full overflow-x-auto pb-12 px-4 md:px-8 lg:px-12 scrollbar-hide">
            <div className="flex gap-8 min-w-max">
              {isLoadingProducts ? (
                // Loading Skeletons
                Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="w-[350px] md:w-[450px] h-[500px] bg-primary-foreground/10 animate-pulse rounded-lg" />
                ))
              ) : featuredProducts.length > 0 ? (
                featuredProducts.map((product, index) => (
                  <motion.div
                    key={product._id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="w-[350px] md:w-[450px] group relative"
                  >
                    <Link to={`/shop/${product._id}`} className="block h-full">
                      <div className="aspect-[4/5] overflow-hidden bg-background rounded-sm mb-6 relative">
                        <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        <Image
                          src={product.productImage || 'https://static.wixstatic.com/media/e51c33_73b008bd23e846b8b501274ce6a2ea5b~mv2.png?originWidth=448&originHeight=448'}
                          alt={product.productName || 'Product'}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          width={500}
                        />
                        <div className="absolute bottom-4 right-4 z-20 bg-white text-primary p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <ArrowRight size={20} />
                        </div>
                      </div>
                      <h3 className="font-heading text-2xl font-bold mb-2 group-hover:text-lavenderaccent transition-colors">{product.productName}</h3>
                      <p className="text-primary-foreground/60 line-clamp-2">{product.description}</p>
                    </Link>
                  </motion.div>
                ))
              ) : (
                <div className="w-full text-center py-12 text-primary-foreground/50">No products currently available.</div>
              )}
            </div>
          </div>
        </section>

        {/* --- ACTIVITIES SECTION: Sticky Layout --- */}
        <section className="w-full py-32 bg-background">
          <div className="max-w-[120rem] mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Sticky Header */}
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-lavenderaccent flex items-center justify-center">
                      <Globe className="text-primary w-6 h-6" />
                    </div>
                    <span className="font-heading text-xl text-secondary">Company News</span>
                  </div>
                  <h2 className="font-heading text-5xl font-bold text-primary mb-8">Recent <br/>Activities</h2>
                  <p className="text-foreground/70 mb-8 max-w-sm">
                    Staying connected with our community and the environment. See what we've been up to lately.
                  </p>
                  {!isLoadingActivities && recentActivities.length > 0 && (
                    <Link to="/about" className="hidden lg:inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                      View All News <ArrowRight size={18} />
                    </Link>
                  )}
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="lg:col-span-8 flex flex-col gap-16">
                {isLoadingActivities ? (
                  <div className="space-y-8">
                    <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
                    <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
                  </div>
                ) : recentActivities.length > 0 ? (
                  recentActivities.map((activity, index) => (
                    <motion.div
                      key={activity._id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-primary/10 pb-16 last:border-0"
                    >
                      <div className="aspect-video md:aspect-square overflow-hidden rounded-lg bg-secondary/5">
                        {activity.activityImage ? (
                          <Image
                            src={activity.activityImage}
                            alt={activity.activityTitle || 'Activity'}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            width={600}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-primary/20">
                            <Sprout size={48} />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-sm font-bold text-secondary uppercase tracking-wider">
                            {activity.activityDate ? new Date(activity.activityDate).toLocaleDateString() : 'Update'}
                          </span>
                          {activity.activityType && (
                            <span className="px-3 py-1 rounded-full bg-lavenderaccent/30 text-primary text-xs font-bold">
                              {activity.activityType}
                            </span>
                          )}
                        </div>
                        <h3 className="font-heading text-3xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                          {activity.activityTitle}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed mb-6">
                          {activity.description}
                        </p>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="py-12 text-center text-foreground/50">No recent activities found.</div>
                )}
              </div>
            </div>
          </div>
        </section>

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