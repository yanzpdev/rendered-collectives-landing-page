'use client';
import Panel from '../components/Panel';
import { motion } from 'framer-motion';
import HeaderTag from '../components/HeaderTag';
import { FaStar } from 'react-icons/fa';

const Feedback = () => {
  return (
    <Panel tag='section' id="feedback" className="container mx-auto py-16 px-6 sm:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <HeaderTag level={2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Feedbacks</HeaderTag>
        <p className="text-base md:text-lg mb-4">What our satisfied clients say about us.</p>
        <Panel tag='div' className='w-full xl:w-4/5 mx-auto h-full rounded-xl drop-shadow-xl bg-white p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-10 gap-6'>
          <Panel tag='div' className='h-32 w-32 rounded-full bg-red-500 mb-4 sm:col-span-2 md:col-span-3 lg:col-span-2' />
          <Panel tag='div' className='sm:col-span-8 md:col-span-7 lg:col-span-8 flex flex-col gap-y-3'>
            <Panel tag='span' className='text-2xl sm:text-4xl font-bold'>Jane R. Doe</Panel>
            <Panel tag='span' className='flex gap-1 items-center'>
              <Panel tag='span' className='text-xl font-semibold mr-3'>5.5</Panel>
              <FaStar className='text-yellow-400' size={24} />
              <FaStar className='text-yellow-400' size={24} />
              <FaStar className='text-yellow-400' size={24} />
              <FaStar className='text-yellow-400' size={24} />
              <FaStar className='text-yellow-400' size={24} />
            </Panel>
            <Panel tag='span' className='text-base sm:text-xl italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat quod rem perferendis, aliquam temporibus mollitia asperiores distinctio provident illum, voluptas dolorum iusto, ex hic ipsa suscipit culpa quibusdam quos.</Panel>
          </Panel>
        </Panel>
      </motion.div>
    </Panel>
  )
}

export default Feedback