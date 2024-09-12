import React from 'react';
import { FiChevronsDown } from "react-icons/fi";
import img5 from "../img/master-gift.png"
import img6 from "../img/сбербанк.png"
import img7 from "../img/visa-icon.png"
import img8 from "../img/mastercard-icon.png"
import { FaWallet } from "react-icons/fa6";
import { RiBankCardFill } from "react-icons/ri";


const Cemained = () => {
   return (
      <section id='section'>
     <div className="container">
      <div className="section">
      <h1 className=' text-5xl font-bold text-center m-11' >Остались вопросы? </h1>
                  <p  className=' text-center font-normal text-2xl ml-12'>Часто для принятия правильного решения, стоит собрать больше информации, ниже ответы на самые <br /> популярные вопросы </p>
                  <FiChevronsDown className=' ml-[80vh] text-4xl mt-4 text-gray-400'/>
      </div>
           <div className=' '>  
           <div className=' ml-[200px] mt-[5vh]'>
           <select className=' bg-[#EDF3F6] w-[799px] h-[70px]'>
               <option>Сколько стоит диагностика?</option>
                <option>Приоритетным направлением деятельности нашей <br />
                 специализированной компании является ремонт бытовой техники на дому.</option>
            </select>
            <br />
            <select className=' bg-[#EDF3F6] w-[799px] h-[70px]'>
               <option>Какие документы оставит мастер?</option>
                <option>Приоритетным направлением деятельности нашей <br />
                 специализированной компании является ремонт бытовой техники на дому.</option>
            </select>
            <br />
            <select className=' bg-[#EDF3F6] w-[799px] h-[70px]'>
               <option>Сколько действует гарантия?</option>
                <option>Приоритетным направлением деятельности нашей <br />
                 специализированной компании является ремонт бытовой техники на дому.</option>
            </select>
            <br />
            <select className=' bg-[#EDF3F6] w-[799px] h-[70px]'>
               <option>Как происходит оплата?</option>
                <option>Приоритетным направлением деятельности нашей <br />
                 специализированной компании является ремонт бытовой техники на дому.</option>
            </select>
            <br />
            <select className=' bg-[#EDF3F6] w-[799px] h-[70px]'>
               <option>Сколько стоит выезд мастера?</option>
                <option className=''>Приоритетным направлением деятельности нашей <br />
                 специализированной компании является ремонт бытовой техники на дому.</option>
            </select>
           </div>
           </div>
           <div className=' flex justify-end'>  
            <img className=' -mt-[45vh]  mr-[15vh] relative w-[299px]' src={img5} alt="" />
            <div>
               <h2 className=' font-bold text-lg text-center absolute -ml-[40vh] -mt-[100px]  bg-[#FED036] w-[184px] h-[42px]'>Дмитрий Соколов</h2>
               <div className='absolute  bg-[#EDF3F6]  w-[300px]  h-[50px] -ml-[37vh] -mt-[50px] '>
               <h3 className='   text-xs ml-[10px] mt-[10px]'>Главный менеджер отдела <br /> клиентского сервиса “Мистер Быт”</h3>
               </div>
            </div>
           </div>
          
           <div className='  bg-[#EDF3F6] w-[376px] h-[170px] mt-[50px] ml-[20vh]'>
               <h3 className=' text-base font-bold  ml-[30px] '>Принимаем способы оплаты:</h3>
                  <div className=' flex justify-start gap-[1px] mt-[20px] ml-[20px] '>
                  <div  className=' flex ml-[10px] '>
                  <FaWallet className='  text-cyan-500 mt-[4px]'  />
               <p>Наличные</p>
               </div>
               <div className=' ml-[30px] flex bg-[#FFF]  w-[ 123.544px
] h-[40px] text-center   '>
               <RiBankCardFill className=' mt-[4px] text-cyan-500' />
              <p className=''> Безналичный перевод</p>
               </div>
                  </div>
               <div className=' flex gap-[20px] ml-[30px] mt-[20px]'>
                  <img src={img6} alt="" />
                  <img src={img7} alt="" />
                  <img src={img8} alt="" />
               </div>
           </div>
           <div className=' flex justify-end'>

               <div className=' w-[820px] h-[188px] bg-[#FED036] -mt-[170px] mr-[120px]'>
                 <h1 className=' '>Если у вас остались какие-либо вопросы или есть пожелания:</h1>
               </div>
           </div>
     </div>
      </section>)

};

export default Cemained;