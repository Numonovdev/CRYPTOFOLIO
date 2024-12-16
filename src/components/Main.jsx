import React from 'react'
import img from "../components/img.png"
import HeroCarousel from './HeroCarousel'
function Main() {
  return (
    <div className='w-full h-[200px] sm:h-[300px] md:h-[400px] bg-slate-600 py-5 backgroundimg'>
        <div className='container h-full flex flex-col gap-6 md:gap-12 justify-between'>
            <div className='flex flex-col w-full items-center gap-0 sm:gap-2 mt-0 md:mt-7 lg:mt-10'>
                <h1 className='font-Montserrat text-BlueWhite  sm:text-[30px] md:text-[50px] lg:text-[60px] font-bold lg:leading-[70px]'>CRYPTOFOLIO WATCH LIST</h1>
                <p className='text-[8px] sm:text-sm font-medium font-Montserrat text-[#A9A9A9]'>Get all the Info regarding your favorite Crypto Currency</p>
            </div>
            <div className='w-full flex h-[100px] sm:h-[150px] md:h-[187px] justify-around'>
                <HeroCarousel/>
            </div>

        </div>
    </div>
  )
}

export default Main