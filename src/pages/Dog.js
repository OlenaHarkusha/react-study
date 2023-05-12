import { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const Dog = () => {
  const { dogId } = useParams();
  const location = useLocation();
  const backlinkLocationRef = useRef(location.state?.from ?? '/dogs');
  //useEffect() fetch
  return (
    <div>
      <h1>Dog Details: {dogId}</h1>
      <Link to={backlinkLocationRef.current}>Back to Dogs</Link>
      <ul>
        <li>
          <Link to="subbreeds">Subbreeds</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Dog;
