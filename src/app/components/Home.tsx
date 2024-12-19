import React from 'react'
import Perfil from './Perfil'
import Introduction from './Introduction'

const Home = () => {
    return (
        <div className='p-8 pt-28 lg:pt-40 flex flex-wrap flex-row justify-center'>
            <div className='relative bg-gray-50 flex flex-wrap justify-center p-5
             lg:p-16 shadow-xl'>
                <Perfil />
                <Introduction />
            </div>
        </div>
    )
}

export default Home