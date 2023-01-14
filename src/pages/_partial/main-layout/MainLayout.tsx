import { Outlet } from 'react-router-dom';
import { useFavoriteCity } from '@app/hook/use-favorite-cities/useFavoriteCites';

function MainLayout() {
  const { cities } = useFavoriteCity();
  return (
    <main className='grid grid-cols-12 min-h-screen bg-gray-200'>
      <aside className='col-span-3 p-4'>
        <h1 className='text-2xl font-medium'>Favourites</h1>
        <ul className='mt-3 pl-2'>
          {cities.map(c => (
            <li className='text-xl' key={c.cityId}>
              {c.name}
            </li>
          ))}
        </ul>
      </aside>
      <div className='col-span-9 bg-gray-100 p-4'>
        <Outlet />
      </div>
    </main>
  );
}

export default MainLayout;
