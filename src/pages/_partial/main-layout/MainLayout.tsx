import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <main className='grid grid-cols-12 min-h-screen bg-gray-200'>
      <aside className='col-span-3 p-4'>
        <h1 className='text-2xl font-medium'>Favourites</h1>
        <ul className='mt-3 pl-2'>
          <li className='text-xl'>Zagreb</li>
          <li className='text-xl'>Sibenik</li>
          <li className='text-xl'>Dubrovnik</li>
        </ul>
      </aside>
      <div className='col-span-9 bg-gray-100 p-4'>
        <Outlet />
      </div>
    </main>
  );
}

export default MainLayout;
