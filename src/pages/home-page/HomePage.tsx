import { Fragment, useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import allCities from '@app/cities';
import { useFavoriteCity } from '@app/hook/use-favorite-cities/useFavoriteCites';
import { Combobox, Transition } from '@headlessui/react';
import { StarIcon as StarIconSolid, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import type { City } from '@app/types/city';
import { matchSorter } from 'match-sorter';

function HomePage() {
  const { addNewCity, deleteByCityId, cities } = useFavoriteCity();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const filteredCities = useMemo(
    () =>
      query.trim() === '' ? allCities.slice(0, 5) : matchSorter(allCities, query, { keys: ['name', 'lat', 'lng'] }).slice(0, 5),
    [query]
  );

  return (
    <div className='flex flex-col gap-11'>
      <h1 className='text-gray-900 text-4xl text-center mt-20'>Meteo App</h1>
      <div className='w-full max-w-2xl mx-auto flex flex-col'>
        <Combobox
          onChange={(c: City) => {
            navigate(`/${c.cityId}`);
          }}
        >
          <div className='relative mt-1'>
            <div className='relative w-full cursor-default overflow-hidden rounded-lg  bg-white text-left shadow-md'>
              <Combobox.Input
                className='w-full border-none pl-4 pr-12 py-2 h-9 text-sm leading-5 text-gray-900 focus:outline-pink-400 rounded-lg'
                displayValue={(c: City) => c.name}
                onChange={event => setQuery(event.target.value)}
                placeholder='Search cities by name or latitude or longitude'
              />
              <Combobox.Button className='absolute inset-y-0 right-0 flex items-center justify-center mr-4 w-6 text-pink-500 h-100'>
                <MagnifyingGlassIcon />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
              afterLeave={() => setQuery('')}
            >
              <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {filteredCities.length === 0 && query.trim() !== '' ? (
                  <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>Nothing found.</div>
                ) : (
                  filteredCities.map(c => (
                    <Combobox.Option
                      as={Link}
                      to={`/${c.cityId}`}
                      key={c.cityId}
                      className={({ active }) =>
                        `relative cursor-default select-none px-2 flex justify-between items-center h-9 ${
                          active ? 'bg-pink-50' : ''
                        }`
                      }
                      value={c}
                    >
                      <span className={`block truncate`}>{c.name}</span>
                      <button
                        className='flex px-2 h-100'
                        onClick={e => {
                          e.preventDefault();
                          if (cities.some(fc => fc.cityId === c.cityId)) deleteByCityId(c.cityId);
                          else addNewCity(c);
                        }}
                      >
                        {cities.some(fc => fc.cityId === c.cityId) ? (
                          <StarIconSolid className='w-6 h-6' />
                        ) : (
                          <StarIconOutline className='w-6 h-6' />
                        )}
                      </button>
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </div>
  );
}

export default HomePage;
