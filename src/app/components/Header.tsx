import React from 'react'
import Menu from './Menu'

const Header = () => {
    return (
        <header>
            <div className="w-full pt-3 p-2 fixed z-10 bg-background">
                <div className='w-full flex items-center justify-between rounded-lg bg-gradient-to-tl from-gray-400 to-gray-300'>
                    <div className='flex-1 box-border'>
                        <h1 className='pl-4 lg:pl-10 p-5 text-xl lg:text-6xl font-medium'>Ignacio Oteiza Solchaga</h1>
                    </div>
                    <div className='flex-1 hidden lg:flex justify-end lg:pr-5'>
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
            </div>
        </header>
    )
}

export default Header