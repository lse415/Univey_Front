import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyHomeIcon from '../components/icons/MyHomeIcon';
import { GoPencil } from "react-icons/go";

export default function MySurveys({}) {

    const [selectedType, setSelectedType] = useState('created'); 

    const handleItemClick = (type) => {
        setSelectedType(type);
    };

return (
    <div className='lg:mx-56 lg:mt-7 mb-20'>
        <div className="flex">
            <MyHomeIcon className="mr-4 text-main_color" />
            <h1 className="text-main_color text-2xl px-3">마이페이지 > </h1>
            <div className='text-main_color pt-1 text-3xl font-thin'>
                <GoPencil/>
            </div>
            <h1 className="text-main_color text-3xl px-3">설문 기록 </h1>
        </div>
        <div className='mt-10 flex'>
            <nav>
                <div>
                    <ul className='flex space-x-6 ml-left text-2xl cursor-default'>
                    {['생성한 설문','참여한 설문'].map((item, index) => (
                        <li
                        key={index}
                        onClick={() => handleItemClick(index === 0 ? 'created' : 'participated')}
                        className={`${selectedType === (index === 0 ? 'created' : 'participated') ? 'text-main_color' : 'text-sub_text_color'}`}                        >
                        {item}
                        </li>
                    ))}
                    </ul>
                </div>
            </nav>    
        </div>
{/*         {selectedType === 'created' && (
                // fetch, render
                //endpoint : /mypage/surveys?type=created 
        )}
        {selectedType === 'participated' && (
                // fetch, render
                //endpoint : /mypage/surveys?type=participated 
        )} */}
    </div>
    );
}
