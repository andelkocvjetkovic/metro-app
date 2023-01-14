import { createContext, PropsWithChildren, useContext } from 'react';
import type { City } from '@app/types/city';

type FavoriteCities = {
  cities: City[];
  addNewCity: (c: City) => void;
  deleteByCityId: (cityId: string) => void;
};

const FavoriteCitiesContext = createContext<FavoriteCities>({
  cities: [],
  addNewCity: _ => undefined,
  deleteByCityId: _ => undefined,
});

type FavoriteCitiesProviderProps = { value: FavoriteCities } & PropsWithChildren;
const FavoriteCitiesProvider = ({ children, value }: FavoriteCitiesProviderProps) => (
  <FavoriteCitiesContext.Provider value={value}>{children}</FavoriteCitiesContext.Provider>
);

const useFavoriteCity = () => useContext(FavoriteCitiesContext);

export { useFavoriteCity, FavoriteCitiesProvider };
