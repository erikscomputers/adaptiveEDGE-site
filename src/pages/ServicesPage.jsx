
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Users, Compass, Plane, User, Target, Wrench, Briefcase } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

const ServicesPage = () => {
  const corporateServices = [
    {
      icon: Shield,
      title: 'Operational resilience training',
      description: 'Build organizational capacity to maintain performance under pressure, recover from disruptions, and adapt to changing conditions through structured training programs.',
      variant: 'primary',
    },
    {
      icon: Users,
      title: 'Adaptable hiring strategy consulting',
      description: 'Design recruitment and talent development processes that identify candidates with strong adaptability skills and build teams capable of thriving in dynamic environments.',
      variant: 'default',
    },
    {
      icon: Compass,
      title: 'Scenario-based team workshops',
      description: 'Strengthen team decision-making and collaboration through immersive exercises that simulate real-world challenges and build practical problem-solving capabilities.',
      variant: 'default',
    },
    {
      icon: Plane,
      title: 'Travel and remote work optimization',
      description: 'Develop systems and practices that enable distributed teams and traveling professionals to maintain productivity, communication, and well-being across locations and time zones.',
      variant: 'primary',
    },
  ];

  const personalServices = [
    {
      icon: User,
      title: 'Executive coaching',
      description: 'One-on-one coaching for leaders focused on developing clear thinking, strategic adaptability, and confident decision-making in high-stakes environments.',
      variant: 'primary',
    },
    {
      icon: Target,
      title: 'Adaptability and resilience training',
      description: 'Individual skill development programs that build mental frameworks for navigating uncertainty, managing stress, and maintaining performance during change.',
      variant: 'default',
    },
    {
      icon: Wrench,
      title: 'Troubleshooting frameworks',
      description: 'Learn structured approaches to diagnosing problems, identifying root causes, and implementing effective solutions in complex technical and organizational systems.',
      variant: 'default',
    },
    {
      icon: Briefcase,
      title: 'Performance strategies for traveling professionals',
      description: 'Personalized coaching on maintaining peak performance, managing energy, and building sustainable routines while working across multiple locations and time zones.',
      variant: 'primary',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services - Corporate Solutions & Personal Development | AdaptiVantage</title>
        <meta name="description" content="Explore AdaptiVantage services: operational resilience training, executive coaching, team workshops, and performance strategies for professionals and organizations." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{letterSpacing: '-0.02em'}}>
                Our Services
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-[65ch] mx-auto text-primary-foreground/90">
                Tailored solutions for organizations and individuals seeking to build resilience, adaptability, and clear decision-making capabilities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Corporate Solutions Section */}
        <section className="section-spacing bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-foreground" style={{letterSpacing: '-0.02em'}}>
                Corporate solutions
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-[65ch]">
                Comprehensive programs designed to strengthen organizational resilience and team performance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {corporateServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Remote Work Image Section */}
        <section className="py-12 bg-muted">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1688733718768-3673547a8b5d"
                alt="Professional working remotely with laptop in modern workspace"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Personal Development Section */}
        <section className="section-spacing bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-foreground" style={{letterSpacing: '-0.02em'}}>
                Personal development services
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-[65ch]">
                Individual coaching and training programs for professionals committed to continuous growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {personalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
