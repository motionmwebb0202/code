import React from 'react';
import { FiChevronsDown } from "react-icons/fi";
import img from "../components/img/map.png"

const Telephone = () => {
   return (
       <section id='section'>  
       <div className="container">
         <div className="section">
         <h1 className=' text-5xl font-bold text-center m-11' >Где мы находимся?  </h1>
                  <p  className=' text-center font-normal text-2xl ml-12'>Офисы компании находятся в нескольких районах Москвы и Московской области. Каждый центр оказывает <br /> полный перечень услуг. Найти ближайший к себе можно через форму поиска. </p>
                  <FiChevronsDown className=' ml-[80vh] text-4xl mt-4 text-gray-400'/>
         </div>
         <div className=' ml-[100px]'>
            <img className=' w-[920px] h-[604px]' src={img} alt="" />
         </div>
       </div>
       </section>
   );
};

export default Telephone;