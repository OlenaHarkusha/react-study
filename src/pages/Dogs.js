import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Dogs = () => {
  const [dogs, setDogs] = useState([
    'dog-1',
    'dog-2',
    'dog-3',
    'dog-4',
    'dog-5',
  ]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const dogId = searchParams.get('dogId') ?? '';
  const updateQueryString = e => {
    const dogIdValue = e.target.value;
    if (dogIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ dogId: dogIdValue });
  };
  const visibleDogs = dogs.filter(dog => dog.includes(dogId));
  return (
    <div>
      <input type="text" onChange={updateQueryString} />
      <button type="button" onClick={() => setSearchParams({ c: 'hell' })}>
        Set search params
      </button>
      {visibleDogs.map(dog => (
        <Link key={dog} to={`${dog}`} state={{ from: location }}>
          {dog}
        </Link>
      ))}
    </div>
  );
};
export default Dogs;
