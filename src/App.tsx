import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTE_HOME, ROUTE_DETAILS, ROUTE_SETTINGS } from '@app/constants';
import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorPage from '@app/pages/error-page/ErrorPage';
import MainLayout from '@app/pages/_partial/main-layout/MainLayout';

const HomeLazy = lazy(() => import('@app/pages/home-page/HomePage'));
const DetailsLazy = lazy(() => import('@app/pages/details-page/DetailsPage'));
const CityLazy = lazy(() => import('@app/pages/details-page/city-page/CityPage'));
const SettingsLazy = lazy(() => import('@app/pages/settings-page/SettingsPage'));

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
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
    ],
  },
  {
    path: ROUTE_SETTINGS,
    element: <SettingsLazy />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
