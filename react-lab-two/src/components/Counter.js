import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <Button onClick={() => setCount(count - 1)}>-</Button>
    </div>
  );
};
