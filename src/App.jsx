
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import HomePage from '@/pages/HomePage.jsx';
import CorporateSolutionsPage from '@/pages/CorporateSolutionsPage.jsx';
import PersonalDevelopmentPage from '@/pages/PersonalDevelopmentPage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import ShopPage from '@/pages/ShopPage.jsx';

function App() {
  return (
    <div className="min-h-screen bg-transparent">
      <Router>
        <ScrollToTop />
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/corporate-solutions" element={<CorporateSolutionsPage />} />
          <Route path="/personal-development" element={<PersonalDevelopmentPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
