import React, { useState, useRef, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import CreateQuestion from './CreateQuestion';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const UserQuestions = ({ userQuestions, onRemoveQuestion, onAddQuestion, topic, description }) => {
  const [creatingQuestion, setCreatingQuestion] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const inputRef = useRef(null);

  const handleAddQuestion = (question) => {
    const newQuestion = {
      ...question,
      question_num: userQuestions.length + 1,
      answer: question.answer || {},
    };

    onAddQuestion(newQuestion);

    setCreatingQuestion(false);
    setNewQuestion('');
  };

  const handleClick = () => {
    setCreatingQuestion((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    const inputElement = inputRef.current.querySelector('input');
    
    // Check if the input box is empty
    if (inputElement 
      && inputElement.value.trim() === '' 
      && !inputRef.current.contains(event.target) 
      && creatingQuestion) {
      // If creatingQuestion is true, clicked outside, input box is empty -> false....
      setCreatingQuestion(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [creatingQuestion]);

  return (
    <div className="flex-1 p-4 mt-16">
      <div className='flex justify-center'>
        <BiSolidQuoteAltLeft className='text-main_color'/>
        <h2 className="text-2xl font-semibold text-main_color mb-4 px-2">{topic}</h2>
        <BiSolidQuoteAltRight className='text-main_color'/>
      </div>
      
      <p className="text-center text-sm mb-7">{description}</p>
      {userQuestions.map((userQuestion, index) => (
        <QuestionCard
          key={index}
          question={userQuestion.question}
          question_num={userQuestion.question_num}
          answer={userQuestion.answer}
          onClick={() => onRemoveQuestion(index)}
        />
      ))}
      <div className="mt-4 flex" ref={inputRef}>
        {creatingQuestion ? (
          <CreateQuestion onCancel={handleClick} onAddQuestion={handleAddQuestion} />
        ) : (
          <div className='flex items-center w-full'>
            <button className=" text-main_color pr-2 font-bold">
            {/* onClick={handleAddQuestion}  */}
            +
            </button>
            <div
              onClick={handleClick}
              className="p-2 mb-4 w-full bg-question_card_bg rounded text-sub_text_color cursor-pointer"
            >
              문항을 작성해 주세요.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserQuestions;