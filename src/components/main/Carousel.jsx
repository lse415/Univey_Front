import React, { useCallback, useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function Carousel() {
    const [data, setData] = useState([]);
    const slickRef = useRef(null);
    useEffect(() => {
        axios.get('/data/Carousel.json')
            .then((res) => {
                setData(res.data.items);
            })
            .catch((error) => {
                // 에러 처리
                console.error('Error fetching data:', error);
            });
    }, []);

    const previous = useCallback(() => slickRef.current.slickPrev(), []);
    const next = useCallback(() => slickRef.current.slickNext(), []);

        const settings = {
          arrows: false,
          dots: false,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
        //   autoplay: true,
          autoplaySpeed: 2000,
            }   
    return (
        <div>
            <Slider {...settings} ref={slickRef} className='mt-5'>
                {data.map((item) => (
                    <div className='h-xxl relative'>
                        <img src={item.url} className=" h-full absolute
                        right-1/2 translate-x-1/2 " />
                    </div>
                ))}
            </Slider>
            <div>
                <div onClick={previous} className='z-10'>
                    <SlArrowLeft />
                </div>
                <div onClick={next}>
                    <SlArrowRight />
                </div>
            </div>
        </div>
    );
        
    }
