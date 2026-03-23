import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Compass, Users } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BackToTop from '@/components/BackToTop.jsx';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const philosophyPoints = [{
    icon: Target,
    title: 'Clarity',
    description: 'The best decisions come from clarity, not pressure. We help you build the mindset and frameworks needed to adapt quickly, stay focused, and strategize with confidence — even in high-stakes situations.'
  }, {
    icon: Compass,
    title: 'Strategic Action',
    description: 'Planning without purpose achieves little. We teach practical, repeatable systems that translate understanding into effective strategies, smarter decisions, and tangible results.'
  }, {
    icon: Users,
    title: 'Sustainable Capability',
    description: 'Quick fixes create dependency. We build lasting capability, equipping individuals and teams to solve problems, adapt to new challenges, and continue improving long after our guidance ends.'
  }];
  return <>
      <Helmet>
        <title>About AdaptivEdge - Our Mission & Approach</title>
        <meta name="description" content="We help people navigate uncertainty by building the ability to adapt quickly, strategize effectively, and prevail with an edge." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-transparent">
        <Header />

        {/* Hero Section */}
        <section className="py-6 md:py-10 bg-card/20 backdrop-blur-sm border-b border-border/50">
          <div className="container-custom text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
  <span className="text-secondary">About</span> AdaptivEdge
</h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                We help people navigate uncertainty by building the ability to adapt quickly, strategize effectively, and prevail with an edge.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
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
          }} className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold leading-tight mb-6 text-foreground">
                Our mission
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  In a world of constant change and complexity, success comes down to one thing: the ability to adapt, think strategically, and maintain a competitive edge. Most individuals and organizations struggle to keep pace because they lack structured, repeatable systems to build these capabilities.
                </p>
                <p>
                  AdaptivEdge exists to change that. We provide practical frameworks, proven methodologies, and expert guidance that help individuals and teams respond to uncertainty with clarity, confidence, and control. Our approach is grounded in real-world application — not abstract theory.
                </p>
                <p>
                  We believe adaptability is not a fixed trait — it is a developable skill. Through deliberate practice, structured thinking, and continuous improvement, anyone can learn to navigate complexity and consistently perform at a higher level.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="section-padding bg-card/40 backdrop-blur-sm border-y border-border/50">
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
          }} className="text-center mb-12">
              <h2 className="text-3xl font-bold leading-tight mb-4 text-foreground">
                Our approach
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-[65ch] mx-auto">
                Three core principles guide everything we do.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {philosophyPoints.map((point, index) => <motion.div key={index} initial={{
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
            }} className="card-minimal p-8">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary">
                      <point.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </motion.div>)}
            </div>
          </div>
        </section>

 {/* Trust Building Section */}
<section className="section-padding bg-transparent">
  <div className="container-custom">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold leading-tight mb-6 text-foreground">
        Why work with us
      </h2>

      <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p>
          We work with teams operating across boundaries, professionals building in fast-moving environments, and individuals looking to improve their lives. Our clients share one thing in common: they understand that adaptability, strategic thinking, and a leading edge are what drive lasting performance.
        </p>

        <p>
          What sets us apart is our focus on practical, real-world application. We don’t deliver generic advice or one-size-fits-all solutions. Instead, we work closely with you to understand your challenges, design targeted strategies, and drive measurable outcomes.
        </p>

        <p>
          Our goal is not to create dependency but to build capability. When our work is complete, you’ll have the frameworks, skills, and confidence to adapt, strategize, and prevail on your own — sustaining your edge long after our engagement ends.
        </p>
      </div> {/* ✅ THIS WAS MISSING */}

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button asChild size="lg" className="button-secondary px-8 py-6 text-base">
          <Link to="/contact">
            Contact Us
          </Link>
        </Button>
      </div>

    </motion.div>
  </div>
</section>

<Footer />
        <BackToTop />
      </div>
    </>;
};
export default AboutPage;