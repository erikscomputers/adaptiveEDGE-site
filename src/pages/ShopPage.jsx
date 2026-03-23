import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Briefcase, ShieldAlert, Users, Plane, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BackToTop from '@/components/BackToTop.jsx';

// ✅ use shared data
import { products } from '@/data/products';

const ShopPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>AdaptivEdge Shop</title>
        <meta
          name="description"
          content="Explore our collection of digital guides, handbooks, and toolkits designed to build operational resilience and strategic adaptability."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-transparent">
        <Header />

        {/* Hero Section */}
        <section className="py-6 md:py-10 bg-card/20 backdrop-blur-sm border-b border-border/50">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                AdaptivEdge <span className="text-secondary">Shop</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Practical frameworks, guides, courses, workshops, merch, and toolkits designed to help you build clarity, move with intent, and perform at a higher level.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product Grid Section */}
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="card-minimal p-6 h-full flex flex-col group">
                    <div className="flex justify-between items-start mb-6">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted text-secondary group-hover:bg-secondary/10 transition-colors duration-300">
                        <product.icon className="h-5 w-5" />
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-transparent border-border text-muted-foreground text-xs font-medium rounded-md"
                      >
                        {product.category}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-semibold leading-snug text-foreground mb-2">
                      {product.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground flex-1 mb-6">
                      {product.description}
                    </p>

                    {/* ✅ UPDATED SECTION (price removed, button changed) */}
                    <div className="mt-auto pt-6 border-t border-border">
                      <Button
                        className="w-full button-primary group/btn"
                        onClick={() => navigate(`/product/${product.id}`)}
                      >
                        Learn More
                      </Button>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default ShopPage;