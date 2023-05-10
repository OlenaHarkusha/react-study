import { useEffect, useRef, useState } from 'react';

export const Clock = () => {
  const [time, setTime] = useState(() => new Date());
  let intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const stop = () => clearInterval(intervalId.current);
  return (
    <div>
      <p>Current Time: {time.toLocaleTimeString()} </p>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </div>
  );
};
