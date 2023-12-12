import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ParticipateCard from '../components/participate/ParticipateCard';

const Participate = () => {
  const [userQuestions, setUserQuestions] = useState([]);
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [responses, setResponses] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    axios.get('/data/Mock.json')
      .then((response) => {
        const surveyData = response.data.surveyData;

        const flattenedUserQuestions = surveyData
          .map(item => item.userQuestions)
          .flat();

        setUserQuestions(flattenedUserQuestions);

        if (surveyData.length > 0) {
          setTopic(surveyData[0].topic);
          setDescription(surveyData[0].description);
        }
      })
      .catch((error) => {
        console.error('데이터를 불러오는 동안 에러 발생:', error);
      });
  }, []);

  const handleCardSubmit = (questionNum, selectedAnswer) => {

    console.log('질문 번호:', questionNum);
  console.log('선택한 답변:', selectedAnswer);

    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionNum]: selectedAnswer,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 제출 동작 방지

    console.log('전체 응답:', responses);
    setSubmitting(true);
  };

  return (
    <div className="flex lg:mx-24">
      <div className="flex-1 text-center">
        <div className="flex-1 flex px-36 pt-10">
          <div className="text-main_color text-3xl mr-4">ㅁ</div>
          <div>
            <h1 className="text-main_color text-3xl text-left">설문 참여</h1>
            <div className="my-5">주어진 질문에 응답해주세요. 다른 사람들에게 중요한 설문일 수 있으니 신중하게 응답 부탁드립니다!</div>
          </div>
        </div>
        <hr className="mx-36 mb-5"></hr>
        <h2 className="text-2xl text-center font-semibold text-main_color mt-16 mb-4">{topic}</h2>
        <p className="text-center text-sm mb-10">{description}</p>
        <form onSubmit={handleSubmit}>
          <div className="flex-1 text-center mx-80">
            {userQuestions.map((question, index) => (
              <ParticipateCard
                key={index}
                question={question.question}
                question_num={question.question_num}
                question_type={question.question_type}
                answers={question.answer}
                onCardSubmit={(questionNum, selectedAnswer) => handleCardSubmit(questionNum, selectedAnswer)}
              />
            ))}
            <button
              type="submit"
              className="text-right px-7 py-2 mt-12 mb-60 bg-sub_text_color_4 text-white rounded-2xl"
            >
              응답 제출
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Participate;
