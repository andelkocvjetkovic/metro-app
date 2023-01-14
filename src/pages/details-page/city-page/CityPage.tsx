import { useParams } from 'react-router-dom';
function CityPage() {
  const params = useParams();
  console.log(params);
  return <div>City: {params.city && decodeURI(params.city)}</div>;
}

export default CityPage;
