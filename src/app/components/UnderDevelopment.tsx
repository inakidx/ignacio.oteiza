import React from 'react'

const UnderDevelopment = () => {
    return (
        <div className='flex w-dvw h-dvh flex-wrap justify-center items-center content-center'>
            <img src='yopeFine.jpeg' className='border-4 border-gray-400 rounded-full h-3/5 float-left aspect-square' />
            <label className="text-5xl text-center font-bold bg-white p-10 rounded-xl">Under development
                <div className='animate-bounce inline-block'>.</div>
                <div className='animate-bounce inline-block animation-delay-200'>.</div>
                <div className='animate-bounce inline-block animation-delay-400'>.</div>
            </label>
        </div>
    )
}

export default UnderDevelopment