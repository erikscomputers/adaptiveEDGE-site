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
  const { slug } = useParams();
const navigate = useNavigate();

const product = products.find((p) => p.slug === slug);

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
<section className="pt-10 md:pt-14 pb-20 bg-transparent">
  <div className="container-custom">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="card-minimal p-8 md:p-10 text-center">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {product.title}
        </h1>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-10">
          {product.description}
        </p>

        {/* Image (moved BELOW text) */}
        {product.image && (
          <div className="mb-8 flex justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-md rounded-lg shadow-xl ring-1 ring-border/20 object-cover"
            />
          </div>
        )}


                {/* Optional additional description */}
              {product.learnPoints && (
  <div className="mb-10 text-center">
    <h2 className="text-xl font-semibold text-foreground mb-6">
      What You’ll Learn
    </h2>

    <div className="space-y-3 text-left max-w-2xl mx-auto">
      {product.learnPoints.map((point, index) => (
        <p key={index} className="text-muted-foreground flex gap-2">
          <span className="text-green-500">✔</span>
          {point}
        </p>
      ))}
    </div>
  </div>
)}

                {/* Price + CTA */}
                <div className="pt-8 border-t border-border flex flex-col items-center gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Price</p>
                    <p
                      className="text-3xl font-bold text-foreground"
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      ${product.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center">
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