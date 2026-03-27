import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from '@/components/ScrollToTop.jsx';

import HomePage from '@/pages/HomePage.jsx';
import GuidedTrainingPage from '@/pages/GuidedTrainingPage.jsx';
import ScenariosPage from '@/pages/ScenariosPage.jsx';
import TeamsPage from '@/pages/TeamsPage.jsx';
import TrainingPage from '@/pages/TrainingPage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import FieldGuidesPage from '@/pages/FieldGuidesPage.jsx';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage.jsx';
import TermsOfServicePage from '@/pages/TermsOfServicePage.jsx';
import CorporateSolutionsPage from '@/pages/CorporateSolutionsPage.jsx';
import PersonalDevelopmentPage from '@/pages/PersonalDevelopmentPage.jsx';
import ProductPage from '@/pages/products/ProductPage.jsx';

function App() {
  return (
    <div className="min-h-screen bg-transparent">
      <Router>
        <ScrollToTop />
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/field-guides" element={<FieldGuidesPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/scenarios" element={<ScenariosPage />} />
          <Route path="/guided-training" element={<GuidedTrainingPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/corporate-solutions" element={<CorporateSolutionsPage />} />
          <Route path="/personal-development" element={<PersonalDevelopmentPage />} />

          {/* ✅ ADD THIS ROUTE */}
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
