import React, { useState } from 'react';
import Slider from '../Components/Slider';
import { useLoaderData } from 'react-router';
import Games from '../Components/Games';
import Newsletter from '../Components/Newsletter';

const Home = () => {
    const data= useLoaderData()
     const[gameCard, setGameCard]=useState(data)
    const[sort,setSort]=useState('')
    const handleSort=(type)=>{
        setSort(type)
  if(type==='Low-High'){
          const asc=[...gameCard].sort((a,b)=>a.ratings - b.ratings)
        setGameCard(asc)
  }
  if(type==='High-Low'){
  const dsc=[...gameCard].sort((a,b)=>b.ratings - a.ratings)
        setGameCard(dsc)
  }
      


    }
    
    
    return (
        <div>
          <title>Home</title>
            <Slider></Slider>
<div>
         
<h3 className='text-5xl text-center mt-15 text-[#38bdf8] font-bold '>Popular games</h3>
<div className='flex justify-end mb-8'>
    <details className="dropdown">
  <summary className="btn btn-accent my-5">{sort ? sort : 'sort-by:'}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort('High-Low')}>High-Low</a></li>
    <li><a onClick={()=>handleSort('Low-High')}>Low-High</a></li>
  </ul>
</details>
</div>

</div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16'>
                {gameCard.map(game=><Games key={game.id} game={game}></Games>)}
            </div>

            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;