'use client';
import { useState } from 'react';
import Image from 'next/image';
import Panel from '../components/Panel';
import { motion } from 'framer-motion';
import HeaderTag from '../components/HeaderTag';
import { works } from '../constants';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, EffectFade } from 'swiper/modules';

const Works = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <Panel tag='section' id="portfolio" className="container mx-auto py-16 px-6 sm:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <HeaderTag level={2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Works</HeaderTag>
        <p className="text-base md:text-lg mb-4">Here are some samples from our wide collection of captivating visuals.</p>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          effect='fade'
          modules={[FreeMode, Navigation, Thumbs, EffectFade]}
          slidesPerView={1}
          className="mySwiper2 swiper-tag custom-swiper"
        >
          {works.map((work, index) => (
            <SwiperSlide key={index}>
              <Panel tag='div' className='w-full h-full'>
                <Image 
                  src={`/assets/images/${index+1}.jpg`}
                  alt={`Work ${index + 1}`}
                  width={3000}
                  height={3000}
                  draggable={false}
                  quality={100}
                  className="select-none"
                />
              </Panel>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper mt-4"
        >
          {works.map((work, index) => (
            <SwiperSlide key={index}>
              <Image 
                src={`/assets/images/${index+1}.jpg`}
                alt={`Work ${index + 1}`}
                width={3000}
                height={3000}
                draggable={false}
                className="cursor-pointer select-none object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Panel tag='div' className='w-full flex items-center justify-center mt-5'>
          <Link href={`/gallery`} className='bg-black text-white py-2 px-4 font-semibold'>View Gallery</Link>
        </Panel>
      </motion.div>
    </Panel>
  )
}

export default Works