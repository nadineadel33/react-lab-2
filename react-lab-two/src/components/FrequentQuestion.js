import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export const FrequentQuestion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h3>{question} <Button onClick={() => setIsOpen(!isOpen)}>{isOpen ? '-' : '+'}</Button></h3>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};
