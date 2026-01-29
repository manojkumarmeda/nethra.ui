import { useState } from 'react';
import PrivacyPolicy from '../components/compliance/PrivacyPolicy';
import TermsOfService from '../components/compliance/TermsOfService';
import RefundPolicy from '../components/compliance/RefundPolicy';
import AboutUs from '../components/compliance/AboutUs';

export const usePDFViewer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pdfConfig, setPdfConfig] = useState({ url: '', title: '' });

  const openPDF = (url, title) => {
    setPdfConfig({ url, title });
    setIsOpen(true);
  };

  const closePDF = () => {
    setIsOpen(false);
    setPdfConfig({ url: '', title: '' });
  };

  return {
    isOpen,
    pdfConfig,
    openPDF,
    closePDF,
  };
};

// PDF Document constants for easy access
// Note: These now open as text-extracted content via PDFTextViewer
export const POLICY_DOCUMENTS = {
  TERMS_OF_SERVICE: {
    content: <TermsOfService />,
    title: 'Terms & Conditions (T&C) – App Service',
  },
  PRIVACY_POLICY: {
    content: <PrivacyPolicy />,
    title: 'Privacy Policy  (India – DPDP Act Compliant)',
  },
  REFUND_POLICY: {
    content: <RefundPolicy />,
    title: 'Refund Policy',
  },
  ABOUT_US: {
    content: <AboutUs />,
    title: 'About Us',
  },
};
