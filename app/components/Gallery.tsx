import React from 'react'
import { works } from '../constants'
import Panel from './Panel'
import Button from './Button'
import Image from 'next/image';

type GalleryProps = {
  index: number;
  handleClick: () => void;
}
const Gallery:React.FC<GalleryProps> = ({index, handleClick}) => {
    
  return (
    <Panel tag='div' className="my-10 mx-auto h-full gap-0 grid grid-cols-1 xl:grid-cols-3 px-5 md:px-16 xl:px-0">
      {/* {works.map((work, idx) => (
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
      ))} */}
    </Panel>
  )
}

export default Gallery