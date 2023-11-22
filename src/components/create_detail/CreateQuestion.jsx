import React, { useState } from 'react';

const CreateQuestion = ({ onCancel, onAddQuestion }) => {
  const [question, setQuestion] = useState('');
  const [questionType, setQuestionType] = useState('multipleChoice');
  const [showComponent, setShowComponent] = useState(true);
  const [answers, setAnswers] = useState([]);

  const handleAddQuestion = () => {
    if (question.trim() !== '') {
      const newQuestion = {
        question,
        type: questionType,
        options: questionType === 'multipleChoice' ? answers : null,
      };

      onAddQuestion(newQuestion);

      setQuestion('');
      setAnswers([]); 
    }
  };

  const handleDelete = () => {
    setShowComponent(false);
    onCancel();
  };

  const handleAddAnswer = () => {
    setAnswers([...answers, '']);
  };

  const handleUpdateAnswer = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  return showComponent ? (
    <div className="mb-2 rounded p-5 bg-question_card_bg">
      <div className="flex space-x-32">
        <input
          className="w-full p-1 border-b border-question_card_grey bg-transparent text-text_color"
          placeholder="질문1"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <div className="flex items-center mt-2">
          <select
            className="p-1 border-b border-question_card_grey bg-transparent text-text_color mr-2"
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
          >
            <option value="multipleChoice">객관식</option>
            <option value="shortAnswer">주관식</option>
          </select>
        </div>
      </div>
      {questionType === 'multipleChoice' && (
        <div className="mt-2">
          {answers.map((answer, index) => (
            <div key={index} className="flex items-center mt-2">
              <input
                className="p-1 border-b border-question_card_grey bg-transparent text-text_color mr-2"
                placeholder={`Answer ${index + 1}`}
                value={answer}
                onChange={(e) => handleUpdateAnswer(index, e.target.value)}
              />
            </div>
          ))}
          <button onClick={handleAddAnswer} className="text-blue-500 mt-3">
            + 응답 추가
          </button>
        </div>
      )}
      <div className="pr-5 mt-2 text-right">
        <button onClick={handleAddQuestion} className=" text-blue-500 px-4 py-2 mr-2">
          Add Question
        </button>
        <button onClick={handleDelete} className="text-red-500 text-right">
          Delete
        </button>
      </div>
    </div>
  ) : null;
};

export default CreateQuestion;