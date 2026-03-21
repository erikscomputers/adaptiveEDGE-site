import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Download, BookOpen, FileText, Briefcase, ShieldAlert, Users, Plane, Target } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ShopPage = () => {
  const products = [
    {
      id: 1,
      title: 'The Adaptability Playbook',
      description: 'Core frameworks for recognizing changing conditions and adjusting plans effectively in real-time.',
      category: 'Guide',
      price: 9.87,
      icon: BookOpen,
    },
    {
      id: 2,
      title: 'Executive Resilience Handbook',
      description: 'Advanced strategies for leaders to maintain clarity and performance under extreme pressure.',
      category: 'Handbook',
      price: 19.87,
      icon: Briefcase,
    },
    {
      id: 3,
      title: 'Decision-Making in Uncertainty',
      description: 'A structured approach to minimizing errors and increasing confidence in high-stakes situations.',
      category: 'Guide',
      price: 14.87,
      icon: Target,
    },
    {
      id: 4,
      title: 'Remote Work Optimization Manual',
      description: 'Systems and practices for distributed teams to maintain peak productivity and communication.',
      category: 'Manual',
      price: 24.87,
      icon: FileText,
    },
    {
      id: 5,
      title: 'Crisis Response Framework',
      description: 'Step-by-step protocols for stabilizing operations and recovering quickly from unexpected disruptions.',
      category: 'Guide',
      price: 12.87,
      icon: ShieldAlert,
    },
    {
      id: 6,
      title: 'Team Resilience Workbook',
      description: 'Interactive exercises to build collective problem-solving capabilities and psychological safety.',
      category: 'Workbook',
      price: 29.87,
      icon: Users,
    },
    {
      id: 7,
      title: 'Travel Performance Strategies',
      description: 'Tactics for maintaining energy, focus, and routine while working across multiple time zones.',
      category: 'Guide',
      price: 11.87,
      icon: Plane,
    },
    {
      id: 8,
      title: 'Scenario Planning Toolkit',
      description: 'Templates and methodologies for anticipating future challenges and preparing strategic responses.',
      category: 'Toolkit',
      price: 34.87,
      icon: Target,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Shop Digital Resources | AdaptiVantage</title>
        <meta name="description" content="Explore our collection of digital guides, handbooks, and toolkits designed to build operational resilience and strategic adaptability." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-transparent">
        <Header />

        {/* Hero Section */}
        <section className="section-padding bg-card/20 backdrop-blur-sm border-b border-border/50">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                Digital <span className="text-secondary">Resources</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Practical frameworks, actionable guides, and comprehensive toolkits to help you think clearly and perform confidently.
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
                      <Badge variant="outline" className="bg-transparent border-border text-muted-foreground text-xs font-medium rounded-md">
                        {product.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold leading-snug text-foreground mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground flex-1 mb-6">
                      {product.description}
                    </p>
                    <div className="mt-auto pt-6 border-t border-border flex flex-col gap-4">
                      <div className="flex justify-between items-center w-full">
                        <span className="text-sm font-medium text-muted-foreground">Price</span>
                        <span className="text-xl font-bold text-foreground" style={{ fontVariantNumeric: 'tabular-nums' }}>
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                      <Button 
                        className="w-full button-primary group/btn"
                      >
                        <Download className="mr-2 h-4 w-4 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                        Purchase
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ShopPage;