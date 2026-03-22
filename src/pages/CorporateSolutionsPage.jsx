import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Users, Compass, Plane, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

const CorporateSolutionsPage = () => {
  const services = [
    {
      id: 'resilience',
      icon: Shield,
      title: 'Adaptive Operational Resilience Training',
      description: 'Build teams that stay effective when conditions change. We train your people to adapt quickly, execute under pressure, and maintain momentum through disruption. Using structured scenarios and proven mental frameworks, your team learns to operate with clarity and control in high-stakes environments.',
    },
    {
      id: 'hiring',
      icon: Users,
      title: 'Adaptive Hiring Strategy Consulting',
      description: 'Hire for adaptability. Scale for performance. We design hiring and development systems that identify and grow individuals who think clearly, adjust fast, and execute consistently. Your organization gains a workforce built to perform in uncertainty — not just stability.',
    },
    {
      id: 'workshops',
      icon: Compass,
      title: 'Adaptive Scenario-Based Workshops',
      description: 'Pressure-test your team before it matters. Through immersive, scenario-driven exercises, your teams face real-world challenges in controlled environments. The result: faster decisions, stronger alignment, and the confidence to execute when it counts.',
    },
    {
      id: 'remote',
      icon: Plane,
      title: 'Adaptive Travel & Remote Work Optimization',
      description: 'Operate effectively — anywhere. We build systems that allow teams to adapt across time zones, environments, and constraints without losing execution speed. From communication protocols to workflow design, your team stays aligned and productive wherever work happens.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Corporate Solutions | AdaptivEdge</title>
        <meta name="description" content="Programs designed to help professionals and organizations adapt quickly, execute decisively, and lead with an edge—building resilient teams, optimized systems, and a culture of strategic adaptability." />
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
                Corporate <span className="text-secondary">Solutions</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Comprehensive programs designed to strengthen organizational resilience, optimize distributed teams, and build a culture of strategic adaptability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid Layout */}
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-minimal p-8 flex flex-col h-full group"
                >
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary">
                      <service.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground mb-8 flex-1">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <Button 
                      asChild 
                      variant="ghost"
                      className="px-0 text-accent hover:text-accent/80 hover:bg-transparent group-hover:translate-x-1 transition-all duration-300"
                    >
                      <Link to="/contact">
                        Inquire About This Program
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-card/20 backdrop-blur-sm border-t border-border/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-foreground">
                Ready to build resilience and execute with an edge?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you’re a professional or an organization, let’s discuss how our programs can be tailored to your unique challenges and help you adapt, perform, and lead.
              </p>
              <Button 
                asChild 
                className="button-primary px-8 py-6 text-base"
              >
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CorporateSolutionsPage;