import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Compass, Users } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
const AboutPage = () => {
  const philosophyPoints = [{
    icon: Target,
    title: 'Calm confidence',
    description: 'We believe the best decisions come from a place of clarity, not panic. Our approach emphasizes building the mental frameworks and practical skills that enable calm, confident action even in high-pressure situations.'
  }, {
    icon: Compass,
    title: 'Practical problem-solving',
    description: 'Theory without application is just conversation. We focus on actionable frameworks, real-world scenarios, and measurable outcomes that translate directly into improved performance.'
  }, {
    icon: Users,
    title: 'Sustainable growth',
    description: 'Quick fixes create dependency. We build capabilities that last—teaching people and teams to solve their own problems, adapt to new challenges, and continue growing long after our engagement ends.'
  }];
  return <>
      <Helmet>
        <title>About AdaptiVantage - Our Mission & Approach</title>
        <meta name="description" content="Learn about AdaptiVantage's mission to help leaders and teams navigate uncertainty with calm confidence through practical problem-solving frameworks." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-transparent">
        <Header />

        {/* Hero Section */}
        <section className="section-padding bg-card/20 backdrop-blur-sm border-b border-border/50">
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
                About AdaptivEDGE
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                We help leaders and teams navigate uncertainty with calm confidence.
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
                  In a world of constant change and increasing complexity, the ability to think clearly, adapt quickly, and perform confidently is no longer optional—it is essential. Yet most professionals and organizations lack structured approaches to building these capabilities.
                </p>
                <p>
                  AdaptivEDGE exists to close that gap. We provide practical frameworks, proven methodologies, and expert guidance that transform how individuals and teams respond to uncertainty. Our work is grounded in real-world application, not abstract theory.
                </p>
                <p>
                  We believe that resilience and adaptability are not innate traits—they are learnable skills. Through deliberate practice, structured thinking, and continuous reflection, anyone can develop the capacity to navigate complexity with confidence.
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
                Why work with us
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  We have worked with executives navigating organizational transformations, teams managing distributed operations across time zones, and professionals building careers in rapidly changing industries. Our clients share a common trait: they recognize that adaptability is a competitive advantage.
                </p>
                <p>
                  What sets us apart is our commitment to practical application. We do not deliver generic advice or one-size-fits-all solutions. Instead, we work closely with you to understand your specific challenges, design tailored interventions, and measure real outcomes.
                </p>
                <p>
                  Our goal is not to create dependency but to build capability. When our engagement ends, you should have the frameworks, skills, and confidence to continue adapting and improving on your own.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};
export default AboutPage;