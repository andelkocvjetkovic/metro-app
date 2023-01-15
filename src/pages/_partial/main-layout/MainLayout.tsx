import { useMemo, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useFavoriteCity } from '@app/hook/use-favorite-cities/useFavoriteCites';
import FavoriteCity from '@app/components/favorite-city/FavoriteCity';
import sortBy from 'sort-by';
import { ROUTE_SETTINGS } from '@app/constants';

function MainLayout() {
  const { cities } = useFavoriteCity();
  const [isAscSort, setIsAscSort] = useState(true);

  const sortedCities = useMemo(
    () => [...cities].sort(sortBy(''.concat(isAscSort ? '' : '-').concat('name'))),
    [cities, isAscSort]
  );

  return (
    <main className='grid grid-cols-12 h-screen bg-gray-200 overflow-hidden'>
      <aside className='col-span-3 p-4 flex flex-col gap-3 h-100 overflow-hidden'>
        <nav>
          <ul className='flex gap-3'>
            <Link to='/'>Home</Link>
            <Link to={`${ROUTE_SETTINGS}`}>Settings</Link>
          </ul>
        </nav>
        <h1 className='text-2xl font-medium flex justify-between items-center'>
          Favourites
          <button
            type='button'
            className='group inline-flex justify-center text-sm font-medium text-gray-700 disabled:text-gray-400 hover:text-gray-900'
            onClick={() => setIsAscSort(!isAscSort)}
            disabled={sortedCities.length === 0}
          >
            Sort {isAscSort ? 'Descending' : 'Ascending'}
          </button>
        </h1>
        <ul className='px-4 flex flex-col gap-1 h-100 overflow-x-auto'>
          {sortedCities.map(c => (
            <li className='text-xl' key={c.cityId}>
              <FavoriteCity {...c} />
            </li>
          ))}
        </ul>
      </aside>
      <div className='col-span-9 bg-gray-100 p-4 overflow-x-auto'>
        <Outlet />
      </div>
    </main>
  );
}

export default MainLayout;
