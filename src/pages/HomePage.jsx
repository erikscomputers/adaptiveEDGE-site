import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Zap } from 'lucide-react';
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

        {/* HERO */}
        <section className="relative min-h-[85dvh] flex items-center justify-center overflow-hidden border-b border-border/50">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />

          <div className="relative z-10 container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight">
                Train how to think when there’s no{' '}
                <span className="transition-colors duration-300 hover:text-secondary">
                  clear answer
                </span>.
              </h1>

              <p className="text-lg md:text-xl max-w-[60ch] mx-auto mb-10 text-muted-foreground leading-relaxed">
                Real-world problem-solving built from field experience. Stay clear, act strategically, and handle uncertainty with control.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {[{ to: "/training", label: "Enter Training" }, { to: "/scenarios", label: "Try a Scenario" }].map((btn, i) => (
                  <Button
                    key={i}
                    asChild
                    size="lg"
                    className="button-secondary px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20"
                  >
                    <Link to={btn.to}>{btn.label}</Link>
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* REALITY HOOK */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-b border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />

          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                When things get unclear:
              </h2>

              <div className="space-y-2 text-lg text-muted-foreground mb-8">
                {[
                  'Plans fall apart',
                  'Information is incomplete',
                  'People complicate things',
                  'Time runs out'
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    whileHover={{ x: 8 }}
                    className="transition-colors duration-300 hover:text-foreground cursor-default"
                  >
                    - {text}
                  </motion.p>
                ))}
              </div>

              <p className="text-xl font-semibold text-foreground">
                Most people hesitate.<br />You won’t.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Clarity Under Pressure', desc: 'Make decisions without overthinking' },
                { title: 'Structured Thinking', desc: 'Use repeatable systems, not guesswork' },
                { title: 'Adaptability', desc: 'Adjust fast when conditions change' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 180 }}
                  className="card-minimal p-8 text-center transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20"
                >
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section-padding py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />

          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-12 text-foreground">Train Like It’s Real</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Enter a Situation', desc: 'Real-world scenarios with pressure' },
                { title: 'Make a Decision', desc: 'Act with limited information' },
                { title: 'See How an Expert Thinks', desc: 'Understand the reasoning behind it' }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="card-minimal p-6 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20"
                >
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-y border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />

          <div className="container-custom max-w-2xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card-minimal p-8 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20"
            >
              <p className="text-muted-foreground mb-4">Scenario:</p>
              <p className="text-foreground mb-6">
                “You’re behind schedule. The system isn’t working. The client is watching.”
              </p>

              <p className="mb-4 text-muted-foreground">What do you do first?</p>
              <div className="space-y-2 mb-6 text-muted-foreground">
                {['Fix immediately', 'Communicate first', 'Diagnose first'].map((opt, i) => (
                  <p key={i} className="hover:text-foreground transition-colors cursor-default">
                    ( ) {opt}
                  </p>
                ))}
              </div>

              <Button className="button-secondary px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20">
                Submit
              </Button>
            </motion.div>
          </div>
        </section>

        {/* BUILT IN FIELD */}
        <section className="section-padding py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />

          <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
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
                I don’t teach theory.<br /><br />
                I work in unfamiliar environments, under pressure,
                solving real problems with real consequences.<br /><br />
                This system comes from that experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* TRAINING PATHS */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-y border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />

          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Choose Your Training Path</h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: 'Training System', desc: 'Interactive scenarios + real-time guidance', link: '/training', cta: 'Enter Training' },
                { title: 'Field Guides', desc: 'Handbooks, frameworks, and tools', link: '/shop', cta: 'Visit Shop' },
                { title: 'Guided Training', desc: 'Work directly with me', link: '/guided-training', cta: 'Learn More' },
                { title: 'Team Training', desc: 'Train teams for real-world performance', link: '/teams', cta: 'For Teams' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 180 }}
                  className="card-minimal p-6 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20"
                >
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                  <Button asChild className="button-secondary px-5 rounded-full transition-all duration-300 hover:scale-105">
                    <Link to={item.link}>{item.cta}</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section-padding py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />

          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Get better at handling reality.</h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {[{ to: "/training", label: "Start Training" }, { to: "/scenarios", label: "Try a Scenario" }].map((btn, i) => (
                <Button
                  key={i}
                  asChild
                  className="button-secondary px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20"
                >
                  <Link to={btn.to}>{btn.label}</Link>
                </Button>
              ))}
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