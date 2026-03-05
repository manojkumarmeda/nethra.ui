const PrivacyPolicy = () => {
  return (
    <div className='bg-white w-full max-w-4xl flex flex-col'>
      <div className='flex justify-start p-6 pb-0'>
        <p className='text-sm font-semibold text-gray-700'>
          Effective Date: 26-02-2026
        </p>
      </div>

      <div className='flex-1 overflow-y-auto p-6'>
        <div className='max-w-none prose prose-gray'>
          <div className='mb-5'>
            <p className='text-sm text-gray-700 mb-3 leading-relaxed text-left'>
              <strong>PRIVACY POLICY</strong>
              <br />
              Tri-Nethra – Parental Control Application
            </p>
          </div>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              1. App Purpose
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              Tri-Nethra is a parental control and digital supervision
              application intended solely for use by parents or legal guardians
              to monitor and manage their own child’s device usage.
            </p>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              The app is not designed for surveillance of adults or individuals
              without consent.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              2. Data Collection Summary
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              Tri-Nethra collects only the following information:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>
                Account Information: Parent Email Address (for authentication
                and account management)
              </li>
              <li className='leading-relaxed'>
                Device Information: Child Device Make and Child Device Model
              </li>
            </ul>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              We do not collect names, contacts, photos, browsing history, or
              personal identifiers of the child.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              3. Sensitive Permissions &amp; How They Are Used
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              Tri-Nethra may request access to the following Android permissions
              strictly for parental control functionality:
            </p>

            <h3 className='text-sm font-semibold text-gray-800 mb-3 text-left'>
              A. Call Log Permission
            </h3>
            <p className='text-sm text-gray-700 mb-2 leading-relaxed text-left'>
              Used only to display call history to the authorized parent.
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>Not stored on our servers</li>
              <li className='leading-relaxed'>Not shared</li>
              <li className='leading-relaxed'>
                Not transmitted for advertising
              </li>
            </ul>

            <h3 className='text-sm font-semibold text-gray-800 mb-3 text-left'>
              B. SMS Permission
            </h3>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              Currently limited to viewing promotional SMS metadata for parental
              awareness. No SMS content is stored on our servers nor shared to
              any third party.
            </p>

            <h3 className='text-sm font-semibold text-gray-800 mb-3 text-left'>
              C. Location Permission (Foreground/Background)
            </h3>
            <p className='text-sm text-gray-700 mb-2 leading-relaxed text-left'>
              Used to allow parents to view real-time device location.
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>
                Location data is not stored on Tri-Nethra servers
              </li>
              <li className='leading-relaxed'>Not sold/used for advertising</li>
              <li className='leading-relaxed'>
                Not retained beyond functional necessity
              </li>
            </ul>

            <h3 className='text-sm font-semibold text-gray-800 mb-3 text-left'>
              D. Accessibility Service
            </h3>
            <p className='text-sm text-gray-700 mb-2 leading-relaxed text-left'>
              Used exclusively to:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>
                Block/unblock selected apps for a digital healthy environment
              </li>
              <li className='leading-relaxed'>Enforce screen time limits</li>
            </ul>
            <p className='text-sm text-gray-700 mb-2 leading-relaxed text-left'>
              Tri-Nethra does not use Accessibility Services for:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-2 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>Keystroke logging</li>
              <li className='leading-relaxed'>Reading private messages</li>
              <li className='leading-relaxed'>
                Capturing sensitive information
              </li>
            </ul>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              Accessibility access is used strictly for parental control
              features.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              4. Zero Cloud Storage Architecture
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              Tri-Nethra operates on a local-device monitoring model:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>
                Monitoring data remains on the child device and/or the
                authorized parent device.
              </li>
              <li className='leading-relaxed'>
                No call logs, SMS data, app usage data, or location history are
                stored on Tri-Nethra servers.
              </li>
              <li className='leading-relaxed'>
                We do not maintain remote backups of child monitoring data.
              </li>
            </ul>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              Only minimal account-related data (Parent Email) is stored for
              authentication purposes.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              5. No Data Sale or Commercialization
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              Tri-Nethra:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>Does not sell personal data</li>
              <li className='leading-relaxed'>Does not rent personal data</li>
              <li className='leading-relaxed'>
                Does not share data with advertisers
              </li>
              <li className='leading-relaxed'>
                Does not use child data for marketing
              </li>
              <li className='leading-relaxed'>
                Does not engage in behavioral profiling
              </li>
            </ul>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              We strictly operate a non-data-monetization model.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              6. Data Sharing
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              We do not share user data with third parties except:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>If required by law</li>
              <li className='leading-relaxed'>
                To comply with valid legal requests
              </li>
              <li className='leading-relaxed'>To protect user safety</li>
            </ul>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              We do not share monitoring data with any third party.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              7. Data Retention
            </h2>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>
                Parent Email: Retained while account is active
              </li>
              <li className='leading-relaxed'>
                Child Device Info: Retained while device is linked
              </li>
              <li className='leading-relaxed'>
                Monitoring Data: Not stored on our servers
              </li>
            </ul>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              Users may request deletion at any time via:
              <br />
              📧 support@vidurainfotech.com
            </p>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              Upon deletion request, associated account data will be permanently
              removed within a reasonable timeframe.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              8. Parental Consent &amp; Responsibility
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              Tri-Nethra is intended solely for lawful use by parents or legal
              guardians.
            </p>
            <p className='text-sm text-gray-700 mb-2 leading-relaxed text-left'>
              By installing and using the app, the parent confirms:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>
                They are the legal guardian of the monitored device user.
              </li>
              <li className='leading-relaxed'>
                They have informed the child (where age-appropriate).
              </li>
              <li className='leading-relaxed'>
                They are using the app in compliance with applicable laws.
              </li>
            </ul>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              The app must not be used for unlawful surveillance.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              9. Children’s Privacy Compliance
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              Tri-Nethra does not knowingly collect personal information
              directly from children.
            </p>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              The app is controlled and operated exclusively by parents.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              10. Security Measures
            </h2>
            <p className='text-sm text-gray-700 mb-2 leading-relaxed text-left'>
              We implement reasonable technical safeguards including:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>
                Secure authentication mechanisms
              </li>
              <li className='leading-relaxed'>Encrypted communication</li>
              <li className='leading-relaxed'>
                Restricted internal access controls
              </li>
            </ul>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              11. Transparency &amp; Verification
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              Tri-Nethra maintains a transparent privacy model.
            </p>
            <p className='text-sm text-gray-700 mb-2 leading-relaxed text-left'>
              We affirm:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>
                Monitoring data is not stored on our servers.
              </li>
              <li className='leading-relaxed'>
                No hidden data collection occurs.
              </li>
            </ul>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              Where legally appropriate, our technical architecture may be
              subject to review or audit to validate compliance with stated
              privacy practices.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              12. Compliance With Laws &amp; Platform Policies
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              Tri-Nethra is designed to comply with:
            </p>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>
                Information Technology Act, 2000 (India)
              </li>
              <li className='leading-relaxed'>
                Applicable data protection regulations
              </li>
              <li className='leading-relaxed'>
                Google Play Developer Program Policies
              </li>
              <li className='leading-relaxed'>Google Play User Data Policy</li>
              <li className='leading-relaxed'>Android Permission Policies</li>
            </ul>
          </section>

          <section className='mb-5'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              13. Contact
            </h2>
            <p className='text-sm text-gray-700 mb-4 leading-relaxed text-left'>
              For privacy concerns:
            </p>
            <div className='bg-gray-50 p-4 rounded-lg text-left'>
              <p className='text-sm text-gray-700 leading-relaxed'>
                Tri-Nethra Support
                <br />
                📧 support@vidurainfotech.com
                <br />
                Vidura Infotech Llp
                <br />
                Plot no 4 &amp; 5, Flat no 302, Kedar Enclave,
                <br />
                Pragathi Nagar, JNTU Kukatpally,
                <br />
                Hyderabad-500090,
                <br />
                Telangana--India
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
