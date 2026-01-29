import React from 'react';

const AboutUs = () => {
  return (
    <div className='bg-white w-full max-w-4xl flex flex-col'>
      <div className='flex justify-start p-6 pb-0'>
        <h2 className='text-base font-bold text-gray-900 mb-0 text-left'>
          Vidura Infotech LLP
        </h2>
      </div>
      <div className='flex-1 overflow-y-auto p-6 pt-2'>
        <div className='max-w-none prose prose-gray'>
          <div className='mb-5'>
            <p className='text-sm text-gray-700 mb-3 leading-relaxed text-left'>
              Vidura Infotech LLP is a startup technology company focused on
              creating a{' '}
              <strong>
                healthy and safe digital environment for kids and children.
              </strong>{' '}
              We develop thoughtfully designed applications that help young
              users engage with technology in a positive, balanced, and
              age-appropriate way—giving parents peace of mind in a
              digital-first world.
            </p>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              We understand that today's children grow up surrounded by screens.
              That's why our mission is simple yet powerful:{' '}
              <strong>to make digital experiences healthier for kids.</strong>{' '}
              Every app we build is designed with care, keeping children's
              well-being, safety, and development at the center.
            </p>
          </div>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              About Vidura Infotech LLP
            </h2>
            <p className='text-sm text-gray-700 mb-3 leading-relaxed text-left'>
              What truly sets Vidura Infotech LLP apart is our commitment
              to&nbsp;
              <strong>
                100% transparency and strict no data collection.
              </strong>{' '}
              We do not collect, store, or sell children's personal data—ever.
              Parents can trust that our apps are built to protect privacy and
              respect families, without hidden tracking or intrusive analytics.
            </p>
            <p className='text-sm text-gray-700 mb-3 leading-relaxed text-left'>
              As a startup, we are driven by purpose, innovation, and
              responsibility. We believe technology should support learning,
              creativity, and healthy habits—not addiction or overexposure. By
              combining responsible design with modern technology, we aim to
              build digital tools that children enjoy and parents trust.
            </p>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              At Vidura Infotech LLP, we're not just building apps—we're helping
              shape a{' '}
              <strong>safer digital future for the next generation.</strong>
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-2 text-left'>
              Our Mission
            </h2>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              To provide a healthy, safe, and trustworthy digital environment
              for kids and children.
            </p>
          </section>

          <section className='mb-5 border-b-2 border-gray-200 pb-3'>
            <h2 className='text-base font-bold text-gray-900 mb-2 text-left'>
              Our Vision
            </h2>
            <p className='text-sm text-gray-700 leading-relaxed text-left'>
              To become a trusted name for parents seeking responsible,
              child-friendly digital solutions.
            </p>
          </section>

          <section className='mb-5'>
            <h2 className='text-base font-bold text-gray-900 mb-2 text-left'>
              Our Values
            </h2>
            <ul className='text-sm list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4 text-left'>
              <li className='leading-relaxed'>
                <strong>Child Safety First:</strong> Kids' well-being is our top
                priority
              </li>
              <li className='leading-relaxed'>
                <strong>Privacy & Transparency:</strong> 100% clear policies
                with no data collection
              </li>
              <li className='leading-relaxed'>
                <strong>Responsible Innovation:</strong> Technology designed
                with purpose and care
              </li>
              <li className='leading-relaxed'>
                <strong>Parent Trust:</strong> Building confidence through
                honesty and simplicity
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
