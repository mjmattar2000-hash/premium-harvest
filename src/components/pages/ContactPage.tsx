import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

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
            className="max-w-4xl"
          >
            <h1 className="font-heading text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
              Get in Touch
            </h1>
            <p className="font-paragraph text-xl text-primary-foreground/90 leading-relaxed">
              Ready to partner with Premium Harvest? Contact us for wholesale inquiries, product information, or any questions about our Natures Choice brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="w-full bg-background py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="font-heading text-4xl font-bold text-primary mb-8">Contact Information</h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed mb-12">
                Our team is here to help you with wholesale orders, product inquiries, and partnership opportunities.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">Email</h3>
                    <p className="font-paragraph text-base text-foreground">info@premiumharvest.com</p>
                    <p className="font-paragraph text-base text-foreground">sales@premiumharvest.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">Phone</h3>
                    <p className="font-paragraph text-base text-foreground">+1 (555) 123-4567</p>
                    <p className="font-paragraph text-sm text-foreground/60">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-lavenderaccent/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">Address</h3>
                    <p className="font-paragraph text-base text-foreground">123 Industry Lane</p>
                    <p className="font-paragraph text-base text-foreground">Business District</p>
                    <p className="font-paragraph text-base text-foreground">United States</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-lavenderaccent/20 rounded-lg">
                <h3 className="font-heading text-xl font-bold text-primary mb-3">Business Hours</h3>
                <div className="space-y-2 font-paragraph text-base text-foreground">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-background border-2 border-primary/10 rounded-lg p-8 lg:p-12">
                <h2 className="font-heading text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
                <p className="font-paragraph text-base text-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-primary/10 border-2 border-primary/20 rounded-lg"
                  >
                    <p className="font-paragraph text-base text-primary font-semibold">
                      Thank you for your message! We'll be in touch soon.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-paragraph text-sm font-semibold text-primary mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-paragraph text-sm font-semibold text-primary mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block font-paragraph text-sm font-semibold text-primary mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-paragraph text-sm font-semibold text-primary mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-paragraph text-sm font-semibold text-primary mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full min-h-[160px]"
                      placeholder="Tell us about your wholesale needs, product inquiries, or any questions you have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-6 bg-secondary text-secondary-foreground font-paragraph text-base rounded-full hover:bg-secondary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-secondary-foreground/20 border-t-secondary-foreground rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="w-full bg-lavenderaccent/20 py-20">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-4xl font-bold text-primary mb-6">
              Looking for Wholesale Pricing?
            </h2>
            <p className="font-paragraph text-lg text-foreground leading-relaxed mb-8">
              Our sales team is ready to provide detailed pricing information, minimum order quantities, and custom packaging solutions tailored to your business needs. We work with partners of all sizes to deliver the best value and service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sales@premiumharvest.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-secondary text-secondary font-paragraph text-base rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <Mail size={18} />
                Email Sales Team
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-secondary text-secondary-foreground font-paragraph text-base rounded-full hover:bg-secondary/90 transition-all"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
