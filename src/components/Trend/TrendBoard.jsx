import React from 'react';

export default function TrendBoard({data}) {
  return (
    <div className='w-1/3 border-1 border-main_color mx-5 rounded-2xl flex flex-col items-center'>
      <div className='h-1/2 pt-8'>
        <img src="https://zrr.kr/vu76" alt="" />
      </div>
      <hr className='border-1 border-line_color w-11/12 align-middle   '/>
      <div className='flex flex-col items-start h-1/2 pt-8'>
          <div className='text-main_color text-3xl font-bold mb-4'>{data.topic}</div>
          <div className='font-semibold mb-8'>{data.description}</div>
          <div>
            <p>대상: { 
             data.age[0]=="all" ?
             '전연령':
                data.age.length===1? `${data.age[0]}대`
             :`${data.age[0]}대~${data.age[data.age.length-1]}대`
            }</p>
            <p>실제 응답자 수 / 목표 응답자 수: {data.targetResponden}명 /{data.target_targetResponden}명</p>
          </div>
          {/* { data.hash && data.hash.map((item)=> console.log(item))} */}
        </div>
    </div>
  );
}


{/* <span key={item.id}>#{item}</span> */}
