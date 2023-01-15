import { useEffect, useMemo, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useFavoriteCity } from '@app/hook/use-favorite-cities/useFavoriteCites';
import FavoriteCity from '@app/components/favorite-city/FavoriteCity';
import sortBy from 'sort-by';
import { ROUTE_SETTINGS } from '@app/constants';
import SideBar from '@app/components/side-bar/SideBar';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import IconButton from '@app/components/icon-button/IconButton';
import NavLink from '@app/components/nav-link/NavLink';

function MainLayout() {
  const { cities } = useFavoriteCity();
  const [isAscSort, setIsAscSort] = useState(true);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const location = useLocation();

  const sortedCities = useMemo(
    () => [...cities].sort(sortBy(''.concat(isAscSort ? '' : '-').concat('name'))),
    [cities, isAscSort]
  );

  useEffect(() => {
    setIsSideBarOpen(false);
  }, [location]);

  return (
    <main className='grid grid-cols-12 h-screen bg-gray-200 overflow-hidden'>
      <IconButton className='fixed top-2 left-2' onClick={() => setIsSideBarOpen(true)}>
        <ChevronDoubleRightIcon />
      </IconButton>
      <SideBar isOpen={isSideBarOpen} onClose={() => setIsSideBarOpen(false)}>
        <div className='flex flex-col gap-3'>
          <nav>
            <ul className='flex gap-2'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to={`${ROUTE_SETTINGS}`}>Settings</NavLink>
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
        </div>
      </SideBar>
      <div className='col-span-12 bg-gray-100 p-4 overflow-x-auto'>
        <Outlet />
      </div>
    </main>
  );
}

export default MainLayout;
