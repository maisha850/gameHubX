import React from 'react';
import { MdError } from 'react-icons/md';
import { PiSmileySad } from 'react-icons/pi';


const ErrorPage = () => {
    return (
        <div className='bg-[#0f172a] min-h-screen text-slate-300 flex justify-center items-center flex-col gap-4'>
          <MdError color='#e78343' size={120} />
            <h3 className='text-8xl font-bold'>404</h3>
            <p className='text-3xl font-bold'>Page Not Found</p>
            <p className='text-lg '>The resources requested could not find in this server</p>
        </div>
    );
};

export default ErrorPage;