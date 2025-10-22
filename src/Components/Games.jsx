
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Games = ({game}) => {
    const{title, coverPhoto,ratings,id}=game
   
    return (
        <div>
     
 <Link to={`/gameDetails/${id}`}>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className='h-56 w-[385px] '
      src={coverPhoto}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
   <div className='flex gap-1 items-center'>
     <FaStar color='#e78343'></FaStar>
    <p className='text-slate-500 font-medium'>{ratings}</p>
   </div>
  </div>
</div>
 </Link>
        </div>
    );
};

export default Games;