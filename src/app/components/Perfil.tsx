import React from 'react'

const Perfil = () => {
    return (
        <div className='flex-1 h-full justify-center 
        flex flex-col lg:items-end items-center'>
            <div className='flex flex-col items-center bg-gray-300 rounded-3xl'>
                <div className='rounded-full aspect-square bg-blue-400 w-48 h-48 lg:w-96 lg:h-96 mt-5'></div>
                <div className='m-10 lg:text-5xl'>
                    Full stack developer
                </div>
            </div>
        </div>
    )
}

export default Perfil