import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { WholesaleProducts } from '@/entities';

export default function ShopPage() {
  const [products, setProducts] = useState<WholesaleProducts[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasNext, setHasNext] = useState(false);
  const [skip, setSkip] = useState(0);
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const limit = 12;

  useEffect(() => {
    loadProducts();
  }, [skip]);

  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<WholesaleProducts>('wholesaleproducts', {}, { limit, skip });
      if (skip === 0) {
        setProducts(result.items);
      } else {
        setProducts(prev => [...prev, ...result.items]);
      }
      setHasNext(result.hasNext);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    setSkip(prev => prev + limit);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-primary py-20 lg:py-28">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12 max-w-4xl">
          <h1 className="font-heading text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            Our Range
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-paragraph text-xl text-primary-foreground/90 leading-relaxed">
              Explore our complete range of premium wholesale products from the Natures Choice brand. All items are available for bulk orders with flexible packaging options.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="w-full bg-background py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 min-h-[600px]">
            {products.length > 0 ? (
              products.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link
                    to={`/shop/${product._id}`}
                    className="block bg-background border-2 border-primary/10 rounded-lg overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all"
                    onMouseEnter={() => setHoveredProductId(product._id)}
                    onMouseLeave={() => setHoveredProductId(null)}
                  >
                    <div className="aspect-square overflow-hidden bg-background relative">
                      <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: hoveredProductId === product._id ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={product.productImage || 'https://static.wixstatic.com/media/e51c33_600d215b974e4b809b2ca65bb8c4349d~mv2.png?originWidth=384&originHeight=384'}
                          alt={product.productName || 'Product'}
                          className="w-full h-full object-cover"
                          width={400}
                        />
                      </motion.div>
                      
                      {product.productImage1 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredProductId === product._id ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={product.productImage1}
                            alt={`${product.productName || 'Product'} - Actual Product`}
                            className="w-full h-full object-cover"
                            width={400}
                          />
                        </motion.div>
                      )}
                    </div>
                    <div className="p-6">
                      {product.category && (
                        <span className="inline-block px-3 py-1 bg-lavenderaccent/30 text-primary font-paragraph text-xs rounded-full mb-3">
                          {product.category}
                        </span>
                      )}
                      <h3 className="font-heading text-xl font-bold text-primary mb-2">
                        {product.productName}
                      </h3>
                      {product.sku && (
                        <p className="font-paragraph text-sm text-foreground/60 mb-2">
                          SKU: {product.sku}
                        </p>
                      )}
                      <p className="font-paragraph text-sm text-foreground line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Package size={40} className="text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-3">No Products Available</h3>
                <p className="font-paragraph text-base text-foreground">
                  Please check back later for our wholesale product offerings.
                </p>
              </div>
            )}
          </div>

          {/* Load More Button */}
          {hasNext && !isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-12"
            >
              <button
                onClick={handleLoadMore}
                className="px-8 py-3.5 border-2 border-secondary text-secondary font-paragraph text-base rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                Load More Products
              </button>
            </motion.div>
          )}

          {isLoading && skip > 0 && (
            <div className="text-center mt-12">
              <div className="inline-block w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full bg-lavenderaccent/20 py-20">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl font-bold text-primary mb-6">
                Wholesale Ordering Information
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed mb-6">
                All products are available for bulk wholesale orders. We offer flexible packaging options and competitive pricing for industry partners.
              </p>
              <p className="font-paragraph text-lg text-foreground leading-relaxed mb-6">
                For detailed pricing, minimum order quantities, and custom packaging solutions, please contact our sales team directly.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3.5 border-2 border-secondary text-secondary font-paragraph text-base rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                Request Quote
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background p-8 rounded-lg border-2 border-primary/10"
            >
              <h3 className="font-heading text-2xl font-bold text-primary mb-6">Why Choose Natures Choice?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="font-paragraph text-base text-foreground">
                    Premium quality products sourced from trusted suppliers
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="font-paragraph text-base text-foreground">
                    Flexible bulk packaging options for your business needs
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="font-paragraph text-base text-foreground">
                    Reliable supply chain and consistent product availability
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="font-paragraph text-base text-foreground">
                    Dedicated support team for wholesale partners
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
