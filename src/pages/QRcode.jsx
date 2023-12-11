import React from 'react'
import {QRCodeSVG} from 'qrcode.react';
import { IoSquareSharp } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
export default function QRcode() {
  return (
    <div>
      <div className='flex text-3xl items-center ml-80 mt-12 font-bold text-main_color'>
        <img src='https://url.kr/hkvjqz' className='ml-10 mt-1 mr-5 text-4xl'/>
        <h1 className=''>QR 생성</h1>
      </div>
        <p className='ml-leftxl mt-5'>설문조사 링크와 함께 제공되는 QR코드입니다. QR 코드를 예쁘게 꾸며보세요. 완성된 QR 코드는 SNS, 포스터 등에 사용하면 더욱 효과적이랍니다!</p>
        <section className='flex flex-col items-center mt-12'>
          <div className='w-80 h-80 bg-gray-400 flex justify-center items-center mb-12'>
            <QRCodeSVG
              value={"https://picturesofpeoplescanningqrcodes.tumblr.com/"}
              size={200}
              bgColor={"#ffffff"}
              fgColor={"#000000"}
              level={"L"}
              includeMargin={false}
              imageSettings={{
                src: "https://static.zpao.com/favicon.png",
                x: undefined,
                y: undefined,
                height: 24,
                width: 24,
                excavate: true,
                opacity: 50,
              }}
              />
          </div>
          <hr className='w-1/2 border-xs border-line_color mb-4'/>
            <p className='w-1/2 ml-20 mb-3 text-2xl text-main_color font-bold'>QR</p>
          <article1 className='w-screen flex flex-col items-center pl-20 mb-10 text-main_color'>

            <div className='flex w-1/2 mb-8'>
              <form action="" className=' w-1/2'>
                <label className='block '>크기</label>
                <input type="range" min={10} max={320} className='w-80 accent-main_color' />
              </form>
              <form action="" className=' w-1/2'>
                <label className='block  '>배경 크기</label>
                <input type="range" min={10} max={320} className='w-80 accent-main_color' />
              </form>
            </div>

            <div className='flex w-1/2'>

              <div className='flex  w-1/2'>
                <form action="" className='mr-24'>
                  <label htmlFor="" className='block mb-2'>색상</label>
                  <input type="color" className='w-20 rounded-md px-1 bg-white hover:cursor-pointer border-1 border-line_color'/>
                </form>
                <form action="">
                  <label htmlFor="" className='block mb-2'>배경색상</label>
                  <input type="color" className='w-20 rounded-md border-1 px-1  bg-white border-line_color hover:cursor-pointer'/>
                </form>
              </div>

              <div className='w-1/2'>
                <form action="">
                  <label htmlFor="">스타일</label>
                  <div className='flex mt-1'>
                    <button className='w-24 h-8 justify-center flex items-center border-1 rounded-xl  border-main_color bg-main_color text-white font-thin pb-1'><IoSquareSharp className='text-sm mt-1 mr-2 '/> square</button>
                    <button className='w-24 h-8 justify-center flex items-center border-1 rounded-xl  border-main_color bg-white text-main_color pb-1 ml-12'><FaCircle className='text-sm mt-1 mr-2 '/> dots</button>
                  </div>
                </form>
              </div>

            </div>

          </article1>

          <hr className='w-qr_cutting  border-xs border-line_color mb-10'/>
          <p className='w-1/2 ml-20 mb-3 text-2xl text-main_color font-bold'>Logo</p>

          <article2 className='w-screen flex flex-col items-center pl-20 mb-10 text-main_color'>

            <div className='flex w-1/2 mb-8'>

              <div className='flex  w-1/2'>
                <form action="">
                  <label htmlFor="">이미지</label>
                  <button className='w-20 h-8 justify-center flex items-center border-1 rounded-xl border-main_color bg_wthie pb-1 mt-2 hover:bg-main_color hover:text-white'> 파일 선택</button>
                </form>
              </div>

              <div className='w-1/2'>
                <form action="">
                  <label htmlFor="">패딩 스타일</label>
                  
                  <div className='flex mt-1'>
                    <button className='w-24 h-8 justify-center flex items-center border-1 rounded-xl  bg_main  font-thin pb-1'><IoSquareSharp className='text-sm mt-1 mr-2 '/> square</button>
                    <button className='w-24 h-8 justify-center flex items-center border-1 rounded-xl  bg_white pb-1 ml-12'><FaCircle className='text-sm mt-1 mr-2 '/> dots</button>
                  </div>
                </form>
              </div>

            </div>

            <div className='flex w-1/2'>
              <form action="" className=' w-1/2'>
                <label className='block '>크기</label>
                <input type="range" min={10} max={320} className='w-80 accent-main_color' />
              </form>
              <form action="" className=' w-1/2'>
                <label className='block  '>배경 크기</label>
                <input type="range" min={10} max={320} className='w-80 accent-main_color' />
              </form>
            </div>

            

          </article2>

        </section>
    </div>
  )
}
