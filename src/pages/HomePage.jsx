import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import BackToTop from '@/components/BackToTop.jsx';

const HomePage = () => {
  const navigate = useNavigate();

  const realityPoints = [
    'Most people are trained for predictable situations, clear instructions, and controlled environments.',
    'But real life doesn’t work like that.',
    'Problems show up incomplete.',
    'Information is missing.',
    'Pressure is real.',
    'And hesitation costs you.'
  ];

  const whatWeDoPoints = [
    'Build situational awareness in unfamiliar environments',
    'Make decisions with incomplete information',
    'Solve problems under pressure',
    'Stay calm and controlled when things go sideways'
  ];

  const fieldGuidesPoints = [
    'Step-by-step problem-solving breakdowns',
    'Situational awareness checklists',
    'Decision-making frameworks under pressure',
    'Real-world scenarios and responses',
    'Compact, easy-to-use digital formats'
  ];

  const originPoints = [
    'AdaptivEdge was built from years in the field as a traveling technician.',
    'Walking into unfamiliar environments.',
    'Solving problems under time pressure.',
    'Managing real consequences.',
    'No scripts. No hand-holding. No perfect conditions.',
    'Just problem-solving in real time.',
    'Over time, that experience turned into a system.'
  ];

  const frameworkPoints = [
    'Observe — Understand the environment before acting',
    'Orient — Identify risks, variables, and priorities',
    'Decide — Choose a path with the information you have',
    'Act — Execute, adjust, and stay in control'
  ];

  const outcomesPoints = [
    'Faster, clearer decision-making',
    'Confidence in uncertain situations',
    'Better control under stress',
    'Stronger awareness of people and environments',
    'The ability to solve problems without waiting for help'
  ];

  const trainingPoints = [
    'Field-tested breakdowns (real scenarios)',
    'Tactical thinking frameworks',
    'Situational awareness training',
    'Travel and real-world problem-solving insights',
    'Weekly lessons from life on the road'
  ];

  return (
    <>
      <Helmet>
        <title>AdaptivEdge - Adapt. Strategize. Prevail.</title>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-transparent">
        <Header />

        {/* HERO */}
        <section className="section-padding py-20 relative overflow-hidden bg-card/20 backdrop-blur-sm border-b border-border/50">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent" />

          <div className="container-custom text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                Adapt Faster. Think Clear. Perform Under Pressure.
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                Real-world problem-solving skills for unpredictable environments — built from life in the field, not theory.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <div className="w-full sm:w-auto">
                  <Button
                    className="w-full button-secondary hover:scale-105 hover:shadow-lg hover:shadow-secondary/20"
                    onClick={() => navigate('/training')}
                  >
                    Start Training
                  </Button>
                </div>

                <div className="w-full sm:w-auto">
                  <Button
                    className="w-full button-secondary hover:scale-105 hover:shadow-lg hover:shadow-secondary/20"
                    onClick={() => navigate('/scenarios')}
                  >
                    Watch How It Works
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* REALITY */}
        <section className="section-padding py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent" />

          <div className="container-custom relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
            >
              Most People Aren’t Prepared for the Real World
            </motion.h2>

            <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground border-l border-border/50 pl-6">
              {realityPoints.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0.6 }}
                  whileHover={{ x: 10, opacity: 1 }}
                  className="hover:text-foreground transition-colors duration-300"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-y border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent" />

          <div className="container-custom text-center relative z-10">
            <h2 className="text-3xl font-bold mb-10 text-foreground">
              What AdaptivEdge Does
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whatWeDoPoints.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-card/50 border border-border/50 hover:-translate-y-2 hover:shadow-lg hover:shadow-secondary/20 transition-all"
                >
                  {text}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FIELD GUIDES */}
        <section className="section-padding py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent" />

          <div className="container-custom text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Field Guides
            </h2>

            <p className="text-muted-foreground mb-10">
              No fluff. No theory. Just tools that work when it matters.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {fieldGuidesPoints.map((text, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-xl bg-card/50 border border-border/50 hover:shadow-lg hover:shadow-secondary/20 transition-all"
                >
                  {text}
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                className="button-secondary hover:scale-105 hover:shadow-lg hover:shadow-secondary/20"
                onClick={() => navigate('/field-guides')}
              >
                Browse Field Guides
              </Button>
            </div>
          </div>
        </section>

        {/* ORIGIN */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-y border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent" />

          <div className="container-custom relative z-10">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Built in the Field
            </h2>

            <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground border-l border-border/50 pl-6">
              {originPoints.map((text, i) => (
                <motion.p
                  key={i}
                  whileHover={{ x: 10 }}
                  className="hover:text-foreground transition-colors"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        {/* FRAMEWORK */}
        <section className="section-padding py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent" />

          <div className="container-custom text-center relative z-10">
            <h2 className="text-3xl font-bold mb-10 text-foreground">
              The AdaptivEdge Method
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {frameworkPoints.map((text, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-xl bg-card/50 border border-border/50 hover:shadow-lg hover:shadow-secondary/20 transition-all"
                >
                  {text}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OUTCOMES */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-y border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent" />

          <div className="container-custom text-center relative z-10">
            <h2 className="text-3xl font-bold mb-10 text-foreground">
              What You’ll Gain
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {outcomesPoints.map((text, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-xl bg-card/50 border border-border/50 hover:shadow-lg hover:shadow-secondary/20 transition-all"
                >
                  {text}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TRAINING */}
        <section className="section-padding py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent" />

          <div className="container-custom text-center relative z-10">
            <h2 className="text-3xl font-bold mb-10 text-foreground">
              How You Build Your Edge
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trainingPoints.map((text, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-xl bg-card/50 border border-border/50 hover:shadow-lg hover:shadow-secondary/20 transition-all"
                >
                  {text}
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                className="button-secondary hover:scale-105 hover:shadow-lg hover:shadow-secondary/20"
                onClick={() => navigate('/training')}
              >
                Start Building Your Edge
              </Button>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-y border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent" />

          <div className="container-custom text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              When There’s No Clear Answer…
            </h2>

            <p className="text-muted-foreground mb-10">
              How you think is everything.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button
                className="button-secondary hover:scale-105 hover:shadow-lg hover:shadow-secondary/20"
                onClick={() => navigate('/training')}
              >
                Start Training
              </Button>

              <Button
                className="button-secondary hover:scale-105 hover:shadow-lg hover:shadow-secondary/20"
                onClick={() => navigate('/field-guides')}
              >
                Browse Field Guides
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default HomePage;