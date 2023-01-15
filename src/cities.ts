import cities from '@app/cities.json';
import uuidv from '@app/utils/uuid';

export default cities.map(c => ({
  cityId: uuidv(),
  name: c.city,
  lng: c.lng,
  lat: c.lat,
}));
