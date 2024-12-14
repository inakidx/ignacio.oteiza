import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import UnderDevelopment from './components/UnderDevelopment'

const Page = () => {
  return (
    <div className='h-dvh'>
      <div className='absolute z-10'>
        <UnderDevelopment />
      </div>
      <div className='blur'>
        <Header />
        <Home />
      </div>
    </div>
  )
}

export default Page