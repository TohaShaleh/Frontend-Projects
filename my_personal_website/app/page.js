"use client"

import Link from 'next/link'
import React, { useState } from 'react'


function Page() {

  const [identity, setidentity] = useState(false);
  const [want_to_know, setwant_to_know] = useState("Yes")

  


  const home = () => {
    return (
      <>
        <div className="main2">
          <h1 className='text-4xl font-bold m-3'>This is The Home Page</h1>
        </div>
        
      </>
    )
  }


  const iden=()=>{
    return (
      <>
       <div className='flex flex-col items-center m-5'>
        <h1 className='text-3xl m-3'>My Name is Abu Shaleh Md.Toha</h1>
        <p className='text-xl m-3' >I just Completed my B.Sc in CSE from CUET</p>
        <p className='text-xl m-3' >Now I am searching from job</p>
       </div>
      </>
    )
    
  }
 

  const handlebtn=()=>{

    if(identity==false)
      {
       setidentity(true);
       setwant_to_know("Hide Details")
     }

    else
    {
      setidentity(false);
      setwant_to_know("Show Details");
    }

  }





  return (

    //Start From here
    //This is the Home Page

    <>
   <div className="main1 flex justify-center flex-col items-center m-5">
   

   {home()}

    <div className='flex flex-col'>
    <div className='flex justify-center items-center m-3 gap-5'>

   <h1 className='text-2xl m-3'>Want to Know about myself ?</h1>
   <button onClick={handlebtn} className='p-2 bg-green-500 text-xl hover:bg-green-900 hover:text-white'>{want_to_know}</button>
   </div>

   </div>

   {identity && iden()}


   
       
    
  </div>



    </>
  )
}

export default Page
