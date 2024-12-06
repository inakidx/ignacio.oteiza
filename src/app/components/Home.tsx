import React from 'react'
import Skills from './Skills'
import Perfil from './Perfil'

const Home = () => {
    return (
        <div className='p-8 pt-12 flex flex-wrap h-full relative'>
            <Perfil />
            <Skills />
        </div>
    )
}

export default Home