import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
export default function Header() {
  return (
    <nav className='border-b-2 relative h-24 px-36 border-#C2C6CE'>
      <div className='text-sm absolute right-80 text-sub_text_color bottom-120 mt-3'>
        <span>로그인</span>
        <span className='m-3'> | </span>
        <span>회원가입</span>
      </div>
      <div className=' flex justify-evenly h-28 items-center pt-4'>
        <div className='flex'>
          <div className='flex'>
            <img src="https://url.kr/8q5b46" alt="univey logo" className='w-7 h-7 mr-4'/>
            <p className='font-semibold text-xl text-main_color'>Univey </p>
          </div>
        <ul className=' text-lg flex font-semibold text-text_color justify-around w-72 ml-16 '>
          <li className='hover:text-highligth cursor-pointer'>설문생성</li>
          <li className='hover:text-highligth cursor-pointer'>설문보기</li>
          <li className='hover:text-highligth cursor-pointer'>트렌드</li>
        </ul>
        </div>
        <div className='ml-36 flex w-1/3'>
          <form className='relative w-10/12 h-10'>                             
            <input className=' border-2 rounded-3xl border-main_color w-full h-full pl-4 focus:outline-none text-text_color' type="text"/>
            <button className=' text-main_color absolute text-4xl align-middle right-2'><CiSearch/></button>
          </form>
        <button className=' text-4xl text-main_color ml-4'><FaUserCircle/></button>
        </div>
      </div>
    </nav>
  );
}