import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Compass, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BackToTop from '@/components/BackToTop.jsx';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const navigate = useNavigate();

  const philosophyPoints = [
    {
      icon: Target,
      title: 'Clarity',
      description:
        'Clarity isn’t about knowing everything — it’s about cutting through noise and focusing on what actually matters when time is limited.'
    },
    {
      icon: Compass,
      title: 'Strategic Action',
      description:
        'Action is only valuable when it’s deliberate. Move with intent, not impulse, and make decisions that hold up under pressure.'
    },
    {
      icon: Users,
      title: 'Adaptability',
      description:
        'Conditions change. Plans fail. The ability to adjust quickly without losing effectiveness is what separates reaction from control.'
    }
  ];

  const missionPoints = [
    'Think clearly when it matters.',
    'Act with purpose, not hesitation.',
    'Stay effective when nothing goes to plan.'
  ];

  const realityPoints = [
    'real environments',
    'real constraints',
    'real consequences'
  ];

  const ctaButtons = [
    { label: 'Try a Scenario', link: '/scenarios' },
    { label: 'Explore Field Guides', link: '/field-guides' },
    { label: 'Enter Training', link: '/training' }
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

        {/* Hero */}
        <section className="py-20 bg-card/20 backdrop-blur-sm border-b border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent" />

          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="max-w-3xl mx-auto relative"
            >
              <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-secondary rounded-full" />

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                <span className="text-secondary">About</span> AdaptivEdge
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Built in the field. Refined under{' '}
                <span className="transition-colors duration-300 hover:text-secondary">
                  pressure
                </span>. Designed for people who don’t have the luxury of hesitation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent" />

          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto space-y-8 text-lg text-muted-foreground border-l border-border/50 pl-6"
            >
              {[
                'I’m a traveling field technician.',
                'My work doesn’t happen in controlled environments. It happens in places I’ve never been, with systems I didn’t build, under timelines that don’t bend.',
                'When something breaks, there’s no time for overthinking. You assess, adapt, and act — or you fail.',
                'Over time, that pressure rewires you. You stop chasing perfect answers and start building reliable judgment.',
                'AdaptivEdge is built from that reality — not theory, not trends, but experience earned the hard way.'
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0.6 }}
                  whileHover={{ x: 10, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 180 }}
                  className="cursor-default transition-colors duration-300 hover:text-foreground"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What this is */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-y border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent" />

          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              What this is
            </h2>

            <p className="text-lg text-muted-foreground mb-10">
              This isn’t built in a classroom.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {realityPoints.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.06, y: -6 }}
                  transition={{ type: 'spring', stiffness: 180 }}
                  className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:shadow-lg hover:shadow-secondary/20 cursor-default"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent" />

          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-10 text-foreground">
              Mission
            </h2>

            <div className="space-y-5">
              {missionPoints.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.7 }}
                  className="text-lg text-muted-foreground"
                >
                  {text}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="section-padding py-20 bg-card/40 backdrop-blur-sm border-y border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent" />

          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Principles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {philosophyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.7 }}
                  className="group p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-xl hover:shadow-secondary/20 cursor-default"
                >
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <point.icon className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {point.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary to-transparent" />

          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Start where you are.
            </h2>

            <p className="text-muted-foreground mb-10">
              No theory. No fluff. Just tools you can actually use.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              {ctaButtons.map((btn, i) => (
                <Button
                  key={i}
                  className="w-full sm:w-auto button-secondary group/btn hover:bg-[hsl(var(--accent))] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20"
                  onClick={() => navigate(btn.link)}
                >
                  {btn.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default AboutPage;