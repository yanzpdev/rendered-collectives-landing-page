'use client';
import Panel from '../components/Panel';
import { motion } from 'framer-motion';
import HeaderTag from '../components/HeaderTag';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../components/Button';
const Contact = () => {
  return (
    <Panel tag='section' id="contact" className="container mx-auto py-16 px-6 sm:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <HeaderTag level={2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Get in touch</HeaderTag>
        <HeaderTag level={3} className='mb-4 font-semibold'>We&apos;d love to hear from you!</HeaderTag>
        <Panel tag='div' className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
          <Panel tag='div' className='flex flex-col space-y-4 w-fit'>
            <Link 
              href='mailto:rendered.collectives@gmail.com' 
              target='__blank'
              className='hover:text-blue-600 duration-200'
            >
              rendered.collectives@gmail.com
            </Link>
            <Panel tag='div'>+639123456789</Panel>
            <Panel tag='div' className='flex gap-2'>
              <Link href={`https://www.facebook.com/renderedcollectivesph`}>
                <Image 
                  src={`/assets/images/fb.svg`}
                  alt={'Facebook'}
                  width={3000}
                  height={3000}
                  className='h-10 w-auto hover:scale-110 duration-200'
                />
              </Link>
              <Link href={`https://www.instagram.com/therenderedcollectives/`}>
                <Image 
                  src={`/assets/images/ig.svg`}
                  alt={'Instagram'}
                  width={3000}
                  height={3000}
                  className='h-10 w-auto hover:scale-110 duration-200'
                />
              </Link>     
            </Panel>
          </Panel>
          <form className="flex flex-col space-y-4">
            <input type="text" placeholder="Name" className="p-2 border border-gray-300" />
            <input type="email" placeholder="Email" className="p-2 border border-gray-300" />
            <textarea placeholder="Message" className="p-2 h-32 border border-gray-300"></textarea>
            <Button type="submit" className="p-2 bg-blue-500 text-white">Send</Button>
          </form>
        </Panel>
      </motion.div>
    </Panel>
  )
}

export default Contact