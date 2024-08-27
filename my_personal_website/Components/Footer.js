import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <>
    <div className='flex flex-col justify-center items-center gap-5 bg-emerald-400 p-7'>
        <h1 className='text-5xl'>Welcome To Footer Section</h1>
        <h1 className='text-2xl'>Do You Have Any Query ? </h1>
        <div className='flex flex-col justify-center items-center gap-5 w-full m-3'>
            <h1 className='text-3xl'>Please Contact Us in the following ways </h1>
            <div className='flex gap-4'>

                <Link className='hover:bg-red-500 p-2' href="https://www.facebook.com">facebook</Link>
                <Link className='hover:bg-red-500 p-2' href="https://www.youtube.com">youtube</Link>
                <Link className='hover:bg-red-500 p-2' href="https://www.linkedin.com">linkedin</Link>
                <Link className='hover:bg-red-500 p-2' href="https://github.com/TohaShaleh">GitHub</Link>
                <Link className='hover:bg-red-500 p-2' href="https://leetcode.com/u/shaleh_31/">LeetCode</Link>

            </div>
        </div>
    </div>
    </>
    
  )
}

export default Footer