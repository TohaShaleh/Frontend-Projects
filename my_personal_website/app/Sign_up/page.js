"use client"
import React, { useState } from 'react'

function Sign_up() {

  // localStorage.clear()   -->  Clearing the LocalStorage

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [store, setstore] = useState([])
  const [stat, setstat] = useState(false)

const upemail=(e)=>{
  setemail(e.target.value);
}

const uppass=(e)=>{
  setpassword(e.target.value);
}


const upstore=(e)=>{
  e.preventDefault();

  // setstore(...store, {email,password});
if(password.length>=5){

 // Store the email and password in key-value pairs
//  localStorage.setItem("userEmail", email);
//  localStorage.setItem("userPassword", password);

 localStorage.setItem(email,password); //Email and password are stored in a key value pairs
 alert("Sign up completed! Data stored in local storage.");
 setstat(true);  // Sign up completed , Now the form will disappear
 setpassword("");
 setemail("");
 
}

else{
    alert("password size must be at least 5");
    alert(`Your Password Size is : ${password.length}`)
}


}



  return (
    <>

     {stat?(
        <div className='m-5 text-center'>
          <h1 className='text-4xl p-3'>AlhamDulillah! Sign Up Completed Brother</h1>
          <h2 className='text-3xl p-3'>Now You Can Sign In</h2>
      </div>
     ):(
        <div className="main1 flex flex-col items-center">

        <h1 className='text-4xl font-bold m-5'>WelCome to the Sign Up Form</h1>
           <div className="form m-6 ">
             <form action="" onSubmit={upstore} >
               <label htmlFor="email">Enter your email : </label>
               <input className='p-2 m-2' type="email" value={email} onChange={upemail} required placeholder='Enter your email'/> <br />
   
               <label htmlFor="password">Enter PassWord : </label>
               <input className='p-2 bottom-1' type="password" value={password} onChange={uppass} required placeholder='Enter your password' /> <br />
   
               <button type='submit' className='bg-green-600 m-2 p-3 hover:bg-blue-500'>Sign Up</button>
             </form>
           </div>
   
        </div>
        
     )}
     

    
    
    </>
  )
}

export default Sign_up