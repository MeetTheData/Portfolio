import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import { socialMedia } from "@/data";
import { link } from 'fs';

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] pb-10 mb:mb-5' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-center lg:max-w-[45vw]'>Let&apos;s turn data into impactful insights, and develop innovative UI solutions together!</h1>
            <p className='text-xs sm:text-base text-white-200 md:mt-10 my-5 text-center'> Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
            <a href="mailto:mpate150@stevens.edu">
                <MagicButton
                    title="Let&apos;s get in touch."
                    icon={<FaLocationArrow/>}
                    position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Meet</p>
            <div className='flex items-center md:gap-3 gap-6 mt-2 md:mt-0'>
                {socialMedia.map((profile) => (
                    <a
                    href={profile.link}
                    key={profile.id}
                    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                    >
                    <img src={profile.img} alt="icons" width={20} height={20} />
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer