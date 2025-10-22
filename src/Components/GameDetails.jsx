import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router';

const GameDetails = () => {
    const {id}=useParams();
    const data= useLoaderData()
    const filteredGame=data.find(card=>card.id==id)
    console.log(filteredGame)
    const {title ,coverPhoto,category,downloadLink,description,ratings,developer}=filteredGame
    
    return (
        <div className='flex gap-6 py-20'>
            <img className='w-150 h-80 rounded-2xl' src={coverPhoto} alt=""/>
            <div className='space-y-2'>
         <div>
                   <h3 className='text-3xl font-bold'>{title}</h3>
                   <p className='text-blue-400 text-xl font-medium'>{developer}</p>
             
         </div>
           
            
            
              <div className='flex gap-1 items-center'>
                   <FaStar color='#e78343'></FaStar>
                  <p className='text-slate-500 font-medium'>{ratings}</p>
                 </div>
            
            <h3 className='text-lg font-semibold'>About this game</h3>
            <p className='text-slate-500'>{description}</p>
               <p className='btn  btn-soft w-28 btn-accent btn-sm '>{category}</p>
            
                  
               
               
            
            <p className=' font-semibold'> Download Link: <Link to='https://play.google.com/store/games?hl=en' className='text-blue-500 underline'>{downloadLink}</Link></p>

            </div>

            
        </div>
    );
};

export default GameDetails;