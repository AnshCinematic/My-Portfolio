import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
export default function Header() {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4'>
        <div>
            <Image src={assets.profile_picture} alt='' className='rounded-full w-38'/>
           
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 '>Hi! I am Ansh Srivastava <Image src={assets.hand_icon} className='w-6'/></h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px]'>
            Full Stack Web Developer.
        </h1>
        <p className='max-w-2xl mx-auto'>
            I am a 3rd year student pursuing B.Tech in Computer Science and Engineering from
             KIIT University . I am a Full Stack Web Developer with a passion for designing and problem solving.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 bg-black text-white rounded-full flex items-center gap-2  duration-300'>Contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/> </a>
            <a href="/myresume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 ' >My Resume <Image src={assets.download_icon} alt='' className='w-4'/> </a>
        </div>
    </div>
  )
}
