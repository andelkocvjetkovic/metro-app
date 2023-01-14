import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTE_HOME, ROUTE_DETAILS, ROUTE_SETTINGS } from '@app/constants';
import ErrorPage from '@app/pages/error-page/ErrorPage';

const HomeLazy = lazy(() => import('@app/pages/home-page/HomePage'));
const DetailsLazy = lazy(() => import('@app/pages/details-page/DetailsPage'));
const CityLazy = lazy(() => import('@app/pages/details-page/city-page/CityPage'));
const SettingsLazy = lazy(() => import('@app/pages/settings-page/SettingsPage'));

const router = createBrowserRouter([
  {
    path: ROUTE_HOME,
    element: <HomeLazy />,
    errorElement: <ErrorPage />,
  },
  {
    path: ROUTE_DETAILS,
    element: <DetailsLazy />,
    children: [
      {
        path: ':city',
        element: <CityLazy />,
      },
    ],
  },
  {
    path: ROUTE_SETTINGS,
    element: <SettingsLazy />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;