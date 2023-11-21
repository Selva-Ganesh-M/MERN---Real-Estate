import React from 'react'
import {FaSearch} from "react-icons/fa"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-sm'>
        <div className="mx-auto max-w-6xl flex items-center justify-between p-2">
            {/* logo */}
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                <span className="text-slate-500">Sahand</span>
                <span className="text-slate-700">Estate</span>
            </h1>

            {/* search */}
            <form action="" className="bg-slate-100 flex gap-3 items-center px-3 rounded-lg">
                <input type="text" placeholder='Search...' className='p-2 bg-transparent rounded-lg outline-none w-24 sm:w-64' />
                <FaSearch className='cursor-pointer' />
            </form>

            {/* nav-items */}
            <ul className="hidden sm:flex items-center gap-4 ">
                <Link to="about">
                <li className="text-slate-700 hidden sm:inline hover:underline">About</li>
                </Link>
                <Link to="sign-in">
                <li className="text-slate-700 hidden sm:inline hover:underline">Sign In</li>
                </Link>
                <Link to="/"><li className="text-slate-700 hover:underline">Home</li></Link>
                
            
            </ul>
        </div>
    </header>
  )
}

export default Header