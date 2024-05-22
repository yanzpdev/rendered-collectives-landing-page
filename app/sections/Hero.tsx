'use client';
import { motion } from 'framer-motion'
import React from 'react'
import Panel from '../components/Panel'
import { Yeseva_One } from 'next/font/google';

const yesevaOne = Yeseva_One({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
});

const Hero = () => {
  return (
    <motion.section 
        id="hero" 
        className="h-screen flex items-center justify-center relative mb-16 overflow-hidden"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
    >
      <Panel tag='div' className="bg-[#784103] h-full w-full absolute opacity-70"/>
      <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 0.6}}
        transition={{ duration: 1 }}
        className="absolute inset-0 -mt-44 -mr-44 sm:-mr-0" 
        style={{ 
          backgroundImage: "url('/assets/images/5.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',  
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Panel tag='div'
        className="text-center sm:text-end text-white relative z-10 w-full px-6 sm:px-0 sm:mx-auto sm:container"
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
      >
        <motion.h1 
          className={`ml-auto mr:0 md:mr-20 xl:mr-0 text-3xl sm:text-4xl md:text-7xl font-bold ${yesevaOne.className} sm:w-9/12`} 
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
          Capturing Beautiful Moments
        </motion.h1>
          <motion.p 
            className={`mt-4 text-lg sm:text-xl md:text-2xl mr:0 md:mr-20 xl:mr-0`}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          >
            We make your moments unforgettable
          </motion.p>
      </Panel>
    </motion.section>
  )
}

export default Hero