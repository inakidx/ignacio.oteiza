import React from 'react'

const Introduction = () => {
    return (
        <div className='flex-1 lg:p-16 p-8 lg:text-3xl
        flex flex-wrap text-center lg:text-left content-center lg:justify-normal justify-center'>
            <div className='relative w-1/2'>
                <h2 className='lg:text-6xl text-3xl pb-10 font-bold'>
                    ¡Hello there!
                </h2>
                <p>
                    Welcome to my site, my name is Ignacio Oteiza Solchaga and here you'll find
                    every relevant job-related information about me.
                </p>
                <p>
                    I'm a really pasionated Full-stack software engenieer, mainly focused on web developing
                    although native developing is one of my strengths as well.
                </p>
            </div>
        </div>
    )
}

export default Introduction