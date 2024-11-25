import Link from 'next/link'
import React from 'react'

const NavBarLP = () => {
  return (
    <nav className='bg-[#0B0D1B] h-16 text-zinc-200 flex items-center sm:justify-between shadow-md z-50 px-4 gap-2 border-b border-purple-600  '>
        <div className='w-auto sm:w-3/5 '>
            <Link href='/'>
            <h1 className='text-2xl'>
                <span className='text-purple-700'>My</span>Money</h1>
            </Link>
        </div>
        <div className='sm:w-2/5  sm:justify-between sm:flex w-full hidden'>
          <Link href="#pricing">Preços</Link>
          <Link href="#news">Novidades</Link>
          <Link href={'/login'}>Login</Link>
        </div>
        
    </nav>
  )
}

export default NavBarLP