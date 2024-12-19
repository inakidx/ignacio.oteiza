import React from 'react'
import { ProyectItem } from '../types/ProyectItem'
import yopeFine from '../../../public/yopeFine.jpeg'
import Image from 'next/image'

const proyectList: ProyectItem[] = [
    {
        title: "StackUp 3D",
        tecnology: "Unity",
        description: "Proyect of the career of Engineer of IT. Made with unity using"
            + " the Kinect. It is a serious game to train your mobility.",
        image: yopeFine
    },
    {
        title: "Voxels 3D",
        tecnology: "Unity",
        description: "Bla bla",
        image: yopeFine
    },

]

const Proyects = () => {
    return (
        <div className='flex justify-center pb-20'>
            <div className='bg-gray-50 py-20 lg:w-2/5 shadow-xl flex items-center flex-col p-16'>
                <div className='pb-20 flex items-center flex-col w-full'>
                    <h2 className='lg:mx-14 text-xl lg:text-4xl pb-5'>PROYECTS</h2>
                    <hr className='w-3/4' />
                </div>
                {proyectList.map(p =>
                    <div key={p.title} className='flex flex-row bg-gray-200 items-center mb-16 w-full shadow-xl'>
                        <div className='flex flex-col w-1/2 self-start items-center mt-14'>
                            <h3 className='text-4xl font-bold mb-3'>{p.title}</h3>
                            <h4 className='text-2xl mb-8'>Made with: {p.tecnology}</h4>
                            <p className='px-10 text-2xl'>
                                {p.description}
                            </p>
                        </div>
                        <Image className='w-1/2' src={p.image} alt='Picture of the proyect' />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Proyects