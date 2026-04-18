import { motion } from 'framer-motion';
import { MapPin, Building2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function FactoryLocationsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-primary py-20 lg:py-28">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl flex items-center gap-4"
          >
            <Building2 size={48} className="text-primary-foreground" />
            <div>
              <h1 className="font-heading text-6xl lg:text-7xl font-bold text-primary-foreground mb-4">
                Our Factory Locations
              </h1>
              <p className="font-paragraph text-xl text-primary-foreground/90 leading-relaxed">
                Premium Harvest operates multiple state-of-the-art facilities across India to ensure quality and efficiency.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Factory Locations Section */}
      <section className="w-full bg-background py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="space-y-12">
            {/* Imported & Marketed By */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border-l-4 border-primary rounded-lg p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl font-bold text-primary mb-2">Imported & Marketed By</h2>
                  <p className="font-paragraph text-base text-foreground/70">Headquarters</p>
                </div>
              </div>
              <div className="space-y-3 ml-16">
                <p className="font-paragraph text-lg text-foreground font-semibold">Premium Harvest Limited</p>
                <div className="font-paragraph text-base text-foreground space-y-1">
                  <p>Office no. 1A, First Floor, Shivji Market,</p>
                  <p>Co-Operative Society Premises Ltd,</p>
                  <p>Sector-19D, Plot No. 8 & 9</p>
                  <p>Vashi - 400703, Navi Mumbai, Maharashtra. India.</p>
                </div>
                <p className="font-paragraph text-sm text-foreground/70 mt-4">
                  <span className="font-semibold">ISSAT License No.:</span> 10017022006763
                </p>
              </div>
            </motion.div>

            {/* Packed By - PNM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border-l-4 border-secondary rounded-lg p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 size={24} className="text-secondary" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl font-bold text-primary mb-2">Packed By - PNM</h2>
                  <p className="font-paragraph text-base text-foreground/70">Navi Mumbai Facility</p>
                </div>
              </div>
              <div className="space-y-3 ml-16">
                <p className="font-paragraph text-lg text-foreground font-semibold">Premium Harvest Limited</p>
                <div className="font-paragraph text-base text-foreground space-y-1">
                  <p>Plot No. 4A, Sector 19F,</p>
                  <p>Vashi - 400703, Navi Mumbai, Maharashtra. India</p>
                </div>
                <p className="font-paragraph text-sm text-foreground/70 mt-4">
                  <span className="font-semibold">ISSAT License No.:</span> 11523015000129
                </p>
              </div>
            </motion.div>

            {/* Packed By - BRH */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border-l-4 border-lavenderaccent rounded-lg p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-lavenderaccent/30 flex items-center justify-center flex-shrink-0">
                  <Building2 size={24} className="text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl font-bold text-primary mb-2">Packed By - BRH</h2>
                  <p className="font-paragraph text-base text-foreground/70">Haryana Facility</p>
                </div>
              </div>
              <div className="space-y-3 ml-16">
                <p className="font-paragraph text-lg text-foreground font-semibold">Premium Harvest Limited</p>
                <div className="font-paragraph text-base text-foreground space-y-1">
                  <p>Plot No. 533, HSIIDC Industrial Estate,</p>
                  <p>Phase II, Barhi, Dist. Sonipat,</p>
                  <p>Haryana - 131101. India</p>
                </div>
                <p className="font-paragraph text-sm text-foreground/70 mt-4">
                  <span className="font-semibold">ISSAT License No.:</span> 10820020000113
                </p>
              </div>
            </motion.div>

            {/* Note Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-lavenderaccent/10 border-2 border-lavenderaccent/30 rounded-lg p-8"
            >
              <p className="font-paragraph text-base text-foreground">
                <span className="font-semibold text-primary">Note:</span> To identify the facility, read the first three letters of the Batch Number on the product packaging.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary/5 py-20">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-4xl font-bold text-primary mb-6">
              Need More Information?
            </h2>
            <p className="font-paragraph text-lg text-foreground leading-relaxed mb-8">
              Contact our team for facility tours, partnership opportunities, or any questions about our operations.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              className="px-8 py-6 bg-secondary text-secondary-foreground font-paragraph text-base rounded-full hover:bg-secondary/90 transition-all"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
