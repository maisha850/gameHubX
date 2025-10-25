import { Link, NavLink } from "react-router";
import { AuthContext } from "./Auth/AuthContext";
import { use } from "react";
import { toast } from "react-toastify";


const Navbar = () => {
  const{user, logOut}=use(AuthContext)
    const links=<>
    <NavLink className='mr-8 md:text-slate-300' to='/'>Home</NavLink>
    <NavLink className='mr-8 md:text-slate-300' to='/about' >About</NavLink>
    <NavLink className='mr-8 md:text-slate-300' to='/faq' >FAQ</NavLink>
{!user && <>
   <NavLink className='mr-8 md:text-slate-300' to='/logIn' >Log In</NavLink>
    <NavLink className='mr-8 md:text-slate-300' to='/register' >Register</NavLink>
</> }

    </>
    const handleLogOut=()=>{
      logOut()
      .then(()=>{
        toast.success('Log Out successfully')
        

      })
      .catch((err)=>{
        console.log(err.message)
      })

    }
    return (
        <div className="navbar bg-[#1e293b] shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
{links}
      </ul>
    </div>
    <Link to='/'  className=" text-[#38bdf8] text-xl gap-0 uppercase font-bold">game<span>HUB</span><span className='text-2xl text-blue-500'>X</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end mr-2">
   { user && <Link to='/profile'><img className="w-12 h-12 mr-3 rounded-full" src={user.photoURL || `https://cdn-icons-png.freepik.com/512/219/219987.png`} alt="" /></Link>}
  
   <button className="btn  btn-active  bg-linear-to-r from-[#38bdf8] to-blue-800 text-white">{user ? <button onClick={handleLogOut}>Log out</button> : <Link to='/logIn'>Log In</Link>}</button>
  </div>
</div>
    );
};

export default Navbar;