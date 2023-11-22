import React from 'react';
import QuestionCard from './QuestionCard';

// RecommendedQuestions : 추천된 질문
// recommendedQuestions 배열을 받아 각각의 추천 질문에 대한 QuestionCard를 렌더링
// 이 때, QuestionCard를 클릭하면 해당 추천 질문을 추가하기 위한 콜백 함수인 onAddQuestion 호출

const RecommendedQuestions = ({ recommendedQuestions, onAddQuestion }) => {
  return (
    <div className="flex-1 p-4 mt-20">

      <div className="text-xl font-semibold text-main_color mb-4">추천질문</div>
      <p className="mb-4 text-sm">AI가 입력받은 주제를 바탕으로 질문을 추천해줍니다. 어떤 질문을 구성해야 할지 고민이 된다면 참고해보세요!
        <br></br>원하는 질문을 선택해보세요! 자동으로 문항에 추가됩니다.</p>
      {recommendedQuestions.map((recommendedQuestion) => (
        <QuestionCard
          key={recommendedQuestion.question_num}
          question_num={recommendedQuestion.question_num.toString()}
          question={recommendedQuestion.question  || 'No question available' }
          answer={recommendedQuestion.answer}
          onClick={() => onAddQuestion(recommendedQuestion.question || 'No question available') }
        />
      ))}
    </div>
  );
};

export default RecommendedQuestions;