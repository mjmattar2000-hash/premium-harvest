import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Package, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { BaseCrudService } from '@/integrations';
import { WholesaleProducts } from '@/entities';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<WholesaleProducts | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadProduct();
    }
  }, [id]);

  const loadProduct = async () => {
    setIsLoading(true);
    try {
      const data = await BaseCrudService.getById<WholesaleProducts>('wholesaleproducts', id!);
      setProduct(data);
    } catch (error) {
      console.error('Error loading product:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="w-full bg-background py-12 min-h-[600px]">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          {isLoading ? (
            <div className="flex items-center justify-center py-32">
              <LoadingSpinner />
            </div>
          ) : !product ? (
            <div className="text-center py-32">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Package size={40} className="text-primary" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-primary mb-4">Product Not Found</h2>
              <p className="font-paragraph text-base text-foreground mb-8">
                The product you're looking for doesn't exist or has been removed.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-secondary text-secondary font-paragraph text-base rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <ArrowLeft size={18} />
                Back to Shop
              </Link>
            </div>
          ) : (
            <>
              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-paragraph text-base"
                >
                  <ArrowLeft size={18} />
                  Back to Products
                </Link>
              </motion.div>

              {/* Product Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
                {/* Product Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="aspect-square rounded-lg overflow-hidden bg-background border-2 border-primary/10">
                    <Image
                      src={product.productImage || 'https://static.wixstatic.com/media/e51c33_efb7dbed4a9345858b82ace2453655c6~mv2.png?originWidth=640&originHeight=640'}
                      alt={product.productName || 'Product'}
                      className="w-full h-full object-cover"
                      width={700}
                    />
                  </div>
                </motion.div>

                {/* Product Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col"
                >
                  {product.category && (
                    <span className="inline-block w-fit px-4 py-1.5 bg-lavenderaccent/30 text-primary font-paragraph text-sm rounded-full mb-4">
                      {product.category}
                    </span>
                  )}
                  
                  <h1 className="font-heading text-5xl lg:text-6xl font-bold text-primary mb-6">
                    {product.productName}
                  </h1>

                  {product.sku && (
                    <p className="font-paragraph text-base text-foreground/60 mb-6">
                      SKU: {product.sku}
                    </p>
                  )}

                  {product.description && (
                    <div className="mb-8">
                      <h2 className="font-heading text-2xl font-bold text-primary mb-4">Description</h2>
                      <p className="font-paragraph text-lg text-foreground leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  )}

                  {product.bulkPackagingInfo && (
                    <div className="mb-8 p-6 bg-lavenderaccent/20 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Package size={24} className="text-primary" />
                        <h3 className="font-heading text-xl font-bold text-primary">Bulk Packaging</h3>
                      </div>
                      <p className="font-paragraph text-base text-foreground leading-relaxed">
                        {product.bulkPackagingInfo}
                      </p>
                    </div>
                  )}

                  <div className="mt-auto pt-8">
                    <div className="bg-primary/5 p-6 rounded-lg mb-6">
                      <p className="font-paragraph text-base text-foreground mb-4">
                        This product is available for wholesale orders only. Contact us for pricing and minimum order quantities.
                      </p>
                    </div>
                    
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-secondary text-secondary-foreground font-paragraph text-base rounded-full hover:bg-secondary/90 transition-all"
                    >
                      <FileText size={18} />
                      Request Quote
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Additional Info Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-background border-2 border-primary/10 rounded-lg p-8 lg:p-12"
              >
                <h2 className="font-heading text-3xl font-bold text-primary mb-8">Wholesale Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-3">Quality Assurance</h3>
                    <p className="font-paragraph text-base text-foreground leading-relaxed">
                      All products undergo rigorous quality control to ensure they meet our premium standards.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-3">Flexible Orders</h3>
                    <p className="font-paragraph text-base text-foreground leading-relaxed">
                      We offer customizable bulk packaging options to suit your specific business requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-3">Reliable Supply</h3>
                    <p className="font-paragraph text-base text-foreground leading-relaxed">
                      Consistent availability and timely delivery to keep your operations running smoothly.
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
