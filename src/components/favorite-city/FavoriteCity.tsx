import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { useFavoriteCity } from '@app/hook/use-favorite-cities/useFavoriteCites';
import type { City } from '@app/types/city';
import IconButton from '@app/components/icon-button/IconButton';
import NavLink from '@app/components/nav-link/NavLink';

type FavoriteCityProps = { className?: string } & Pick<City, 'name' | 'cityId'>;

function FavoriteCity(props: FavoriteCityProps) {
  const { name, cityId } = props;
  const [isHovered, setIsHovered] = useState(false);
  const { deleteByCityId } = useFavoriteCity();
  return (
    <div
      className='flex gap-3 items-center w-100'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <NavLink to={`/${cityId}`} className='grow'>
        {name}
      </NavLink>
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
    </div>
  );
}

export default FavoriteCity;
