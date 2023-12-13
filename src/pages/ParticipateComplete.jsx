import React from 'react';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '../components/icons/CheckIcon';

export default function ParticipateComplete() {

  const navigate = useNavigate();

  const handleReturnClick = () => {
    // const newPath = '/'; 
    // navigate(newPath);
    console.log('move move')
  };

  return (
    <div className='lg:w-full lg:h-screen flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center mb-5'>
        <CheckIcon/> 
        <h1 className='ml-5 text-main_color text-4xl mb-1'>응답 제출 완료!</h1>
      </div>
      <div>
        <p className='flex justify-center text-l'>
          설문 응답이 완료되었습니다! 설문에 응해주셔서 감사합니다:)
        </p>
      </div>
      <div className='flex justify-center mt-20'>
        <button 
          className='py-2 px-16 rounded-2xl bg-main_color text-white text-xl'
          onClick={handleReturnClick}>
          돌아가기
        </button>
      </div>
    </div>
  );
}

