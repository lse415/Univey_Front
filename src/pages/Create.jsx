<<<<<<< HEAD
import React from 'react';

export default function Create() {
  return (
    <div>
      Create
    </div>
  );
}

=======
import React from "react";

import CreateSurvey from "../components/Create/CreateSurvey"
import { GoPencil } from "react-icons/go";
import { useEffect } from "react";
import customaxios from "../api/Axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms/userState";

const Create = () => {
  const [userInfo,setUserInfo] = useRecoilState(userState)
  const navigate = useNavigate();
  useEffect(()=>{
    customaxios('/surveys/create',
    { headers: { 
      'ngrok-skip-browser-warning': '69420',
      Authorization: `${userInfo.accesstoken}`,
      'Content-Type': 'application/json'
    } })
    .catch(err=>{
      if(err.response.data.status===401){
        alert('로그인이 필요합니다!')
        navigate('/')
      }
    })
  },[])
  return (
    <div>
      <div>
        <div className="flex items-center lg:mx-60 lg:mt-7">
          <GoPencil className="mr-4 text-main_color text-3xl" />
          <h1 className="text-main_color text-3xl">설문 생성</h1>
        </div>
        <div className="mx-72 mt-5 text-text_color text-sm">
          설문조사를 분류하기 위해 필요한 단계입니다. 필수로 기입해야 하는
          항목의 경우에는 설문 생성된 이후 정보가 제공되니 신중하게 기입
          부탁드립니다.
          <br></br>
          추천 질문 기능을 사용하시는 경우에 현재 작성한 정보들을 바탕으로
          질문이 만들어집니다. 작성 시 유의해주세요!
        </div>
        <hr className="mt-5"></hr>
      </div>
      <div>
      <CreateSurvey />
      </div>
    </div>
  );
};

export default Create;
>>>>>>> 767cdb5e29cb71aeb34c578af0b8969989f27290
