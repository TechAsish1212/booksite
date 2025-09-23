// import React, { useState } from 'react'
// import { FaBars } from 'react-icons/fa6'
// import { IoSearch } from "react-icons/io5";
// import { IoMenu } from "react-icons/io5";
// import { Link, useNavigate } from 'react-router-dom'
// import { logo, userImg } from '../assets/assets'
// import Navbar from './Navbar'
// import { RiShieldUserLine } from 'react-icons/ri';
// import { IoCartOutline } from "react-icons/io5";


// function Header() {

//     const [menuOpened, setMenuOpened] = useState(false);
//     const [showSeaarch, setShowSearch] = useState(false);
//     const [user, setUser] = useState(true);
//     const navigate = useNavigate()

//     const toggleMenu = () => {
//         setMenuOpened(prev => !prev)
//     }

//     return (
//         <>
//             <header className='absolute top-0 left-0 right-0 max-padd-container flexBetween gap-4 py-2'>
//                 {/* logo */}
//                 <div className='flex flex-1'>
//                     <Link to={'/'} className='bold-22 xl:bold-28 flex items-end gap-1'>
//                         <img src={logo} alt="logoImage" className='hidden sm:block h-8' />
//                         <div className="sm:relative top-1">OxiBook<span className='text-secondary'>a.</span></div>
//                     </Link>
//                 </div>
//                 {/* Navbar for mobile and desktop */}
//                 <div className='flex-1'>
//                     <Navbar setMenuOpened={setMenuOpened} containerStyles={`${menuOpened ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-primary rounded-xl shadow-md w-52 ring-1 ring-slate-900/5 z-50" : "hidden lg:flex gap-x-5 ring-1 xl:gap-x-7 medium-15 ring-1 ring-slate-900/5 rounded-full p-1 bg-primary"}`} />
//                 </div>
//                 {/* searchbar */}
//                 <div className='flex sm:flex-1 items-center sm:justify-between gap-x-4 sm:gap-x-8'>
//                     <div className='relative hidden xl:flex items-center'>
//                         <div className={`bg-white ring-1 ring-slate-900/10 rounded-full transition-all duration-300 ease-in-out ${showSeaarch ? "w-[266px] opacity-100 px-4 py-2.5" : "w-0 opacity-0 p-0"}`}>
//                             <input type="text" placeholder='Search book....' className='bg-transparent w-full text-sm outline-none pr-10 placeholder:text-gray-400' />
//                         </div>
//                         <div className='absolute right-0.5 bg-primary p-2.5 rounded-full cursor-pointer z-10'>
//                             <IoSearch className='text-xl' />
//                         </div>
//                     </div>
//                     <>
//                         {
//                             menuOpened ? (
//                                 <IoMenu onClick={toggleMenu} className='lg:hidden cursor-pointer text-xl' />
//                             ) : (
//                                 <IoMenu onClick={toggleMenu} className='lg:hidden cursor-pointer text-xl' />
//                             )
//                         }
//                     </>
//                     {/* cart */}
//                     <Link>
//                         {/* <div className='bold-16'>
//                             Cart <span className='bg-secondary text-white text-[12px] font-semibold absolute top-12 right-55 flexCenter w-4 h-4 rounded-full'>0</span>
//                         </div> */}

//                         <div className="bold-16 relative">
//                             <IoCartOutline className='text-2xl' title='add to cart'/>
//                             <span className="bg-secondary text-white text-[12px] font-semibold absolute -top-3 -right-3 flex items-center justify-center w-4 h-4 rounded-full">
//                                 0
//                             </span>
//                         </div>


//                     </Link>
//                     {/* user profile */}
//                     <div className='group-relative'>
//                         <div>
//                             {
//                                 user ? (
//                                     <div className="flex gap-2 items-center cursor-pointer rounded-full bg-white">
//                                         <img src={userImg} alt="user profile image" height={35} width={35} />
//                                     </div>
//                                 ) : (
//                                     <button className='btn-light flexCenter gap-x-2 '>
//                                         Login<RiShieldUserLine className='text-xl' />
//                                     </button>
//                                 )
//                             }
//                         </div>
//                         {/* dropdown */}
//                         {
//                             user &&
//                             (
//                                 <ul className='bg-white p-2 w-32 ring-1 ring-slate-900/5 rounded absolute right-0 top-10 hidden group-hover:flex flex-col medium-14 shadow-md z-50'>
//                                     <li onClick={() => navigate('/my-orders')} className='p-2 rounded-md hover:bg-primary cursor-pointer'>Orders</li>
//                                     <li onClick={() => navigate('/logoutUser')} className='p-2 rounded-md hover:bg-primary cursor-pointer'>Logout</li>
//                                 </ul>
//                             )
//                         }
//                     </div>
//                 </div>
//             </header>
//         </>
//     )
// }

// export default Header


import React, { useState, useRef, useEffect, useContext } from 'react'
import { IoSearch, IoMenu, IoCartOutline } from "react-icons/io5";
import { RiShieldUserLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { logo, userImg } from '../assets/assets';
import Navbar from './Navbar';
import { RiMenu3Fill } from "react-icons/ri";
import { ShopContext } from '../context/ShopContext';
import { LuUser } from "react-icons/lu";





function Header() {

    const [menuOpened, setMenuOpened] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const {navigate,user,setUser}=useContext(ShopContext);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpened(prev => !prev);
    }

    // Close user dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className='absolute top-0 left-0 right-0 max-padd-container flexBetween gap-4 py-2'>
            {/* Logo */}
            <div className='flex flex-1'>
                <Link to='/' className='bold-22 xl:bold-28 flex items-end gap-1'>
                    <img src={logo} alt="logoImage" className='hidden sm:block h-8' />
                    <div className="sm:relative top-1">Ink<span className='text-secondary'>Well.</span></div>
                </Link>
            </div>

            {/* Navbar for mobile and desktop */}
            <div className='flex-1'>
                <Navbar setMenuOpened={setMenuOpened} containerStyles={`${menuOpened ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-primary rounded-xl shadow-md w-52 ring-1 ring-slate-900/5 z-50" : "hidden lg:flex gap-x-5 ring-1 xl:gap-x-7 medium-15 ring-1 ring-slate-900/5 rounded-full p-1 bg-primary"}`} />
            </div>

            {/* Search bar, Menu toggle, Cart, User */}
            <div className='flex sm:flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8'>
                {/* Search bar */}
                {/* <div className='relative hidden xl:flex items-center ml-6'>
                    <div className={`bg-white ring-1 ring-slate-900/10 rounded-full transition-all duration-300 ease-in ${showSearch ? "w-[245px] opacity-100 px-2 py-2.5" : "w-0 opacity-0 p-0"}`}>
                        <input type="text" placeholder='Search book....' className='bg-transparent w-full text-sm outline-none pr-10 placeholder:text-gray-400' />
                    </div>
                    <div className='absolute right-0.5 bg-primary p-2.5 rounded-full cursor-pointer z-10' onClick={() => setShowSearch(prev => !prev)}>
                        <IoSearch className='text-xl' />
                    </div>
                </div> */}

                {/* Mobile menu toggle */}
                {/* <IoMenu onClick={toggleMenu} className='lg:hidden cursor-pointer text-xl' /> */}

                <>
                    {
                        menuOpened ? (
                            <RiMenu3Fill onClick={toggleMenu} className='lg:hidden cursor-pointer text-xl' />
                        ) : (
                            <IoMenu onClick={toggleMenu} className='lg:hidden cursor-pointer text-xl' />
                        )
                    }
                </>

                {/* Cart */}
                <Link>
                    <div className="bold-16 relative">
                        <IoCartOutline className='text-2xl' title='add to cart' />
                        <span className="bg-secondary text-white text-[12px] font-semibold absolute -top-3 -right-3 flex items-center justify-center w-4 h-4 rounded-full">
                            0
                        </span>
                    </div>
                </Link>

                {/* User profile */}
                <div className='relative' ref={dropdownRef}>
                    {user ? (
                        <div onClick={() => setDropdownOpen(prev => !prev)} className="flex gap-2 items-center cursor-pointer rounded-full bg-white">
                            <img src={userImg} alt="user profile image" height={35} width={35} className='rounded-full' />
                        </div>
                    ) : (
                        <button className='btn-outline flexCenter gap-x-2'>
                            Login<LuUser className='text-xl' />
                        </button>
                    )}

                    {/* Dropdown */}
                    {user && dropdownOpen && (
                        <ul className='bg-white p-2 w-32 ring-1 ring-slate-900/5 rounded absolute right-0 top-10 flex flex-col medium-14 shadow-md z-50'>
                            <li onClick={() => { setDropdownOpen(false); navigate('/my-orders'); }} className='p-2 rounded-md hover:bg-primary cursor-pointer'>Orders</li>
                            <li onClick={() => { setDropdownOpen(false); navigate('/logoutUser'); }} className='p-2 rounded-md hover:bg-primary cursor-pointer'>Logout</li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header;
