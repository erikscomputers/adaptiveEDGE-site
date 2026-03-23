import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BackToTop from '@/components/BackToTop.jsx';
import { Button } from '@/components/ui/button';

import { products } from '@/data/products';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Product not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.title} | AdaptivEdge</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-transparent">
        <Header />

        {/* Hero Section - same height as ShopPage */}
        <section className="min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center bg-card/20 backdrop-blur-sm border-b border-border/50">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                {product.title}
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="mt-8"
              >
                ← Back to Shop
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="card-minimal p-8 md:p-10">

                {/* Optional additional description */}
                <div className="mb-10">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    What You’ll Learn
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This resource is designed to give you structured frameworks,
                    practical tools, and repeatable systems you can immediately
                    apply to improve decision-making, adaptability, and
                    performance in dynamic environments.
                  </p>
                </div>

                {/* Price + CTA */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Price</p>
                    <p
                      className="text-3xl font-bold text-foreground"
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      ${product.price.toFixed(2)}
                    </p>
                  </div>

                  <Button className="button-primary w-full md:w-auto">
                    Purchase
                  </Button>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default ProductPage;