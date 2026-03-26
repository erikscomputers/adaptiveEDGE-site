import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Compass, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BackToTop from '@/components/BackToTop.jsx';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const philosophyPoints = [
    {
      icon: Target,
      title: 'Clarity',
      description: 'Think clearly under pressure and cut through noise to make better decisions.'
    },
    {
      icon: Compass,
      title: 'Strategic Action',
      description: 'Turn understanding into deliberate, effective action that produces results.'
    },
    {
      icon: Users,
      title: 'Adaptability',
      description: 'Adjust quickly in unfamiliar situations and stay effective as conditions change.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About AdaptivEdge</title>
        <meta
          name="description"
          content="Built from real-world field experience. AdaptivEdge helps you think clearly, act effectively, and handle uncertainty."
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
                <span className="text-secondary">About</span> AdaptivEdge
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Built from real-world field experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* First Section */}
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-muted-foreground"
            >
              <p>I’m a traveling field technician.</p>

              <p>
                I work in unfamiliar environments, under time pressure,
                solving real problems with real consequences.
              </p>

              <p>
                Over time, that shaped how I think, adapt, and make decisions.
              </p>

              <p>AdaptivEdge comes from that experience.</p>
            </motion.div>
          </div>
        </section>

        {/* Second Section */}
        <section className="section-padding bg-card/40 backdrop-blur-sm border-y border-border/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold leading-tight mb-6 text-foreground">
                What this is
              </h2>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                This is not theory.
              </p>

              <div className="space-y-2 text-lg text-muted-foreground">
                <p>- real situations</p>
                <p>- real pressure</p>
                <p>- real outcomes</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold leading-tight mb-6 text-foreground">
                Mission
              </h2>

              <div className="space-y-2 text-lg text-muted-foreground">
                <p>- think clearly</p>
                <p>- act effectively</p>
                <p>- handle uncertainty</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="section-padding bg-card/40 backdrop-blur-sm border-y border-border/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold leading-tight mb-4 text-foreground">
                Principles
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {philosophyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-minimal p-8"
                >
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary">
                      <point.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold leading-tight mb-6 text-foreground">
                New here?
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button asChild className="button-secondary px-6 rounded-full">
                  <Link to="/scenarios">Try a Scenario</Link>
                </Button>

                <Button asChild className="button-secondary px-6 rounded-full">
                  <Link to="/guides">Explore Field Guides</Link>
                </Button>

                <Button asChild className="button-secondary px-6 rounded-full">
                  <Link to="/training">Enter Training</Link>
                </Button>
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

export default AboutPage;