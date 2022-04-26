import React from 'react';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';


const Footer = () => {
  return (
    <div className='h-64 w-full bg-green-200 m-auto'>
      <div className='relative flex flex-row items-center justify-evenly w-full'>
        <div className='absolute w-5/6 h-1 rounded-sm bg-gray-500 z-0' />
        <div className='z-10 bg-green-200 py-3 px-5 mt-1 mb-1'>
          <span className='text-3xl pr-2'>Contact</span>
          <span>with</span>
          <span className='text-3xl pl-2 uppercase'>us</span>
        </div>
        <div className='flex items-center z-10 bg-green-200'>
          <BsFacebook className='mx-2 text-xl cursor-pointer hover:animate-bounce' />
          <BsInstagram className='mx-2 text-xl cursor-pointer hover:animate-bounce' />
          <BsWhatsapp className='mx-2 text-xl cursor-pointer hover:animate-bounce' />
        </div>
        <div />
      </div>
      <div className='mt-28 flex items-center justify-evenly'>
        <span className='text-xl font-bold'>Beauty Store</span>
        <span className='text-sm'>Desined By @Ahmed Sazzad</span>
        <adress className="mobile:block hidden italic font-thin text-sm">New Chasara, Narayongonj, Dhaka.</adress>
      </div>
    </div>
  );
}

export default Footer