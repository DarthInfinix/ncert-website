import React from 'react'
import './App.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";



// import required modules
import { Scrollbar } from "swiper";


    
const Management = () => {
  return (
    <div className="management-wrapper">
        <h1>MEET OUR MANAGEMENT</h1>
        <div className="image-wrapper">
        <Swiper
        // scrollbar={{
        //   hide: true,
        // }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
                <SwiperSlide className='swiper-slide'>
                    <img src="https://picsum.photos/200" alt="management" />
<p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex alias architecto quis qui accusantium recusandae aliquam distinctio enim laboriosam dignissimos?</p>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://picsum.photos/201" alt="management" />
<p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex alias architecto quis qui accusantium recusandae aliquam distinctio enim laboriosam dignissimos?</p>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://picsum.photos/202" alt="management" />
<p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex alias architecto quis qui accusantium recusandae aliquam distinctio enim laboriosam dignissimos?</p>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://picsum.photos/202" alt="management" />
<p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex alias architecto quis qui accusantium recusandae aliquam distinctio enim laboriosam dignissimos?</p>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://picsum.photos/202" alt="management" />
<p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex alias architecto quis qui accusantium recusandae aliquam distinctio enim laboriosam dignissimos?</p>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://picsum.photos/202" alt="management" />
<p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex alias architecto quis qui accusantium recusandae aliquam distinctio enim laboriosam dignissimos?</p>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://picsum.photos/202" alt="management" />
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex alias architecto quis qui accusantium recusandae aliquam distinctio enim laboriosam dignissimos?</p>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://picsum.photos/202" alt="management" />
<p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex alias architecto quis qui accusantium recusandae aliquam distinctio enim laboriosam dignissimos?</p>
                </SwiperSlide>
            </Swiper>
        
        </div>
    </div>
  )
}

export default Management