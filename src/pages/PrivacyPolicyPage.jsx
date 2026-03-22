import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BackToTop from '@/components/BackToTop.jsx';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | AdaptivEdge</title>
        <meta
          name="description"
          content="Learn how AdaptivEdge collects, uses, and protects your personal information."
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
                Privacy <span className="text-secondary">Policy</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Your privacy matters. Learn how AdaptivEdge collects, uses, and protects your information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding bg-transparent">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 text-muted-foreground"
            >
              <p>
                AdaptivEdge is committed to protecting your privacy and providing transparency in how we handle your personal information.
              </p>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Information We Collect</h2>
                <p>
                  We only collect personal information that you voluntarily provide to us, such as your name, email address,
                  phone number, or other details when you contact us, sign up for services, or request information.
                </p>
                <p className="mt-2">
                  We may also collect non-personal information such as browser type, IP address, and pages visited to improve
                  website performance and user experience.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
                <p>
                  We use your information to respond to inquiries, provide services, send updates, and improve our offerings.
                  We do not sell your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Cookies</h2>
                <p>
                  Our website may use cookies to enhance your browsing experience. These cookies help with navigation and
                  understanding how visitors use the site. You can disable cookies through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Sharing of Information</h2>
                <p>
                  We may share your information with trusted partners only as necessary to deliver services or comply with legal
                  obligations. All partners are required to maintain confidentiality and protect your data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. However, no method of
                  transmission over the internet is completely secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Your Choices</h2>
                <p>
                  You may opt out of communications at any time by using unsubscribe links or contacting us directly at
                  info@adaptivedge.com.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party sites. We are not responsible for their privacy practices and
                  encourage you to review their policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Updates to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on this page and are effective
                  immediately upon posting.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-2 font-medium text-foreground">
                  info@adaptivedge.com
                </p>
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

export default PrivacyPolicyPage;