import React from 'react';
import img from "../img/3333.png"
const Aboutreviews = () => {
   return (
      <header id="header">
      <div className="container">
         <div className="header">
            <div className="nav-lins">
               <div className=" bg-amber-400 w-[1440px] h-[678px] ml-[100px] relative"></div>
               <img
                  className=" absolute -mt-[640px] ml-[900px]"
                  src={img}
                  alt=""
               />
               <div className="  relative ml-[180px] -mt-[450px]  ">
                  <h1 className=" font-black text-6xl text-slate-50">
                     Помогите нам стать <br /> лучше!
                  </h1>
                  <p className=" text-2xl font-normal  mt-[50px]">
                     Если у вас есть вопросы, которые требуют немедленного{" "}
                     <br /> решения, позвоните или напишите нам.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </header>
   );
};

export default Aboutreviews;