import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const links = (
        <>
            <NavLink to="/" className={({isActive})=> isActive ? 'px-3 py-2 bg-orange-400 border-1 rounded-3xl  font-semibold text-white':"text-black px-3 " }> Home </NavLink>

            <NavLink to="/about" className={({isActive})=> isActive ? 'px-3 py-2 bg-orange-400 border-1 rounded-3xl  font-semibold text-white':'text-black px-3 '}> About</NavLink>

            <NavLink to="/register" className={({isActive})=> isActive ? 'px-3 py-2 bg-orange-400 border-1 rounded-3xl  font-semibold text-white':'text-black px-3'}> Rigister</NavLink>
        </>
    );

    return (
        <div>
            <div className="navbar bg-orange-400 shadow-sm">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <img className="hidden md:block lg:block btn btn-md btn-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGAoIxic0UHkrk3AI8QpHcg4nLNxwUBWfRrA&s" alt="" />

                    <a className="btn btn-sm lg:btn-lg btn-ghost text-sm md:text-2xl lg:text-3xl font-bold lg:font-extrabold text-[#1F1F1F] hover:bg-orange-400 border-none hover:shadow-none"><span className='text-white'>Sweet</span> Bite</a>
                </div>

                {/* large device */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end">
                    <Link to="/login">
                       
                        <button className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                            <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;