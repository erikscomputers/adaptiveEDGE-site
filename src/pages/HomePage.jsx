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
  const valueProps = [{
    icon: Shield,
    title: 'Operational resilience',
    description: 'Build systems and mindsets that perform under pressure, adapt to disruption, and recover quickly from setbacks.'
  }, {
    icon: Zap,
    title: 'Strategic adaptability',
    description: 'Recognize shifting conditions early, strategize your approach with intent, and capitalize on emerging opportunities before others do.'
  }];
  const methodSteps = [{
    number: '01',
    title: 'Observe',
    description: 'Gather relevant information and identify what truly matters.'
  }, {
    number: '02',
    title: 'Assess',
    description: 'Analyze the situation to understand context, constraints, and opportunities.'
  }, {
    number: '03',
    title: 'Adapt',
    description: 'Adjust your approach based on what you’ve learned.'
  }, {
    number: '04',
    title: 'Strategize',
    description: 'Develop the best plan of action under uncertainty, high pressure, and unknown environments.'
  }, {
    number: '05',
    title: 'Prevail',
    description: 'Execute with precision, confidence, and a lasting competitive edge.'
  }];
  return <>
      <Helmet>
        <title>AdaptivEdge - Adapt. Strategize. Prevail.</title>
        <meta name="description" content="Helping you excel in uncertainty by developing the skills to adapt, strategize, and prevail — so you stay ahead of the curve." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-transparent">
        <Header />

        {/* 1. HERO SECTION */}
        <section className="relative min-h-[85dvh] flex items-center justify-center overflow-hidden bg-transparent border-b border-border/50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,188,156,0.05)_0%,transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,106,61,0.05)_0%,transparent_50%)] pointer-events-none"></div>

          <div className="relative z-10 container-custom text-center flex flex-col items-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            ease: "easeOut"
          }} className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground tracking-tight">
                Adapt. Strategize.<br />
                <span className="text-accent">Prevail.</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-[60ch] mx-auto mb-10 text-muted-foreground">
                Helping you excel in uncertainty by developing the skills to adapt, strategize, and prevail — so you stay ahead of the curve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="button-secondary px-8 py-6 text-base">
                  <Link to="/personal-development">
                    Learn More
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. SECONDARY CONTENT SECTION */}
        <section className="section-padding bg-card/40 backdrop-blur-sm border-b border-border/50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-foreground">
                  Master <span className="text-secondary">Operational Resilience</span>
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  In a world of constant disruption, survival isn’t enough. You need the ability to adapt quickly, develop smart strategies, and prevail under pressure — recognizing change early, adjusting with precision, and acting with confidence when it matters most.
                </p>
                <Button asChild variant="ghost" className="px-0 text-secondary hover:text-secondary/80 hover:bg-transparent group">
                  <Link
  to="/corporate-solutions"
  className="inline-flex items-center justify-center text-xl md:text-2xl font-semibold px-8 py-5 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 shadow-lg hover:shadow-xl"
>
  View Corporate Solutions
  <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-200 group-hover:translate-x-1" />
</Link>
                </Button>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {valueProps.map((prop, index) => <ValuePropositionCard key={index} {...prop} />)}
                <div className="sm:col-span-2">
                  <ValuePropositionCard icon={Target} title="Clear decision-making" description="Apply structured thinking to reduce uncertainty, improve judgment, and act confidently in high-stakes situations." />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Method Preview Section */}
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-foreground">
                The AdaptivEdge Method
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-[65ch] mx-auto">
                A structured framework to help you operate with clarity, move with purpose, and maintain a lasting edge.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
              {methodSteps.map((step, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="card-minimal p-6 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                    <span className="text-lg font-bold" style={{
                  fontVariantNumeric: 'tabular-nums'
                }}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>)}
            </div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.5
          }} className="text-center">
              <Button asChild className="button-secondary px-8 py-6 text-base">
                <Link to="/contact">
                  Schedule A Workshop
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
        <BackToTop />
      </div>
    </>;
};
export default HomePage;