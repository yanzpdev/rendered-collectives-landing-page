'use client';
import { motion } from 'framer-motion';
import Panel from './Panel';
import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local';
import { useState } from 'react';

const Didot = localFont({
  src: '../../fonts/Didot.otf',
  weight: '100',
  display: 'swap',
});

type HeaderProps = {
  scheme: 'black' | 'white';
  hide: string[] | 'none';
}

const Header:React.FC<HeaderProps> = ({scheme, hide}) => {
  const [isLoading, setIsLoading] = useState<number>(0);
  return (
    <motion.header 
        className={`${scheme === 'white' ? 'absolute top-0 left-0 right-0 z-10 bg-transparent' : 'bg-gray-100'} `}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading }}
        transition={{ duration: 1 }}
      >
        <Panel tag='nav' className={`w-full px-6 lg:px-24 py-3 flex flex-col lg:flex-row justify-between items-center ${scheme === 'white' ? 'text-white' : 'text-black'}`}>
          <Link href={'/'} className='flex items-center gap-2'>
            <Image 
              src={scheme === 'black' ? '/assets/images/black_rc_logo_only.png' : '/assets/images/rc_logo_only.png'}
              alt={`RC Logo`}
              width={1000}
              height={1000}
              loading='lazy'  
              className='w-auto h-12 sm:h-16'
              onLoad={() => setIsLoading(1)}
            />
            <p 
              className={`${Didot.className} text-[1.3rem] sm:text-4xl select-none`}
              style={{ textShadow: scheme === 'white' && '2px 2px 4px rgba(0, 0, 0, 0.5)' || '' }}
            >
              rendered collectives
            </p>
          </Link>

          <Panel tag='ul' 
            className={`flex gap-0 md:gap-10 lg:gap-0 text-base sm:text-xl space-x-4 mt-4 sm:mt-0 font-semibold`}
            style={{ textShadow: scheme === 'white' && '2px 2px 4px rgba(0, 0, 0, 0.5)' || '' }}
          >
            <Panel tag='li'><Link href="#about" className={`hover:underline ${hide.includes('about') && 'hidden'}`}>About</Link></Panel>
            <Panel tag='li'><Link href="#portfolio" className={`hover:underline ${hide.includes('works') && 'hidden'}`}>Our Works</Link></Panel>
            <Panel tag='li'><Link href="#contact" className={`hover:underline ${hide.includes('contact') && 'hidden'}`}>Contact</Link></Panel>
          </Panel>
        </Panel>
      </motion.header>
  )
}

export default Header