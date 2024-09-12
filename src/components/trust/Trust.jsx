import React from 'react';
import { FiChevronsDown } from "react-icons/fi";
import img from "../img/Certificate (1).png"
import img1 from "../img/Certificate (2).png"
import img2 from "../img/Certificate (3).png"
import img3 from "../img/Certificate (4) .png"



const Trust = () => {
   return (
      <section id='home'>
      <div className="container">
         <div className="home">
         <h1 className=' text-5xl font-bold text-center m-11' >Как все начиналось? </h1>
                  <p  className=' text-center font-normal text-2xl ml-12'>Наша история — это более 20 лет беспрерывного совершенствования, развития. Мы начали свой путь в <br /> 2001 году и с тех пор стали одним из лидеров отрасли.</p>
                  <FiChevronsDown className=' ml-[80vh] text-4xl mt-4 text-gray-400'/>
         </div>
         <div className='  flex justify-center gap-10 mt-[50px]'>
         <img src={img} alt="" />
         <img src={img1} alt="" />
         <img src={img2} alt="" />
         <img src={img3} alt="" />
         </div>
      </div>
      </section>
   );
};

export default Trust;