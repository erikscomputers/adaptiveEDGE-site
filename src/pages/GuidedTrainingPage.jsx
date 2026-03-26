import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BackToTop from '@/components/BackToTop.jsx';
import { Button } from '@/components/ui/button';

const GuidedTrainingPage = () => {
  return (
    <>
      <Helmet>
        <title>Guided Training | AdaptivEdge</title>
        <meta
          name="description"
          content="Work directly to sharpen how you think and operate in real-world conditions."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-transparent">
        <Header />

        {/* HERO */}
        <section className="py-6 md:py-10 bg-card/20 backdrop-blur-sm border-b border-border/50">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                <span className="text-secondary">Guided</span> Training
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground">
                Work directly with me to sharpen how you think and operate.
              </p>
            </motion.div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Who this is for
              </h2>

              <div className="space-y-3 text-lg text-muted-foreground">
                <p>- you’re in high-pressure environments</p>
                <p>- you deal with uncertainty regularly</p>
                <p>- you want to improve how you think, not just what you know</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="section-padding bg-card/40 backdrop-blur-sm border-y border-border/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                What we do
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                This is not generic coaching.
              </p>

              <div className="space-y-3 text-lg text-muted-foreground">
                <p>- break down real situations you’re facing</p>
                <p>- identify gaps in your thinking</p>
                <p>- build structured approaches you can reuse</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                How it works
              </h2>

              <div className="space-y-3 text-lg text-muted-foreground">
                <p>1. assess your current thinking</p>
                <p>2. work through real situations</p>
                <p>3. build repeatable systems</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* OUTCOME */}
        <section className="section-padding bg-card/40 backdrop-blur-sm border-y border-border/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Outcome
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                You leave with:
              </p>

              <div className="space-y-3 text-lg text-muted-foreground">
                <p>- clearer thinking under pressure</p>
                <p>- better decision-making</p>
                <p>- independent capability</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-transparent">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Apply for Guided Training
              </h2>

              <Button asChild className="button-secondary px-8 py-6 rounded-full">
                <Link to="/contact">Apply Now</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default GuidedTrainingPage;