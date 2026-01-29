import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import DataDeletionAndRetentionPage from './pages/DataDeletionAndRetentionPage';
import ThriNethra from './pages/ThriNethra';
import Nethra from './pages/Nethra';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/nethra' element={<Nethra />} />
        <Route path='/thrinethra' element={<ThriNethra />} />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route path='/terms-of-service' element={<TermsOfServicePage />} />
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
