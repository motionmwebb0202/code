import React from 'react';
import img1 from "../components/img/img555.png"
import { FiChevronsDown } from "react-icons/fi";


const Where = () => {
   return (
      <section id='they'>
      <div className="container">
        <div className="they">
                 <h1 className=' text-5xl font-bold text-center m-11 mt-[250px]' >Что о нас говорят? </h1>
                 <p  className=' text-center font-normal text-2xl ml-12'>О качестве работ компании говорят ее клиенты. Изучить мнение наших заказчиков вы можете ниже или  в <br /> сервисах Google, Яндекс. Нам есть, чем гордиться!</p>
                 <FiChevronsDown className=' ml-[80vh] text-4xl mt-4 text-gray-400'/>
        </div>
        <div className="flex justify-center gap-5 mt-[50px] flex-wrap ml-[90px] ">
                 <img className=" w-[190px] h-[140px]" src={img1} alt="" />
                 <img className=" w-[190px] h-[140px]" src={img1} alt="" />
                 <img className=" w-[190px] h-[140px]" src={img1} alt="" />
                 <img className=" w-[190px] h-[140px]" src={img1} alt="" />
                 <img className=" w-[190px] h-[140px]" src={img1} alt="" />
                 <img className=" w-[190px] h-[140px]" src={img1} alt="" />

                 <img className=" w-[190px] h-[140px]" src={img1} alt="" />
                 <img className=" w-[190px] h-[140px]" src={img1} alt="" />
                 <img className=" w-[190px] h-[140px]" src={img1} alt="" />
                 <img className=" w-[190px] h-[140px]" src={img1} alt="" />
                 <img className=" w-[190px] h-[140px]" src={img1} alt="" />
                 <img className=" w-[190px] h-[140px]" src={img1} alt="" />

                 <img className=" w-[190px] h-[140px]" src={img1} alt="" />
                 <img className=" w-[190px] h-[140px]" src={img1} alt="" />
                 <img className=" w-[190px] h-[140px]" src={img1} alt="" />
                 <img className=" w-[190px] h-[140px]" src={img1} alt="" />
                 <img className=" w-[190px] h-[140px]" src={img1} alt="" />
                 <img className=" w-[190px] h-[140px]" src={img1} alt="" />
              </div>
              <div>
               
              </div>
      </div>
   </section>
   );
};

export default Where;