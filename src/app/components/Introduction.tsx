import React from 'react'

const Introduction = () => {
    return (
        <div className='lg:p-16 p-8 lg:text-3xl max-w-2xl
        flex flex-wrap text-center lg:text-left content-center lg:justify-normal justify-center'>
            <div className='relative'>
                <h2 className='lg:text-6xl text-3xl pb-4 lg:pb-10 font-bold'>
                    ¡Hello there!
                </h2>
                <p>
                    My name is <b>Ignacio Oteiza Solchaga</b> and here you&apos;ll find
                    every relevant job-related information about me.
                </p>
                <p>
                    I&apos;m a really pasionated full stack software engenieer, mainly focused on web developing
                    although native developing is one of my strengths as well.
                </p>
            </div>
        </div>
    )
}

export default Introduction