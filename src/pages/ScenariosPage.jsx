import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BackToTop from '@/components/BackToTop.jsx';
import { Button } from '@/components/ui/button';

const ScenariosPage = () => {
  const scenarios = [
    {
      title: 'Client is frustrated and watching your every move'
    },
    {
      title: 'System failure with no clear cause'
    },
    {
      title: 'You’re behind schedule in an unfamiliar environment'
    }
  ];

  const categories = [
    'All',
    'Pressure',
    'Technical',
    'People',
    'Uncertainty',
    'Time-Critical'
  ];

  return (
    <>
      <Helmet>
        <title>Scenarios | AdaptivEdge</title>
        <meta
          name="description"
          content="Train on real situations before you face them in real life."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-transparent">
        <Header />

        {/* HERO */}
        <section className="py-6 md:py-10 bg-card/20 backdrop-blur-sm border-b border-border/50">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                <span className="text-secondary">Scenarios</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Train on real situations before you face them in real life.
              </p>

              <Button asChild className="button-secondary px-6 rounded-full">
                <Link to="/training-module">Start Training</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FILTER BAR */}
        <section className="py-6 bg-transparent">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:bg-accent hover:text-white transition"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* SCENARIO GRID */}
        <section className="section-padding bg-transparent">
          <div className="container-custom grid md:grid-cols-3 gap-8">
            {scenarios.map((scenario, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-minimal p-6 flex flex-col justify-between"
              >
                <p className="text-lg text-foreground mb-6">
                  {scenario.title}
                </p>

                <Button asChild className="button-secondary px-5 rounded-full">
                  <Link to="/training-module">Start Scenario</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FEATURED SCENARIO */}
        <section className="section-padding bg-card/40 backdrop-blur-sm border-y border-border/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-minimal p-10 text-center"
            >
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Scenario of the Week
              </h2>

              <p className="text-muted-foreground mb-6">
                A featured scenario to test your thinking under pressure.
              </p>

              <Button asChild className="button-secondary px-6 rounded-full">
                <Link to="/training-module">Start Scenario</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* HOW TO USE */}
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                How to use
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                Don’t overthink it.
              </p>

              <div className="space-y-2 text-lg text-muted-foreground">
                <p>- read the situation</p>
                <p>- make your decision</p>
                <p>- compare your thinking</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-transparent">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Enter Full Training System
              </h2>

              <Button asChild className="button-secondary px-8 py-6 rounded-full">
                <Link to="/training-module">Enter Training</Link>
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

export default ScenariosPage;