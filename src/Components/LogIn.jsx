import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from './Auth/AuthContext';
import { toast } from 'react-toastify';

const LogIn = () => {
  const{logInUser,signWithGoogle}=use(AuthContext)
  const location=useLocation()
  const navigate=useNavigate()
  console.log(location)
  const handleLogIn=(e)=>{
    e.preventDefault()
  
    const email=e.target.email.value
    const password=e.target.password.value
    logInUser(email,password)
    .then((res)=>{
      console.log(res.user)
   
      toast.success('Log In successfully')
      navigate(location.state || '/')
    })
    .catch((err)=>{
      console.log(err.message)
      toast.error(err.message)
    })

  }
  const handleWithGoogle=()=>{
    signWithGoogle()
    .then((res)=>{
console.log(res.user)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }
    return (
         <div>
            <title>Log In</title>
             <h1 className="text-5xl font-bold text-center my-10 text-[#38bdf8]">Login now!</h1>
             <div className="card bg-linear-to-r from-blue-400/20 to-blue-800/20 w-150 shrink-0 shadow-2xl mx-auto">
      <div className="card-body ">
       <form onSubmit={handleLogIn}>

         <fieldset className="fieldset ">
          <label className="label text-xl text-slate-300">Email</label>
          <input type="email" name='email' className="input text-slate-300 bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" placeholder="Email" />
          <label className="label text-xl text-slate-300">Password</label>
          <input type="password" name='password' className="input  text-slate-300 bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" placeholder="Password" />
          <div><a className="link link-hover  text-slate-300">Forgot password?</a></div>
          <button className="w-full py-3 text-xl rounded-md text-slate-50 btn-active bg-linear-to-r from-[#38bdf8] to-blue-900 mt-4">Login</button>
                    {/* Google */}
<button onClick={handleWithGoogle} className="btn my-2 py-3 bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
        </fieldset>
        <p className='text-slate-300'>Don't have Account? Please <Link className='text-blue-400 hover:underline' to='/register'>register now</Link></p>
       </form>
      </div>
    </div>
        </div>
    );
};

export default LogIn;