import React from 'react'

const Perfil = () => {
    return (
        <div className='lg:h-full justify-center 
        flex flex-col lg:items-end items-center'>
            <div className='flex flex-col items-center bg-gray-300 rounded-3xl'>
                <div className='rounded-full aspect-square bg-blue-400 w-48 h-48 lg:w-96 lg:h-96 mt-5'></div>
                <div className='m-8 mt-4 lg:m-10 text-lg lg:text-5xl font-medium'>
                    Full stack developer
                </div>
            </div>
        </div>
    )
}

export default Perfil