"use client";

import { projects } from '@/data'
import React from 'react'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
            A small selection of {''}
            <span className='text-purple'>recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 mt-10'>
            {projects.map(({ id, title, des, img, iconLists, iconDesc, link}) => (
                <div key={id} className='sm:h-[38rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[350px] w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-[350px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden l:rounded-3xl bg-[#13162d]'>
                                <img src='/bg.png' alt='bg-img'/>
                            </div>
                            <img
                                src={img}
                                alt={title}
                                className='z-10 absolute bottom-10' 
                            />
                        </div>
                        <h1 className='font-bold lg:text-xl md:text-l text-base line-clamp-1'>
                            {title}
                        </h1>
                        <p className='lg:text-l lg:font-normal font-light text-sm text-white-100 line-clamp-2'>
                            {des}
                        </p>

                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                                {iconLists.map((icon, index) => (
                                    <div
                                        key={index}
                                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                        style={{
                                            transform: `translateX(-${5 * index + 2}px)`,
                                    }}
                                    >
                                    <img src={icon} alt="icon5" className="p-2" />
                                    </div>
                                ))}
                            </div>    

                            <div className="flex justify-center items-center">
                            <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                View Project
                            </p>
                                <FaLocationArrow className="ms-3" color="#CBACF9" />
                            </div>
                        </div>

                    </PinContainer>

                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects