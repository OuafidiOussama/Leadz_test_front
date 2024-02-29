import { NavLink } from "react-router-dom";
import PathConstants from "../../routes/PathConstants";
import { useState } from "react";
import {Icon} from '@iconify/react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
  return (
    <nav className={`bg-indigo-950 w-full h-20 flex flex-col gap-5 md:gap-0 py-4 md:py-0 md:flex-row justify-start md:items-center px-10 flex-no-wrap relative shadow-md shadow-black/5 md:flex-wrap md:justify-between`}>
        <div className="flex z-10">
            <button
            className="block border-0 bg-transparent px-2 text-white md:hidden"
            type="button"
            onClick={toggleMenu}
            >
            <Icon icon="material-symbols:menu" className="h-9 w-9" />
            </button>
            <NavLink className='flex gap-2 font-black text-white text-2xl' to={PathConstants.HOME}>
                <p className="flex justify-center items-center w-8 h-10 bg-[#f2547d]">L</p>
                <p className="flex justify-center items-center w-8 h-10 bg-[#f2547d]">E</p>
                <p className="flex justify-center items-center w-8 h-10 bg-[#f2547d]">A</p>
                <p className="flex justify-center items-center w-8 h-10 bg-[#f2547d]">D</p>
                <p className="flex justify-center items-center w-8 h-10 bg-[#f2547d]">Z</p>
            </NavLink>
        </div>
        <ul className={`${isMenuOpen ? 'top-20': '-top-80'} text-lg font-semibold py-5 md:py-0 transition-all duration-300 md:top-0 flex gap-5 items-center md:flex-row flex-col w-full md:w-auto bg-indigo-950 md:bg-transparent absolute left-0 md:relative `}>
            <li>
                <NavLink className={({isActive})=> (isActive ? 'bg-[#f2547d] py-2 px-4 rounded-md' : 'text-white py-2 px-4 rounded-md' )} to={PathConstants.HOME}>DashBoard</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=> (isActive ? 'bg-[#f2547d] py-2 px-4 rounded-md' : 'text-white py-2 px-4 rounded-md' )} to={PathConstants.BOOKS}>Books</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=> (isActive ? 'bg-[#f2547d] py-2 px-4 rounded-md' : 'text-white py-2 px-4 rounded-md' )} to={PathConstants.AUTHORS}>Authors</NavLink>
            </li>
        </ul>
    </nav>
  )
}
