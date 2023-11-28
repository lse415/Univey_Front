import React from 'react';
import { IoRadioButtonOff } from "react-icons/io5";

const QuestionCard = ({ question, question_num, answer, onClick }) => {
  const renderAnswer = () => {
    if (!answer) {
      return <p>No answer available</p>;
    }

    return (
      <div>
        {Object.entries(answer).map(([key, value], index) => (
          <p key={index} className='flex items-center'>
            <IoRadioButtonOff className='mr-1'/> {value}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-question_card_bg p-4 mb-4 rounded cursor-pointer" onClick={onClick}>
      <p className='text-l font-semibold mb-2'>{question_num}.{question}</p>
      <div className='text-l font-normal'>{renderAnswer()}</div>
    </div>
  );
};

export default QuestionCard;