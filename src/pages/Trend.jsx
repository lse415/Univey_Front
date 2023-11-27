import React, { useEffect, useState } from 'react'
import TrendCarousel from '../components/Trend/TrendCarousel'
import { LiaFireAltSolid } from "react-icons/lia";
import TrendBoard from '../components/Trend/TrendBoard';


export default function Trend() {
  const [data,setData]=useState(null); 

  useEffect(()=>{
    dataset()
  },[])

  
  async function dataset(){
    await fetch('/data/Board.json')
    .then((res)=>res.json())
    .then((res)=>setData(res.surveyData))
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div>
      <article className='mb-12 mt-24' >
      <TrendCarousel/>
      </article>

      <main>
        <div className='flex text-2xl font-semibold ml-80 mb-8'>
        <span>이 달의 트렌드</span>
        <span className='text-4xl'><LiaFireAltSolid /></span>
        </div>
        <ul className='flex space-x-12 ml-80 mb-24'>
          {['전체','IT', '교육', '경제', '사회', '문화'].map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>

        <article className='flex w-screen justify-center'>
          <div className='flex w-3/4 h-trend_board mb-10'>
          {data &&
            data.filter(item => item.trend === true).map((item)=>{
              return(
              <TrendBoard key={item.id} data={item}/>
            )
            })
            }
          </div>
        </article>
      </main>
    </div>
  )
}
