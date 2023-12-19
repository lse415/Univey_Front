import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserQuestions from '../components/create_detail/UserQuestions';
import RecommendedQuestions from '../components/create_detail/RecommendedQuestions';

const CreateDetail = () => {
  const [userQuestions, setUserQuestions] = useState([]);
  const [recommendedQuestions, setRecommendedQuestions] = useState([]);
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get('/data/Mock.json') // /surveys/create/details/${surveyId}
      .then((response) => {
        const surveyData = response.data.surveyData;

        const flattenedRecommendedQuestions = surveyData
          .map(item => item.recommendedQuestions) 
          .flat();  // 배열 병합.

        setRecommendedQuestions(flattenedRecommendedQuestions);

        if (surveyData.length > 0) {
          setTopic(surveyData[0].topic);
          setDescription(surveyData[0].description);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddQuestion = (recommendedQuestion) => {
    // 추천질문에서 추출
    const { question, question_type, isRequired, answer } = recommendedQuestion;

    const newUserQuestion = {
      question_num: userQuestions.length + 1,
      question,
      question_type,
      isRequired,
      answer,
    };

    setUserQuestions((prevUserQuestions) => [...prevUserQuestions, newUserQuestion]);
  };

  const handleAddAllQuestions = () => {
    // 전체선택
    setUserQuestions((prevUserQuestions) => [
      ...prevUserQuestions,
      ...recommendedQuestions.map((recommendedQuestion, index) => ({
        ...recommendedQuestion,
        question_num: prevUserQuestions.length + 1 + index,
      })),
    ]);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...userQuestions];
    updatedQuestions.splice(index, 1);
    setUserQuestions(updatedQuestions);
  };

  return (
    <div className="flex items-stretch lg:mx-32">
      <div className="flex-1">
        <UserQuestions 
          userQuestions={userQuestions}
          setUserQuestions={setUserQuestions} 
          onRemoveQuestion={handleRemoveQuestion}
          topic={topic} 
          description={description} 
          onAddQuestion={handleAddQuestion}
        />
      </div>
      <div className="border-l border-main_color my-10 ml-10 mr-2"></div>
      <div className="flex-1">
        <RecommendedQuestions
          recommendedQuestions={recommendedQuestions}
          onAddQuestion={handleAddQuestion}
          onAddAllQuestions={handleAddAllQuestions}
        />
      </div>
    </div>
  );
};

export default CreateDetail;
