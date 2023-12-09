import React, { useState, useRef, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import CreateQuestion from './CreateQuestion';
import EditQuestion from './EditQuestion';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { BiSolidQuoteAltRight } from 'react-icons/bi';

const UserQuestions = ({ userQuestions, onRemoveQuestion, onAddQuestion, onEditQuestion, topic, description }) => {
  const [creatingQuestion, setCreatingQuestion] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const inputRef = useRef(null);

  const handleAddQuestion = (question) => {
    if (editingIndex !== null) {
      const updatedQuestions = [...userQuestions];
      updatedQuestions[editingIndex] = { ...question, question_num: editingIndex + 1 };
      onEditQuestion(updatedQuestions);
    } else {
      const newQuestion = {
        ...question,
        question_num: userQuestions.length + 1,
        answers: question.answer || {},
      };

      console.log('New Question:', newQuestion);
      onAddQuestion([...userQuestions, newQuestion]);
    }

    setCreatingQuestion(false);
    setEditingIndex(null);
  };

  const handleEditQuestion = (index) => {
    setCreatingQuestion(false);
    setEditingIndex(index === editingIndex ? null : index);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...userQuestions];
    updatedQuestions.splice(index, 1);  // 복사한 배열에서 선택한 인덱스의 요소 1개 제거
    onRemoveQuestion(updatedQuestions); // 변경된 배열을 콜백 함수를 통해 상위 컴포넌트로 전달
    setEditingIndex(null); // 삭제 시 EditQuestion 컴포넌트를 닫기.
  };

  const handleClick = () => {
    setCreatingQuestion((prev) => !prev);
    setEditingIndex(null);
  };

  const handleClickOutside = (event) => {
    const inputElement = inputRef.current?.querySelector('input');

    if (
      inputElement &&
      inputElement.value.trim() === '' &&
      !inputRef.current.contains(event.target) &&
      (creatingQuestion || editingIndex !== null)
    ) {
      setCreatingQuestion(false);
      setEditingIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [creatingQuestion, editingIndex]);

  return (
    <div className="flex-1 p-4 mt-20">
      <div className="flex justify-center">
      <BiSolidQuoteAltLeft className="text-main_color" />
        <h2 className="text-2xl font-semibold text-main_color mb-4 px-2">{topic}</h2>
        <BiSolidQuoteAltRight className="text-main_color" />
      </div>

      <p className="text-center text-sm mb-7">{description}</p>
      {userQuestions.map((userQuestion, index) => (
        <div key={index}>
          {editingIndex === index ? (
            <EditQuestion
            onCancel={handleClick}
            onEditQuestion={handleEditQuestion} 
            onRemoveQuestion={() => handleRemoveQuestion(index)}
            initialQuestion={userQuestion}
          />
          ) : (
            <QuestionCard
              question={userQuestion.question}
              question_num={userQuestion.question_num}
              answers={userQuestion.answer}
              onClick={() => handleEditQuestion(index)}
              isEditing={editingIndex !== null}
            />
          )}
          {console.log('userQuestion.question_num', userQuestion.question_num)}
          {console.log('userQuestion.question', userQuestion.question)}
          {console.log('userQuestion.answer', userQuestion.answer)}
        </div>
      ))}
      <div className="mt-4 flex" ref={inputRef}>
        {creatingQuestion ? (
          <CreateQuestion onCancel={handleClick} onAddQuestion={handleAddQuestion} />
        ) : (
          <div className="flex items-center w-full">
            <div
              onClick={handleClick}
              className="p-2 mb-4 w-full bg-question_card_bg rounded text-sub_text_color cursor-pointer"
            >
              문항을 선택해 주세요.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserQuestions;