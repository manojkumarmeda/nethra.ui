const DataDeletionPolicy = () => {
  return (
    <div className='bg-white w-full max-w-4xl flex flex-col'>
      <div className='flex-1 overflow-y-auto p-6'>
        <div className='max-w-none prose prose-gray'>
          <div className='mb-5'>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              This policy outlines how we handle your data when your
              subscription ends and your rights regarding data deletion.
            </p>
          </div>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              1. Data Retention After Subscription Ends
            </h2>
            <p className='text-sm text-gray-700 mb-3 leading-relaxed text-left'>
              When a user's subscription expires, is canceled, or is not
              renewed, the application retains the user's personal and
              app-related data for <strong>30 days</strong> from the
              subscription end date.
            </p>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              This retention period allows users to restore their account, renew
              their subscription, or export their data if needed.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              2. Data Deletion After Retention Period
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              After the 30-day retention period, all user data is permanently
              deleted from our systems. This deletion is irreversible and
              includes:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>Account information</li>
              <li className='leading-relaxed'>User-generated content</li>
              <li className='leading-relaxed'>
                Usage data associated with the account
              </li>
              <li className='leading-relaxed'>
                Any stored preferences or settings
              </li>
            </ul>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              3. User-Initiated Deletion
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              Users may request data deletion at any time by:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>
                Using the in-app "Delete Account" option (if available), or
              </li>
              <li className='leading-relaxed'>
                Contacting support through the provided contact details
              </li>
            </ul>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              If deletion is requested before the 30-day retention period ends,
              data will be deleted earlier unless retention is required by law.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              4. Legal & Compliance Obligations
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              Certain data may be retained beyond the 30-day period if required
              to comply with:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>Legal obligations</li>
              <li className='leading-relaxed'>Regulatory requirements</li>
              <li className='leading-relaxed'>
                Fraud prevention or dispute resolution
              </li>
            </ul>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              Such data is securely stored and deleted once retention is no
              longer legally required.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              5. Data Security
            </h2>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              All retained data during the 30-day period is protected using
              appropriate technical and organizational security measures to
              prevent unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section className='mb-5'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              6. Policy Updates
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              This data deletion policy may be updated periodically. Users will
              be notified of significant changes through the app or other
              appropriate means.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataDeletionPolicy;
