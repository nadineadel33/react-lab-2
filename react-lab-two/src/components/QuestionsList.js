import React from 'react';
import { FrequentQuestion } from './FrequentQuestion';

export const QuestionsList = ({ questions }) => {
  return (
    <div>
      {questions.map((q, index) => (
        <FrequentQuestion key={index} question={q.question} answer={q.answer} />
      ))}
    </div>
  );
};
