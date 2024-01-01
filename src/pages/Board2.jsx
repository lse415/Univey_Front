import React, { useEffect, useRef, useState } from 'react';
import BoardItem from '../components/Board/BoardItem';


export default function Board2() {
  const [data,setData]=useState(null);
  const [status,setStatus]=useState(['전체','전체']);
  const [boardData, setboardData] = useState(data);
  const [category, setCategory] = useState('all');
  const [postType, setPostType] = useState('전체')
  const [orderType, setOrderType] = useState('최신순')


  useEffect(()=>{
    fetch(`/surveys/list?category=${category}&postType=${postType}&orderTpye=${orderType}`)
    .then((res)=>res.data)
    .then((res)=>setData(res))

    console.log(category)
    console.log(postType)
    console.log(orderType)
  },[category,postType,orderType])
  
  // useEffect(()=>{
  //   dataset()
  // },[])

  // useEffect(()=>{
  //   if(data){
  //     if(status[0]=='전체' && status[1]=='전체'){
  //       console.log(1)
  //       setboardData(data)
  //     }
  //     else if(status[0]=='전체' && status[1]!='전체'){
  //       console.log('2')
  //       setboardData(data.filter((item)=>item.category ==status[1]))
  //     }
  //     else if(status[0]!='전체' && status[1]=='전체'){
  //       setboardData(data.filter((item)=>item.status ==status[0]))
  //     }
  //     else if(status[0]!='전체' && status[1]!='전체'){
  //       setboardData(data.filter((item)=>(item.category ==status[1] && item.status ==status[0])))
  //     }
  //   }
  //   console.log(status)
  // },[status,data])
  
  // async function dataset(){
  //   await fetch('/data/Board.json')
  //   .then((res)=>res.json())
  //   .then((res)=>setData(res.surveyData))
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  // }

  // function handleStatus(state){
  //   const newstate = [...status]
  //   newstate[0]=state
  //   setStatus(newstate);
  // }

  // function handleItemClick(item){
  //   const newstate = [...status]
  //   newstate[1]=item
  //   setStatus(newstate);
  // }


  return (
    <div>
      <nav>
        <div>
        <ul className='flex space-x-12 ml-left my-7'>
          {['전체','IT', '교육', '경제', '사회', '문화'].map((item, index) => (
            <li
              key={index}
              onClick={() => setCategory(item)}
              className={`click_highlight ${status[1]==item ? 'text-highligth' :''}`}
            >
              {item}
            </li>
          ))}
        </ul>
        </div>
        <div className='flex justify-between'>
        {/* onclick={()=>} */}
          <ul className='flex space-x-5 ml-left my-7'>

          <button onClick={()=>{setPostType('전체')}} className={`'common-list-item'`}>전체</button>
          <button onClick={()=>{setPostType('진행 중')}} className={`'common-list-item'`}>진행중</button>
          <button onClick={()=>{setPostType('완료')}} className={`'common-list-item'`}>완료</button>
          <button onClick={()=>{setPostType('참여')}} className={`'common-list-item'`}>참여</button>

          </ul>
          <select onChange={(e)=>setOrderType(e.target.value)} className='h-10 mr-72 mt-5'>
            <option value="">최신순</option>
            <option value="">포인트순</option>
          </select>
        </div>
       
      </nav>    
     
      <main>
      <div className='w-screen flex flex-col items-center'>
        {(boardData) &&boardData.map((item) => <BoardItem key={item.id} data={item} />)}
        <hr className='  w-line border-1 border-main_color'/>
      </div>

      </main>
    </div> 
  );
}

