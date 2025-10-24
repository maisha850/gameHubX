import React from 'react';
import bg from '../assets/11373233.jpg'
import { toast } from 'react-toastify';


const Newsletter = () => {
    const handleNewsLetter=()=>{
        toast('✅Subscribed')
    }
    return (
        <div className='rounded-xl shadow-sm my-10 h-100 bg-cover bg-no-repeat bg-center ' style={{backgroundImage:`url(${bg})`}}>
            <div className='flex justify-center items-center flex-col h-100 space-y-5'>
                <h3 className=' bg-linear-to-r from-[#632EE3] to-pink-500 bg-clip-text text-transparent  font-bold text-2xl'>Subscribe to GAMEHUBX</h3>
            <p className='font-bold md:text-4xl text-2xl text-white'>To Get Exclusive Benefits</p>
           <div className='flex gap-2'>
          
             <input type="email" className='input text-slate-500 md:h-13 rounded-xl lg:text-lg  lg:w-150 bg-none' placeholder='Email Address' />
            <input onClick={handleNewsLetter} className='btn md:w-30 md:h-13 rounded-xl  bg-linear-to-r from-[#632EE3] to-pink-500 text-white' type="submit" value="Subscribe" />
           </div>
            </div>
            
        </div>
    );
};

export default Newsletter;