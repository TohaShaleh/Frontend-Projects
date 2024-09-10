"use client";

import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='bg-slate-400 w-full h-[80px] flex justify-between items-center p-4'>
        <Link className='text-2xl md:text-4xl' href="/">Abu_Shaleh</Link>

        <div className='hidden md:flex gap-10 p-3'>
          <Link className='hover:underline hover:font-bold' href="/">About</Link>
          <Link className='hover:underline hover:font-bold' href="/ToDo">ToDo</Link>
          <Link className='hover:underline hover:font-bold' href="/Resume">Resume</Link>
          <Link className='hover:underline hover:font-bold' href="/Sign_in">Sign In</Link>
          <Link className='hover:underline hover:font-bold' href="/Sign_up">Sign Up</Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className='md:hidden'>
          <button className='text-2xl' onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className='md:hidden flex flex-col bg-slate-400 p-4'>
          <Link className='hover:underline hover:font-bold p-2 text-xl' href="/" onClick={toggleMenu}>About</Link>
          <Link className='hover:underline hover:font-bold p-2 text-xl' href="/ToDo" onClick={toggleMenu}>ToDo</Link>
          <Link className='hover:underline hover:font-bold p-2 text-xl' href="/Resume" onClick={toggleMenu}>Resume</Link>
          <Link className='hover:underline hover:font-bold p-2 text-xl' href="/Sign_in" onClick={toggleMenu}>Sign In</Link>
          <Link className='hover:underline hover:font-bold p-2 text-xl' href="/Sign_up" onClick={toggleMenu}>Sign Up</Link>
        </div>
      )}
    </>
  ); 
}

export default Header;