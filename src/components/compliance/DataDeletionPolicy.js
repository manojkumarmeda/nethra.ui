const DataDeletionPolicy = () => {
  return (
    <div className='bg-white w-full max-w-4xl flex flex-col'>
      <div className='flex-1 overflow-y-auto p-6'>
        <div className='max-w-none prose prose-gray'>
          <div className='mb-5'>
            <h1 className='text-lg font-bold text-gray-900 mb-3 text-left'>
              Data Deletion Policy
            </h1>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              This policy explains how users can request deletion of their
              account and associated data in the Nethra Parent App.
            </p>
          </div>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              Requesting Data Deletion
            </h2>
            <p className='text-sm text-gray-700 mb-3 leading-relaxed text-left'>
              Users can request deletion of their account and associated data
              using one of the following methods.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              Option 1: Delete Account From the App
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              You can delete your account directly within the app.
            </p>
            <p className='text-sm text-gray-700 mb-3 leading-relaxed text-left'>
              Steps:
            </p>
            <ol className='text-sm list-decimal list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>Open the Nethra Parent App</li>
              <li className='leading-relaxed'>Go to Settings</li>
              <li className='leading-relaxed'>Tap Account Settings</li>
              <li className='leading-relaxed'>Select Delete Account</li>
              <li className='leading-relaxed'>Confirm the deletion request</li>
            </ol>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              Once confirmed, the account and associated data will be scheduled
              for deletion.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              Option 2: Request Deletion by Email
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              Users may also request data deletion by contacting our support
              team.
            </p>
            <p className='text-sm text-gray-700 mb-3 leading-relaxed text-left'>
              Email:{' '}
              <a
                href='mailto:support@vidurainfotech.com'
                className='text-blue-600 hover:underline'
              >
                support@vidurainfotech.com
              </a>
            </p>
            <p className='text-sm text-gray-700 mb-3 leading-relaxed text-left'>
              Please include:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>Registered email address</li>
              <li className='leading-relaxed'>Account name (if available)</li>
              <li className='leading-relaxed'>
                Subject line: Data Deletion Request
              </li>
            </ul>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              What Data Will Be Deleted
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              When an account deletion request is processed, the following data
              will be removed:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>User account information</li>
              <li className='leading-relaxed'>Parent profile data</li>
              <li className='leading-relaxed'>Child profile data</li>
              <li className='leading-relaxed'>
                Device information linked to the account
              </li>
              <li className='leading-relaxed'>
                Activity logs and monitoring data
              </li>
              <li className='leading-relaxed'>App usage statistics</li>
              <li className='leading-relaxed'>
                Location data associated with the account
              </li>
            </ul>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              Data Retention
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              Some limited data may be retained for legal or compliance
              purposes, including:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>Transaction records</li>
              <li className='leading-relaxed'>Payment receipts</li>
              <li className='leading-relaxed'>Security logs</li>
            </ul>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              These records are retained only where legally required.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              Processing Time
            </h2>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>
                Account deactivation: within 72 hours
              </li>
              <li className='leading-relaxed'>
                Complete data removal from active systems: within 7 days
              </li>
              <li className='leading-relaxed'>
                Backup deletion cycle: within 30 days
              </li>
            </ul>
          </section>

          <section className='mb-5'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              Contact
            </h2>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              For any questions regarding data deletion or privacy requests,
              email:{' '}
              <a
                href='mailto:support@vidurainfotech.com'
                className='text-blue-600 hover:underline'
              >
                support@vidurainfotech.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataDeletionPolicy;
