import React from 'react'
import Image from 'next/image'
import toonMe from '../../../public/yopeFine.jpeg'
import { useSearchParams } from "next/navigation";

const UnderDevelopment = () => {
  const searchParams = useSearchParams();
  const paramVisible = searchParams.get("visible");
    const showBLur = process.env.NODE_ENV != 'development' && !paramVisible;
    return (
        <div className={`${showBLur ? 'flex' : 'hidden'} w-dvw h-dvh flex-wrap justify-center items-center content-center fixed`}>
            <Image src={toonMe} alt='Picture cartoon of the author'
                className='border-4 border-gray-400 rounded-full float-left aspect-square' />
            <label className="text-5xl text-center font-bold bg-white p-10 rounded-xl">Under development
                <div className='animate-bounce inline-block'>.</div>
                <div className='animate-bounce inline-block animation-delay-200'>.</div>
                <div className='animate-bounce inline-block animation-delay-400'>.</div>
            </label>
        </div>
    )
}

export default UnderDevelopment