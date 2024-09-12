import React from 'react';
import { FiChevronsDown } from "react-icons/fi";
import img from "../img/img (5).png"
import img2 from "../img/img (6).png"
import img3 from "../img/img (7).png"

const Repair = () => {
   return (
      <section id='hom'>
      <div className="container">
         <div className="hom">
                  <h1 className=' text-5xl font-bold text-center m-11' >Кому вы доверяете ремонт?</h1>
                  <p  className=' text-center font-normal text-2xl ml-12'>Все услуги проводят опытные, молодые, квалифицированные специалисты. Они знают, как качественно <br /> выполнить ремонт, сэкономив ваше время, деньги, нервы. </p>
                  <FiChevronsDown className=' ml-[80vh] text-4xl mt-4 text-gray-400'/>
         </div>
         <div className=' flex justify-center gap-[50px] mt-[50px]'>
            <img src={img} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />

         </div>
      </div>
      </section>
   );
};

export default Repair;