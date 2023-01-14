import { Outlet } from 'react-router-dom';
function DetailsPage() {
  return (
    <div>
      Details
      <Outlet />
    </div>
  );
}

export default DetailsPage;
