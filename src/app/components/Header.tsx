import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="w-full border-2 border-red-500 flex items-center justify-between mt-10 relative">
                <div className='flex-1 box-border'>
                    <h1 className='pl-5 text-6xl '>Ignacio Oteiza Solchaga</h1>
                </div>
                <div className='flex-1 flex justify-center h-auto'>
                    {/* <div className='rounded-full aspect-square bg-blue-400 w-36 h-36 absolute -translate-y-1/2'></div> */}
                    <img src='yopeFine.jpeg' className='rounded-full aspect-square w-36 h-36 absolute -translate-y-1/2'/>
                </div>
                <h2 className='flex-1'>Datos personales</h2>
            </div>
        </header>
    )
}

export default Header