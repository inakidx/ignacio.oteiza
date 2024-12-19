import React from 'react'
import { TrayectoryItem } from '../types/TrayectoryItem'

const trayectorys: TrayectoryItem[] = [
    {
        titulo: "Grade of IT engineer",
        date: "2014 - 2018",
        description: "When i was 18, i started the career of software engieneer at the Navarre public university (UPNA). "
            + "I enjoyed a lot learning about IT, being software developing the most.",
    },
    {
        titulo: "Master of IT engineer",
        date: "2018 - 2020",
        description: "After ending the career i wanted to improve my IT knowledge, however i was looking forward to take a joib as well "
            + "so, applying to Tracasa and the Master of IT engineer at UPNA was my choice.",
    },
    {
        titulo: "Tracasa",
        date: "2018 - Nowadays",
        description: "While i was studying the Master of IT engineer at UPNA i began working in Tracasa. I am still there but "
            + "i have aquire many responsabilitys since i started",
    }
]

const Trayectory = () => {
    return (
        <div className='flex justify-center pb-20'>
            <div className='bg-gray-50 py-20 lg:w-3/4 shadow-xl'>
                <div className='pb-20 flex items-center flex-col w-full'>
                    <h2 className='lg:mx-14 text-xl lg:text-4xl pb-5'>TRAYECTORY</h2>
                    <hr className='w-3/4' />
                </div>
                <div className='flex flex-col items-center relative -left-4 lg:-left-20'>
                    {trayectorys.map(trayectory =>
                        <div key={trayectory.titulo} className='flex flex-row justify-center items-center 
                         text-sm lg:text-2xl pb-16  p-5'>
                            <div className='w-2/5 lg:w-1/4 text-right self-start'>
                                <h3 className='font-bold text-gray-500'>{trayectory.titulo}</h3>
                                <span className='text-gray-500'>{trayectory.date}</span>
                            </div>
                            <div className='text-3xl lg:text-5xl z-10 self-start'>
                                🔸
                            </div>
                            <div className='w-2/5 text-sm lg:w-1/4 lg:text-3xl text-gray-700'>
                                {trayectory.description}
                            </div>
                        </div>
                    )}
                    <div className='absolute h-full bg-gray-500 w-0.5 rounded-full opacity-80'></div>
                </div>
            </div>
        </div>
    )
}

export default Trayectory