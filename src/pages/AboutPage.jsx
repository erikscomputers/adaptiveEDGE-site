import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Compass, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BackToTop from '@/components/BackToTop.jsx';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const philosophyPoints = [
    {
      icon: Target,
      title: 'Clarity',
      description: 'Clarity isn’t about knowing everything — it’s about cutting through noise and focusing on what actually matters when time is limited.'
    },
    {
      icon: Compass,
      title: 'Strategic Action',
      description: 'Action is only valuable when it’s deliberate. Move with intent, not impulse, and make decisions that hold up under pressure.'
    },
    {
      icon: Users,
      title: 'Adaptability',
      description: 'Conditions change. Plans fail. The ability to adjust quickly without losing effectiveness is what separates reaction from control.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About AdaptivEdge</title>
        <meta
          name="description"
          content="Built from real-world field experience. AdaptivEdge helps you think clearly, act effectively, and handle uncertainty."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-transparent">
        <Header />

        {/* Hero Section */}
        <section className="py-6 md:py-10 bg-card/20 backdrop-blur-sm border-b border-border/50">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                <span className="text-secondary">About</span> AdaptivEdge
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Built in the field. Refined under pressure. Designed for people who don’t have the luxury of hesitation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* First Section */}
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-muted-foreground"
            >
              <p>I’m a traveling field technician.</p>

              <p>
                My work doesn’t happen in controlled environments. It happens in places I’ve never been, 
                with systems I didn’t build, under timelines that don’t bend.
              </p>

              <p>
                When something breaks, there’s no time for overthinking. You assess, adapt, and act — or you fail.
              </p>

              <p>
                Over time, that pressure rewires you. You stop chasing perfect answers and start building reliable judgment.
              </p>

              <p>
                AdaptivEdge is built from that reality — not theory, not trends, but experience earned the hard way.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Second Section */}
        <section className="section-padding bg-card/40 backdrop-blur-sm border-y border-border/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold leading-tight mb-6 text-foreground">
                What this is
              </h2>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                This isn’t built in a classroom.
              </p>

              <div className="space-y-2 text-lg text-muted-foreground">
                <p>• real environments</p>
                <p>• real constraints</p>
                <p>• real consequences</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold leading-tight mb-6 text-foreground">
                Mission
              </h2>

              <div className="space-y-3 text-lg text-muted-foreground">
                <p>Think clearly when it matters.</p>
                <p>Act with purpose, not hesitation.</p>
                <p>Stay effective when nothing goes to plan.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="section-padding bg-card/40 backdrop-blur-sm border-y border-border/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold leading-tight mb-4 text-foreground">
                Principles
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {philosophyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-minimal p-8"
                >
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold leading-tight mb-6 text-foreground">
                Start where you are.
              </h2>

              <p className="text-muted-foreground mb-6">
                No theory. No fluff. Just tools you can actually use.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button asChild className="button-secondary px-6 rounded-full">
                  <Link to="/scenarios">Try a Scenario</Link>
                </Button>

                <Button asChild className="button-secondary px-6 rounded-full">
                  <Link to="/guides">Explore Field Guides</Link>
                </Button>

                <Button asChild className="button-secondary px-6 rounded-full">
                  <Link to="/training">Enter Training</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default AboutPage;