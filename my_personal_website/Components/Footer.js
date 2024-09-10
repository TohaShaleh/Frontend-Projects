import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-5 bg-emerald-400 p-7'>
        <h1 className='text-3xl md:text-5xl text-center'>Welcome To Footer Section</h1>

        <h1 className='text-xl md:text-2xl text-center'>Do You Have Any Query?</h1>
        
        <div className='flex flex-col justify-center items-center gap-5 w-full m-3'>

          <h1 className='text-xl md:text-3xl text-center'>Please Contact Us in the following ways</h1>
          
          <div className='flex flex-wrap justify-center gap-4'>

            <Link className='hover:bg-red-500 p-2 text-sm md:text-base rounded' href="https://www.facebook.com">
              Facebook
            </Link>

            <Link className='hover:bg-red-500 p-2 text-sm md:text-base rounded' href="https://www.youtube.com">
              YouTube
            </Link>

            <Link className='hover:bg-red-500 p-2 text-sm md:text-base rounded' href="https://www.linkedin.com">
              LinkedIn
            </Link>

            <Link className='hover:bg-red-500 p-2 text-sm md:text-base rounded' href="https://github.com/TohaShaleh">
              GitHub
            </Link>

            <Link className='hover:bg-red-500 p-2 text-sm md:text-base rounded' href="https://leetcode.com/u/shaleh_31/">
              LeetCode
            </Link>

          </div>

          {/* Added text-sm class for smaller screens and md:text-base for medium and larger screens */}
        </div>
      </div>
    </>
  )
}

export default Footer