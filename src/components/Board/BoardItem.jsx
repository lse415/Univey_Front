import React, { useEffect } from "react";
import { SlArrowRight } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import robot from "../assets/robot.svg";

export default function BoardItem({ data }) {
  const navigate = useNavigate();

  function handleCategory(category){
    switch(category){
      case('economy'):
      return '경제'
      break;
      case('education'):
      return '교육'
      break;
      case('society'):
      return '사회'
      break;
      case('culture'):
      return '문화'
      break;
      default: return(category)
    }
  }

  function statusName(){
    switch(data.status){
        case 'activeSurvey':
          return <div className="status bg-highligth">진행중</div>
          break;
        case 'completedSurvey':
          return <div className="status bg-text_color">완료</div>;
          break;
        case 'participated':
          return <div className="status bg-main_color">참여</div>
          break;
        default: return
    }
  }

  function handlePart(){
    switch(data.status){
      case 'activeSurvey':
        navigate(`/main/participate/${data.id}`)
        break;
      case 'completedSurvey':
        navigate(`/main/result/${data.id}`)
        break;
      case 'participated':
        alert('이미 참여하셨습니다.')
        break;
      default: return
  }
  }

  return (
    <div className="overflow-hidden border-t-2 border-main_color w-line h-full">
      <div className=" flex justify-between ml-10">
        <div className="flex flex-col justify-center h-full mt-9">
          <div className="flex">
            <div className="text-3xl font-bold mb-4">{data.topic}</div>
            {statusName()}
          </div>
          <div className="font-semibold mb-6">{data.description}</div>
          <div>
            <p>{`카테고리 : ${handleCategory(data.category)}`}</p>
            <p>{`문항 수 : 3분 예상`}</p>
            <p>
              대상:{" "}
              {data.age.minAge === 0
                ? "전연령"
                : `${data.age.minAge}대-${data.age.maxAge}대`}
            </p>
            {data.targetRespondents ? (
              <p>
                실제 응답자 수 / 목표 응답자 수: {data.currentRespondents}명 /
                {data.targetRespondents}명
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className='flex'>
          <div className="text-main_color">
          <button onClick={()=>handlePart()} className='h-full flex items-start pb-10 flex-col justify-end'>
            <div className="border-2 w-12 h-6 flex justify-center items-center text-s rounded-xl border-main_color">{data.point==null ? '10' : data.point}p</div>
            <div className="flex items-center">
            <span>설문 참여하러 가기  &nbsp; </span> 
            <span className=''><SlArrowRight/></span> 
            </div>
            </button>
          </div>
            <img className='float-right' src={robot} alt="" />
          </div>

      </div>
    </div>
  );
}
