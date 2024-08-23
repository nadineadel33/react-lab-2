import React, { useState, useEffect } from 'react';

export const EffectCounter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(count * 2);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onClick={() => setCount(count + 1)}>Increase</Button>
      <h2>Calculation (count * 2): {calculation}</h2>
    </div>
  );
};
