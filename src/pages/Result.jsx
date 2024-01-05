import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import ResultAnswer from '../components/result/ResultAnswer';
import ResultChart from '../components/result/ResultChart';

export default function Result() {
    const [data,setData]=useState();

    useEffect(()=>{
        fetchData();
    },[])

    function fetchData(){
        axios('/data/Result.json')
        .then((res)=>res.data.resultData)
        .then((res)=>setData(res))
      }
      console.log(data)
  return (
    <div>
      <header className='mb-10'>
        <div className='flex text-3xl items-center ml-80 mt-12 font-bold text-main_color'>
            <img src='https://url.kr/hkvjqz' className='ml-10 mt-1 mr-5 text-4xl'/>
            <h1 className=''>설문 결과</h1>
        </div>
            <p className='ml-leftxl mt-5'>설문 조사 응답 결과와 함께 그래프들을 확인하세요! 원하는 그래프를 다운받아 사용할 수 있습니다!</p>
      </header>
      {data &&
      <article className='flex flex-col items-center'>
        <hr className='border-xs border-line w-line mb-10 -mt-2'/>
        <div className='w-2/3 bg-background h-auto rounded-3xl flex flex-col items-center'>
            <div className='flex flex-col items-center my-20'>
                <p className='font-extrabold text-4xl text-main_color mb-8'>&ldquo; {data.topic} &rdquo;</p>
                <p>{data.description}</p>
            </div>
              {data.question.map((item)=>{
                  return item.votes ? 
                    <ResultChart data={item} />
                   : 
                    <ResultAnswer data={item}/>
              })}
        </div>
      </article>
      }
    </div>
  )
}
