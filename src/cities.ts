import cities from '@app/cities.json';

export default cities.map(c => ({
  cityId: c.city,
  name: c.city,
  lng: c.lng,
  lat: c.lat,
}));
