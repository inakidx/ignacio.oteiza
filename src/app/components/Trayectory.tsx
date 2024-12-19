import React from 'react'

const trayectorys = [
    {
        "Titulo": "Grade of IT engineer",
        "Date": "2014 - 2018",
        "Description": "When i was 18, i started the career of software engieneer at the Navarre public university (UPNA). "
            + "I enjoyed a lot learning about IT being software developing the most",
    },
    {
        "Titulo": "Master of IT engineer",
        "Date": "2018 - 2020",
        "Description": "After ending the career i wanted to expand my IT knowledge, however i was looking forward to take a joib as well "
            + "so applying to Tracasa and the Master of IT engineer at UPNA was my choice.",
    },
    {
        "Titulo": "Tracasa",
        "Date": "2018 - Nowadays",
        "Description": "While i was studying the Master of IT engineer at UPNA i started working in Tracasa. I am still working here but "
            + "many responsabilityes have changed",
    }
]

const Trayectory = () => {
    return (
        <div className='bg-gray-50 py-20'>
            <div className='pb-20 flex items-center flex-col'>
                <h2 className='lg:mx-14 text-xl lg:text-4xl pb-5'>TRAYECTORY</h2>
                <hr className='w-3/4' />
            </div>
            <div className='flex flex-col w-full items-center relative -left-8 lg:-left-20'>
                <div className='absolute h-full bg-gray-500 w-1 rounded-full opacity-80'></div>
                {trayectorys.map(trayectory =>
                    <div key={trayectory.Titulo} className='flex flex-row w-full justify-center items-center lg:text-xl 
                    pb-10'>
                        <div className='w-2/5 lg:w-1/4 text-right'>
                            <h3 className='font-bold text-gray-500'>{trayectory.Titulo}</h3>
                            <span className='text-gray-500'>{trayectory.Date}</span>
                        </div>
                        <div className='text-4xl'>
                            🔸
                        </div>
                        <div className='w-2/5 lg:w-1/4 lg:text-3xl text-gray-700'>
                            {trayectory.Description}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Trayectory