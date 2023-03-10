import { lazy, useCallback, useMemo, useState, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTE_HOME, ROUTE_SETTINGS } from '@app/constants';
import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorPage from '@app/pages/error-page/ErrorPage';
import MainLayout from '@app/pages/_partial/main-layout/MainLayout';
import { FavoriteCitiesProvider } from '@app/hook/use-favorite-cities/useFavoriteCites';
import { SettingsProvider, defaultSettings } from '@app/hook/use-settings/useSettings';
import type { City } from '@app/types/city';
import type { SettingsUnit } from '@app/hook/use-settings/useSettings';

const HomeLazy = lazy(() => import('@app/pages/home-page/HomePage'));
const CityLazy = lazy(() => import('@app/pages/city-page/CityPage'));
const SettingsLazy = lazy(() => import('@app/pages/settings-page/SettingsPage'));

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTE_HOME,
        element: (
          <Suspense fallback={null}>
            <HomeLazy />
          </Suspense>
        ),
      },
      {
        path: ':cityId',
        element: (
          <Suspense fallback={null}>
            <CityLazy />
          </Suspense>
        ),
      },
      {
        path: ROUTE_SETTINGS,
        element: (
          <Suspense fallback={null}>
            <SettingsLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  const [favoriteCities, setFavoriteCites] = useState<City[]>([]);
  const addNewCity = useCallback((city: City) => setFavoriteCites([city, ...favoriteCities]), [favoriteCities]);
  const deleteByCityId = useCallback(
    (cityId: string) => setFavoriteCites(favoriteCities.filter(c => c.cityId !== cityId)),
    [favoriteCities]
  );
  const clearCities = useCallback(() => setFavoriteCites([]), [setFavoriteCites]);
  const favoriteCitiesValue = useMemo(
    () => ({ cities: favoriteCities, addNewCity, deleteByCityId, clearCities }),
    [addNewCity, favoriteCities, deleteByCityId, clearCities]
  );

  const [settingsUnit, setSettingsUnit] = useState(() => {
    const initialValue = defaultSettings.settings as SettingsUnit;
    try {
      const item = window.localStorage.getItem('settings');
      return item ? (JSON.parse(item) as SettingsUnit) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key ???settings???:`, error);
      return initialValue;
    }
  });

  const updateSettings = useCallback(
    (settings: SettingsUnit) => {
      window.localStorage.setItem('settings', JSON.stringify(settings));
      setSettingsUnit(settings);
    },
    [setSettingsUnit]
  );

  const settingsValue = useMemo(
    () => ({
      settings: settingsUnit,
      updateSettings,
    }),
    [settingsUnit, updateSettings]
  );

  return (
    <SettingsProvider value={settingsValue}>
      <FavoriteCitiesProvider value={favoriteCitiesValue}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </FavoriteCitiesProvider>
    </SettingsProvider>
  );
}

export default App;
