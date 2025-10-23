import React, { use } from 'react';
import { AuthContext } from '../Components/Auth/AuthContext';
import { Link } from 'react-router';
import {  MdSystemUpdateAlt } from 'react-icons/md';

const Profile = () => {
    const{user}=use(AuthContext)
    return (
        <div>
            <title>My Profile</title>
        <div className='bg-linear-to-r from-blue-400/20 to-blue-800/20 w-150 text-white shrink-0 shadow-2xl mx-auto rounded-2xl p-4'>
        <div className='flex justify-center items-center flex-col space-y-3'>
            <h3 className='text-white text-2xl font-semibold'>My Profile</h3>
        <img className="w-50  rounded-full" src={user?.photoURL || `https://cdn-icons-png.freepik.com/512/219/219987.png`} alt="" />
        
        <h3 className='text-2xl font-semibold'>{user?.displayName}</h3>
        <p className='text-lg'>{user?.email}</p>
        <Link to='/updateProfile'  className='btn btn-warning font-medium'><MdSystemUpdateAlt /> Update Profile</Link>

        </div>

        </div>
        </div>
    );
};

export default Profile;