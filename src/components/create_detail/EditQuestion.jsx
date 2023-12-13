import React, { useState, useEffect, useRef } from 'react';
import CopyButtonIcon from "../icons/CopyButtonIcon";
import DeleteButtonIcon from "../icons/DeleteButtonIcon";
import MultipleChoiceIcon from '../icons/MultipleChoiceIcon';
import ShortAnswerIcon from '../icons/ShortAnswerIcon';
import CreateCardTopAsset from '../icons/CreateCardTopAsset';
import { IoRadioButtonOff } from "react-icons/io5";

const EditQuestion = ({ onCancel, onEditQuestion, onRemoveQuestion, initialQuestion, index }) => {
  const [editedQuestion, setEditedQuestion] = useState({ ...initialQuestion });
  const [answer, setAnswer] = useState(initialQuestion.answer || ['']);
  const [questionType, setQuestionType] = useState(initialQuestion.question_type);
  const inputRef = useRef(null);
  const [isRequired, setIsRequired] = useState(initialQuestion.isRequired);

  // 초기 렌더링 시 빈 입력 필드 추가
  // **** 두개나 나타나는 이슈 ㅠㅠ ****
  useEffect(() => {
    handleAddAnswer();
  }, []);

  const handleAddAnswer = () => {
    // 새로운 빈 입력 필드 추가
    setAnswer((prevAnswer) => [...prevAnswer, '']);
  };

  /*// 마지막 빈 입력필드에 문자를 입력하면~ 코드 없을 때
  // 문자 두개 이상 입력해야 새 입력필드  생기는 이슈..
  const handleAddAnswer = (index, value) => {
    // 모든 입력 값이 비어 있지 않으면 새로운 빈 입력 필드 추가
    if (answer.every((value) => value !== '')) {
      setAnswer((prevAnswer) => [...prevAnswer, '']);
    }
  }; */

  const handleUpdateAnswer = (index, value, prevAnswer) => {
    setAnswer((prevAnswer) => {
      return prevAnswer.map((prevValue, prevIndex) => (
        prevIndex === index ? value : prevValue));
    });

    // answer를 직접 업데이트
    setEditedQuestion((prevQuestion) => ({
      ...prevQuestion,
      answer: [...answer],
    }));

    // 마지막 빈 입력 필드에 문자를 입력하면 새로운 빈 입력 필드 추가
    if (index === answer.length - 1 && value !== '') {
      handleAddAnswer();
    }
  };

  const handleRemoveQuestion = () => {
    onRemoveQuestion();
  };

  const handleClickOutside = (event) => {
    if (inputRef.current) {
      const isInputEmpty = editedQuestion.question.trim() === '';

      if (
        !inputRef.current.contains(event.target) &&
        (event.target.className !== 'bg-question_card_bg' ||
          (event.target.className === 'bg-question_card_bg' && isInputEmpty))
      ) {
        // handleEditQuestion를 호출하는 대신 여기서 직접 onEditQuestion을 호출
        if (editedQuestion.question.trim() !== '') {
          const updatedQuestion = {
            ...editedQuestion,
            question_type: questionType,
            answer: answer.filter((value) => value !== ''), // 비어 있는 값을 필터링하여 answer에 포함하지 않음
            isRequired: isRequired,
          };

          onEditQuestion(updatedQuestion, index);

          console.log('Updated Question:', updatedQuestion);
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onCancel, editedQuestion, isRequired]);

  return (
    <div className="flex w-full">
      <div className="flex flex-col items-start">
        <CreateCardTopAsset />
        <div ref={inputRef} className="mb-2 w-full rounded p-5 bg-question_card_bg">
          <div className="flex items-center space-x-8">
            <input
              className="w-full p-1 border-b border-question_card_grey bg-transparent text-l font-semibold  text-text_color"
              placeholder="질문을 작성해주세요"
              value={editedQuestion.question}
              onChange={(e) => setEditedQuestion((prev) => ({ ...prev, question: e.target.value }))}
            />
            <div className="ml-0 flex items-center space-x-2 ">
              <input
                id="checked"
                type="checkbox"
                checked={isRequired}
                className="mr-1 mt-2 bg-transparent border border-text_color rounded w-4 h-4 "
                onChange={() => {
                  console.log('Checkbox clicked. Current value:', !isRequired);
                  setIsRequired(!isRequired);
                }}
              />
              <label className="mb-0 mt-1 ">필수</label>
            </div>
            <div className="flex items-center mt-2">
              <select
                className="p-1 border-b border-question_card_grey bg-transparent text-text_color ml-2 pr-8"
                value={questionType}
                onChange={(e) => setQuestionType(e.target.value)}
              >
                <option value="multipleChoice">
                  <MultipleChoiceIcon className='pr-1' />
                  객관식
                </option>
                <option value="shortAnswer">
                  <ShortAnswerIcon className='pr-1' />
                  주관식
                </option>
              </select>
            </div>
          </div>
          {questionType === 'multipleChoice' && (
            <div className="mt-2">
              {Array.isArray(answer) ? (
                answer.map((value, index) => (
                  <div key={index} className="flex items-center mt-2">
                    <IoRadioButtonOff />
                    <input
                      className="w-full p-1 border-none border-question_card_grey bg-transparent text-text_color mr-2"
                      placeholder={'응답 추가'}
                      value={value !== undefined ? value : ''}
                      onChange={(e) => handleUpdateAnswer(index, e.target.value, answer)}
                    />
                  </div>
                ))
              ) : (
                <div className="flex items-center mt-2">
                  <IoRadioButtonOff />
                  <input
                    className="w-full p-1 border-none border-question_card_grey bg-transparent text-text_color mr-2"
                    placeholder={'응답 추가'}
                    value={answer[0] !== undefined ? answer[0] : ''}
                    onChange={(e) => handleUpdateAnswer(0, e.target.value, answer)}
                  />
                </div>
              )}
            </div>
          )}
          {questionType === 'shortAnswer' && (
            <div className="mt-4">
              <input
                type="text"
                className="w-full p-1 border rounded border-question_card_grey bg-white text-text_color mr-2"
                placeholder={'주관식 서술 문항입니다. 자유롭게 작성해주세요.'}
                value={['']}
                disabled
              />
            </div>
          )}
          <hr className='mt-4 mb-2 py-2 border-question_card_grey'></hr>
          <div className='flex justify-end'>
            <button className='px-2'>
              <CopyButtonIcon />
            </button>
            <button className='pl-2' onClick={handleRemoveQuestion}>
              <DeleteButtonIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditQuestion;
