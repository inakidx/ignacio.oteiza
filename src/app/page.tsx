'use client'
import React, { Suspense } from 'react'
import About from './components/About'
import Header from './components/Header'
import UnderDevelopment from './components/UnderDevelopment'
import Trayectory from './components/Trayectory'
import Proyects from './components/Proyects'
import { useSearchParams } from "next/navigation";

const Page = () => {

  const searchParams = useSearchParams();
  const paramVisible = searchParams.get("visible");
  const showBLur = process.env.NODE_ENV != 'development' && !paramVisible;
  return (
    <div>
      <Suspense fallback={<p>Cargando...</p>}>
        <div className='absolute z-10'>
          <UnderDevelopment />
        </div>
        <div className={showBLur ? 'blur' : ''}>
          <div className='lg:h-dvh'>
            <Header />
            <About />
          </div>
          <Trayectory />
          <Proyects />
        </div>
      </Suspense>
    </div>
  )
}

export default Page