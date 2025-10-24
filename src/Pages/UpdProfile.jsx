import React, { use, useState } from 'react';
import { MdSystemUpdateAlt } from 'react-icons/md';
import { AuthContext } from '../Components/Auth/AuthContext';
import { toast } from 'react-toastify';
import { auth } from '../Firebase.init';

const UpdProfile = () => {
    const {user , updatedUser}=use(AuthContext)
      const [name, setName] = useState(auth.currentUser?.displayName || "");
  const [photo, setPhoto] = useState(auth.currentUser?.photoURL || "")
    const handleProfile=(e)=>{
e.preventDefault()

updatedUser(name, photo)
.then((res)=>{
    toast.success('Profile updated successfully')
    console.log(res.user)
})
.catch((err)=>{
    console.log(err.message)
})
    }
    return (
        <div>
            <title>Profile update</title>
            <form onSubmit={handleProfile}>
            <div className='bg-linear-to-r from-blue-400/20 to-blue-800/20 md:w-150 text-white shrink-0 shadow-2xl mx-auto rounded-2xl p-4 flex justify-center items-center flex-col'>


                 <img className="w-50  rounded-full" src={user?.photoURL || `https://cdn-icons-png.freepik.com/512/219/219987.png`} alt="" />
                <fieldset className='space-y-3'>
                     <label className="label text-lg text-slate-300">Name</label>
          <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} className="input text-slate-300 bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" placeholder="Name" />
          <label className="label text-lg text-slate-300">Photo URL</label>
          <input type="text" name='photo' value={photo} onChange={(e)=>setPhoto(e.target.value)} className="input text-slate-300 bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" placeholder="Photo URL" />
            </fieldset>
 <button type='submit' className='btn mt-4 btn-warning font-medium'><MdSystemUpdateAlt /> Updated</button>
    </div>
            
  
            </form>
        

        </div>
    );
};

export default UpdProfile;