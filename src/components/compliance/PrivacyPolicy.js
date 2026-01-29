const PrivacyPolicy = () => {
  return (
    <div className='bg-white w-full max-w-4xl flex flex-col'>
      <div className='flex justify-start p-6 pb-0'>
        <p className='text-sm font-semibold text-gray-700'>
          Last Updated: 11-12-2025
        </p>
      </div>
      <div className='flex-1 overflow-y-auto p-6'>
        <div className='max-w-none prose prose-gray'>
          <div className='mb-5'>
            <p className='text-sm text-gray-700 mb-3 leading-relaxed text-left'>
              This Privacy Policy describes how our application ("App",
              "Service", "we", "us", "our") collects, uses, stores, and protects
              your personal information.
            </p>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              By using our App, you agree to the practices described in this
              policy.
            </p>
          </div>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              1. Information We Collect
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              We only collect information necessary to provide and improve our
              services.
            </p>

            <h3 className='text-sm font-semibold text-gray-800 mb-3 text-left'>
              1.1 Email Address
            </h3>
            <p className='text-sm text-gray-700 mb-3 leading-relaxed text-left'>
              We collect your <strong>email ID</strong> for:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>Account creation / login</li>
              <li className='leading-relaxed'>Payment confirmation</li>
              <li className='leading-relaxed'>
                Communication related to service updates, support &
                notifications
              </li>
            </ul>

            <h3 className='text-sm font-semibold text-gray-800 mb-3 text-left'>
              1.2 City Location (Non-Precise)
            </h3>
            <p className='text-sm text-gray-700 mb-3 leading-relaxed text-left'>
              We collect <strong>only your city name</strong> (NOT exact
              address, NOT GPS location).
            </p>
            <p className='text-sm text-gray-700 mb-2 leading-relaxed text-left'>
              Purpose:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-2 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>
                To understand the number of users in different cities
              </li>
              <li className='leading-relaxed'>
                Improve our service distribution and planning
              </li>
            </ul>
            <p className='text-sm text-gray-700 leading-relaxed text-left mb-6'>
              We <strong>do NOT collect</strong> your exact location, address,
              GPS coordinates, or real-time tracking.
            </p>
            <h3 className='text-sm font-semibold text-gray-800 mb-3 text-left'>
              1.3 Payment Information
            </h3>
            <p className='text-sm text-gray-700 mb-3 leading-relaxed text-left'>
              We accept payments only via:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed font-bold'>UPI</li>
              <li className='leading-relaxed font-bold'>
                QR Code / Scan & Pay
              </li>
            </ul>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              We collect:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>
                Transaction ID (UPI reference number)
              </li>
              <li className='leading-relaxed'>
                Payment status (success/failure)
              </li>
            </ul>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              We <strong>do NOT collect or store:</strong>
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>Card details</li>
              <li className='leading-relaxed'>Bank account numbers</li>
              <li className='leading-relaxed'>UPI PIN</li>
              <li className='leading-relaxed'>
                Sensitive financial information
              </li>
            </ul>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              All payments are processed securely through your bank/UPI app by
              third party payment gateway. We{' '}
              <strong>
                do not store or access sensitive payment information
              </strong>{' '}
              such as Bank details or UPI PIN.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              2. How We Use Your Information
            </h2>
            <p className='text-gray-700 text-sm mb-4 leading-relaxed text-left'>
              We use the collected information for:
            </p>
            <ul className='list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left text-sm'>
              <li className='leading-relaxed'>
                Verifying payments and sending payment confirmations
              </li>
              <li className='leading-relaxed'>
                Providing access to paid services/features
              </li>
              <li className='leading-relaxed'>
                Improving app performance and user experience
              </li>
              <li className='leading-relaxed'>
                Maintaining security and preventing fraud
              </li>
              <li className='leading-relaxed'>
                Internal analytics (city-level only)
              </li>
            </ul>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              We <strong>never sell, rent, or trade</strong> your personal
              information.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              3. Data Sharing
            </h2>
            <p className='text-gray-700 mb-4 leading-relaxed text-left text-sm'>
              We may share information only with:
            </p>
            <ul className='list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left text-sm'>
              <li className='leading-relaxed'>
                <strong>Payment gateways / UPI networks</strong> (for payment
                processing){' '}
              </li>
              <li className='leading-relaxed'>
                <strong>Service providers</strong> (email services, analytics)
              </li>
            </ul>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              We <strong>do NOT share</strong> your details with advertisers or
              third-party marketing companies.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              4. Data Storage & Security
            </h2>
            <p className='text-gray-700 mb-4 leading-relaxed text-left text-sm'>
              We follow industry-standard security practices:
            </p>
            <ul className='list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left text-sm'>
              <li className='leading-relaxed'>
                Encrypted communication (HTTPS / SSL)
              </li>
              <li className='leading-relaxed'>Secure storage of user data</li>
              <li className='leading-relaxed'>
                Limited access to authorized personnel only
              </li>
            </ul>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              Your data is stored on servers located in<strong> India</strong>,
              following{' '}
              <strong>
                Digital Personal Data Protection Act (DPDP Act 2023)
              </strong>{' '}
              guidelines.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              5. User Rights (Under DPDP Act 2023)
            </h2>
            <p className='text-gray-700 mb-4 leading-relaxed text-left text-sm'>
              You have the right to:
            </p>
            <ul className='list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left text-sm'>
              <li className='leading-relaxed'>Access your personal data</li>
              <li className='leading-relaxed'>
                Correct inaccurate information
              </li>
              <li className='leading-relaxed'>Request deletion of your data</li>
              <li className='leading-relaxed'>Withdraw consent</li>
              <li className='leading-relaxed'>Know how your data is used</li>
            </ul>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              To exercise your rights, contact us at:
            </p>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              📧 <strong>support@vidurainfotech.com</strong>
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              6. Children's Privacy
            </h2>
            <p className='text-gray-700 mb-4 leading-relaxed text-left text-sm'>
              We do not Collect/Store/Track any kind of personal information
              whether the services are used by an Adult/Child.
            </p>
            <p className='text-gray-700 mb-4 leading-relaxed text-left text-sm'>
              We only collect your email address for the purpose of:
            </p>
            <ul className='list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left text-sm'>
              <li className='leading-relaxed'>
                Communicating important updates about our services.
              </li>
              <li className='leading-relaxed'>
                Sending notifications related to your account or subscription
                (if any).
              </li>
            </ul>
            <p className='text-gray-700 mb-4 leading-relaxed text-left text-sm'>
              We do not collect any other personal information, including from
              children or minors.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              7. Cookies & Tracking
            </h2>
            <p className='text-gray-700 mb-4 leading-relaxed text-left text-sm'>
              Our App <strong>does not use</strong> cookies or third-party
              tracking tools unless explicitly mentioned in future updates.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              8. Changes to This Policy
            </h2>
            <p className='text-gray-700 mb-4 leading-relaxed text-left text-sm'>
              We may update this Privacy Policy from time to time.
            </p>
            <p className='text-gray-700 mb-4 leading-relaxed text-left text-sm'>
              Updated policies will be posted with a revised{' '}
              <strong>“Last Updated”</strong> date.
            </p>
          </section>

          <section className='mb-5'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              9. Contact Us
            </h2>
            <p className='text-gray-700 mb-4 leading-relaxed text-left text-sm'>
              If you have any questions or requests regarding this Privacy
              Policy, please contact us at:
            </p>
            <div className='bg-gray-50 p-4 rounded-lg text-left'>
              <p className='text-gray-700 leading-relaxed text-sm'>
                📧 support@vidurainfotech.com
                <br />
                🏢 Vidura Infotech Llp
                <br />
                📍 Hyderabad, India
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
