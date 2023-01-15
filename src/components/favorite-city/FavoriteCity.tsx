import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { useFavoriteCity } from '@app/hook/use-favorite-cities/useFavoriteCites';
import { Link } from 'react-router-dom';
import type { City } from '@app/types/city';
import IconButton from '@app/components/icon-button/IconButton';

type FavoriteCityProps = { className?: string } & Pick<City, 'name' | 'cityId'>;

function FavoriteCity(props: FavoriteCityProps) {
  const { name, cityId } = props;
  const [isHovered, setIsHovered] = useState(false);
  const { deleteByCityId } = useFavoriteCity();
  console.log(isHovered);
  return (
    <Link
      to={`/${cityId}`}
      className='flex gap-3 items-center text-gray-500 text-base font-medium hover:text-gray-900 cursor-pointer'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {name}
      {isHovered && (
        <IconButton
          title={`Delete ${name}`}
          onClick={e => {
            e.preventDefault();
            deleteByCityId(cityId);
          }}
        >
          <TrashIcon />
        </IconButton>
      )}
    </Link>
  );
}

export default FavoriteCity;
