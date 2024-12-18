import React from 'react'

const trayectorys = [
    {
        "Id": "1",
        "Date": "2014 - 2018",
        "Description": "Estudiante en la Universidad pública de Navarra",
    },
    {
        "Id": "2",
        "Date": "2018 - Actualidad",
        "Description": "Trabajando como ingeniero de software en Tracasa",
    }
]

const Trayectory = () => {
    return (
        <div className='bg-gray-50 py-20'>
            <div className='pb-20 flex items-center flex-col'>
                <h2 className='lg:mx-14 text-xl lg:text-4xl pb-5'>TRAYECTORY</h2>
                <hr className='w-3/4' />
            </div>
            <div className='flex flex-col w-full items-center relative'>
                <div className='absolute h-full bg-gray-500 w-1 rounded-full opacity-80'></div>
                {trayectorys.map(trayectory =>
                    <div key={trayectory.Id} className='flex flex-row w-full justify-center items-center lg:text-xl'>
                        <div className='w-1/3 text-right'>
                            {trayectory.Date}
                        </div>
                        <div className='text-6xl'>
                            🔸
                        </div>
                        <div className='w-1/3'>
                            {trayectory.Description}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Trayectory