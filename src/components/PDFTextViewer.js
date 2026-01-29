import React, { useState, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Set up PDF.js worker using local file
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

const PDFTextViewer = ({ pdfUrl, title, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [textContent, setTextContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const extractTextFromPDF = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch the PDF file
        const response = await fetch(pdfUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const pdfArrayBuffer = await response.arrayBuffer();

        // Load the PDF document
        const pdf = await pdfjsLib.getDocument({ data: pdfArrayBuffer })
          .promise;
        let fullText = '';

        // Extract text from each page
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const textContent = await page.getTextContent();

          // Combine text items
          const pageText = textContent.items
            .map((item) => item.str)
            .join(' ')
            .replace(/\s+/g, ' ')
            .trim();

          if (pageText) {
            fullText += (fullText ? '\n\n' : '') + pageText;
          }
        }

        setTextContent(fullText || 'No text content found in this document.');
      } catch (err) {
        console.error('Error extracting PDF text:', err);
        setError('Failed to load document content. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (pdfUrl) {
      extractTextFromPDF();
    }
  }, [pdfUrl]);

  const formatText = (text) => {
    // Basic text formatting
    return text
      .split('\n')
      .map((paragraph, index) => {
        if (!paragraph.trim()) return null;

        // Check if it's likely a heading (short line, all caps, or specific patterns)
        const isHeading =
          paragraph.length < 100 &&
          (paragraph === paragraph.toUpperCase() ||
            paragraph.includes('POLICY') ||
            paragraph.includes('TERMS') ||
            paragraph.includes('SECTION') ||
            paragraph.match(/^\d+\./));

        if (isHeading) {
          return (
            <h3
              key={index}
              className='text-lg font-bold text-teal-900 mt-6 mb-3'
            >
              {paragraph}
            </h3>
          );
        }

        return (
          <p key={index} className='mb-4 text-gray-700 leading-relaxed'>
            {paragraph}
          </p>
        );
      })
      .filter(Boolean);
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-lg shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col'>
        {/* Header */}
        <div className='flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-teal-50 to-blue-50'>
          <h2 className='text-2xl font-bold text-gray-900'>{title}</h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-white hover:bg-opacity-50 rounded-full'
            aria-label='Close'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className='flex-1 overflow-y-auto p-6'>
          {loading && (
            <div className='flex items-center justify-center h-full'>
              <div className='text-center'>
                <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4'></div>
                <p className='text-gray-600'>Loading document content...</p>
              </div>
            </div>
          )}

          {error && (
            <div className='flex items-center justify-center h-full'>
              <div className='text-center text-red-600'>
                <svg
                  className='w-16 h-16 mx-auto mb-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <p className='text-lg font-semibold mb-2'>
                  Error Loading Document
                </p>
                <p>{error}</p>
              </div>
            </div>
          )}

          {!loading && !error && textContent && (
            <div className='prose prose-gray max-w-none'>
              {formatText(textContent)}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className='p-4 border-t border-gray-200 flex justify-between items-center bg-gray-50'>
          <a
            href={pdfUrl}
            download
            className='text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2 transition-colors'
          >
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              />
            </svg>
            Download Original PDF
          </a>
          <button
            onClick={onClose}
            className='bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PDFTextViewer;
