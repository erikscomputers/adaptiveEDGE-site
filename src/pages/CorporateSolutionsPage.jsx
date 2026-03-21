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
      title: 'Operational Resilience Training',
      description: 'Build organizational capacity to maintain performance under pressure, recover from disruptions, and adapt to changing conditions through structured training programs. We equip your teams with the mental frameworks needed to navigate high-stakes environments without losing operational tempo.',
    },
    {
      id: 'hiring',
      icon: Users,
      title: 'Adaptable Hiring Strategy Consulting',
      description: 'Design recruitment and talent development processes that identify candidates with strong adaptability skills. We help you build teams capable of thriving in dynamic environments by integrating resilience metrics into your core hiring and evaluation frameworks.',
    },
    {
      id: 'workshops',
      icon: Compass,
      title: 'Scenario-Based Team Workshops',
      description: 'Strengthen team decision-making and collaboration through immersive exercises that simulate real-world challenges. Our workshops expose your teams to controlled friction, building practical problem-solving capabilities and psychological safety under stress.',
    },
    {
      id: 'remote',
      icon: Plane,
      title: 'Travel & Remote Work Optimization',
      description: 'Develop systems and practices that enable distributed teams and traveling professionals to maintain productivity, communication, and well-being across locations and time zones. We provide actionable protocols for asynchronous work and operational continuity.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Corporate Solutions | AdaptivEdge</title>
        <meta name="description" content="Comprehensive programs designed to strengthen organizational resilience, adaptable hiring, and team performance in uncertain environments." />
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
                Ready to build a resilient organization?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us to discuss how we can tailor our corporate solutions to your specific operational challenges.
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