import React from 'react'
import BarChartModel from '../components/result/BarChart/BarChartModel';
import composed from '../assets/composed.svg'
import area from '../assets/area.svg'
import bar from '../assets/bar.svg'
import line from '../assets/line.svg'
import pie from '../assets/pie.svg'
import radar from '../assets/radar.svg'
import scatter from '../assets/scatter.svg'
import reset from '../assets/reset.svg'
import ChartType from '../components/result/ChartType';
import BarList from '../components/result/BarChart/BarList';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRecoilState } from "recoil";
import { graphState } from "../recoil/atoms/userState";
import axios from 'axios';

export default function ResultDetail() {
    const [graphInfo,setGraphInfo] = useRecoilState(graphState)
    const [data,setData]=useState();
    const [color, setColor] = useState([]);
    
    useEffect(()=>{
        console.log(graphInfo)
    },[graphInfo])
    
    useEffect(()=>{
        fetchData();
    },[])

    function fetchData(){
        axios('/data/Result.json')
        .then((res)=>res.data.resultData)
        .then((res)=>setData(res))
        }
        console.log('---------------------------')
        console.log(data)
        const answer = []
        data.answer.forEach((item,index)=>{
            data.votes &&
            answer.push({name:item, "응답 수": data.votes[index]})
        }) 

    // const data = [
    //     {
    //       name: '거의 사용하지 않음',
    //         "응답 수": 20,
    //     },
    //     {
    //       name: '가끔',
    //         "응답 수": 30,
    //     },
    //     {
    //       name: '자주',
    //         "응답 수": 15,
    //     },
    //     {
    //       name: '매우 자주',
    //         "응답 수": 11,
    //     }
    //   ];
  return (
    <div className='w-screen'>
        <header className='mb-10'>
        <div className='flex text-3xl items-center ml-80 mt-12 font-bold text-main_color'>
            <img src='https://url.kr/hkvjqz' className='ml-10 mt-1 mr-5 text-4xl'/>
            <h1 className=''>설문 결과</h1>
        </div>
            <p className='ml-96 mt-5'>설문 조사 응답 결과와 함께 그래프들을 확인하세요! 원하는 그래프를 다운받아 사용할 수 있습니다!</p>
        </header>
        
        <div className='flex flex-col items-center w-screen'>
            <div className='h-auto w-1/2 bg-white rounded-xl mb-5 flex flex-col items-center border-2 '>
                <div className='h-12 w-11/12 border-b-1 border-sub_line_color mt-6 mb-4 flex justify-between font-semibold'>
                    <p>1. 인공지능 사용 빈도가 어떻게 되나요?</p>
                    <div className='flex items-center px-4'>
                    </div>
                </div>

                <div className='flex mb-6'>
                    { data && <BarChartModel data={data}/>}
                </div>
            </div>
        </div>
        <div className='ml-leftresult'>
            <div className='text-main_color text-lg font-semibold mb-4'>그래프 색상</div>
            <input className='w-20 h-10 rounded-xl p-1 mr-8' type="color" />
            <input className='w-20 h-10 rounded-xl p-1 mr-8' type="color" />
            <input className='w-20 h-10 rounded-xl p-1 mr-8' type="color" />
            <input className='w-20 h-10 rounded-xl p-1 mr-8' type="color" />
        </div>
        <button className='w-32 h-10 rounded-xl ml-leftxl bg-background text-main_color flex items-center justify-center mt-10'>
            <span className='text- text-main_color text-2xl'><img src={reset} alt="" /></span>
            <span>선택 초기화</span>
        </button>
        <div className='flex justify-center mt-10'>
            <ChartType img={line} type='Line'/>
            <ChartType img={area} type='Area'/>
            <ChartType img={bar} type='Bar'/>
            <ChartType img={composed} type='Composed'/>
            <ChartType img={scatter} type='Scatter'/>
            <ChartType img={pie} type='Pie'/>
            <ChartType img={radar} type='Radar'/>
        </div> 
            <BarList />
        <button className='w-28 h-10 bg-sub_3 rounded-full font-bold float-right mr-leftxl mt-8 hover:bg-black hover:bg-opacity-20'>확인</button>
    </div>
  )
}
