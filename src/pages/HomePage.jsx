import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import BackToTop from '@/components/BackToTop.jsx';

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
        <section className="py-20 relative overflow-hidden bg-card/20 backdrop-blur-sm border-b border-border/50">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />
          <div className="container-custom relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight"
            >
              Adapt Faster. Think Clear. Perform Under Pressure.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="text-lg md:text-xl max-w-[60ch] mx-auto mb-10 text-muted-foreground leading-relaxed"
            >
              Real-world problem-solving skills for unpredictable environments — built from life in the field, not theory.
            </motion.p>
            <p className="text-sm text-muted-foreground mb-10">Lessons forged in high-pressure, real-world situations — where failure has consequences.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="button-secondary px-8 py-6 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20">
                <Link to="/training">Start Training</Link>
              </Button>
              <Button asChild size="lg" className="button-secondary px-8 py-6 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20">
                <Link to="/scenarios">Watch How It Works</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* REALITY CHECK SECTION */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-b border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />
          <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
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
              className="space-y-4 text-lg text-muted-foreground"
            >
              {[
                'Most people are trained for predictable situations, clear instructions, and controlled environments.',
                'But real life doesn’t work like that.',
                'Problems show up incomplete.',
                'Information is missing.',
                'Pressure is real.',
                'And hesitation costs you.'
              ].map((text, i) => (
                <p key={i} className="hover:text-foreground transition-colors cursor-default">{text}</p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* WHAT WE DO SECTION */}
        <section className="section-padding py-20 relative overflow-hidden bg-card/20 backdrop-blur-sm border-b border-border/50">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />
          <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
            >
              What AdaptivEdge Does
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="space-y-4 text-lg text-muted-foreground"
            >
              {[
                'Build situational awareness in unfamiliar environments',
                'Make decisions with incomplete information',
                'Solve problems under pressure',
                'Stay calm and controlled when things go sideways'
              ].map((text, i) => (
                <p key={i} className="hover:text-foreground transition-colors cursor-default">• {text}</p>
              ))}
            </motion.div>
            <p className="mt-6 text-muted-foreground">This isn’t motivation. This is mental conditioning for real-world performance.</p>
          </div>
        </section>

        {/* FIELD GUIDES SECTION */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-y border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />
          <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
            >
              Field Guides — Practical Tools for Real-World Situations
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="space-y-4 text-lg text-muted-foreground mb-6"
            >
              {[
                'Step-by-step problem-solving breakdowns',
                'Situational awareness checklists',
                'Decision-making frameworks under pressure',
                'Real-world scenarios and responses',
                'Compact, easy-to-use digital formats'
              ].map((text, i) => (
                <p key={i} className="hover:text-foreground transition-colors cursor-default">• {text}</p>
              ))}
            </motion.div>
            <p className="mb-6 text-muted-foreground">No fluff. No theory. Just tools that work when it matters.</p>
            <Button asChild className="button-secondary px-8 py-4 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20">
              <Link to="/field-guides">Browse Field Guides</Link>
            </Button>
          </div>
        </section>

        {/* ORIGIN SECTION */}
        <section className="section-padding py-20 relative overflow-hidden bg-card/20 backdrop-blur-sm border-b border-border/50">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />
          <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
            >
              Built in the Field
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="space-y-4 text-lg text-muted-foreground"
            >
              {[
                'AdaptivEdge was built from years in the field as a traveling technician.',
                'Walking into unfamiliar environments.',
                'Solving problems under time pressure.',
                'Managing real consequences.',
                'No scripts. No hand-holding. No perfect conditions.',
                'Just problem-solving in real time.',
                'Over time, that experience turned into a system.'
              ].map((text, i) => (
                <p key={i} className="hover:text-foreground transition-colors cursor-default">{text}</p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FRAMEWORK SECTION */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-y border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />
          <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
            >
              The AdaptivEdge Method
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="space-y-4 text-lg text-muted-foreground"
            >
              {[
                '1. Observe — Understand the environment before acting',
                '2. Orient — Identify risks, variables, and priorities',
                '3. Decide — Choose a path with the information you have',
                '4. Act — Execute, adjust, and stay in control'
              ].map((text, i) => (
                <p key={i} className="hover:text-foreground transition-colors cursor-default">{text}</p>
              ))}
            </motion.div>
            <p className="mt-6 text-muted-foreground">Most people skip steps. That’s why they panic, hesitate, or make things worse.</p>
          </div>
        </section>

        {/* WHO IT'S FOR SECTION */}
        <section className="section-padding py-20 relative overflow-hidden bg-card/20 backdrop-blur-sm border-b border-border/50">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />
          <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
            >
              Who This Is For
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="space-y-4 text-lg text-muted-foreground"
            >
              {[
                'Operate in unpredictable environments',
                'Want to think clearly under pressure',
                'Are tired of overthinking and second-guessing',
                'Value practical skills over theory'
              ].map((text, i) => (
                <p key={i} className="hover:text-foreground transition-colors cursor-default">• {text}</p>
              ))}
            </motion.div>
            <p className="mt-6 text-muted-foreground">Whether in the field, in business, or in life — the ability to adapt is your advantage.</p>
          </div>
        </section>

        {/* OUTCOMES SECTION */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-y border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />
          <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
            >
              What You’ll Gain
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="space-y-4 text-lg text-muted-foreground"
            >
              {[
                'Faster, clearer decision-making',
                'Confidence in uncertain situations',
                'Better control under stress',
                'Stronger awareness of people and environments',
                'The ability to solve problems without waiting for help'
              ].map((text, i) => (
                <p key={i} className="hover:text-foreground transition-colors cursor-default">• {text}</p>
              ))}
            </motion.div>
            <p className="mt-6 text-muted-foreground">You don’t eliminate uncertainty. You get better at handling it.</p>
          </div>
        </section>

        {/* CONTENT / TRAINING SECTION */}
        <section className="section-padding py-20 relative overflow-hidden bg-card/20 backdrop-blur-sm border-b border-border/50">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />
          <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
            >
              How You Build Your Edge
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="space-y-4 text-lg text-muted-foreground mb-6"
            >
              {[
                'Field-tested breakdowns (real scenarios)',
                'Tactical thinking frameworks',
                'Situational awareness training',
                'Travel and real-world problem-solving insights',
                'Weekly lessons from life on the road'
              ].map((text, i) => (
                <p key={i} className="hover:text-foreground transition-colors cursor-default">• {text}</p>
              ))}
            </motion.div>
            <Button asChild className="button-secondary px-8 py-6 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20">
              <Link to="/training">Start Building Your Edge</Link>
            </Button>
          </div>
        </section>

        {/* PHILOSOPHY SECTION */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-y border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />
          <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
            >
              The Difference
            </motion.h2>
            <p className="text-lg text-muted-foreground">
              This isn’t about becoming perfect.<br />
              It’s about becoming capable.<br />
              Capable of walking into the unknown…<br />
              and figuring it out.
            </p>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="section-padding py-20 relative overflow-hidden bg-card/20 backdrop-blur-sm border-b border-border/50">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />
          <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
            >
              When There’s No Clear Answer…
            </motion.h2>
            <p className="text-lg text-muted-foreground mb-8">
              How you think is everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="button-secondary px-8 py-6 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20">
                <Link to="/training">Start Training</Link>
              </Button>
              <Button asChild className="button-secondary px-8 py-6 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20">
                <Link to="/field-guides">Browse Field Guides</Link>
              </Button>
              <Button asChild className="button-secondary px-8 py-6 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20">
                <Link to="/subscribe">Subscribe for Field Lessons</Link>
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
``