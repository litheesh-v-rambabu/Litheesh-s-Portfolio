import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Use NavLink for page navigation

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeLinkStyle = 'text-white';
  const inactiveLinkStyle = 'text-secondary';

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo links to the homepage */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Kushvith &nbsp;
   
          </p>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li key={nav.path}>
              <NavLink
                to={nav.path}
                className={({ isActive }) => 
                  `${isActive ? activeLinkStyle : inactiveLinkStyle} hover:text-white text-[18px] font-medium cursor-pointer`
                }
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Links */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li key={nav.path}>
                  <NavLink
                    to={nav.path}
                    className={({ isActive }) => 
                      `${isActive ? activeLinkStyle : inactiveLinkStyle} font-poppins font-medium cursor-pointer text-[16px]`
                    }
                    onClick={() => setToggle(false)} // Close menu on click
                  >
                    {nav.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;