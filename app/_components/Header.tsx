import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='p-4 max-w-7xl'>
        <div className='flex gap-2 items-center'>
            <Image src={'/crown.png'} alt='logo' width={40} height={40}></Image>
            <h2 className='font-game text-4xl font-bold'>Codebox</h2>
        </div>

        {/* Navbar */}

        {/* Signup Button */}
    </div>
  )
}

export default Header