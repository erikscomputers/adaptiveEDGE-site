import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BackToTop from '@/components/BackToTop.jsx';

const TermsOfServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | AdaptivEdge</title>
        <meta
          name="description"
          content="Review the Terms of Service for AdaptivEdge, including policies on data protection, security, and acceptable use."
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
                Terms of <span className="text-secondary">Service</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                The policies and standards that govern your use of AdaptivEdge services.
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

              {/* Overview */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Overview</h2>
                <p>
                  A primary focus of AdaptivEdge is the protection of user data and the responsible delivery of our services.
                  All employees and contractors are required to adhere to strict confidentiality, intellectual property,
                  and data protection agreements.
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-2">
                  <li>Only retaining data necessary to provide services</li>
                  <li>Removing unnecessary data when no longer required</li>
                  <li>Protecting sensitive data through encryption and secure practices</li>
                  <li>Maintaining strong safeguards for client and user information</li>
                </ul>
                <p className="mt-3">
                  For any concerns, please contact: <strong>info@adaptivedge.com</strong>
                </p>
              </div>

              {/* Information Security Policy */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Information Security Policy</h2>
                <p>User data is protected against unauthorized access, disclosure, or modification and must be:</p>
                <ul className="list-disc ml-6 mt-3 space-y-2">
                  <li>Secured at rest</li>
                  <li>Secured in transit</li>
                  <li>Securely destroyed when no longer needed</li>
                  <li>Accessible only to authorized individuals</li>
                </ul>
                <ul className="list-disc ml-6 mt-3 space-y-2">
                  <li>Use of up-to-date security software and patches</li>
                  <li>Firewalls and access controls to prevent unauthorized access</li>
                  <li>Regular system and network security scans</li>
                </ul>
                <p className="mt-3">
                  Any suspected security breach must be reported immediately to <strong>info@adaptivedge.com</strong>.
                </p>
              </div>

              {/* Application Security */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Application Security & Assessments</h2>
                <p>
                  All AdaptivEdge applications and services are evaluated for security risks before deployment and during updates.
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-2">
                  <li>Major releases undergo full security assessments</li>
                  <li>Third-party integrations are reviewed for compliance</li>
                  <li>Updates are assessed based on risk level</li>
                  <li>Emergency updates may be deployed with follow-up review</li>
                </ul>
                <p className="mt-3">
                  Identified risks are categorized (High, Medium, Low) and addressed accordingly to maintain system integrity.
                </p>
              </div>

              {/* Safeguards */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Safeguards Policy</h2>
                <p className="mb-2 font-medium text-foreground">Internal Access Controls</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Access granted only on a need-to-know basis</li>
                  <li>Strong password requirements enforced</li>
                  <li>Access approvals required from leadership</li>
                </ul>

                <p className="mt-4 mb-2 font-medium text-foreground">Physical & Infrastructure Security</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Secure hosting environments with controlled access</li>
                  <li>Monitoring systems and surveillance protections</li>
                  <li>Industry-standard compliance practices where applicable</li>
                </ul>
              </div>

              {/* Data Breach Policy */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Data Breach Policy</h2>
                <p>
                  Any suspected breach or exposure of data must be reported immediately to
                  <strong> info@adaptivedge.com</strong>.
                </p>
                <p className="mt-2">
                  AdaptivEdge will promptly investigate incidents and take appropriate action, including:
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-2">
                  <li>Containing and mitigating the breach</li>
                  <li>Securing affected systems</li>
                  <li>Notifying impacted users when appropriate</li>
                </ul>
                <p className="mt-3">
                  Where required, regulatory authorities will be notified within applicable legal timeframes.
                </p>
              </div>

              {/* General Terms */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">General Terms</h2>
                <p>
                  By using AdaptivEdge services, you agree to comply with these terms and all applicable laws and regulations.
                  We reserve the right to modify these terms at any time, with updates effective upon posting.
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

export default TermsOfServicePage;