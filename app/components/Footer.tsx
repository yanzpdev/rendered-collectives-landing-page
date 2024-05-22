import React from 'react';
import Panel from './Panel';
import Image from 'next/image';

const Footer = () => {
  return (
    <Panel tag='footer' className="bg-transparent shadow-md">
      <Panel tag='div' className="xl:container mx-6 md:mx-16 xl:mx-auto text-sm py-1 pb-3 text-center border-t flex flex-col border-slate-800">
        <Image 
          src={`/assets/images/floral.svg`}
          alt={'floral'}
          width={3000}
          height={3000}
          className='h-14 -my-4 w-auto'
        />
        <Panel tag='span'>&copy; {new Date().getFullYear()} Rendered Collectives. All rights reserved.</Panel>
      </Panel>
    </Panel>
  )
}

export default Footer