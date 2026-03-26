import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BackToTop from '@/components/BackToTop.jsx';
import { Button } from '@/components/ui/button';

const TeamsPage = () => {
  return (
    <>
      <Helmet>
        <title>Team Training | AdaptivEdge</title>
        <meta
          name="description"
          content="Train your team to operate effectively in real-world conditions through scenario-based and applied training."
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
                <span className="text-secondary">Team</span> Training
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground">
                Train your team to operate effectively in real-world conditions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                The problem
              </h2>

              <div className="space-y-3 text-lg text-muted-foreground">
                <p>- conditions change</p>
                <p>- pressure increases</p>
                <p>- situations are unclear</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHAT WE TRAIN */}
        <section className="section-padding bg-card/40 backdrop-blur-sm border-y border-border/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                What we train
              </h2>

              <div className="space-y-3 text-lg text-muted-foreground">
                <p>- decision-making under pressure</p>
                <p>- communication in uncertainty</p>
                <p>- problem-solving in real conditions</p>
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
                <p>- scenario-based training</p>
                <p>- real-world simulations</p>
                <p>- applied frameworks</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="section-padding bg-card/40 backdrop-blur-sm border-y border-border/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Use cases
              </h2>

              <div className="space-y-3 text-lg text-muted-foreground">
                <p>- operations teams</p>
                <p>- field teams</p>
                <p>- fast-moving environments</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DELIVERY */}
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Delivery
              </h2>

              <div className="space-y-3 text-lg text-muted-foreground">
                <p>- workshops</p>
                <p>- ongoing training</p>
                <p>- custom scenarios</p>
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
                Request Team Training
              </h2>

              <Button asChild className="button-secondary px-8 py-6 rounded-full">
                <Link to="/contact">Contact Us</Link>
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

export default TeamsPage;