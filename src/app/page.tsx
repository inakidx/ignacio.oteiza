import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Trayectory from './components/Trayectory'

const Page = () => {
  return (
    <div>
      <div className='h-dvh'>
        <Header />
        <Home />
      </div>
      <Trayectory />
    </div>
  )
}

export default Page