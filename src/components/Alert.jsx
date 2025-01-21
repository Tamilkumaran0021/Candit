'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';

export const Alert = () => {
  return (
    <div className='bg-black py-3 top-0 z-50'>
      <div className='absolute inset-0 pointer-events-none opacity-100'></div>
      <Marquee gradient={false} speed={100} loop={0} className='relative'>
        <div className='flex space-x-1'>
          <h1 className='text-center text-white font-semibold	  text-xs sm:text-base'>
            • You have a fire smile
          </h1>
          <h1 className='text-center text-white font-semibold	  text-xs sm:text-base'>
            • You’re straight up awesome
          </h1>
          <h1 className='text-center text-white font-semibold	 text-xs sm:text-base'>
            • You’re cheese on my pizza
          </h1>
          <h1 className='text-center text-white font-semibold	 text-xs sm:text-base'>
            • You’re cute af
          </h1>
          <h1 className='text-center text-white font-semibold	 text-xs sm:text-base'>
            • You’re why aliens visit Earth
          </h1>
          <h1 className='text-center text-white font-semibold	 text-xs sm:text-base'>
            • You’re a whole vibe
          </h1>
          <h1 className='text-center text-white font-semibold	 text-xs sm:text-base'>
            • Why so serious?
          </h1>
          <h1 className='text-center text-white font-semibold	 text-xs sm:text-base'>
            • You’re the meme I didn’t know I needed
          </h1>
          <h1 className='text-center text-white font-semibold	 text-xs sm:text-base'>
            • The best plot twist ever
          </h1>
          <h1>
          </h1>
        </div>
      </Marquee>
    </div>
  );
};
