import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
          <section className='bg-[#0f172a] '>
          <main className='w-10/12 mx-auto py-15 min-h-[calc(100vh-432px)]'>
            <Outlet></Outlet>
          </main>
          
          

          </section>
            <Footer></Footer>
        </div>
    );
};

export default Root;