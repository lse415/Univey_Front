import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useBeforeunload } from "react-beforeunload";
import { useNavigate, useParams } from "react-router-dom";
import ParticipateCard from "../components/participate/ParticipateCard";
import ExitModal from "../components/participate/ExitModal";
import CheckIcon from "../components/icons/CheckIcon";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms/userState";
import customaxios from "../api/Axios";

const Participate = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [userQuestions, setUserQuestions] = useState([]);
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [responses, setResponses] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showWarning, setShowWarning] = useState([]);
  //const [showExitModal, setShowExitModal] = useState(false);

  const { surveyId } = useParams();
  const navigate = useNavigate();

//렌더링될 때 accesstoken?
    
useEffect(() => {

  customaxios.get(`/surveys/participation/${surveyId}`,
  {
    headers: {
      Authorization: `${userInfo.accesstoken}`,
      'ngrok-skip-browser-warning': '69420',
      'Accept': 'application/json'
  }
  })
  .then((res)=>{
        if(res.data.status===409){
          alert('이미 참여한 설문조사입니다')
          navigate(-1)
        }
        else{
    console.log(res)

    const surveyData=res.data.data.surveyData
    const flattenedUserQuestions=res.data.data.surveyData.userQuestions

    console.log(surveyData)
    console.log(flattenedUserQuestions)

    if (flattenedUserQuestions.length > 0) {
      setTopic(surveyData.topic);
      setDescription(surveyData.description);
      // 초기에 모든 질문에 대한 경고를 숨기도록 빈 배열로 초기화
      setShowWarning(Array(flattenedUserQuestions.length).fill(false));
      setUserQuestions(flattenedUserQuestions)
    }
  }
  })
  .catch(err=>{
    if(err.response.data.status===401){
    }
  })

  // axios.get(
  //   '/data/ParticipatePost.json'
  //   //{ headers: { Authorization: `Bearer ${accessToken}` } }
  //   )
  //   .then((response) => {
  //     const surveyData = response.data.data.surveyData;
  //     const flattenedUserQuestions = surveyData.userQuestions;

  //     setUserQuestions(flattenedUserQuestions);

  //     if (flattenedUserQuestions.length > 0) {
  //       setTopic(surveyData.topic);
  //       setDescription(surveyData.description);
  //       // 초기에 모든 질문에 대한 경고를 숨기도록 빈 배열로 초기화
  //       setShowWarning(Array(flattenedUserQuestions.length).fill(false));
  //     }
  //   })
  //   .catch((error) => {
  //     console.error('데이터를 불러오는 동안 에러 발생:', error);
  //   });
}, []);


  /* //모달 사용할 경우
  // 페이지 벗어남
  const handleCancel = () => {
    setShowExitModal(false);
    window.history.back();
    // 사용자가 의도한 페이지 이동 발생
  };

  // 설문 계속
  const handleConfirm = () => {
    setShowExitModal(false);
  }; 
  */

  // beforeunload 이벤트 핸들러 등록
  // useBeforeunload((event) => event.preventDefault());

  // 페이지 벗어남 이벤트 핸들러 직접등록
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (!submitting) {
        const message =
          "설문 참여가 완료되지 않았습니다. 페이지를 떠나시겠습니까?";
        event.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [submitting]);

  /* // beforeunload 이벤트 핸들러 직접 등록
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // if (showExitModal) {
      //   // 모달이 이미 열려 있는 경우에는 사용자가 의도한 동작을 수행
      //   setShowExitModal(false);
      // } else {
      // 모달을 열어 사용자에게 경고 메시지를 표시
      // setShowExitModal(true);
      event.preventDefault();
      event.returnValue =
        "설문 참여가 완료되지 않았습니다. 페이지를 떠나시겠습니까?";
      // }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [showExitModal]); */

  useEffect(() => {
    customaxios
      .get(`/surveys/participation/${surveyId}`, {
        headers: {
          Authorization: `${userInfo.accesstoken}`,
          "ngrok-skip-browser-warning": "69420",
          Accept: "application/json",
        },
      })
      .then((res) => {
        if(res.data.status!==409){
        const surveyData = res.data.data.surveyData;
        const flattenedUserQuestions = res.data.data.surveyData.userQuestions;

        console.log(surveyData);
        console.log(flattenedUserQuestions);

        if (flattenedUserQuestions.length > 0) {
          setTopic(surveyData.topic);
          setDescription(surveyData.description);
          // 초기에 모든 질문에 대한 경고를 숨기도록 빈 배열로 초기화
          setShowWarning(Array(flattenedUserQuestions.length).fill(false));
          setUserQuestions(flattenedUserQuestions);
        }
        }
      })
      .catch(err=>{
        if(err.response.data.status===401){
          alert('로그인이 필요합니다!')
          navigate('/')
        }
      })

    /*   axios
        .get(
          "/data/ParticipatePost.json"
          //{ headers: { Authorization: `Bearer ${accessToken}` } }
        )
        .then((response) => {
          const surveyData = response.data.data.surveyData;
          const flattenedUserQuestions = surveyData.userQuestions;

          setUserQuestions(flattenedUserQuestions);

          if (flattenedUserQuestions.length > 0) {
            setTopic(surveyData.topic);
            setDescription(surveyData.description);
            // 초기에 모든 질문에 대한 경고를 숨기도록 빈 배열로 초기화
            setShowWarning(Array(flattenedUserQuestions.length).fill(false));
          }
        })
        .catch((error) => {
          console.error("데이터를 불러오는 동안 에러 발생:", error);
        }); */
  }, []);

  const handleCardSubmit = (questionNum, selectedAnswer) => {
    const question = userQuestions.find((q) => q.question_num === questionNum);

    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionNum]: selectedAnswer,
    }));

    // 사용자가 응답한 질문에 대한 경고를 숨기도록 업데이트
    setShowWarning((prevShowWarning) => {
      const updatedShowWarning = [...prevShowWarning];
      updatedShowWarning[questionNum] = question.required && !selectedAnswer;
      return updatedShowWarning;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const missingRequired = userQuestions.reduce((acc, question) => {
      if (question.required && !responses[question.question_num]) {
        acc[question.question_num] = true;
        alert("모든 필수 입력 항목을 작성해주세요.");
      }
      return acc;
    }, {});

    if (Object.keys(missingRequired).length > 0) {
      setShowWarning((prevShowWarning) => {
        const updatedShowWarning = prevShowWarning.map(
          (value, index) => missingRequired[index] || false
        );
        return updatedShowWarning;
      });
      return;
    }

    setSubmitting(true);

    const formattedResponses = userQuestions.map((question) => {
      const userAnswer = responses[question.question_num];

      return {
        question_id: question.question_id,
        content: question.question_type === "SHORT_ANSWER" ? userAnswer : null,
        answer_id:
          question.question_type === "MULTIPLE_CHOICE" ? userAnswer : null,
      };
    });
    const answer123 = { answers: formattedResponses };

    console.log("서버에 보낼 응답 데이터:", formattedResponses);

    customaxios
      .post(`/surveys/answerSubmit/${surveyId}`, answer123, {
        headers: {
          Authorization: `${userInfo.accesstoken}`,
          Accept: "application/json",
        },
      })
      .then((response) => {
        const point = response.data.data;
        setUserInfo((prev) => ({ ...prev, point: point }));
        const newPath = "./complete";
        navigate(newPath);
      })
      .catch(err=>{
        console.log('3번째')
        if(err.response.data.status===401){
          alert('로그인이 필요합니다!')
          navigate('/')
        }
      })
  };

  return (
    <div className="flex lg:mx-24">
      <div className="flex-1 text-center">
        <div className="flex-1 flex px-32 pt-10">
          <div className="text-main_color text-3xl mr-4 pt-1">
            <CheckIcon />
          </div>
          <div>
            <h1 className="text-main_color text-3xl text-left">설문 참여</h1>
            <div className="my-5">
              주어진 질문에 응답해주세요. 다른 사람들에게 중요한 설문일 수
              있으니 신중하게 응답 부탁드립니다!
            </div>
          </div>
        </div>
        <hr className="mx-32 mb-5"></hr>
        <div className="flex justify-center mt-16 mb-4 text-main_color">
          <BiSolidQuoteAltLeft />
          <h2 className="text-2xl text-center font-semibold  px-2">{topic}</h2>
          <BiSolidQuoteAltRight />
        </div>
        <p className="text-center text-sm mb-10">{description}</p>
        <form onSubmit={handleSubmit}>
          <div className="flex-1 mx-80">
            {userQuestions.map((question, index) => (
              <ParticipateCard
                key={index}
                question={question.question}
                question_num={question.question_num}
                question_type={question.question_type}
                answers={question.answers || []}
                required={question.required}
                response={responses[question.question_num]}
                showWarning={showWarning[question.question_num]}
                onCardSubmit={(questionNum, selectedAnswer) =>
                  handleCardSubmit(questionNum, selectedAnswer)
                }
              />
            ))}
          </div>
          <div className="mx-32 text-right">
            <button
              type="submit"
              className="px-7 py-2 mt-24 mb-60 bg-sub_text_color_4 text-white rounded-xl"
            >
              응답 제출
            </button>
          </div>
        </form>
      </div>
      {/* {showExitModal && (
        <ExitModal onCancel={handleCancel} onConfirm={handleConfirm} />
      )} */}
    </div>
  );
};

export default Participate;
