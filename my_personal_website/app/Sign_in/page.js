"use client"

import React, { useState } from 'react'

const Log_in = () => {

    const [stat, setstat] = useState(false)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const upemail=(e)=>{
        setemail(e.target.value);
      }
      
      const uppass=(e)=>{
        setpassword(e.target.value);
      }


      // Taking the email and password from the user for Sign in
      const check=(e)=>{
        e.preventDefault();

        // const oldemail=localStorage.getItem('userEmail');
        const pass=localStorage.getItem(email);

        if(pass===password)
            {
                alert("Congratulations !! Sign in Successfull..")
                setstat(true);
            }
        else if(pass!==password) 
          { 
            alert(`Wrong Email Or PassWord !! Please Try Agian `) 

          }
        

      }


  return (
    <>

    <div className="main1">
        

        {stat?(
        <h1 className='m-3 text-4xl p-3 text-center'>AlhamDulillah!! Sign In Completed..</h1>
       ):(
        <div className="main1 flex flex-col items-center">

        <h1 className='text-4xl font-bold m-5'>WelCome to the Sign In Form</h1>
           <div className="form m-4 ">
             <form action="" onSubmit={check} >
               <label htmlFor="email">Enter your email : </label>
               <input className='p-2 m-2' type="email" value={email} onChange={upemail} required placeholder='Enter your email'/> <br />
   
               <label htmlFor="password">Enter PassWord : </label>
               <input className='p-2 bottom-1' type="password" value={password} onChange={uppass} required placeholder='Enter your password' /> <br />
   
               <button type='submit' className='bg-green-600 m-3 p-3 hover:bg-blue-500'>Sign in</button>
             </form>
        </div>

   
        </div>
        
     )}

    </div>

    </>
  )
}

export default Log_in