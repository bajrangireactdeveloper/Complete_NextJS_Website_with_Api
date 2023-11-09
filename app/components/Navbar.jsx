import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex p-5 bg-gray-800'>
         
            <div><Link className='p-5 m-5 text-white hover:bg-gray-950' href="/home">Home</Link></div>
           <div> <Link className='p-5 m-5 text-white hover:bg-gray-950' href="/about">About Us</Link></div>
            <div><Link className='p-5 m-5 text-white hover:bg-gray-950' href="/contact">Contact US</Link></div>
         
    </div>
  )
}

export default Navbar
