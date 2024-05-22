'use client';
import React, { useEffect, useState } from 'react';
import { works } from '../constants';
import Image from 'next/image';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';
import Header from '../components/Header';
import Panel from '../components/Panel';
import Footer from '../components/Footer';
import Contact from '../sections/Contact';
import Button from '../components/Button';

const Didot = localFont({
  src: '../../fonts/Didot.otf',
  weight: '100',
  display: 'swap',
});

const GalleryPage: React.FC = () => {
  const [event, setEvent] = useState<string>('Weddings');
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  const count = works.length;

  useEffect(() => {
    if (showOverlay) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [showOverlay]);

  const handleClick = (param: number) => {
    setIndex(param);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setIndex(-1);
  };

  const handleNavigation = (param: string) => {
    if (param === 'prev') {
      setIndex(index === 0 ? count - 1 : index - 1);
    } else {
      setIndex(index === count - 1 ? 0 : index + 1);
    }
  };

  return (
    <Panel tag='div' className="h-screen relative w-full">
      <Header hide={['about', 'works']} scheme='black' />
      <motion.main 
        className="w-full mx-auto container pb-10"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
      >
        <Panel tag='div' className="flex items-center justify-center gap-10 font-semibold">
          <Button className={`${event === 'Weddings' && 'underline underline-offset-4'}`} onClick={() => setEvent('Weddings')}>Weddings</Button>
          <Button className={`${event === 'Debuts' && 'underline underline-offset-4'}`} onClick={() => setEvent('Debuts')}>Debuts</Button>
          <Button className={`${event === 'Other' && 'underline underline-offset-4'}`} onClick={() => setEvent('Other')}>Other</Button>
        </Panel>
          {event === 'Weddings' ?
            <motion.div 
              className="my-10 mx-auto h-full gap-0 grid grid-cols-1 xl:grid-cols-3 px-5 md:px-16 xl:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              key={event}
            >
              {works.map((work, idx) => (
                <Button
                  key={idx}
                  className="border h-full w-full"
                  onClick={() => handleClick(idx)}
                >
                  <Image
                    src={`/assets/images/${idx+1}.jpg`}
                    alt={`Work ${idx+1}`}
                    width={3000}
                    height={3000}
                    loading='lazy'  
                    className={`h-full w-full opacity-${index}0`}
                  />
                </Button>
              ))}
            </motion.div>
            :
          event === 'Debuts' ?
            <motion.div 
              className='text-2xl mt-10 h-[30vh]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              key={event}
            >
              No photos yet.
            </motion.div>
          :

          event === 'Others' ?
            <motion.div 
              className='text-2xl mt-10 h-[30vh]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              key={event}
            >
              No photos yet.
            </motion.div>

          :
            <motion.div 
              className='text-2xl mt-10 h-[30vh]'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              No photos yet.
            </motion.div>
          }          
        <Contact />
      </motion.main>      
      <Footer />
      {showOverlay && index !== null && (
        <Panel tag='div'
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        >
          <Panel tag='div' className="relative">
            <Button
              className="absolute top-2 right-2 text-white text-3xl lg:text-6xl"
              onClick={closeOverlay}
            >
              &times;
            </Button>
            <Button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl lg:text-6xl"
              onClick={() => handleNavigation('prev')}
            >
              &#8249;
            </Button>
            <Button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl lg:text-6xl"
              onClick={() => handleNavigation('next')}
            >
              &#8250;
            </Button>
            <Panel tag='div' 
              className="w-full h-full flex" 
              style={{ 
                backgroundImage: "url('/assets/images/loading.gif')",
                backgroundPosition: 'center',
                backgroundSize: '40px 40px',  
                backgroundRepeat: 'no-repeat',
              }}
            >
              <Image
                src={`/assets/images/${index+1}.jpg`}
                alt={`Work ${index+1}`}
                width={1000}
                height={1000}
                loading='lazy'  
                className=""
                quality={100}
              />
            </Panel>
          </Panel>
        </Panel>
      )}
    </Panel>
  );
};

export default GalleryPage;
