import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import BackToTop from '@/components/BackToTop.jsx';

const HomePage = () => {
  const methodSteps = [
    { number: '01', title: 'Observe', description: 'Understand what’s happening before you act. Notice patterns, changes, and what doesn’t fit.' },
    { number: '02', title: 'Orient', description: 'Break the situation down. Identify risks, variables, and what matters most.' },
    { number: '03', title: 'Decide', description: 'Choose a direction with the information you have. Don’t wait for perfect clarity.' },
    { number: '04', title: 'Act', description: 'Execute. Adjust. Stay in motion.' }
  ];

  return (
    <>
      <Helmet>
        <title>AdaptivEdge - Adapt Faster. Think Clear. Act Decisively.</title>
        <meta
          name="description"
          content="Real-world problem-solving skills for unpredictable environments. Build decision-making, awareness, and adaptability under pressure."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-transparent">
        <Header />

        {/* HERO */}
        <section className="relative min-h-[85dvh] flex items-center justify-center text-center border-b border-border/50">
          <div className="container-custom">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Adapt Faster.<br />
              Think Clear.<br />
              <span className="text-accent">Act Decisively Under Pressure.</span>
            </h1>

            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-muted-foreground">
              Real-world problem-solving skills for unpredictable environments — built from experience, not theory.
            </p>

            <p className="text-sm text-muted-foreground mb-10">
              Lessons forged in high-pressure, real-world situations — where decisions had consequences.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="button-primary">
                <Link to="/training">Start Training</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/method">How It Works</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* REALITY CHECK */}
        <section className="section-padding border-b border-border/50">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Most People Aren’t Prepared for the Real World
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed space-y-4">
              Most people are trained for predictable situations, clear instructions, and controlled environments.
              <br /><br />
              But real life doesn’t work like that.
              <br /><br />
              Problems show up incomplete. Information is missing. Situations change fast. And pressure is real.
              <br /><br />
              Hesitation costs you. Overthinking slows you down.
              <br /><br />
              The people who perform under pressure don’t wait for clarity. They move, adjust, and stay in control.
            </p>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="section-padding border-b border-border/50">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What AdaptivEdge Does
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              AdaptivEdge trains you to think and act in real time — so you can handle situations without freezing, second-guessing, or waiting for perfect information.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>• Build situational awareness in unfamiliar environments</li>
              <li>• Break down complex situations quickly</li>
              <li>• Make decisions with incomplete information</li>
              <li>• Take action and adjust as things change</li>
            </ul>

            <p className="mt-6 font-medium">
              This isn’t motivation. This is mental conditioning for real-world performance.
            </p>
          </div>
        </section>

        {/* FIELD GUIDES */}
        <section className="section-padding border-b border-border/50">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Field Guides — Practical Tools for Real-World Situations
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              When you don’t have time to figure things out from scratch, you need something you can rely on.
              The AdaptivEdge Field Guides are built from real-world experience — designed to help you assess situations, make decisions, and act without hesitation.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>• Step-by-step problem-solving breakdowns</li>
              <li>• Situational awareness checklists</li>
              <li>• Decision-making frameworks under pressure</li>
              <li>• Real-world scenarios and responses</li>
              <li>• Compact, easy-to-use digital formats</li>
            </ul>

            <p className="mt-6 mb-6 font-medium">
              No fluff. No theory. Just tools that work when it matters.
            </p>

            <Button asChild>
              <Link to="/field-guides">Browse Field Guides</Link>
            </Button>
          </div>
        </section>

        {/* ORIGIN */}
        <section className="section-padding border-b border-border/50">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built in the Field
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              AdaptivEdge was built from years in the field as a traveling technician.
              <br /><br />
              Walking into unfamiliar environments. Solving problems under time pressure. Managing real consequences.
              <br /><br />
              No scripts. No hand-holding. No perfect conditions.
              <br /><br />
              Just learning how to read situations, make decisions, and act — over and over again.
              <br /><br />
              Over time, that repetition became a system.
            </p>
          </div>
        </section>

        {/* METHOD */}
        <section className="section-padding border-b border-border/50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The AdaptivEdge Method
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {methodSteps.map((step, index) => (
                <div key={index} className="card-minimal p-6 text-center">
                  <div className="mb-4 text-accent font-bold">{step.number}</div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>

            <p className="text-center mt-10 text-muted-foreground max-w-xl mx-auto">
              Most people hesitate somewhere in this process. That hesitation is where things start to break down.
            </p>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="section-padding border-b border-border/50">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Who This Is For
            </h2>

            <ul className="space-y-3 text-muted-foreground">
              <li>• Operate in unpredictable environments</li>
              <li>• Want to think clearly under pressure</li>
              <li>• Are tired of overthinking and second-guessing</li>
              <li>• Value practical skills over theory</li>
            </ul>

            <p className="mt-6">
              Whether in the field, in business, or in life — your ability to adapt is your advantage.
            </p>
          </div>
        </section>

        {/* OUTCOMES */}
        <section className="section-padding border-b border-border/50">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What You’ll Gain
            </h2>

            <ul className="space-y-3 text-muted-foreground">
              <li>• Faster, clearer decision-making</li>
              <li>• Confidence in uncertain situations</li>
              <li>• Better control under stress</li>
              <li>• Stronger awareness of people and environments</li>
              <li>• The ability to solve problems without waiting for help</li>
            </ul>

            <p className="mt-6">
              You don’t eliminate uncertainty. You get better at handling it.
            </p>
          </div>
        </section>

        {/* TRAINING */}
        <section className="section-padding border-b border-border/50 text-center">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How You Build Your Edge
            </h2>

            <ul className="space-y-3 text-muted-foreground mb-8">
              <li>• Field-tested breakdowns from real scenarios</li>
              <li>• Practical thinking frameworks</li>
              <li>• Situational awareness training</li>
              <li>• Real-world problem-solving insights</li>
              <li>• Weekly lessons from life on the road</li>
            </ul>

            <Button asChild size="lg" className="button-primary">
              <Link to="/training">Start Building Your Edge</Link>
            </Button>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="section-padding border-b border-border/50 text-center">
          <div className="container-custom max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Difference
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              This isn’t about becoming perfect.
              <br /><br />
              It’s about becoming capable.
              <br /><br />
              Capable of walking into the unknown… reading the situation… making a decision… and figuring it out in real time.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section-padding text-center">
          <div className="container-custom max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              When There’s No Clear Answer…
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              You don’t need perfect information. You need a way to think. A way to decide. A way to act. And the ability to adjust when things change.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="button-primary">
                <Link to="/training">Start Training</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Request In-Person Training</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link to="/method">Learn About The Method</Link>
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