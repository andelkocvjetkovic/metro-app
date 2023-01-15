import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import allCities from '@app/cities';
import { API_BASE } from '@app/constants';
import { useQuery } from 'react-query';

function CityPage() {
  const params = useParams();
  const city = useMemo(() => allCities.find(c => c.cityId === params.cityId), [params]);
  const { isLoading, error, data } = useQuery(
    ['forecastCity', city],
    () => fetch(API_BASE.concat(`latitude=${city?.lat}&longitude=${city?.lng}`)).then(res => res.json()),
    {
      enabled: !!city,
    }
  );

  if (!city) return <div>No city</div>;

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Something went wrong</div>;
  console.log(data);
  return <div>City: {city.name}</div>;
}

export default CityPage;
