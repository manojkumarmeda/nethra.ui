import React from 'react';

const RefundPolicy = () => {
  return (
    <div className='bg-white w-full max-w-4xl flex flex-col'>
      <div className='flex-1 overflow-y-auto p-4'>
        <div className='max-w-none prose prose-gray'>
          <div className='mb-5'>
            <p className='text-sm text-gray-700 mb-3 leading-relaxed text-left'>
              Thank you for choosing <strong>Nethra App</strong>.
            </p>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              Please read our <strong>Strict No-Refund Policy</strong> carefully
              before making any payment.
            </p>
          </div>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              **1. No Refunds on Any Payments
            </h2>
            <p className='text-sm text-gray-700 mb-3 leading-relaxed text-left'>
              All payments made through <strong>UPI, QR/Scan</strong>, or any
              other accepted method are{' '}
              <strong>final and non-refundable</strong>.
            </p>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              Once a payment is completed and the service is activated,{' '}
              <strong>no cancellations, refunds, or reversals</strong> will be
              issued under any circumstances.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              **2. Digital Services
            </h2>
            <p className='text-sm text-gray-700 mb-3 leading-relaxed text-left font-bold'>
              All purchases made for our digital services are non-refundable.
            </p>
            <p className='text-sm text-gray-700 leading-relaxed text-left font-bold'>
              Since our product/service is delivered digitally and access is
              provided immediately after purchase; we follow a strict no-refund
              policy under any circumstances.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              **3. Duplicate Payment Exception
            </h2>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              Refunds may be considered{' '}
              <strong>
                only if a customer is charged twice for the same service,
              </strong>{' '}
              and after verifying transaction records.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              **4. Technical Issues
            </h2>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              If you face technical problems with activation, access, or payment
              confirmation, we will provide{' '}
              <strong>full support and resolution.</strong>
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              **5. User Responsibility
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              Before making a payment, users must verify:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>Correct UPI app</li>
              <li className='leading-relaxed'>Correct QR code</li>
              <li className='leading-relaxed'>Correct amount</li>
              <li className='leading-relaxed'>
                Accurate email ID and account details
              </li>
            </ul>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              We are not responsible for payments sent to the wrong UPI ID or
              wrong QR code.
            </p>
          </section>

          <section className='mb-5'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              **6. Contact Us for Support
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              If you need help with activation or technical issues, contact:
            </p>
            <p className='text-sm text-gray-700 mb-1 leading-relaxed text-left font-bold'>
              Nethra App
            </p>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left font-bold'>
              📧 support@vidurainfotech.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
