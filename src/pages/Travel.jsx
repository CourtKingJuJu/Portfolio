import { useState } from 'react';

import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

import countries from '../data/countries';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const countryNameToCode = {
  Canada: 'CAN',
  'United States of America': 'USA',
  France: 'FRA',
  'United Kingdom': 'GBR',
  Spain: 'ESP',
  Italy: 'ITA',
};

const Travel = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const visitedCountries = Object.entries(countries).filter(
    ([, country]) => country.visited
  );

  const selectedData = selectedCountry ? countries[selectedCountry] : null;

  return (
    <main className='min-h-screen bg-[#111116] px-4 pb-20 pt-28 text-white sm:px-6 md:px-10'>
      <div className='mx-auto max-w-6xl'>
        {/* Header */}
        <div className='mb-8 text-center'>
          <h1 className='text-3xl font-bold tracking-tight sm:text-4xl text-[#4F8EF7]'>
            Travel
          </h1>

          <p className='mx-auto mt-3 max-w-lg text-sm leading-6 text-zinc-400'>
            My parents collect magnets of every place they visit and I've always
            wanted to have my own thing. Hopefully one day the map will light
            up!
          </p>

          <div className='mt-5 text-[11px] uppercase tracking-[0.12em] text-zinc-500'>
            {visitedCountries.length} countries · click to explore
          </div>
        </div>

        {/* Map */}
        <div className='relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d0d12]'>
          <ComposableMap
            projection='geoEqualEarth'
            projectionConfig={{
              scale: 150,
            }}
            className='w-full'
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const countryName = geo.properties.name;

                  const countryCode = countryNameToCode[countryName];

                  const country = countries[countryCode];

                  const isVisited = country?.visited;

                  const isSelected = selectedCountry === countryCode;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      tabIndex={-1}
                      onClick={(event) => {
                        event.currentTarget.blur();

                        if (isVisited) {
                          setSelectedCountry(countryCode);
                        }
                      }}
                      className={
                        isVisited
                          ? isSelected
                            ? 'fill-[#70A5FF] stroke-[#111116] opacity-100 transition-all duration-200 focus:outline-none'
                            : 'fill-[#4F8EF7] stroke-[#111116] opacity-90 transition-all duration-200 focus:outline-none'
                          : 'fill-[#24242c] stroke-[#111116] opacity-65 focus:outline-none'
                      }
                      style={{
                        default: {
                          outline: 'none',
                          filter: isSelected
                            ? 'drop-shadow(0 0 6px #4F8EF7)'
                            : 'none',
                        },

                        hover: {
                          fill: isVisited ? '#70a5ff' : '#2b2b35',
                          stroke: '#111116',
                          strokeWidth: 0.7,
                          outline: 'none',
                          cursor: isVisited ? 'pointer' : 'default',
                          filter: isVisited
                            ? 'drop-shadow(0 0 5px rgba(79, 142, 247, 0.7))'
                            : 'none',
                        },

                        pressed: {
                          fill: '#4F8EF7',
                          outline: 'none',
                          filter: 'drop-shadow(0 0 6px #4F8EF7)',
                        },

                        focus: {
                          outline: 'none',
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>

          {/* Map legend */}
          <div className='absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border border-white/[0.07] bg-[#111116]/90 px-3 py-2 text-[10px] uppercase tracking-[0.08em] text-zinc-400 backdrop-blur'>
            <span className='h-2.5 w-2.5 rounded-sm bg-[#4F8EF7]' />
            Visited
          </div>
        </div>

        {/* Selected Country */}
        {selectedData && (
          <div className='mt-6 overflow-hidden rounded-2xl border border-[#4F8EF7]/20 bg-[#0d0d12]'>
            <div className='border-b border-white/[0.07] px-5 py-4 sm:px-6'>
              <div className='flex items-center justify-between gap-4'>
                <div>
                  <p className='text-[10px] uppercase tracking-[0.12em] text-[#4F8EF7]'>
                    {selectedData.trips.length}{' '}
                    {selectedData.trips.length === 1 ? 'trip' : 'trips'}
                  </p>

                  <h2 className='mt-1 text-xl font-semibold'>
                    {selectedData.name}
                  </h2>
                </div>

                <button
                  onClick={() => setSelectedCountry(null)}
                  className='text-xs text-zinc-500 transition hover:text-white'
                >
                  Close
                </button>
              </div>
            </div>

            <div className='divide-y divide-white/[0.06]'>
              {selectedData.trips.map((trip, index) => (
                <article key={index} className='px-5 py-5 sm:px-6'>
                  <div className='grid gap-5 md:grid-cols-[220px_1fr]'>
                    {/* Trip Image */}
                    {trip.image && (
                      <div className='overflow-hidden rounded-xl border border-white/[0.07] bg-[#111116]'>
                        <img
                          src={trip.image}
                          alt={`${trip.location} trip`}
                          className='h-44 w-full object-cover transition duration-500 hover:scale-105 md:h-full'
                        />
                      </div>
                    )}

                    {/* Trip Details */}
                    <div>
                      <div className='flex flex-wrap items-center gap-x-3 gap-y-1'>
                        <h3 className='font-medium text-white'>{trip.title}</h3>

                        <span className='text-[11px] text-zinc-500'>
                          {trip.location}
                        </span>

                        <span className='text-[11px] text-[#4F8EF7]'>
                          {trip.year}
                        </span>
                      </div>

                      <p className='mt-3 max-w-2xl text-sm leading-6 text-zinc-400'>
                        {trip.story}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {!selectedData && (
          <div className='mt-6 text-center text-xs text-zinc-600'>
            Select a highlighted country to see the story.
          </div>
        )}
      </div>
    </main>
  );
};

export default Travel;
