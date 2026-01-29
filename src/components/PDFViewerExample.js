import React from "react";
import PDFViewer from "./PDFViewer";
import { usePDFViewer, PDF_DOCUMENTS } from "../hooks/usePDFViewer";

/**
 * Example component demonstrating how to use PDFViewer
 * You can integrate this into Footer, settings page, or any other component
 */
const PDFViewerExample = () => {
  const { isOpen, pdfConfig, openPDF, closePDF } = usePDFViewer();

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Legal Documents</h2>

      <div className="flex flex-wrap gap-4">
        {/* Terms of Service Button */}
        <button
          onClick={() =>
            openPDF(
              PDF_DOCUMENTS.TERMS_OF_SERVICE.url,
              PDF_DOCUMENTS.TERMS_OF_SERVICE.title
            )
          }
          className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
        >
          View Terms of Service
        </button>

        {/* Privacy Policy Button */}
        <button
          onClick={() =>
            openPDF(
              PDF_DOCUMENTS.PRIVACY_POLICY.url,
              PDF_DOCUMENTS.PRIVACY_POLICY.title
            )
          }
          className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
        >
          View Privacy Policy
        </button>

        {/* User Agreement Button */}
        <button
          onClick={() =>
            openPDF(
              PDF_DOCUMENTS.USER_AGREEMENT.url,
              PDF_DOCUMENTS.USER_AGREEMENT.title
            )
          }
          className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
        >
          View User Agreement
        </button>

        {/* Custom PDF Button */}
        <button
          onClick={() =>
            openPDF("/documents/custom-document.pdf", "Custom Document")
          }
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          View Custom PDF
        </button>
      </div>

      {/* PDF Viewer Modal */}
      {isOpen && (
        <PDFViewer
          pdfUrl={pdfConfig.url}
          title={pdfConfig.title}
          onClose={closePDF}
        />
      )}
    </div>
  );
};

export default PDFViewerExample;
