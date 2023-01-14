import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='flex items-center justify-between px-3 rounded-lg mx-5 my-3 bg-gray-300'>
            <Link href='/'>
                <div className='flex items-center cursor-pointer'>
                    <Image src="/images/kollaborate-logo.webp"
                        height={50} width={50} alt="logo" />
                    <span className='font-bold ml-2 mb-2 text-black text-xl'>Blogs</span>
                </div>
            </Link>
            <ul className='flex items-center pt-3'>
                <li ><a className='mr-6 text-lg font-medium text-gray-700  hover:text-logo-color' href="/">Home</a></li>
                <li ><a className='mr-6 text-lg  font-medium text-gray-700 hover:text-logo-color' href="/">About</a></li>
                <li ><a className='mr-6 text-lg font-medium text-gray-700 hover:text-logo-color' href="/">Products</a></li>
            </ul>

            <ul className='flex  items-center pt-3'>
                <li >
                    <a className='mr-6 font-medium text-gray-700 hover:text-logo-color' href="#">Sign Up</a>
                </li>
                <li >
                    <a className='mr-6 px-2 pt-0.5 pb-1 font-medium rounded border-4  bg-logo-color text-gray-700 hover:text-logo-color hover:bg-gray-300  hover:border-logo-color' href="#">Log In</a>
                </li>
            </ul>

        </nav>
    )
}
