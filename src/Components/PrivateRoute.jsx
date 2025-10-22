import React, { use } from 'react';
import { AuthContext } from './Auth/AuthContext';
import { Navigate, useLocation } from 'react-router';


const PrivateRoute = ({children}) => {
    const{user, loading}=use(AuthContext)
    const location=useLocation()
    console.log(location)
    if(loading){
        return <div className='min-h-screen flex justify-center items-center'><span  className="loading loading-spinner text-info loading-xl "></span></div>
    }

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/logIn'></Navigate>
 
};

export default PrivateRoute;