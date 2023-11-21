import React, { useEffect, useState } from 'react';
import BoardItem from '../components/Board/BoardItem';

export default function Board() {
  const [data,setData]=useState(null);
  const [status,setStatus]=useState(['전체','전체']);
  const [boardData, setboardDData] = useState(data);
  const [complete, setComplete] = useState(null);
  const [uncomplete, setUnComplete] = useState(null);
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

  function handleStatus(state){
    const newstate = [...state]
    const fixstate = newstate[0]
    setStatus(fixstate);
  }

  useEffect(()=>{
    if(data){
      const uncom = data.filter((item)=>
        // console.log(item.status)
        item.status=='uncomplete'
      )
      const com = data.filter((item)=>
      item.status=='complete'
    )
    setComplete(com);
    setUnComplete(uncom);

    console.log('실행')
  }
  
  
},[data])

// handleItemClick(item){
//   setStatus()
// }

  return (
    <div>
      <nav>
      <ul className='flex space-x-12 ml-left my-7'>
        {['IT', '교육', '경제', '사회', '문화'].map((item, index) => (
          <li
            key={index}
            className={`click_highlight ${status[1] === index ? 'orange_bg' : ''}`}
            // onClick={() => handleItemClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      </nav>
      <nav>
      {/* onclick={()=>} */}
        <ul className='flex space-x-5 ml-left my-7'>
        <button onClick={()=>handleStatus('전체')} className={`${status[0] === "전체" ? 'select-list-item' : 'common-list-item'}`}>전체</button>
        <button onClick={()=>handleStatus('진행중')}className={`${status[0] === '진행중' ? 'select-list-item' : 'common-list-item'}`}>진행중</button>
        <button onClick={()=>handleStatus('완료')}className={`${status[0] === "완료" ? 'select-list-item' : 'common-list-item'}`}>완료</button>
        </ul>
      </nav>

      <main>
      <div className='w-screen flex flex-col items-center'>
        {(data) &&
          ((status[0] === '전체') ?
            data.map((item) => <BoardItem key={item.id} data={item} />) :
            (status[0] === '완료' ?
              complete.map((item) => <BoardItem key={item.id} data={item} />) :
              uncomplete.map((item) => <BoardItem key={item.id} data={item} />)
            )
          )
        }
        <hr className='  w-line border-1 border-main_color'/>
      </div>

      </main>
    </div> 
  );
}

