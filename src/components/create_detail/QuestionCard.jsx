import React from 'react';

const QuestionCard = ({ question, question_num, answer, onClick }) => {

  const answerLines = answer
    ? Object.values(answer).map((value, index) => (
    <p key={index} >{value}</p>
    ))
    : <p> 'No answer available'</p>
  ;

  return (
    <div className="bg-question_card_bg p-4 mb-4 rounded cursor-pointer" onClick={onClick}>
      <p className='text-l font-semibold mb-2'>{question_num}.{question}</p>
      <p className='text-l font-normal'>{answerLines}</p>
    </div>
  );
};

export default QuestionCard;