import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import allCities from '@app/cities';

function CityPage() {
  const params = useParams();

  const city = useMemo(() => (params.cityId ? allCities.find(c => c.cityId === params.cityId) : undefined), [params]);

  if (!city) return <div>No city found</div>;

  return <div>{city.name}</div>;
}

export default CityPage;
