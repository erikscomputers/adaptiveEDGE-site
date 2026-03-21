import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, Scale, RefreshCw, Zap, RotateCcw } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MethodStepCard from '@/components/MethodStepCard.jsx';
import { Button } from '@/components/ui/button';
const MethodPage = () => {
  const methodSteps = [{
    stepNumber: '01',
    title: 'Observe',
    icon: Eye,
    description: 'Begin by gathering relevant information from your environment. This step focuses on active awareness—noticing patterns, identifying changes, and collecting data without jumping to conclusions. Effective observation requires setting aside assumptions and staying present to what is actually happening.',
    example: 'A project manager notices team velocity declining over three sprints, communication gaps in stand-ups, and increased bug reports—all signals that warrant deeper investigation before taking action.'
  }, {
    stepNumber: '02',
    title: 'Assess',
    icon: Scale,
    description: 'Analyze the information you have gathered to understand the situation clearly. This step involves identifying root causes, evaluating options, and determining what matters most. Assessment transforms raw observations into actionable insights by applying structured thinking and prioritization.',
    example: 'After observing the decline, the manager assesses that the root cause is unclear requirements from stakeholders, not team performance—shifting focus from team intervention to stakeholder alignment.'
  }, {
    stepNumber: '03',
    title: 'Adapt',
    icon: RefreshCw,
    description: 'Adjust your approach based on your assessment. This step requires flexibility and creativity—modifying plans, changing tactics, or shifting resources to better align with current realities. Adaptation is about making intentional changes that address the core issues you have identified.',
    example: 'The manager adapts by implementing a weekly requirements review session with stakeholders, creating a shared documentation system, and adjusting sprint planning to include clarification time.'
  }, {
    stepNumber: '04',
    title: 'Act',
    icon: Zap,
    description: 'Execute your adapted plan with confidence and commitment. This step emphasizes decisive action—implementing changes, communicating clearly, and following through on decisions. Effective action requires both courage to move forward and discipline to stay focused on your chosen approach.',
    example: 'The manager launches the new requirements process, communicates the changes to all stakeholders, trains the team on the documentation system, and commits to running the process for at least four sprints before evaluating results.'
  }, {
    stepNumber: '05',
    title: 'Reflect',
    icon: RotateCcw,
    description: 'Review the outcomes of your actions and extract lessons for future situations. This step closes the loop by examining what worked, what did not, and why. Reflection builds institutional knowledge and personal wisdom, ensuring that each cycle through the method strengthens your capabilities.',
    example: 'After four sprints, the manager reviews metrics showing improved velocity and reduced bugs, gathers team feedback on the new process, documents lessons learned, and identifies one refinement: adding a requirements checklist for stakeholders.'
  }];
  return <>
      <Helmet>
        <title>The AdaptiVantage Method - Five-Step Framework for Adaptability</title>
        <meta name="description" content="Master the five-step AdaptiVantage Method: Observe, Assess, Adapt, Act, and Reflect. A proven framework for navigating complexity and uncertainty with confidence." />
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
                The AdaptivEDGE Method
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                A five-step framework designed to help you navigate complexity, make clear decisions, and perform confidently in uncertain environments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Method Steps Section */}
        <section className="section-padding bg-transparent">
          <div className="container-custom max-w-4xl">
            <div className="space-y-12">
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
            }}>
                  <MethodStepCard {...step} />
                  
                  {/* Real-world Example */}
                  <div className="mt-4 ml-0 md:ml-24 p-6 rounded-lg bg-muted/30 backdrop-blur-sm border border-border/50">
                    <p className="text-xs font-bold tracking-wider uppercase text-secondary mb-2">
                      Real-world application
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.example}
                    </p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-card/20 backdrop-blur-sm border-t border-border/50">
          <div className="container-custom text-center">
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
          }} className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-foreground">
                Ready to master the method?
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                Schedule a workshop to learn how to apply the AdaptivEDGE Method to your team's specific challenges.
              </p>
              <Button asChild className="button-primary px-8 py-6 text-base">
                <Link to="/contact">Schedule a Workshop</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};
export default MethodPage;