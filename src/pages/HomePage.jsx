import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ValuePropositionCard from '@/components/ValuePropositionCard.jsx';
import { Button } from '@/components/ui/button';
const HomePage = () => {
  const valueProps = [{
    icon: Shield,
    title: 'Operational resilience',
    description: 'Build systems and mindsets that withstand disruption, maintain performance under pressure, and recover quickly from setbacks.'
  }, {
    icon: Zap,
    title: 'Strategic adaptability',
    description: 'Develop the ability to recognize changing conditions early, adjust plans effectively, and capitalize on emerging opportunities.'
  }];
  const methodSteps = [{
    number: '01',
    title: 'Observe',
    description: 'Gather relevant information'
  }, {
    number: '02',
    title: 'Assess',
    description: 'Analyze the situation'
  }, {
    number: '03',
    title: 'Adapt',
    description: 'Adjust your approach'
  }, {
    number: '04',
    title: 'Act',
    description: 'Execute with confidence'
  }, {
    number: '05',
    title: 'Reflect',
    description: 'Learn and improve'
  }];
  return <>
      <Helmet>
        <title>AdaptivEdge - Adapt quickly. Execute the plan. Lead with an edge.</title>
        <meta name="description" content="Helping professionals and teams excel in uncertain environments through operational resilience, strategic adaptability, and clear decision-making." />
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
                Think Clearly.<br />
                Adapt Quickly.<br />
                <span className="text-accent">Perform Confidently.</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-[60ch] mx-auto mb-10 text-muted-foreground">
                We help professionals and teams excel in uncertain environments through proven frameworks for resilience, adaptability, and clear decision-making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="button-primary px-8 py-6 text-base">
                  <Link to="/method">
                    Explore Our Approach
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-background/40 backdrop-blur-sm border-border text-foreground hover:bg-muted/60 hover:text-foreground transition-colors duration-200 rounded-lg px-8 py-6 text-base">
                  <Link to="/contact">
                    Contact Us
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
                  In a world of constant disruption, survival isn't enough. You need the strategic adaptability to recognize changing conditions early, adjust plans effectively, and capitalize on emerging opportunities when others hesitate.
                </p>
                <Button asChild variant="ghost" className="px-0 text-secondary hover:text-secondary/80 hover:bg-transparent group">
                  <Link to="/corporate-solutions">
                    View Corporate Solutions
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
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
                  <ValuePropositionCard icon={Target} title="Clear decision-making" description="Master structured approaches to problem-solving that reduce uncertainty, minimize errors, and increase confidence in high-stakes situations." />
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
                The AdaptivEDGE Method
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-[65ch] mx-auto">
                A five-step framework designed to help you navigate complexity and uncertainty with confidence.
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
                <Link to="/method">
                  Learn More About the Method
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};
export default HomePage;