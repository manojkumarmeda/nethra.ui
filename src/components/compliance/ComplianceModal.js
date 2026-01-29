import React from 'react';
import PDFTextViewer from '../PDFTextViewer';

const ComplianceModal = ({ isOpen, documentType, onClose }) => {
  const getDocumentConfig = (type) => {
    const configs = {
      'privacy-policy': {
        url: '/documents/privacy-policy.pdf',
        title: 'Privacy Policy',
      },
      'terms-of-service': {
        url: '/documents/terms-of-service.pdf',
        title: 'Terms of Service',
      },
      'refund-policy': {
        url: '/documents/refund-policy.pdf',
        title: 'Refund Policy',
      },
      'about-us': {
        url: '/documents/about-us.pdf',
        title: 'About Us',
      },
    };

    return configs[type] || null;
  };

  if (!isOpen) return null;

  const config = getDocumentConfig(documentType);
  if (!config) return null;

  return (
    <PDFTextViewer pdfUrl={config.url} title={config.title} onClose={onClose} />
  );
};

export default ComplianceModal;
