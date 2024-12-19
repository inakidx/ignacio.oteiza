import React from 'react'
import About from './components/About'
import Header from './components/Header'
import Trayectory from './components/Trayectory'
import Proyects from './components/Proyects'

const Page = () => {
  return (
    <div>
      <div className='lg:h-dvh'>
        <Header />
        <About />
      </div>
      <Trayectory />
      <Proyects />
    </div>
  )
}

export default Page