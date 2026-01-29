import React, { useEffect } from 'react';

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'default',
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  className = '',
  headerClassName = '',
  contentClassName = '',
  footerClassName = '',
  footer = null,
}) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (closeOnEscape && event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, closeOnEscape]);

  // Handle backdrop click
  const handleBackdropClick = (event) => {
    if (closeOnBackdropClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  // Size configurations
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'max-w-md';
      case 'large':
        return 'max-w-6xl';
      case 'xlarge':
        return 'max-w-7xl';
      case 'full':
        return 'max-w-[95vw]';
      default:
        return 'max-w-4xl';
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 overflow-hidden'>
      {/* Backdrop */}
      <div
        className='fixed inset-0 bg-black bg-opacity-50 transition-opacity'
        onClick={handleBackdropClick}
        aria-hidden='true'
      />

      {/* Modal container */}
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        <div
          className={`
            bg-white rounded-lg shadow-2xl w-full h-[90vh] flex flex-col
            transform transition-all duration-300 ease-out
            ${getSizeClasses()}
            ${className}
          `}
          role='dialog'
          aria-modal='true'
          aria-labelledby={title ? 'modal-title' : undefined}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div
              className={`
              flex items-center justify-between p-2 border-b border-gray-200
              bg-gradient-to-r from-teal-50 to-blue-50 rounded-t-lg
              ${headerClassName}
            `}
            >
              {title && (
                <h2
                  id='modal-title'
                  className='text-base md:text-base font-bold text-gray-900'
                >
                  {title}
                </h2>
              )}

              {showCloseButton && (
                <button
                  onClick={onClose}
                  className='
                    text-gray-500 hover:text-gray-700 transition-colors p-2 
                    hover:bg-white hover:bg-opacity-50 rounded-full
                    focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
                  '
                  aria-label='Close modal'
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
              )}
            </div>
          )}

          {/* Content */}
          <div
            className={`
            flex-1 overflow-y-auto p-2
            ${contentClassName}
          `}
          >
            {children}
          </div>

          {/* Footer */}
          {footer && (
            <div
              className={`
              p-4 border-t border-gray-200 bg-gray-50 rounded-b-lg
              flex justify-end items-center gap-3
              ${footerClassName}
            `}
            >
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Default footer with close button
export const DefaultModalFooter = ({ onClose, closeText = 'Close' }) => (
  <button
    onClick={onClose}
    className='
      bg-teal-600 text-white px-6 py-2 rounded-lg 
      hover:bg-teal-700 transition-colors font-medium
      focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
    '
  >
    {closeText}
  </button>
);

// Confirmation modal variant
export const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmButtonClass = 'bg-red-600 hover:bg-red-700 text-white',
  cancelButtonClass = 'bg-gray-300 hover:bg-gray-400 text-gray-800',
}) => {
  const footer = (
    <>
      <button
        onClick={onClose}
        className={`
          px-4 py-2 rounded-lg font-medium transition-colors
          focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
          ${cancelButtonClass}
        `}
      >
        {cancelText}
      </button>
      <button
        onClick={onConfirm}
        className={`
          px-4 py-2 rounded-lg font-medium transition-colors
          focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
          ${confirmButtonClass}
        `}
      >
        {confirmText}
      </button>
    </>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size='small'
      footer={footer}
    >
      <div className='text-center'>
        <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4'>
          <svg
            className='h-6 w-6 text-red-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
            />
          </svg>
        </div>
        <p className='text-gray-700 text-lg'>{message}</p>
      </div>
    </Modal>
  );
};

// Loading modal variant
export const LoadingModal = ({
  isOpen,
  message = 'Loading...',
  title = 'Please wait',
}) => (
  <Modal
    isOpen={isOpen}
    onClose={() => {}} // Can't close loading modal
    title={title}
    size='small'
    showCloseButton={false}
    closeOnBackdropClick={false}
    closeOnEscape={false}
  >
    <div className='text-center'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4'></div>
      <p className='text-gray-600'>{message}</p>
    </div>
  </Modal>
);

export default Modal;
