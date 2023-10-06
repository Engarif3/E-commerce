import React from 'react';
import logo from "../../public/shop.svg"

const NavBar = () => {
    return (
        <div className='bg-cyan-800 text-white'>
            <nav className='flex justify-between items-center mx-28 p-2'>
            <img className='w-12' src={logo}  alt="" />
            <div className='flex gap-12 font-bold'>
            <p className='cursor-pointer hover:text-orange-700'>Order</p>
            <p className='cursor-pointer hover:text-orange-700'>Order Review</p>
            <p className='cursor-pointer hover:text-orange-700'>Manage Inventory</p>
            <p className='cursor-pointer hover:text-orange-700'>Login</p>
            </div>
        </nav>
        </div>
    );
};

export default NavBar;