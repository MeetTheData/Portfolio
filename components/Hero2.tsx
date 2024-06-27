import React from 'react'
import Image from 'next/image';
import styled from 'styled-components';
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { FaLocationArrow } from '../node_modules/react-icons/fa'
import { Button } from './ui/MovingBorder'
import { TypewriterEffect } from './ui/TypeWriterEffect';

const ImageWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  flex-shrink: 0;
  margin-right: 10px;
  border-radius: 10px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 15px;
    left: 20px;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding: 5px;
    background: linear-gradient(90deg,#39e168 -1.88%,#6d64d3 104.56%);
    -webkit-mask: linear-gradient(var(--white) 0 0) content-box, linear-gradient(var(--white) 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const Heroo = () => {
    return (
        <div className='pb-20 pt-36 relative'>
          <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
          </div>
    
          <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          </div>
    
          <div className='flex justify-center relative my-20'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex items-center justify-center'>
              {/* Profile Image */}
              <div className='flex-shrink-0 mr-10 md:w-[350px] md:h-[350px] w-[150px] h-[150px] relative'>
              <Button
                    duration={Math.floor(Math.random()*10000+10000)}
                    borderRadius='10px'
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                >
                    <img src='/prof.jpg' alt='Profile Image' className='rounded-xl p-2'/>
                </Button>
                {/* <Image 
                  src='/prof.jpg' 
                  alt='Profile Image' 
                  layout='fill'
                  objectFit='cover'
                  className='rounded-xl'
                /> */}
              </div>
              
              {/* Content */}
              <div className='flex flex-col items-center justify-center'>
                {/* <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                  Dynamic Web Magic with Next.js
                </h2> */}
    
                <TextGenerateEffect 
                  className='text-center text-[40px] text-3xl md:text-5xl lg:text-6xl'
                  words='Empowering Insights through Data and Design'/>

                <TypewriterEffect
                  className='text-center md:tracking-wider mb-4 text-sm md:text-md lg:text-xl'
                  words={[
                    {
                      text: "Hi!",
                    },
                    {
                      text: "I'm",
                    },
                    {
                      text: "Meet,",
                    },
                    {
                      text: "based",
                    },
                    {
                      text: "in",
                    },
                    {
                      text: "USA.",
                    },
                  ]}
                />
    
                {/* <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                  Hi I&apos;m Meet, based in New York.    
                </p> */}

                <div className='flex flex-row justify-center items-center gap-4'>
                <a href="#about">
                  <MagicButton
                    title='Show my work'
                    icon={<FaLocationArrow/>}
                    position='right'
                  />    
                </a> 
                <a href="/resume.pdf">
                  <MagicButton
                    title='View Resume'
                    icon={<FaLocationArrow/>}
                    position='right'
                  />    
                </a>     
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Heroo