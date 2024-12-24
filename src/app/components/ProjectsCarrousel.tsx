import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';


const ProjectsCarrousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      navigation
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
    >
      <SwiperSlide>
        <Image src="projects/project1-1.png" alt="Slide 1 of the project" layout="intrinsic"
          width={50} height={50} className='w-full h-full self-center' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="projects/project1-2.png" alt="Slide 2 of the project" layout="intrinsic"
          width={50} height={50} className='w-full h-full self-center' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="projects/project1-3.png" alt="Slide 3 of the project" layout="intrinsic"
          width={50} height={50} className='w-full h-full self-center' />
      </SwiperSlide>
    </Swiper>
  )
}

export default ProjectsCarrousel