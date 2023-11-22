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
    axios.get('/data/Mock.json')
      .then((response) => {
        const surveyData = response.data.surveyData;

        const flattenedRecommendedQuestions = surveyData
          .map(item => item.recommendedQuestions) 
          .flat();

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
    // Extract the necessary information from the recommendedQuestion object
    const { question_num, question, answer } = recommendedQuestion;

    setUserQuestions([...userQuestions, { question, answer, question_num }]);
  };


  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...userQuestions];
    updatedQuestions.splice(index, 1);
    setUserQuestions(updatedQuestions);
  };

  return (
    <div className="flex md:mx-32">
      <UserQuestions 
        userQuestions={userQuestions}
        onRemoveQuestion={handleRemoveQuestion}
        topic={topic} 
        description={description} 
        onAddQuestion={handleAddQuestion}
      />
      <div className="border-l border-main_color mx-4 h-full"></div>
      <RecommendedQuestions
        recommendedQuestions={recommendedQuestions}
        onAddQuestion={handleAddQuestion}
      />
    </div>
  );
};

export default CreateDetail;