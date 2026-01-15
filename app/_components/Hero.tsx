import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <div className='w-full relative h-screen'>
        <Image src={'/hero.gif'} alt='hero' width={1000} height={1000} className='w-full h-full absolute object-cover inset-0'></Image>
        
        <div className='absolute w-full flex flex-col items-center mt-40'>
            <h2 className='text-7xl font-bold font-game'>Start Your</h2>
            <h2 className='text-8xl font-bold font-game text-yellow-500 '>Coding Adventure</h2>
            <h2 className='text-4xl font-game font-medium'>Beginner Friendly Courses and Project</h2>

            <Button className='font-game text-4xl p-6 mt-20' variant={'pixel'}>Get Started</Button>
        </div>
    </div>
  )
}

export default Hero