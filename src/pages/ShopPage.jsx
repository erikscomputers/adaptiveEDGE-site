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

// 👇 import shared product data
import { products } from '@/data/products';

const ShopPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>AdaptivEdge Shop</title>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-transparent">
        <Header />

        <section className="py-6 md:py-10 border-b border-border/50 text-center">
          <h1 className="text-4xl font-bold mb-4">AdaptivEdge Shop</h1>
          <p className="text-muted-foreground">
            Explore tools to improve clarity, adaptability, and performance.
          </p>
        </section>

        <section className="section-padding">
          <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card-minimal p-6 flex flex-col h-full">
                  <div className="flex justify-between mb-4">
                    <product.icon className="h-5 w-5 text-secondary" />
                    <Badge variant="outline">{product.category}</Badge>
                  </div>

                  <h3 className="font-semibold mb-2">{product.title}</h3>

                  <p className="text-sm text-muted-foreground mb-6 flex-1">
                    {product.description}
                  </p>

                  <Button onClick={() => navigate(`/product/${product.id}`)}>
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default ShopPage;