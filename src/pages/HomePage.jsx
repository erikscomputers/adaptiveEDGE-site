import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import BackToTop from '@/components/BackToTop.jsx';
import { Target, Compass, Users } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>AdaptivEdge - Adapt. Strategize. Prevail.</title>
        <meta
          name="description"
          content="Helping you excel in uncertainty by developing the skills to adapt, strategize, and prevail — so you stay ahead of the curve."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-transparent">
        <Header />

        {/* HERO SECTION */}
        <section className="py-20 bg-card/20 backdrop-blur-sm border-b border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />

          <div className="container-custom text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                Adapt Faster. Think Clear. Perform Under Pressure.
              </h1>
              <p className="text-lg md:text-xl mb-6 text-muted-foreground leading-relaxed">
                Real-world problem-solving skills for unpredictable environments — built from life in the field, not theory.
              </p>
              <p className="text-sm md:text-base mb-10 text-muted-foreground italic">
                Lessons forged in high-pressure, real-world situations — where failure has consequences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="button-secondary px-8 py-6">
                  <Link to="/training">Start Training</Link>
                </Button>
                <Button asChild size="lg" className="button-secondary px-8 py-6">
                  <Link to="/how-it-works">Watch How It Works</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* REALITY CHECK SECTION */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-b border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />
          <div className="container-custom max-w-3xl mx-auto text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
            >
              Most People Aren’t Prepared for the Real World
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="space-y-3 text-lg md:text-xl text-muted-foreground"
            >
              {[
                'Most people are trained for predictable situations, clear instructions, and controlled environments.',
                'But real life doesn’t work like that.',
                'Problems show up incomplete.',
                'Information is missing.',
                'Pressure is real.',
                'And hesitation costs you.'
              ].map((text, i) => (
                <p key={i} className="hover:text-foreground transition-colors cursor-default">
                  {text}
                </p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* WHAT WE DO SECTION */}
        <section className="section-padding py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />
          <div className="container-custom text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-foreground">What AdaptivEdge Does</h2>
            <p className="text-lg text-muted-foreground mb-10">AdaptivEdge teaches you how to think when there’s no clear answer.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                'Build situational awareness in unfamiliar environments',
                'Make decisions with incomplete information',
                'Solve problems under pressure',
                'Stay calm and controlled when things go sideways'
              ].map((text, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 180 }}
                  className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:shadow-lg hover:shadow-secondary/20 cursor-default"
                >
                  <p className="text-muted-foreground">{text}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-sm md:text-base italic mt-6 text-muted-foreground">
              This isn’t motivation. This is mental conditioning for real-world performance.
            </p>
          </div>
        </section>

        {/* FIELD GUIDES SECTION */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-y border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />
          <div className="container-custom max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Field Guides — Practical Tools for Real-World Situations
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              When you don’t have time to figure it out from scratch, you need something you can rely on. The AdaptivEdge Field Guides are built from real-world experience — designed to give you clear, actionable frameworks you can use immediately.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {[
                'Step-by-step problem-solving breakdowns',
                'Situational awareness checklists',
                'Decision-making frameworks under pressure',
                'Real-world scenarios and responses',
                'Compact, easy-to-use digital formats'
              ].map((text, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ type: 'spring', stiffness: 180 }}
                  className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:shadow-lg hover:shadow-secondary/20 cursor-default"
                >
                  <p className="text-muted-foreground">{text}</p>
                </motion.div>
              ))}
            </div>
            <Button asChild className="button-secondary px-6 py-3 rounded-full">
              <Link to="/field-guides">Browse Field Guides</Link>
            </Button>
          </div>
        </section>

        {/* ORIGIN SECTION */}
        <section className="section-padding py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />
          <div className="container-custom grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="h-64 bg-card/30 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20"
            />
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">Built in the Field</h2>
              <p className="text-muted-foreground leading-relaxed">
                AdaptivEdge was built from years in the field as a traveling technician.<br /><br />
                Walking into unfamiliar environments.<br />
                Solving problems under time pressure.<br />
                Managing real consequences.<br /><br />
                No scripts. No hand-holding. No perfect conditions.<br />
                Just problem-solving in real time.<br /><br />
                Over time, that experience turned into a system.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FRAMEWORK SECTION */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-y border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />
          <div className="container-custom text-center relative z-10">
            <h2 className="text-3xl font-bold mb-10 text-foreground">The AdaptivEdge Method</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 'Observe', desc: 'Understand the environment before acting' },
                { step: 'Orient', desc: 'Identify risks, variables, and priorities' },
                { step: 'Decide', desc: 'Choose a path with the information you have' },
                { step: 'Act', desc: 'Execute, adjust, and stay in control' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 180 }}
                  className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:shadow-lg hover:shadow-secondary/20 cursor-default"
                >
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{item.step}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-sm md:text-base italic text-muted-foreground">
              Most people skip steps. That’s why they panic, hesitate, or make things worse.
            </p>
          </div>
        </section>

        {/* Additional sections (Who It's For, Outcomes, Content/Training, Philosophy, Final CTA) */}
        {/* Apply similar backdrop-blur, gradient, hover, and motion styles as above */}
        {/* ... continue similarly for remaining sections ... */}

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default HomePage;