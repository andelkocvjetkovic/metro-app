import { useState } from 'react';
import { ROUTE_DETAILS } from '@app/constants';
import { TrashIcon } from '@heroicons/react/24/solid';
import { useFavoriteCity } from '@app/hook/use-favorite-cities/useFavoriteCites';
import { Link } from 'react-router-dom';
import type { City } from '@app/types/city';

type FavoriteCityProps = { className?: string } & Pick<City, 'name' | 'cityId' | 'lat' | 'lng'>;

function FavoriteCity(props: FavoriteCityProps) {
  const { name, cityId, lng, lat } = props;
  const [isHovered, setIsHovered] = useState(false);
  const { deleteByCityId } = useFavoriteCity();
  return (
    <Link
      to={`${ROUTE_DETAILS}/${encodeURI(cityId)}`}
      className='flex gap-3 items-center text-gray-500 text-base font-medium hover:text-gray-900 cursor-pointer'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {name}
      {isHovered && (
        <button
          className='text-pink-300 w-6 h-6 hover:text-pink-400'
          onClick={e => {
            e.preventDefault();
            deleteByCityId(cityId);
          }}
        >
          <TrashIcon />
        </button>
      )}
    </Link>
  );
}

export default FavoriteCity;
