import React from 'react'
import About from './components/About'
import Header from './components/Header'
import UnderDevelopment from './components/UnderDevelopment'
import Trayectory from './components/Trayectory'
import Proyects from './components/Proyects'

const Page = () => {
  return (
    <div>
      <div className='absolute z-10'>
        <UnderDevelopment />
      </div>
      <div className='blur'>
        <div className='lg:h-dvh'>
          <Header />
          <About />
        </div>
        <Trayectory />
        <Proyects />
      </div>
    </div>
  )
}

export default Page