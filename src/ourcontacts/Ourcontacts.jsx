import React from 'react';
import { FiChevronsDown } from "react-icons/fi";
import { BsTelephoneOutbound } from "react-icons/bs";


const Ourcontacts = () => {
   return (
       <section id='section'>
      <div className="container">
         <div className=" mt-[300px]">
         <h1 className=' text-5xl font-bold text-center m-11' >Наши контакты  </h1>
                  <p  className=' text-center font-normal text-2xl ml-12'>Для предложений и жалоб, просто свяжитесь с нами любым удобным для вас способом. </p>
                  <FiChevronsDown className=' ml-[80vh] text-4xl mt-4 text-gray-400'/>
         </div>
         <div className='flex justify-center gap-[30vh] mt-[50px]'   >

         <div>
         <h4 className=' ml-10'>  <BsTelephoneOutbound className=' -ml-[30px] -mb-[30px]'/>Телефон:</h4>
                 <p className=' ml-10'>8 (495) 106-52-16</p>

         </div>
         <div>
         <h4 className=' ml-10'>  <BsTelephoneOutbound className=' -ml-[30px] -mb-[30px]'/>Телефон:</h4>
                 <p className=' ml-10'>8 (495) 106-52-16</p>

         </div>
         <div>
         <h4 className=' ml-10'>  <BsTelephoneOutbound className=' -ml-[30px] -mb-[30px]'/>Телефон:</h4>
                 <p className=' ml-10'>8 (495) 106-52-16</p>

         </div>
         
         </div>
         <div className='flex justify-center gap-[30vh] mt-[50px]'   >

<div>
<h4 className=' ml-10'>  <BsTelephoneOutbound className=' -ml-[30px] -mb-[30px]'/>Телефон:</h4>
        <p className=' ml-10'>8 (495) 106-52-16</p>

</div>
<div>
<h4 className=' ml-10'>  <BsTelephoneOutbound className=' -ml-[30px] -mb-[30px]'/>Телефон:</h4>
        <p className=' ml-10'>8 (495) 106-52-16</p>

</div>
<div>
<h4 className=' ml-10'>  <BsTelephoneOutbound className=' -ml-[30px] -mb-[30px]'/>Телефон:</h4>
        <p className=' ml-10'>8 (495) 106-52-16</p>

</div>

</div>
   
      </div>

       </section>
         
   
   );
};

export default Ourcontacts;