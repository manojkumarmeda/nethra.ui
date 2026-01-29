import { useState } from 'react';

export const useCompliance = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [documentType, setDocumentType] = useState(null);

  const openDocument = (type) => {
    setDocumentType(type);
    setIsOpen(true);
  };

  const closeDocument = () => {
    setIsOpen(false);
    setDocumentType(null);
  };

  const openPrivacyPolicy = () => openDocument('privacy-policy');
  const openTermsOfService = () => openDocument('terms-of-service');
  const openRefundPolicy = () => openDocument('refund-policy');
  const openAboutUs = () => openDocument('about-us');

  return {
    isOpen,
    documentType,
    openDocument,
    closeDocument,
    openPrivacyPolicy,
    openTermsOfService,
    openRefundPolicy,
    openAboutUs,
  };
};

export default useCompliance;
