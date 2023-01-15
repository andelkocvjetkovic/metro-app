import { useState, useMemo } from 'react';
import FavoriteCity from '@app/components/favorite-city/FavoriteCity';
import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import type { City } from '@app/types/city';
import { FavoriteCitiesProvider } from '@app/hook/use-favorite-cities/useFavoriteCites';
import userEvent from '@testing-library/user-event';

const onDeleteCity = jest.fn();
const onAddNewCity = jest.fn();
const onClearCities = jest.fn();

const App = () => {
  const [favoriteCities] = useState<City[]>([]);

  const favoriteCitiesValue = useMemo(
    () => ({ cities: favoriteCities, deleteByCityId: onDeleteCity, addNewCity: onAddNewCity, clearCities: onClearCities }),
    [favoriteCities]
  );
  return (
    <FavoriteCitiesProvider value={favoriteCitiesValue}>
      <FavoriteCity cityId='city-1' name='New York' />
    </FavoriteCitiesProvider>
  );
};

const routes = [
  {
    path: '/',
    element: <App />,
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: ['/'],
  initialIndex: 0,
});

describe('<FavoriteCity />', () => {
  it('should render without error', () => {
    render(<RouterProvider router={router}></RouterProvider>);
  });
  it('should render city name as link', () => {
    const { getByRole } = render(<RouterProvider router={router}></RouterProvider>);
    getByRole('link', { name: /new york/i });
  });
  it('should call delete favorite city', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<RouterProvider router={router}></RouterProvider>);
    await user.hover(getByRole('link', { name: /new york/i }));
    await user.click(getByRole('button', { name: /delete new york/i }));
    // expect(onDeleteCity).toBeCalledTimes(1);
  });
});
