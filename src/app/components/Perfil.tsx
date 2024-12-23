import React from 'react'
import Image from 'next/image'

const Perfil = () => {
    return (
        <div className='w-full lg:w-auto lg:h-full justify-center 
        flex flex-col lg:items-end items-center'>
            <div className='flex flex-col items-center rounded-xl bg-gradient-to-tl from-gray-300 to-gray-100'>
                <Image className='w-48 lg:w-96 mt-5' src="perfil.png" alt='Picture of the author'
                    layout="intrinsic"
                    width={50}
                    height={50} />
                <div className='mt-4 lg:mx-14 text-xl lg:text-4xl font-bold'>
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