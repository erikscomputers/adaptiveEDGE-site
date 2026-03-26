import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BackToTop from '@/components/BackToTop.jsx';
import { Button } from '@/components/ui/button';

const TrainingPage = () => {
  return (
    <>
      <Helmet>
        <title>Training System | AdaptivEdge</title>
        <meta
          name="description"
          content="Train how to think and act in real situations through interactive scenarios and real-time guidance."
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
                <span className="text-secondary">Training</span> System
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Train how to think and act in real situations.
              </p>

              <p className="text-base text-muted-foreground mb-8">
                Interactive scenarios. Real-time guidance. Field-tested thinking.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="button-secondary px-6 rounded-full">
                  <Link to="/training-module">Enter Training</Link>
                </Button>

                <Button asChild className="button-secondary px-6 rounded-full">
                  <Link to="/scenarios">Try a Scenario</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHAT THIS IS */}
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center space-y-4 text-lg text-muted-foreground"
            >
              <p>This is not a course.</p>
              <p>This is not passive learning.</p>
              <p className="text-foreground font-medium">This is active training.</p>
              <p>
                You don’t just read—you decide, act, and learn how to think under pressure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* HOW TRAINING WORKS */}
        <section className="section-padding bg-card/40 backdrop-blur-sm border-y border-border/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground">
                How training works
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: '1. Enter a Situation',
                  desc: 'Real-world scenarios with uncertainty and pressure'
                },
                {
                  title: '2. Make Decisions',
                  desc: 'Choose what to do with limited information'
                },
                {
                  title: '3. Learn the Thinking',
                  desc: 'See how an experienced operator approaches it'
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-minimal p-8 text-center"
                >
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TRAINING MODES */}
        <section className="section-padding bg-transparent">
          <div className="container-custom grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Scenario Training',
                desc: 'Practice structured decision-making',
                link: '/scenarios',
                cta: 'Start Scenarios'
              },
              {
                title: 'Real-World Mode',
                desc: 'Get guidance for situations you’re actually in',
                link: '/real-world',
                cta: 'Open Real-World Mode'
              }
            ].map((mode, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-minimal p-8"
              >
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {mode.title}
                </h3>
                <p className="text-muted-foreground mb-6">{mode.desc}</p>

                <Button asChild className="button-secondary px-6 rounded-full">
                  <Link to={mode.link}>{mode.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SAMPLE FLOW */}
        <section className="section-padding bg-card/40 backdrop-blur-sm border-y border-border/50">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Sample flow
              </h2>

              <p className="text-lg text-muted-foreground">
                Situation → Decision → Breakdown
              </p>
            </motion.div>
          </div>
        </section>

        {/* WHY THIS WORKS */}
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center space-y-3 text-lg text-muted-foreground"
            >
              <p>- Built from real field experience</p>
              <p>- Focused on action, not theory</p>
              <p>- Trains thinking, not memorization</p>
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
                Start Training
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

export default TrainingPage;