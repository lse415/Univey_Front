import React, { useState, useEffect } from "react";
import axios from "axios";
import UserQuestions from "../components/create_detail/UserQuestions";
import RecommendedQuestions from "../components/create_detail/RecommendedQuestions";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms/userState";
import { useParams } from "react-router";
import customaxios from "../api/Axios";

const CreateDetail = () => {
  const { surveyId } = useParams();
  const { surveyTopic } = useParams();
  const [userQuestions, setUserQuestions] = useState([]);
  const [recommendedQuestions, setRecommendedQuestions] = useState([]);
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [userInfo, setUserInfo] = useRecoilState(userState);

  console.log("createDetail 페이지임");
  console.log(userInfo);

  useEffect(() => {
    questions();
  }, []);

  function questions() {
    const question_topic = { question: surveyTopic };

    customaxios
      .post(`/chat-gpt/question`, question_topic, {
        headers: {
          Authorization: `${userInfo.accesstoken}`,
          "ngrok-skip-browser-warning": "69420",
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        const gptData = response.data.data;
        console.log(gptData);

        const flattenedRecommendedQuestions = gptData.map(
          (recommendedQuestion) => ({
            question_num: recommendedQuestion.question_num,
            question: recommendedQuestion.question,
            question_type: recommendedQuestion.question_type,
            isRequired: recommendedQuestion.required,
            answer: recommendedQuestion.answer,
          })
        );
        setRecommendedQuestions(flattenedRecommendedQuestions);
      })
      .catch((error) => {
      });
  }

  useEffect(() => {
    console.log(recommendedQuestions);
  }, recommendedQuestions);

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

    setUserQuestions((prevUserQuestions) => [
      ...prevUserQuestions,
      newUserQuestion,
    ]);
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
    <div className="flex items-stretch lg:mx-28">
      <div className="flex-1">
        <UserQuestions
          surveyId={surveyId}
          userQuestions={userQuestions}
          setUserQuestions={setUserQuestions}
          onRemoveQuestion={handleRemoveQuestion}
          topic={topic}
          description={description}
          onAddQuestion={handleAddQuestion}
        />
      </div>
      <div className="border-l border-main_color m-10"></div>
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
