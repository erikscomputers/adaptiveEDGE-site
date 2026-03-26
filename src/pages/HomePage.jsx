import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ValuePropositionCard from '@/components/ValuePropositionCard.jsx';
import { Button } from '@/components/ui/button';
import BackToTop from '@/components/BackToTop.jsx';

const HomePage = () => {
  const valueProps = [
    {
      icon: Shield,
      title: 'Operational resilience',
      description: 'Build systems and mindsets that perform under pressure, adapt to disruption, and recover quickly from setbacks.'
    },
    {
      icon: Zap,
      title: 'Strategic adaptability',
      description: 'Recognize shifting conditions early, strategize your approach with intent, and capitalize on emerging opportunities before others do.'
    }
  ];

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

        {/* 1. HERO SECTION */}
        <section className="relative min-h-[85dvh] flex items-center justify-center overflow-hidden bg-transparent border-b border-border/50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,188,156,0.05)_0%,transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,106,61,0.05)_0%,transparent_50%)] pointer-events-none"></div>

          <div className="relative z-10 container-custom text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground tracking-tight">
                Train how to think when there’s no clear answer.
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-[60ch] mx-auto mb-10 text-muted-foreground">
                Real-world problem-solving built from field experience. Stay clear, act strategically, and handle uncertainty with control.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="button-secondary px-8 py-6 text-base">
                  <Link to="/training">Enter Training</Link>
                </Button>

                <Button asChild size="lg" className="button-secondary px-8 py-6 text-base">
                  <Link to="/scenarios">Try a Scenario</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. REALITY HOOK + WHAT THIS IS */}
        <section className="section-padding bg-card/40 backdrop-blur-sm border-b border-border/50">
          <div className="container-custom">
            <motion.div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                When things get unclear:
              </h2>

              <div className="space-y-2 text-lg text-muted-foreground mb-8">
                <p>- Plans fall apart</p>
                <p>- Information is incomplete</p>
                <p>- People complicate things</p>
                <p>- Time runs out</p>
              </div>

              <p className="text-xl font-semibold text-foreground">
                Most people hesitate.<br />You won’t.
              </p>
            </motion.div>

            {/* WHAT THIS IS GRID */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Clarity Under Pressure', desc: 'Make decisions without overthinking' },
                { title: 'Structured Thinking', desc: 'Use repeatable systems, not guesswork' },
                { title: 'Adaptability', desc: 'Adjust fast when conditions change' }
              ].map((item, i) => (
                <motion.div key={i} className="card-minimal p-8 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. HOW IT WORKS */}
        <section className="section-padding bg-transparent">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-12 text-foreground">Train Like It’s Real</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Enter a Situation', desc: 'Real-world scenarios with pressure' },
                { title: 'Make a Decision', desc: 'Act with limited information' },
                { title: 'See How an Expert Thinks', desc: 'Understand the reasoning behind it' }
              ].map((step, i) => (
                <div key={i} className="card-minimal p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. INTERACTIVE PREVIEW */}
        <section className="section-padding bg-card/40 backdrop-blur-sm border-y border-border/50">
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

              <Button className="button-secondary px-6 rounded-full">Submit</Button>
            </div>
          </div>
        </section>

        {/* 5. BUILT IN THE FIELD */}
        <section className="section-padding bg-transparent">
          <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
            <div className="h-64 bg-card/30 rounded-xl" /> {/* placeholder visual */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Built in the Field</h2>
              <p className="text-muted-foreground leading-relaxed">
                I don’t teach theory.<br /><br />
                I work in unfamiliar environments, under pressure,
                solving real problems with real consequences.<br /><br />
                This system comes from that experience.
              </p>
            </div>
          </div>
        </section>

        {/* 6. TRAINING PATHS */}
        <section className="section-padding bg-card/40 backdrop-blur-sm border-y border-border/50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Choose Your Training Path</h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: 'Training System', desc: 'Interactive scenarios + real-time guidance', link: '/training', cta: 'Enter Training' },
                { title: 'Field Guides', desc: 'Handbooks, frameworks, and tools', link: '/shop', cta: 'Visit Shop' },
                { title: 'Guided Training', desc: 'Work directly with me', link: '/guided-training', cta: 'Learn More' },
                { title: 'Team Training', desc: 'Train teams for real-world performance', link: '/teams', cta: 'For Teams' }
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

        {/* 7. FINAL CTA */}
        <section className="section-padding bg-transparent text-center">
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