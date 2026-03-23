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

        {/* Content Section ONLY */}
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="card-minimal p-8 md:p-10">

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.title}
                </h1>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-10">
                  {product.description}
                </p>

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

                  <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                    <Button
                      variant="ghost"
                      onClick={() => navigate(-1)}
                      className="w-full md:w-auto"
                    >
                      ← Back to Shop
                    </Button>

                    <Button className="button-primary w-full md:w-auto">
                      Purchase
                    </Button>
                  </div>
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