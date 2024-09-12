import React from 'react';
import img from    "../components/img/shutterstock_1821630455w12-removebg-preview 1 (1).png"

const Aboutcontacts = () => {
   return (
      <header id="header">
      <div className="container">
         <div className="header">
            <div className="nav-lins">
               <div className=" bg-amber-400 w-[1440px] h-[678px] ml-[100px] relative"></div>
               <img
                  className=" absolute -mt-[603px] ml-[845px]"
                  src={img}
                  alt=""
               />
               <div className="  relative ml-[180px] -mt-[500px]  ">
                  <h1 className=" font-black text-6xl text-slate-50">
                  Обслуживаем <br />Москву и <br /> Подмосковье
                  </h1>
                  <p className=" text-2xl font-normal  mt-[50px]">
                  Всегда идем на контакт с нашими клиентами и партнерами, <br /> что бы повышать свое качества сервиса.
                  </p>
               </div>
               <h1>scdfghj</h1>
            </div>
         </div>
      </div>
   </header>
   );
};

export default Aboutcontacts;