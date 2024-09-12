import React from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import {NavLink} from  "react-router-dom"


const Header = () => {
   return (
       <header id='header'>
 <div className="container">
   <div className="header">
         <div className=' flex items-center justify-center m-[40px] gap-[50px] ml-[70px]'>
            <div>
            <button className=' bg-amber-400 w-[53px] h-[35px]'>MR.</button>
            <button className=' bg-black w-[78px] h-[35px] text-white '>БЫТ</button>
            </div>
        
            <a className=' text-lg' href=""><FiAlignJustify className=' -ml-7 -mb-6 text-sky-600 ' />  Цены на услуги</a>
              <div className='flex  gap-11 text-lg  mb-1'>
              <NavLink to='/company'>  О компании</NavLink>
            <NavLink to='/reviews'> Отзыв</NavLink>
            <NavLink to='/contacts'> Контакт</NavLink>
              </div>
            <a className=' text-lg ml-8' href="">   <FiChevronUp className=' -ml-5 -mb-5 text-sky-600'/> Moсква и Подмосковье</a>
             <h1 className=' text-2xl font-black'>8 (495)<span className=' text-amber-400'>106-52-16</span></h1>

         </div>
   </div>
 </div>
       </header>
   );
};

export default Header;