import React from 'react';
import { FiChevronsDown } from "react-icons/fi";


const Began = () => {
   return (
        <section id='hero'>
            <div className="container">
               <div className="hero">
                  <h1 className=' text-5xl font-bold text-center m-11' >Как все начиналось? </h1>
                  <p  className=' text-center font-normal text-2xl ml-12'>Наша история — это более 20 лет беспрерывного совершенствования, развития. Мы начали свой путь в <br /> 2001 году и с тех пор стали одним из лидеров отрасли.</p>
                  <FiChevronsDown className=' ml-[80vh] text-4xl mt-4 text-gray-400'/>
                  <div className=' bg-cyan-200 w-[1440px] h-[378px] ml-[10vh] mt-[40px]'></div>
               </div>
            </div>
        </section>
   );
};

export default Began;