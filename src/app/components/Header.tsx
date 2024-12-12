import React from 'react'
import Menu from './Menu'

const Header = () => {
    return (
        <header>
            <div className="w-full border-2 border-red-500 flex items-center justify-between mt-10">
                <div className='flex-1 box-border'>
                    <h1 className='pl-10 p-5 lg:text-6xl '>Ignacio Oteiza Solchaga</h1>
                </div>
                <div className='flex-1 hidden lg:flex justify-around'>
                    {['Home', 'Trayectory', 'Experience', 'Skills'].map(s =>
                        <h2 key={s} className='p-2 pl-5 lg:text-3xl font-bold'>
                            <a href={s}>{s}</a>
                        </h2>
                    )}
                </div>
                <div className='lg:hidden'>
                    <Menu />
                </div>
            </div>
        </header>
    )
}

export default Header