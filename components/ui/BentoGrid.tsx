'use client'

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/utils/cn";
import { GlobeDemo } from "./GridGlobe";
import { BackgroundGradientAnimation } from "./GradientBg";

import Lottie from "react-lottie";
import MagicButton from "../ui/MagicButton";
import animationData from '@/data/confetti.json';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const fstList = ["Python", "SQL", "Tableau"];
  const sndList = ["PowerBI", "Data Science", "ML"];
  const trdList = ["ReactJS", "AngularJS", "JavaScript"];
  const fthList = ["LLM", "AWS", "& more"];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "mpate150@stevens.edu";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border bprder-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
        
      <div className={`${id===6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
            {img && (
                <img
                    src={img}
                    alt={img}
                    className={cn(imgClassName, 'object-cover, object-center')}
                />
            )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
                {spareImg && (
                    <img
                        src={spareImg}
                        alt={spareImg}
                        className={'object-cover, object-center w-full h-full'}
                    />
                )}
        </div>
        {id===6 && (
            <BackgroundGradientAnimation>
                {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold"/> */}
            </BackgroundGradientAnimation>
        )}

        <div
            className={cn(
                titleClassName,
                "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}
            >
            {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
            <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                {description}
            </div>
            {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
            {/* remove mb-2 mt-2 */}
            <div
                className={`font-sans font-bold text-lg lg:text-3xl max-w-96 z-10`} style={{textShadow: '2px 3px 10px rgba(0, 0, 0, 0.5)'}}
            >
            {title}
            </div>
        

        {id ==2 && <GlobeDemo/>}
        
        {id === 5 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {fstList.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 p-2 sm:py-2 sm:px-3 sm:text-xs text-[0.4rem] lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {sndList.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 p-2 sm:py-2 sm:px-3 sm:text-xs text-[0.4rem] lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {trdList.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 p-2 sm:py-2 sm:px-3 sm:text-xs text-[0.4rem] lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {fthList.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 p-2 sm:py-2 sm:px-3 sm:text-xs text-[0.4rem] lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
         )}

        {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  }
                }}/>
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
         )}


        </div>

      
      {/* <div className="group-hover/bento:translate-x-2 transition duration-200">
        
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div> */}
      </div>
    </div>
  );
};
