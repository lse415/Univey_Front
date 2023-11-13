import React from 'react';
import Carousel from '../components/main/Carousel';
import {FiCheckSquare} from 'react-icons/fi'

export default function Main() {
  return (
    <div >
      <Carousel/>

      <div className='flex text-2xl font-bold ml-96 mt-9'>
        <FiCheckSquare className='text-4xl text-main_color '/>
        <div className='flex mt-1'> 
          <p className='text-sub_text_color '>&nbsp;&nbsp;설문조사를&nbsp;&nbsp;</p>
          <p className='text-main_color'>생성</p>
          <p className='text-sub_text_color '>하고&nbsp;&nbsp;</p>
          <p className='text-main_color'>참여 </p>
          <p className='text-sub_text_color '>해보세요!</p>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
}
