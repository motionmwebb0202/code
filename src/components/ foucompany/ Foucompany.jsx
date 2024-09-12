import React from 'react';
import img from "../img/img.png"

const  Foucompany = () => {
   return (
      <section id="compani">
      <div className="container">
         <div className=" mt-72 flex justify-center gap-6 ml-[190px] mr-[50px]">
            <div className=" bg-cyan-600 w-[295px] h-[2px]  ">
               <h1 className=" font-bold text-6xl mt-[20px] ">
                  2001 <span className="text-xl">год</span>
               </h1>
               <h3 className=" font-normal text-xl">ремонтов в год</h3>
            </div>
            <div className=" bg-cyan-600 w-[295px] h-[2px]">
               <h1 className=" font-bold text-6xl mt-[20px]">
                  {" "}
                  64 <span className=" text-xl"> шт.</span>{" "}
               </h1>
               <h3 className=" font-normal text-xl">сервисных центра</h3>
            </div>
            <div className=" bg-cyan-600 w-[295px] h-[2px]">
               <h1 className=" font-bold text-6xl mt-[20px]">
                  126 <span className=" text-xl"> мастеров</span>{" "}
               </h1>
               <h3 className=" font-normal text-xl">
                  доступно ежедневно
               </h3>
            </div>
            <div className=" bg-cyan-600 w-[295px] h-[2px]">
               <h1 className=" font-bold text-6xl mt-[20px]">
                  {" "}
                  37 <span className=" text-xl">тыс.</span>{" "}
               </h1>
               <h3 className=" font-normal text-xl">ремонтов в год</h3>
            </div>
         </div>
         <div className=" flex justify-center gap-80 mt-[180px]  mr-[100px]  ">
            <p className=" text-xl font-normal ml-10">
               Сервис предоставляет услуги по ремонту бытовой техники уже
               более двадцати лет и имеет большой опыт <br />{" "}
               восстановления поломок любого уровня сложности. Данная
               компания является авторизированным сервисом <br />
               многих именитых брендов бытовой техники. <br />

             <br />

                Мистер Быт
               сотрудничает с такими производителями - LG, Samsung, AEG,
               Bosch, Miele и многими другими. В <br /> состав компании входят
               высококлассные специалисты в  области ремонта которые
               способны восстановить <br /> техническое состояние вашей бытовой
               техники до заводского уровня. <br /> 

               <br />  
                Услугами нашей компании можно
               воспользоваться в Москве и области, Екатеринбурге ,
               Санкт-Петербурге и <br /> области, Нижнем Новгороде и некоторых
               других городах.
            </p>
         </div>
         <div>
            <img className=' ml-[200px] mt-[50px]' src={img} alt="" />
         </div>
      </div>
   </section>
   );
};

export default  Foucompany;