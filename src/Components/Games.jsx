import { motion } from "motion/react"
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Games = ({game}) => {
    const{title, coverPhoto,ratings,id}=game
   
    return (
        <motion.div 
     initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}>
     
 <Link to={`/gameDetails/${id}`}>
            <div className="card bg-[#1e293b] w-96 shadow-xl">
  <figure>
    <img className='h-56 w-[385px] '
      src={coverPhoto}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-slate-50">{title}</h2>
   <div className='flex gap-1 items-center'>
     <FaStar color='#e78343'></FaStar>
    <p className='text-slate-500 font-medium'>{ratings}</p>
   </div>
  </div>
</div>
 </Link>
        </motion.div>
    );
};

export default Games;