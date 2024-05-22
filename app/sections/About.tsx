'use client';
import Panel from '../components/Panel';
import { motion } from 'framer-motion';
import HeaderTag from '../components/HeaderTag';
import Image from 'next/image';

const members = [
  {name: 'Mac' ,src: '/assets/images/mac.jpg', title: 'Studio Owner/Chief Editor/Photographer'},
  {name: 'Jonah' ,src: '/assets/images/jonah.jpg', title: 'Studio Owner/Photographer'},
  {name: 'Filbert' ,src: '/assets/images/filbert.jpg', title: 'Photographer'},
  {name: 'Christian' ,src: '/assets/images/christian.jpg', title: 'Editor'},
];

const About = () => {
  return (
    <Panel tag='section' id="about" className="container mx-auto py-16 px-6 sm:px-16">
      <motion.article
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <HeaderTag level={2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">About Us</HeaderTag>
        <p className="text-base md:text-lg mb-4">
          Founded in 2020 by Mac and Jonah, Rendered Collectives is a team of professional photographers 
          based in Region VIII. Having grown steadily, the team delivers high quality output 
          not only for special occasions, but also for media productions and other creative projects.
        </p>
        <Panel tag='div' className='flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row sm:flex-row'>
          {members.map((member, index) => (
            <motion.div
              className="p-4"
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image 
                src={member.src}
                alt={member.name}
                width={1000}
                height={1000}
                className='h-36 w-36 mx-auto rounded-full mb-4 border' 
              />
              <p className='font-bold'>{member.name}</p>
              <p className='font-semibold text-xs py-2'>{member.title}</p>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, eligendi? Veritatis ea velit nesciunt illum mollitia, sapiente delectus adipisci odio doloremque, debitis dicta eveniet ullam ipsa harum nam numquam! Tempore.</p>
            </motion.div>
          ))}
        </Panel>
      </motion.article>
    </Panel>
  )
}

export default About