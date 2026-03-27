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
        <section className="relative min-h-[85dvh] flex items-center justify-center overflow-hidden border-b border-border/50 bg-gradient-to-br from-secondary/10 to-transparent">
          <div className="relative z-10 container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight">
                Adapt Faster. Think Clear. Perform Under Pressure.
              </h1>

              <p className="text-lg md:text-xl max-w-[65ch] mx-auto mb-8 text-muted-foreground leading-relaxed">
                Real-world problem-solving skills for unpredictable environments — built from life in the field, not theory.
              </p>

              <p className="text-sm md:text-base mb-10 text-muted-foreground italic">
                Lessons forged in high-pressure, real-world situations — where failure has consequences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="button-secondary px-8 py-6">
                  <Link to="/training">Start Training</Link>
                </Button>

                <Button asChild size="lg" className="button-secondary px-8 py-6">
                  <Link to="/videos">Watch How It Works</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* REALITY CHECK SECTION */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-b border-border/50 relative overflow-hidden">
          <div className="container-custom max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
            >
              Most People Aren’t Prepared for the Real World
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed mb-6"
            >
              Most people are trained for predictable situations, clear instructions, and controlled environments.
              <br />
              But real life doesn’t work like that.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="list-disc list-inside text-lg text-muted-foreground mb-6 space-y-1"
            >
              <li>Problems show up incomplete.</li>
              <li>Information is missing.</li>
              <li>Pressure is real.</li>
              <li>And hesitation costs you.</li>
            </motion.ul>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl font-semibold text-foreground"
            >
              And hesitation costs you. You won’t.
            </motion.p>
          </div>
        </section>

        {/* WHAT WE DO SECTION */}
        <section className="section-padding py-20 relative overflow-hidden">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold mb-8 text-foreground"
            >
              What AdaptivEdge Does
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg text-muted-foreground mb-6"
            >
              AdaptivEdge teaches you how to think when there’s no clear answer.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="list-disc list-inside text-lg text-muted-foreground mb-6 space-y-2"
            >
              <li>Build situational awareness in unfamiliar environments</li>
              <li>Make decisions with incomplete information</li>
              <li>Solve problems under pressure</li>
              <li>Stay calm and controlled when things go sideways</li>
            </motion.ul>

            <p className="text-lg text-foreground italic">
              This isn’t motivation. This is mental conditioning for real-world performance.
            </p>
          </div>
        </section>

        {/* FIELD GUIDES SECTION */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-b border-border/50 relative overflow-hidden">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold mb-6 text-foreground"
            >
              Field Guides — Practical Tools for Real-World Situations
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
            >
              When you don’t have time to figure it out from scratch, you need something you can rely on.
              <br />
              The AdaptivEdge Field Guides are built from real-world experience — designed to give you clear, actionable frameworks you can use immediately.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="list-disc list-inside text-lg text-muted-foreground mb-6 space-y-2"
            >
              <li>Step-by-step problem-solving breakdowns</li>
              <li>Situational awareness checklists</li>
              <li>Decision-making frameworks under pressure</li>
              <li>Real-world scenarios and responses</li>
              <li>Compact, easy-to-use digital formats</li>
            </motion.ul>

            <Button asChild size="lg" className="button-secondary px-8 py-6">
              <Link to="/field-guides">Browse Field Guides</Link>
            </Button>
          </div>
        </section>

        {/* ORIGIN SECTION */}
        <section className="section-padding py-20 relative overflow-hidden">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold mb-6 text-foreground"
            >
              Built in the Field
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              AdaptivEdge was built from years in the field as a traveling technician.
              <br />
              Walking into unfamiliar environments.
              <br />
              Solving problems under time pressure.
              <br />
              Managing real consequences.
              <br />
              No scripts. No hand-holding. No perfect conditions.
              <br />
              Just problem-solving in real time.
              <br />
              Over time, that experience turned into a system.
            </motion.p>
          </div>
        </section>

        {/* FRAMEWORK SECTION */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-b border-border/50 relative overflow-hidden">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold mb-6 text-foreground"
            >
              The AdaptivEdge Method
            </motion.h2>

            <motion.ol
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="list-decimal list-inside text-lg text-muted-foreground mb-6 space-y-2"
            >
              <li>Observe — Understand the environment before acting</li>
              <li>Orient — Identify risks, variables, and priorities</li>
              <li>Decide — Choose a path with the information you have</li>
              <li>Act — Execute, adjust, and stay in control</li>
            </motion.ol>

            <p className="text-lg text-foreground italic">
              Most people skip steps. That’s why they panic, hesitate, or make things worse.
            </p>
          </div>
        </section>

        {/* WHO IT'S FOR SECTION */}
        <section className="section-padding py-20 relative overflow-hidden">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold mb-6 text-foreground"
            >
              Who This Is For
            </motion.h2>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="list-disc list-inside text-lg text-muted-foreground mb-6 space-y-2"
            >
              <li>Operate in unpredictable environments</li>
              <li>Want to think clearly under pressure</li>
              <li>Are tired of overthinking and second-guessing</li>
              <li>Value practical skills over theory</li>
            </motion.ul>

            <p className="text-lg text-foreground italic">
              Whether in the field, in business, or in life — the ability to adapt is your advantage.
            </p>
          </div>
        </section>

        {/* OUTCOMES SECTION */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-b border-border/50 relative overflow-hidden">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold mb-6 text-foreground"
            >
              What You’ll Gain
            </motion.h2>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="list-disc list-inside text-lg text-muted-foreground mb-6 space-y-2"
            >
              <li>Faster, clearer decision-making</li>
              <li>Confidence in uncertain situations</li>
              <li>Better control under stress</li>
              <li>Stronger awareness of people and environments</li>
              <li>The ability to solve problems without waiting for help</li>
            </motion.ul>

            <p className="text-lg text-foreground italic">
              You don’t eliminate uncertainty. You get better at handling it.
            </p>
          </div>
        </section>

        {/* CONTENT / TRAINING SECTION */}
        <section className="section-padding py-20 relative overflow-hidden">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold mb-6 text-foreground"
            >
              How You Build Your Edge
            </motion.h2>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="list-disc list-inside text-lg text-muted-foreground mb-6 space-y-2"
            >
              <li>Field-tested breakdowns (real scenarios)</li>
              <li>Tactical thinking frameworks</li>
              <li>Situational awareness training</li>
              <li>Travel and real-world problem-solving insights</li>
              <li>Weekly lessons from life on the road</li>
            </motion.ul>

            <Button asChild size="lg" className="button-secondary px-8 py-6">
              <Link to="/training">Start Building Your Edge</Link>
            </Button>
          </div>
        </section>

        {/* PHILOSOPHY SECTION */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-b border-border/50 relative overflow-hidden">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold mb-6 text-foreground"
            >
              The Difference
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              This isn’t about becoming perfect.
              <br />
              It’s about becoming capable.
              <br />
              Capable of walking into the unknown…
              <br />
              and figuring it out.
            </motion.p>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="section-padding py-20 text-center relative overflow-hidden">
          <div className="container-custom max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold mb-6 text-foreground"
            >
              When There’s No Clear Answer…
            </motion.h2>

            <p className="text-lg text-muted-foreground mb-8">
              How you think is everything.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="button-secondary px-8 py-6 rounded-full">
                <Link to="/training">Start Training</Link>
              </Button>

              <Button asChild className="button-secondary px-8 py-6 rounded-full">
                <Link to="/field-guides">Browse Field Guides</Link>
              </Button>

              <Button asChild className="button-secondary px-8 py-6 rounded-full">
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