import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import DataDeletionAndRetentionPage from './pages/DataDeletionAndRetentionPage';
import Trinethra from './pages/Trinethra';
import Nethra from './pages/Nethra';
import TrinethraTermsPage from './pages/TrinethraTermsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/nethra' element={<Nethra />} />
        <Route path='/trinethra' element={<Trinethra />} />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route path='/terms-of-service' element={<TermsOfServicePage />} />
        <Route path='/trinethra-terms' element={<TrinethraTermsPage />} />
        <Route path='/refund-policy' element={<RefundPolicyPage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/contact' element={<ContactUsPage />} />
        <Route
          path='/data-deletion-policy'
          element={<DataDeletionAndRetentionPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
