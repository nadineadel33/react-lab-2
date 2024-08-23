import React from 'react';
import { Counter } from './components/Counter';
import { QuestionsList } from './components/QuestionsList';
import { EffectCounter } from './components/EffectCounter';
import { Container } from 'react-bootstrap';

function App() {
  const questions = [
    { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'What is a component?', answer: 'A component is a reusable piece of code that represents a part of a UI.' },
  ];

  return (
    <Container>
      <h1>React-Lab-2</h1>
      <Counter initialCount={0} />
      <QuestionsList questions={questions} />
      <EffectCounter initialCount={0} />
    </Container>
  );
}

export default App;
