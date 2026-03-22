import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@AdaptivEdge.com',
      link: 'mailto:info@AdaptivEdge.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (706) 750-7385',
      link: 'tel:+17067507385',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Remote & On-site Services Available',
      link: null,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact AdaptivEdge - Schedule a Consultation | AdaptivEdge</title>
        <meta name="description" content="Get in touch with AdaptivEdge to discuss corporate solutions, executive coaching, or team workshops. Schedule a consultation today." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-transparent">
        <Header />

        {/* Hero Section */}
        <section className="section-padding bg-card/20 backdrop-blur-sm border-b border-border/50">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Ready to build the ability to adapt quickly, execute a plan, and lead with an edge? Let’s start a conversation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2"
              >
                <div className="card-minimal p-8 md:p-10">
                  <h2 className="text-2xl font-semibold mb-8 text-foreground">
                    Send us a message
                  </h2>
                  <ContactForm />
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-xl font-semibold mb-6 text-foreground">
                    Contact information
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/10 text-secondary">
                            <info.icon className="h-5 w-5" />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">
                            {info.title}
                          </p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-base font-medium text-foreground hover:text-secondary transition-colors duration-200"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-base font-medium text-foreground">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-minimal p-6 bg-muted/50">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Office hours</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
                    We will get back to you in 1-2 business days.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;