import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../Firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    const provider= new GoogleAuthProvider()

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updatedUser=(displayName,photoURL)=>{
            setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName,photoURL
        })

    }
    const logInUser=(email,password)=>{
            setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }

    const signWithGoogle=()=>{
            setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    const resetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    const authInfo={
        user,
        createUser,
        setUser,
        updatedUser,
        logInUser,
        signWithGoogle,
        logOut,
        loading,
        setLoading,
        resetPassword
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
                setUser(currentUser)
               
                setLoading(false)
            
            
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;