import React from 'react'

const Body = () => {
    return (
        <div className='grid justify-center items-center content-center w-dvw h-dvh'>
            <div className='flex flex-row items-center'>
                <img src='yopeFine.jpeg' className='border-4 border-gray-400 rounded w-2/5 float-left' />
                <label className="text-5xl">Under development
                    <div className='animate-bounce inline-block'>.</div>
                    <div className='animate-bounce inline-block delay-500'>.</div>
                    <div className='animate-bounce inline-block delay-700'>.</div>
                </label>
            </div>
        </div>
    )
}

export default Body