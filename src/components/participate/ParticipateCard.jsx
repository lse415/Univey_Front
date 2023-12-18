import React, { useState } from 'react';

const ParticipateCard = ({ question, question_num, question_type, answers, isRequired, response, showWarning, onCardSubmit }) => {
    const hasError = showWarning && isRequired && !response;

    const renderAnswer = () => {
        if (!answers) {
            return <p>답변이 없습니다</p>;
        }
        return (
            <div>
                {question_type === 'multipleChoice' ? (
                    answers.map((answer, index) => (
                        <label key={index} className="flex items-center">
                            <input
                                type="radio"
                                name={`question_${question_num}`}
                                value={answer}
                                onChange={(e) => onCardSubmit(question_num, e.target.value)}
                            />
                            <span className="ml-2">{answer}</span>
                        </label>
                    ))
                ) : (
                    <div className={"mt-2"}>
                        <input
                            type="text"
                            className="w-full p-1 border rounded border-question_card_grey bg-white text-text_color mr-2"
                            placeholder={'주관식 서술 문항입니다. 자유롭게 작성해주세요.'}
                            onChange={(e) => onCardSubmit(question_num, e.target.value)}
                        />
                    </div>
                )}
            </div>
        );
    };

    return (
        <div>
          <div className={`bg-question_card_bg p-4 mt-3 rounded cursor-pointer 
          ${hasError ? 'border border-red-500' : ''}`}>
            <p className="text-left text-l font-semibold mb-2">
              {question_num}.{question}
              {isRequired && <span className="text-red-500 pl-1"> *</span>}
            </p>
            {question_type === 'multipleChoice' && (
              <div className={`text-l pl-2 font-normal`}>
                {renderAnswer()}
              </div>
            )}
            {question_type === 'shortAnswer' && (
              <div className={"ml-2"}>
                {renderAnswer()}
              </div>
            )}
          </div>
          {hasError && <p className="text-red-500 mt-1 text-left text-sm">필수 항목입니다. 설문에 응답해 주세요.</p>}
        </div>
      );
    };
    
export default ParticipateCard;
