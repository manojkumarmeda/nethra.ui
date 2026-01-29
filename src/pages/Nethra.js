import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const summaryRows = [
  {
    position: 'Slight downward (10-20°)',
    impact: 'Least strain',
    recommendation: 'Best',
    tone: 'good',
  },
  {
    position: 'Eye level or above',
    impact: 'Dry eyes',
    recommendation: 'Limited',
    tone: 'warn',
  },
  {
    position: 'Lap / chest view',
    impact: 'High strain',
    recommendation: 'Avoid',
    tone: 'bad',
  },
  {
    position: 'Very close',
    impact: 'Myopia risk',
    recommendation: 'Avoid',
    tone: 'bad',
  },
  {
    position: 'Side-lying',
    impact: 'Eye imbalance',
    recommendation: 'Avoid',
    tone: 'bad',
  },
  {
    position: 'While moving',
    impact: 'Fatigue',
    recommendation: 'Short use',
    tone: 'warn',
  },
];

const distanceRows = [
  {
    label: 'Minimum',
    range: '13 inches (33 cm)',
    reason: 'Closer than this increases eye-focusing effort.',
  },
  {
    label: 'Ideal',
    range: '16-18 inches (40-45 cm)',
    reason: "About an arm's length; eyes stay relaxed.",
  },
  {
    label: 'Max Comfort',
    range: 'Up to 24 inches (60 cm)',
    reason: 'Further reduces internal eye muscle strain.',
  },
];

const angleCards = [
  {
    title: 'Neutral / Recommended',
    note: '10-20° downward',
    status: 'Recommended',
  },
  { title: 'High Angle', note: 'At or above eye level', status: 'Limit' },
  { title: 'Low Angle / Lap View', note: 'Looking downward', status: 'Avoid' },
  { title: 'Very Close Viewing', note: 'Too close to eyes', status: 'Avoid' },
  { title: 'Side / Lying Down', note: 'Lying on side', status: 'Avoid' },
  { title: 'Walking / Moving', note: 'While walking', status: 'Short use' },
];

const badgeStyles = {
  good: 'bg-emerald-500/15 text-emerald-600 border border-emerald-400/30',
  warn: 'bg-amber-500/15 text-amber-600 border border-amber-400/30',
  bad: 'bg-rose-500/15 text-rose-600 border border-rose-400/30',
};

const badgeIcon = {
  good: '✔',
  warn: '⚠',
  bad: '✖',
};

const Nethra = () => {
  return (
    <div className='App'>
      <div className='min-h-screen bg-gray-50 text-gray-900'>
        <Header />
        <div className='max-w-6xl mx-auto px-4 mt-5 sm:px-6 py-14 sm:py-16 space-y-12'>
          <header className='space-y-4 text-center'>
            <p className='text-xs uppercase tracking-[0.28em] text-teal-600'>
              Eye safety guide
            </p>
            <h1 className='text-3xl sm:text-4xl font-semibold leading-tight text-teal-600'>
              Nethra Mobile Viewing Safety
            </h1>
            <p className='text-gray-700 max-w-3xl mx-auto'>
              Practical, parent-ready guidance to reduce digital eye strain and
              protect children from myopia risk, fatigue, and poor posture while
              using mobile devices.
            </p>
          </header>

          <section className='bg-white border border-teal-200 rounded-2xl p-6 sm:p-8 shadow-lg'>
            <div className='flex items-center justify-between gap-3 flex-wrap mb-6'>
              <div>
                <h2 className='text-xl sm:text-2xl font-semibold text-teal-600'>
                  Quick Summary Table
                </h2>
                <p className='text-gray-700 text-sm sm:text-base'>
                  Positions, eye impact, and what parents should do.
                </p>
              </div>
            </div>
            <div className='overflow-hidden rounded-xl border border-teal-200 bg-teal-50/50'>
              <div className='hidden md:grid grid-cols-[2fr,1.2fr,1fr] bg-teal-100/50 text-teal-800 text-sm font-semibold px-5 py-3'>
                <span>Position</span>
                <span>Eye Impact</span>
                <span>Recommendation</span>
              </div>
              <div className='divide-y divide-teal-200'>
                {summaryRows.map((row) => (
                  <div
                    key={row.position}
                    className='grid grid-cols-1 md:grid-cols-[2fr,1.2fr,1fr] items-center px-5 py-4 gap-3 md:gap-4'
                  >
                    <div className='text-base text-gray-900'>
                      {row.position}
                    </div>
                    <div className='text-sm text-gray-700'>{row.impact}</div>
                    <div className='flex items-center gap-2'>
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                          badgeStyles[row.tone]
                        }`}
                      >
                        <span>{badgeIcon[row.tone]}</span>
                        <span>{row.recommendation}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className='grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-6 lg:gap-10 items-start'>
            <div className='bg-white border border-teal-200 rounded-2xl p-6 sm:p-8 shadow-lg space-y-4'>
              <div className='flex items-center gap-3'>
                <span className='h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_12px_rgba(13,148,136,0.6)]'></span>
                <h2 className='text-xl sm:text-2xl font-semibold text-teal-600'>
                  Ideal Viewing Distance
                </h2>
              </div>
              <p className='text-gray-700 text-sm sm:text-base'>
                Keep the screen around 16-18 inches (40-45 cm) from the eyes to
                minimize accommodation effort and digital eye strain.
              </p>
              <div className='overflow-hidden rounded-xl border border-teal-200 bg-teal-50/50'>
                <div className='hidden md:grid grid-cols-[0.8fr,1fr,1.4fr] bg-teal-100/50 text-teal-800 text-sm font-semibold px-5 py-3'>
                  <span>Measurement</span>
                  <span>Recommended Range</span>
                  <span>Why it matters</span>
                </div>
                <div className='divide-y divide-teal-200'>
                  {distanceRows.map((row) => (
                    <div
                      key={row.label}
                      className='grid grid-cols-1 md:grid-cols-[0.8fr,1fr,1.4fr] px-5 py-4 gap-3'
                    >
                      <div className='font-semibold text-gray-900'>
                        {row.label}
                      </div>
                      <div className='text-gray-800'>{row.range}</div>
                      <div className='text-gray-700 text-sm'>{row.reason}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='bg-white border border-teal-200 rounded-2xl p-6 sm:p-8 shadow-lg space-y-4'>
              <h2 className='text-xl sm:text-2xl font-semibold text-teal-600'>
                Why distance matters
              </h2>
              <p className='text-gray-700 text-sm sm:text-base'>
                Closer screens force the ciliary muscles to work harder, leading
                to fatigue and potential myopia progression. Increasing the
                distance relaxes focusing effort and reduces blue-light exposure
                intensity.
              </p>
              <ul className='space-y-2 text-gray-700 text-sm sm:text-base'>
                <li className='flex gap-2'>
                  <span className='text-teal-500'>•</span>
                  <span>
                    Use stands or pillows to keep phones out of the lap/chest
                    zone.
                  </span>
                </li>
                <li className='flex gap-2'>
                  <span className='text-teal-500'>•</span>
                  <span>
                    Remind kids to angle screens slightly downward, not at eye
                    level.
                  </span>
                </li>
                <li className='flex gap-2'>
                  <span className='text-teal-500'>•</span>
                  <span>
                    Encourage breaks every 20 minutes (20-20-20 rule).
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className='bg-white border border-teal-200 rounded-2xl p-6 sm:p-8 shadow-lg'>
            <div className='flex items-center justify-between gap-3 flex-wrap mb-6'>
              <div>
                <h2 className='text-xl sm:text-2xl font-semibold text-teal-600'>
                  Enable Distance Gurad
                </h2>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-2'>
              <p className='text-gray-700 text-sm max-w-lg sm:text-base'>
                Use Nethra's Distance Guard feature to monitor and maintain safe
                viewing distances automatically. It alerts when the device is
                too close, helping children develop healthy screen habits.
              </p>
              <img
                src='/assets/distance-guard.jpeg'
                alt='Nethra app interface showing safe distance settings and distance guard feature'
                className='max-w-xs sm:max-w-sm max-h-96 rounded-xl shadow-lg border border-teal-200 flex-1'
              />
            </div>
          </section>

          <section className='bg-white border border-teal-200 rounded-2xl p-6 sm:p-8 shadow-lg'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6'>
              <div>
                <h2 className='text-xl sm:text-2xl font-semibold text-teal-600'>
                  Mobile Viewing Angles & Eye Impact
                </h2>
                <p className='text-gray-700 text-sm sm:text-base'>
                  What postures help or hurt.
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5'>
              {angleCards.map((card) => (
                <div
                  key={card.title}
                  className='rounded-xl border border-teal-200 bg-teal-50/50 p-5 shadow-md flex flex-col gap-2'
                >
                  <div className='flex items-start justify-between gap-3'>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900'>
                        {card.title}
                      </h3>
                      <p className='text-gray-700 text-sm'>{card.note}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        card.status === 'Recommended'
                          ? badgeStyles.good
                          : card.status === 'Avoid'
                            ? badgeStyles.bad
                            : badgeStyles.warn
                      }`}
                    >
                      {card.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Nethra;
