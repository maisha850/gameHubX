import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';

const ResetPass = () => {
    const location=useLocation()
    console.log(location)
    const forgetEmail=location.state?.emailpass || ''
    const [email,setEmail]=useState(forgetEmail)
    const handleReset = (e) => {
    e.preventDefault();
  
    window.location.href = "https://mail.google.com/";
  };
    return (
        <div className='card  p-5 bg-linear-to-r from-blue-400/20 to-blue-800/20 w-150 shrink-0 shadow-2xl mx-auto'>
            <title>Forget password </title>
           <form onSubmit={handleReset}>
               <fieldset className='fieldset'>
                <label className="label text-xl text-slate-300">Email</label>
          <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} className="input text-slate-300 bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" placeholder="Email" />
           <button className="w-full py-3 text-xl rounded-md text-slate-50 btn-active bg-linear-to-r from-[#38bdf8] to-blue-900 mt-4">Reset Password</button>

               </fieldset>
           </form>
        </div>
    );
};

export default ResetPass;