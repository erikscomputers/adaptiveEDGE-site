import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import BackToTop from '@/components/BackToTop.jsx';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="group relative p-6 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-accent/10 to-transparent" />
      <div className="relative z-10">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const HomePage = () => {
  const whatWeDo = [
    { title: "Situational awareness", description: "Operate effectively in unfamiliar and changing environments." },
    { title: "Rapid breakdown", description: "Simplify complex situations into actionable parts." },
    { title: "Decision-making", description: "Act with incomplete information without hesitation." },
    { title: "Adaptive execution", description: "Adjust in real time as conditions change." }
  ];

  const fieldGuides = [
    "Step-by-step problem-solving breakdowns",
    "Situational awareness checklists",
    "Decision-making frameworks under pressure",
    "Real-world scenarios and responses",
    "Compact, easy-to-use digital formats"
  ];

  const outcomes = [
    "Faster, clearer decision-making",
    "Confidence in uncertain situations",
    "Better control under stress",
    "Stronger awareness of people and environments",
    "Solve problems without waiting for help"
  ];

  const methodSteps = [
    { number: "01", title: "Observe", description: "Understand what’s happening before you act." },
    { number: "02", title: "Orient", description: "Break the situation down and identify what matters." },
    { number: "03", title: "Decide", description: "Choose direction without waiting for perfect clarity." },
    { number: "04", title: "Act", description: "Execute, adjust, and stay in motion." }
  ];

  return (
    <>
      <Helmet>
        <title>AdaptivEdge</title>
      </Helmet>

      <div className="min-h-screen flex flex-col">

        <Header />

        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-center justify-center text-center border-b border-border/50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(26,188,156,0.08),transparent_60%)]" />

          <div className="container-custom relative z-10 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Adapt Faster.<br />
              Think Clear.<br />
              <span className="text-accent">Act Decisively Under Pressure.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Real-world problem-solving skills for unpredictable environments — built from experience, not theory.
            </p>

            <p className="text-sm text-muted-foreground mb-10">
              Lessons forged in high-pressure situations — where decisions had consequences.
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
        <section className="section-padding text-center border-b border-border/50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Most People Aren’t Prepared for the Real World
            </h2>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                "Problems show up incomplete",
                "Information is missing",
                "Situations change fast",
                "Pressure is real"
              ].map((item, i) => (
                <div key={i} className="card-minimal p-5">
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-10 text-lg text-muted-foreground">
              The people who perform under pressure don’t wait for clarity. They move, adjust, and stay in control.
            </p>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="section-padding text-center border-b border-border/50">
          <div className="container-custom max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What AdaptivEdge Does
            </h2>

            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Train your ability to think and act in real time — without hesitation or overthinking.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {whatWeDo.map((item, i) => (
                <FeatureCard key={i} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* FIELD GUIDES */}
        <section className="section-padding text-center border-b border-border/50">
          <div className="container-custom max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Field Guides
            </h2>

            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Practical tools for real-world situations — built to work under pressure.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {fieldGuides.map((item, i) => (
                <FeatureCard key={i} title={item} />
              ))}
            </div>

            <div className="mt-10">
              <Button asChild>
                <Link to="/field-guides">Browse Field Guides</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* METHOD */}
        <section className="section-padding text-center border-b border-border/50">
          <div className="container-custom max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              The AdaptivEdge Method
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {methodSteps.map((step, i) => (
                <div key={i} className="relative p-6 rounded-xl border bg-card/30">
                  <div className="absolute top-4 right-4 text-4xl text-accent/20 font-bold">
                    {step.number}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUTCOMES */}
        <section className="section-padding text-center border-b border-border/50">
          <div className="container-custom max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              What You’ll Gain
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {outcomes.map((item, i) => (
                <FeatureCard key={i} title={item} />
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section-padding text-center">
          <div className="container-custom max-w-3xl mx-auto p-10 rounded-2xl bg-card/50 backdrop-blur-xl border border-border/50 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              When There’s No Clear Answer…
            </h2>

            <p className="text-muted-foreground mb-8">
              You need a way to think, decide, and act — then adjust in real time.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="button-primary">
                <Link to="/training">Start Training</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">In-Person Training</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link to="/method">The Method</Link>
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