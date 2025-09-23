import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { RiShoppingBag3Line } from "react-icons/ri";
import { RiBloggerLine } from "react-icons/ri";
import { BsEnvelopeAt } from "react-icons/bs";
import { NavLink } from 'react-router-dom';




const Navbar = ({ containerStyles, setMenuOpened }) => {
  const navitems = [
    { to: "/", label: "Home", icon: <AiOutlineHome /> },
    { to: "/shop", label: "Shop", icon: <RiShoppingBag3Line /> },
    { to: "/blog", label: "Blog", icon: <RiBloggerLine /> },
    { to: "/seller", label: "Seller", icon: <RiBloggerLine /> },
    { to: "mailto:infooxibooka.com", label: "contact", icon: <BsEnvelopeAt /> },
  ]
  return (
    <nav className={ containerStyles}>
      {
        navitems.map(({ to, label, icon }) => (
          <div key={label}>
            <NavLink onClick={()=>setMenuOpened(false)} to={to} className={({isActive})=>`${isActive ? "bg-white ring-1  ring-slate-900/10":""} flexCenter gap-x-2 px-3 py-1.5 rounded-full`}>
              <span className='text-xl'>{icon}</span>
              <span className='medium-16'>{label}</span>
            </NavLink>
          </div>
        ))

      }
    </nav>
  )
}

export default Navbar