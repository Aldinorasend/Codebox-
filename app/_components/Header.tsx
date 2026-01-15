import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className='p-4 max-w-7xl flex justify-between items-center w-fullc'>
        <div className='flex gap-2 items-center'>
            <Image src={'/crown.png'} alt='logo' width={40} height={40}></Image>
            <h2 className='font-game text-4xl font-bold'>Codebox</h2>
        </div>

        {/* Navbar */}

        {/* Signup Button */}
        <Button className='font-game text-2xl' variant={'pixel'}>Signup</Button>
    </div>
  )
}

export default Header