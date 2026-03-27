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
          content="Build the ability to adapt, think strategically, and perform under pressure—so you stay effective when it matters most."
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
                Real-world problem-solving built from field experience. Stay clear, act with intent, and handle uncertainty without hesitation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="button-secondary px-8 py-6">
                  <Link to="/training">Enter Training</Link>
                </Button>

                <Button asChild size="lg" className="button-secondary px-8 py-6">
                  <Link to="/scenarios">Try a Scenario</Link>
                </Button>
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
                When things become unclear:
              </h2>

              <div className="space-y-2 text-lg text-muted-foreground mb-8">
                <p>- Plans break down</p>
                <p>- Information is incomplete</p>
                <p>- People add complexity</p>
                <p>- Time disappears</p>
              </div>

              <p className="text-xl font-semibold text-foreground">
                Most people hesitate.<br />You won’t.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Clarity Under Pressure', desc: 'Make decisions without overthinking' },
                { title: 'Structured Thinking', desc: 'Rely on systems, not guesswork' },
                { title: 'Adaptability', desc: 'Adjust quickly as conditions change' }
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
              <div className="card-minimal p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Enter a Situation</h3>
                <p className="text-sm text-muted-foreground">Step into real-world scenarios under pressure</p>
              </div>

              <div className="card-minimal p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Make a Decision</h3>
                <p className="text-sm text-muted-foreground">Act with limited and imperfect information</p>
              </div>

              <div className="card-minimal p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 text-foreground">See How an Expert Thinks</h3>
                <p className="text-sm text-muted-foreground">Break down the reasoning behind effective action</p>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-y border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />

          <div className="container-custom max-w-2xl mx-auto">
            <div className="card-minimal p-8">
              <p className="text-muted-foreground mb-4">Scenario:</p>
              <p className="text-foreground mb-6">
                “You’re behind schedule. The system isn’t working. The client is watching.”
              </p>

              <p className="mb-4 text-muted-foreground">What do you do first?</p>
              <div className="space-y-2 mb-6 text-muted-foreground">
                <p>( ) Fix immediately</p>
                <p>( ) Communicate first</p>
                <p>( ) Diagnose first</p>
              </div>

              <Button className="button-secondary px-6 rounded-full">
                Submit
              </Button>
            </div>
          </div>
        </section>

        {/* BUILT IN FIELD */}
        <section className="section-padding py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />

          <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
            <div className="h-64 bg-card/30 rounded-xl" />

            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Built in the Field</h2>
              <p className="text-muted-foreground leading-relaxed">
                This isn’t theory.<br /><br />
                It’s built from working in unfamiliar environments, under pressure,
                solving real problems with real consequences.<br /><br />
                That experience is the system.
              </p>
            </div>
          </div>
        </section>

        {/* TRAINING PATHS */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-y border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent pointer-events-none" />

          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Choose Your Training Path</h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: 'Training System', desc: 'Interactive scenarios with real-time guidance', link: '/training', cta: 'Enter Training' },
                { title: 'Field Guides', desc: 'Frameworks, tools, and practical handbooks', link: '/shop', cta: 'Visit Shop' },
                { title: 'Guided Training', desc: 'Work directly with me', link: '/guided-training', cta: 'Learn More' },
                { title: 'Team Training', desc: 'Prepare teams for real-world performance', link: '/teams', cta: 'For Teams' }
              ].map((item, i) => (
                <div key={i} className="card-minimal p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                  <Button asChild className="button-secondary px-5 rounded-full">
                    <Link to={item.link}>{item.cta}</Link>
                  </Button>
                </div>
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
              <Button asChild className="button-secondary px-8 py-6 rounded-full">
                <Link to="/training">Start Training</Link>
              </Button>

              <Button asChild className="button-secondary px-8 py-6 rounded-full">
                <Link to="/scenarios">Try a Scenario</Link>
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