import React, { useState } from "react";
import { QUESTIONS } from '../../mocks/questionsArray';
import SingleQuestion from './question';
import './faqs.css';

const Faqs = () => {
  const [questions] = useState(QUESTIONS);

  return (
    <main>
      <div>
        <h3>Questions and answers about login:</h3>
        <section className='info'>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
}

  export default Faqs;