"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [Resume, setResume] = useState(false)

  return (
    <>
        <div className="flex flex-col items-center ">
            <div className="main2 flex flex-col items-center">
                <h1 className='text-3xl font-bold m-5'>This is my Resume Section</h1>
                <div className='flex justify-center items-center'>
                <h1 className='text-2xl font-bold m-5'>Want to See My Resume ?</h1>
                <button onClick={()=>setResume(true)} type="submit" className='bg-green-500 p-2 hover:bg-blue-500 font-bold'>Yes</button>
                </div>

                 {Resume==true?(

                    <Link className='m-8 bg-orange-400 p-3 rounded hover:bg-orange-900 hover:text-white' href="https://drive.google.com/drive/u/0/folders/1CuW3fLxFDfkCA538E89rZSv1Q3I4jT8b">Resume</Link>

                 ):("")}

                
            </div>

        </div>
    </>
  )
}

export default page