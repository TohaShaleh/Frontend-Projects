import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    
    <div className='bg-slate-400 w-full h-[80px] flex justify-between p-4'>
      <Link className='text-4xl' href="/">Abu_Shaleh</Link>
       
      <div className='flex gap-10 p-3'>

        <Link className='hover:underline hover:font-bold ' href="/">About</Link>
        <Link className='hover:underline hover:font-bold '  href="/ToDo">ToDo</Link>
        <Link className='hover:underline hover:font-bold '  href="/Resume">Resume</Link>
        <Link className='hover:underline hover:font-bold '  href="/Sign_in">Sign In</Link>
        <Link className='hover:underline hover:font-bold '  href="/Sign_up">Sign Up</Link>
        
      </div>
    </div>
    </>
  )
}

export default Header