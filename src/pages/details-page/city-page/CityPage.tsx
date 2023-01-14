import { useParams } from 'react-router-dom';
function CityPage() {
  const params = useParams();
  return <div>City: {params.city}</div>;
}

export default CityPage;
