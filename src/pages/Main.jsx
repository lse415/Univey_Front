import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/main/Carousel';
import {FiCheckSquare} from 'react-icons/fi'
import Go_Create from '../components/main/Go_Create';
import Go_Participate from '../components/main/Go_Participate';
import axios from 'axios';
import BoardItem from '../components/main/BoardItem';
import { useQuery } from '@tanstack/react-query';

export default function Main() {
  
  const { isPending, error, data } = useQuery({
    queryKey: ['board'],
    queryFn: ()=> axios.get('/data/Board.json').then(
      (res)=>res.json(),
    ),
  })

  function useFetch(){
      const res = axios.get('/data/Board.json')
          console.log(res)
          return(res.data)
        }
  

  return (
    <div >
      <Carousel/>

      <article>
        <div className='flex text-2xl font-bold ml-96 my-4'>
          <FiCheckSquare className='text-4xl text-main_color '/>
          <div className='flex mt-1'> 
            <p className='text-sub_text_color '>&nbsp;&nbsp;설문조사를&nbsp;&nbsp;</p>
            <p className='text-main_color'>생성</p>
            <p className='text-sub_text_color '>하고&nbsp;&nbsp;</p>
            <p className='text-main_color'>참여 </p>
            <p className='text-sub_text_color '>해보세요!</p>
          </div>
        </div>
        <div className='flex w-full ml-64 '>
          <Link to='/main/create'><Go_Create/></Link>
          <Link to='/main/participate'><Go_Participate/></Link>
        </div>
      </article>

      <article>
        <div className='flex text-2xl font-bold ml-96 my-4'>
          <FiCheckSquare className='text-4xl text-main_color '/>
          <div className='flex mt-1'> 
            <p className='text-sub_text_color '>&nbsp;&nbsp;이 달의</p>
            <p className='text-main_color'>설문조사 트렌드</p>
            <p className='text-sub_text_color '>를 확인해보세요!</p>
          </div>
        </div>
        {(isPending) && <p>로딩중입니다.</p>}
        {(error) && <p>error가 떴어요</p>}
        {(data) && data.map((item)=>item.id)}
      </article>
      
    </div>
  );
}
