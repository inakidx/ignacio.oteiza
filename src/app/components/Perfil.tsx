import React from 'react'
import Image from 'next/image'

const Perfil = () => {
    return (
        <div className='w-full lg:w-auto lg:h-full justify-center 
        flex flex-col lg:items-end items-center'>
            <div className='flex flex-col items-center bg-gray-300 rounded-3xl'>
                {/* <div className='rounded-full aspect-square bg-blue-400 w-48 h-48 lg:w-96 lg:h-96 mt-5'></div> */}
                <Image className='w-48 lg:w-96 mt-5' src='perfil.png' alt='Picture of the author'/>
                <div className='mt-6  lg:mx-16 text-lg lg:text-4xl font-medium'>
                    Ignacio Oteiza Solchaga
                </div>
                <div className='mt-2 mb-6 mx-12 lg:mx-16 text-lg lg:text-2xl font-medium'>
                    Full stack developer
                </div>
            </div>
        </div>
    )
}

export default Perfil