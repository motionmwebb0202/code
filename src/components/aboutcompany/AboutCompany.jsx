import React from 'react';
import img from "../img/img (2).png"

const AboutCompany = () => {
   return (
      <header id="header">
      <div className="container">
         <div className="header">
            <div style={{textAlign:"center"}} className="">
               <div className=" bg-amber-400 w-[1470px] h-[678px] ml-[130px] relative"></div>
               <img
                  className=" absolute -mt-[610px] ml-[870px]"
                  src={img}
                  alt=""
               />
               <div className="  relative ml-[-50vh] -mt-[450px]   ">
                  <h1 className=" font-black text-6xl text-slate-50">
                     Сервисный центр по <br />
                     ремонту техники
                  </h1>
                  <p className=" text-2xl font-normal  mt-[50px] ">
                     Мастера компании “Мистер Быт” ремонтируют технику на{" "}
                     <br />
                     выезде на протяжении 20 лет.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </header>
   );
};

export default AboutCompany;