import React, { useState, useRef, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import CreateQuestion from './CreateQuestion';

const UserQuestions = ({ userQuestions, onRemoveQuestion,onAddQuestion, topic, description  }) => {
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

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target) && !creatingQuestion) {
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
      <h2 className="text-2xl text-center font-semibold text-main_color mb-4">{topic}</h2>
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
      <div className="mt-4" ref={inputRef}>
        <div 
          onClick={() => setCreatingQuestion(true)}
          className="p-2 mb-4 bg-question_card_bg rounded text-sub_text_color cursor-pointer"
        >
          + 문항을 작성해 주세요.
        </div>
        {creatingQuestion && (
          <CreateQuestion
            onCancel={() => setCreatingQuestion(false)}
            onAddQuestion={handleAddQuestion}
          />
        )}
      </div>
    </div>
  );
};

export default UserQuestions;