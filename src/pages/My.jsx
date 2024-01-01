import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MyHomeIcon from '../components/icons/MyHomeIcon';
import ProfileIcon from '../components/icons/ProfileIcon';
import { GoPencil } from "react-icons/go";
// import GoRecord from '../components/icons/GoRecord';
// import GoPoint from '../components/icons/GoPoint';

export default function My() {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    axios.get(
      '/data/my.json',
      // /mypage
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
      .then((response) => {
        const data = response.data.data;
        setUserName(data.userName);
        setEmail(data.email);
      })
      .catch((error) => {
        console.error('데이터를 불러오는 동안 에러 발생:', error);
      });
  }, []);


  

  return (
    <div className='lg:mx-52 lg:mt-7'>
      <div className="flex items-center ">
        <MyHomeIcon className="mr-4 text-main_color" />
        <h1 className="text-main_color text-2xl px-3">마이페이지 > </h1>
      </div>
      <div className='flex mt-10 ml-6 text-main_color'>
        <div className='flex items-center'>
          <ProfileIcon/>
          <div className='pl-3'>
            <div className='flex items-center'>
              <p className="text-xl font-semibold px-2">{userName}</p>
              <Link to="/main/my/info">
                <div className='pt-1 text-xl font-thin'>
                  <GoPencil/>
                </div>
              </Link>
            </div>
            <p className="text-l px-2">{email}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center lg:mx-52 lg:mt-7">
        {/* <GoRecord className="mr-4 text-main_color text-3xl" />
        <GoPoint className="mr-4 text-main_color text-3xl" /> */}
      </div>
      
      
    </div>
  );
}

