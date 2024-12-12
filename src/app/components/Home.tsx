import React from 'react'
import Perfil from './Perfil'
import Introduction from './Introduction'

const Home = () => {
    return (
        <div className='p-8 pt-24 flex flex-wrap h-full relative'>
            <Perfil />
            <Introduction/>
        </div>
    )
}

export default Home