import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="w-full border-2 border-red-500 flex items-center justify-between">
                <h1 className='pl-5'>Ignacio Oteiza</h1>
                <div className='h-28'>
                    <div className='absolute rounded-full aspect-square bg-blue-400 w-28 h-28 
                    -translate-x-1/2'></div>
                </div>
                <h2>Datos personales</h2>
            </div>
        </header>
    )
}

export default Header