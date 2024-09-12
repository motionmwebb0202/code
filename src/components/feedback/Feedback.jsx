import React from 'react';
import img from "../img/Union.png"
import img1 from "../img/rating.png"
import img3 from "../img/google-logo.png"
import img4 from "../img/Отзый 12 (2).png"

const Feedback = () => {
   return (
       <section id='nom'>
        <div className="container">
         <div className=" mt-[60px]">
             <div>
               <button className=' bg-cyan-600 w-[210px] h-[50px] ml-[190px] '>оставить отзыв</button>
                 <div className='flex justify-center ml-[20pc]  gap-[30px] -mt-[50px]'>
                     <img className=' relative' src={img} alt="" />
                      <h5 className=' absolute -ml-[25vh] mt-4'>4,5</h5>
                      <div className=''>
                      <img src={img1} alt="" />
                      <p>Рейтинг </p>
                      <p>
                           по отзывам в</p>
                      </div>
                           <div>
                           <img src={img3} alt="" />
                           <p>355 оценок</p>
                           </div>
                 </div>
             </div>
             <div>
                 <div className='flex justify-center ml-[110vh]  gap-[30px] -mt-[60px]'>
                     <img className=' relative' src={img} alt="" />
                      <h5 className=' absolute -ml-[25vh] mt-4'>4,5</h5>
                      <div className=''>
                      <img src={img1} alt="" />
                      <p>Рейтинг </p>
                      <p>
                           по отзывам в</p>
                      </div>
                           <div>
                           <img src={img3} alt="" />
                           <p>355 оценок</p>
                           </div>
                 </div>
             </div>
             <div className=' flex  gap-8 flex-wrap ml-[180px] mt-[70px]'>
               <img src={img4} alt="" />
               <img src={img4} alt="" />
               <img src={img4} alt="" />
               <img src={img4} alt="" />
               <img src={img4} alt="" />

               <img  src={img4} alt="" />
               <img src={img4} alt="" />
               <img src={img4} alt="" />
               <img src={img4} alt="" />
               <img src={img4} alt="" />
               
               <img src={img4} alt="" />
               <img src={img4} alt="" />
               <img src={img4} alt="" />
               <img src={img4} alt="" />
               <img src={img4} alt="" />
             </div>
          <div className=' flex justify-center'>
          <button className='  bg-cyan-600 w-[210px] h-[50px] ml-[190px] '>Посмотреть ещё</button>
          </div>

         </div>
        </div>
       </section>
   );
};

export default Feedback;