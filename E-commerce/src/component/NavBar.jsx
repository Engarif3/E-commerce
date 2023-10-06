import React from 'react';
import logo from "../../public/shop.svg"

const NavBar = () => {
    return (
        <div className='bg-cyan-800 text-white'>
            <nav className='flex justify-between items-center mx-28 mb-2 '>
            <img className='w-12' src={logo}  alt="" />
            <div className='flex gap-8 font-bold'>
            <p className='cursor-pointer'>Order</p>
            <p className='cursor-pointer'>Order Review</p>
            <p className='cursor-pointer'>Manage Inventory</p>
            <p className='cursor-pointer'>Login</p>
            </div>
        </nav>
        </div>
    );
};

export default NavBar;