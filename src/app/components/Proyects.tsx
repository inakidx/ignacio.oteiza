import React from 'react'
import { ProyectItem } from '../types/ProyectItem'
import Image from 'next/image'

const proyectList: ProyectItem[] = [
    {
        title: "StackUp 3D",
        tecnology: "Unity",
        description: "This project was my final degree project. It is a game which is about building structures, using your own hands as the controller with the kinect. The game is made to improve your body coordination. It aims to simulate a real behavior by playing with simple figures, where the goal is to build a specific more complex structure carefully, without make it fall. The game has different levels with different difficulty, so they can have a good time while playing.",
        imagePath: "yopeFine.jpeg"
    },
    {
        title: "Voxels 3D",
        tecnology: "Unity",
        description: "Bla bla",
        imagePath: "yopeFine.jpeg"
    },

]

const Proyects = () => {
    return (
        <div className='flex justify-center pb-20'>
            <div className='bg-gray-50 py-20 lg:w-3/5 shadow-xl flex items-center flex-col p-5 lg:p-16'>
                <div className='pb-20 flex items-center flex-col w-full'>
                    <h2 className='lg:mx-14 text-xl lg:text-4xl pb-5'>PROJECTS</h2>
                    <hr className='w-3/4' />
                </div>
                {proyectList.map(p =>
                    <div key={p.title} className='flex flex-col content-center flex-wrap lg:flex-row
                     bg-gray-200 items-center mb-16 w-full shadow-xl'>
                        <div className='flex flex-col lg:w-1/2 lg:self-start items-center mt-8 lg:mt-14'>
                            <h3 className='text-2xl lg:text-4xl font-bold lg:mb-3'>{p.title}</h3>
                            <h4 className='lg:text-2xl lg:mb-8'>Made with: {p.tecnology}</h4>
                            <p className='px-10 lg:text-2xl lg:self-start'>
                                {p.description}
                            </p>
                        </div>
                        <Image className='p-5 lg:p-0 w-full lg:w-1/2' src={p.imagePath} alt='Picture of the proyect'
                            layout="intrinsic"
                            width={50}
                            height={50} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Proyects