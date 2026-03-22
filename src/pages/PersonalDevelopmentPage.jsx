import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Target, Wrench, Briefcase, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import BackToTop from '@/components/BackToTop.jsx';

const PersonalDevelopmentPage = () => {
  const services = [
    {
      id: 'coaching',
      icon: User,
      title: 'Coaching',
      description: 'One-on-one coaching for individuals focused on clear thinking, confident decision-making, and strategic adaptability in high-stakes environments. Identify blind spots and build mental models for leading under pressure.',
    },
    {
      id: 'training',
      icon: Target,
      title: 'Adaptability & Resilience Training',
      description: 'Develop the skills to navigate uncertainty, manage stress, and maintain peak performance during change. Learn to anticipate shifting conditions and pivot decisively without losing momentum.',
    },
    {
      id: 'troubleshooting',
      icon: Wrench,
      title: 'Troubleshooting Frameworks',
      description: 'Master structured approaches to diagnose problems, identify root causes, and implement effective solutions in complex systems. Move beyond reactive firefighting into confident, systematic problem-solving.',
    },
    {
      id: 'performance',
      icon: Briefcase,
      title: 'Strategies for Traveling Professionals',
      description: 'Personalized coaching on maintaining peak performance, managing energy, and building sustainable routines—whether you’re working across multiple locations, time zones, or unfamiliar environments. Optimize your personal operating system for modern professional demands.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Personal Development | AdaptivEdge</title>
        <meta name="description" content="Individual coaching and training programs for professionals committed to continuous growth, clear thinking, and strategic adaptability." />
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
                Personal <span className="text-secondary">Development</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Individual coaching and training programs for adapting quickly, thinking clearly, and leading with an edge.
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
                        Start Your Journey
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
                Elevate your personal performance
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Take the first step toward strategic adaptability, clear decision-making, and high-impact professional growth.
              </p>
              <Button 
                asChild 
                className="button-primary px-8 py-6 text-base"
              >
                <Link to="/contact">Book an Intro Session</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default PersonalDevelopmentPage;