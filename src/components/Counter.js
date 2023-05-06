import { useEffect, useState } from 'react';

export const Couner = () => {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(prevState => prevState + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB(prevState => prevState + 1);
  };

  useEffect(() => {
    const totalClicks = counterA + counterB;
    document.title = `clicks ${totalClicks}`;
  }, [counterA, counterB]);

  return (
    <div>
      <button type="button" onClick={handleCounterAIncrement}>
        Counter A {counterA}
      </button>
      <button type="button" onClick={handleCounterBIncrement}>
        Counter B {counterB}
      </button>
    </div>
  );
};
