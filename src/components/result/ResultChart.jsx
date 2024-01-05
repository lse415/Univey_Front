import React from 'react'
import { useState } from 'react';
import { PiUploadSimpleLight } from "react-icons/pi";
import BarChartModel from './BarChart/BarChartModel';
import { LuPencil } from "react-icons/lu";
import LineChartModel from './LineChartModel';
import PieChartModel from './PieChartModel';
import { Link } from 'react-router-dom';
export default function ResultChart({data}) {
    const [graph,SetGraph] = useState('bar');

    const answer = []
    const test = data.answer.forEach((item,index)=>{
      data.votes &&
      answer.push({name:item, "응답 수": data.votes[index]})
    })

    const datas = [
        {
          name: '거의 사용하지 않음',
            "응답 수": 20,
        },
        {
          name: '가끔',
            "응답 수": 30,
        },
        {
          name: '자주',
            "응답 수": 15,
        }
      ];
    console.log(answer)
    console.log(datas)

  return (
    <div className='h-96 w-4/5 bg-white rounded-xl mb-16 flex flex-col items-center '>
        <div className='h-12 w-11/12 border-b-1 border-sub_line_color mt-6 mb-4 flex justify-between font-semibold'>
            <p>{`${data.question_num}.${data.question}`}</p>
            <div className='flex items-center px-4'>
            <Link to='./edit'><LuPencil className='text-2xl mr-4 '/></Link>
            <button><PiUploadSimpleLight className='text-3xl'/></button>
            </div>
        </div>

        <div className='flex'>
            <div className={`${graph=='bar'? 'block' : 'hidden'} mt-5`}>
                <LineChartModel data={answer}/>
            </div>
        </div>
    </div>
  )
}
