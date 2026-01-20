import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { CompanyActivities } from '@/entities';

export default function AboutPage() {
  const [activities, setActivities] = useState<CompanyActivities[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<CompanyActivities>('companyactivities');
      setActivities(result.items);
    } catch (error) {
      console.error('Error loading activities:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-primary py-24 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="font-heading text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
              About Premium Harvest
            </h1>
            <p className="font-paragraph text-xl text-primary-foreground/90 leading-relaxed">
              We are the parent company of Natures Choice, dedicated to delivering premium wholesale products to industry partners worldwide. Our commitment to quality and sustainability drives everything we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="w-full bg-background py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed mb-6">
                At Premium Harvest, we believe in providing exceptional wholesale products that meet the highest standards of quality and sustainability. Our Natures Choice brand represents our commitment to natural, premium ingredients sourced responsibly from trusted suppliers.
              </p>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                We work closely with industry partners to understand their needs and deliver solutions that help their businesses thrive. From bulk packaging to custom orders, we're here to support your success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/e51c33_390a167bae4048db9dadd22227dd426e~mv2.png?originWidth=576&originHeight=576"
                  alt="Premium Harvest mission"
                  className="w-full h-full object-cover"
                  width={600}
                />
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-lavenderaccent/20 p-8 rounded-lg"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Award size={28} className="text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Quality First</h3>
              <p className="font-paragraph text-base text-foreground leading-relaxed">
                Every product we offer undergoes rigorous quality control to ensure it meets our exacting standards and exceeds customer expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-secondary/10 p-8 rounded-lg"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Target size={28} className="text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Industry Focus</h3>
              <p className="font-paragraph text-base text-foreground leading-relaxed">
                We understand the unique needs of wholesale buyers and tailor our services to provide reliable, consistent supply chains.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary/10 p-8 rounded-lg"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Heart size={28} className="text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Sustainability</h3>
              <p className="font-paragraph text-base text-foreground leading-relaxed">
                Environmental responsibility is at the core of our operations, from sourcing to packaging and delivery methods.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="w-full bg-lavenderaccent/20 py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/e51c33_c64fa75e788d4176829f50998b3a7c21~mv2.png?originWidth=640&originHeight=512"
                  alt="Premium Harvest story"
                  className="w-full h-full object-cover"
                  width={700}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="font-heading text-4xl font-bold text-primary mb-6">Our Story</h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed mb-6">
                Premium Harvest was founded with a vision to bridge the gap between quality producers and industry buyers. We recognized the need for a reliable wholesale partner that could consistently deliver premium products while maintaining sustainable practices.
              </p>
              <p className="font-paragraph text-lg text-foreground leading-relaxed mb-6">
                Today, our Natures Choice brand is trusted by businesses across the industry for its commitment to natural ingredients and exceptional quality. We continue to grow our product range and strengthen our partnerships, always staying true to our founding principles.
              </p>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                As we look to the future, we remain dedicated to innovation, sustainability, and providing the best possible service to our valued partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Activities Section */}
      <section className="w-full bg-background py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-heading text-5xl font-bold text-primary mb-4">Company Activities</h2>
            <p className="font-paragraph text-lg text-foreground max-w-2xl">
              Stay informed about our latest initiatives, industry participation, and company milestones
            </p>
          </motion.div>

          <div className="space-y-8 min-h-[400px]">
            {isLoading ? null : activities.length > 0 ? (
              activities.map((activity, index) => (
                <motion.div
                  key={activity._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background border-2 border-primary/10 rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {activity.activityImage && (
                      <div className="lg:col-span-1">
                        <div className="aspect-square lg:aspect-auto lg:h-full overflow-hidden">
                          <Image
                            src={activity.activityImage}
                            alt={activity.activityTitle || 'Activity'}
                            className="w-full h-full object-cover"
                            width={400}
                          />
                        </div>
                      </div>
                    )}
                    <div className={`p-8 lg:p-12 ${activity.activityImage ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
                      <div className="flex items-center gap-4 mb-4">
                        {activity.activityType && (
                          <span className="inline-block px-4 py-1.5 bg-lavenderaccent/30 text-primary font-paragraph text-sm rounded-full">
                            {activity.activityType}
                          </span>
                        )}
                        {activity.activityDate && (
                          <span className="font-paragraph text-sm text-foreground/60">
                            {new Date(activity.activityDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading text-3xl font-bold text-primary mb-4">
                        {activity.activityTitle}
                      </h3>
                      <p className="font-paragraph text-lg text-foreground leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="font-paragraph text-base text-foreground">No activities to display at this time.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
