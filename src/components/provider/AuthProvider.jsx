import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser= (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const userSignOut = () =>{
    return signOut(auth)
  }
 
  // observer user auth state
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser);
      setLoading(false)
    });
    // stop observing while unmounting
    return () =>{
      unsubscribe()
    } 
  },[])
  

  const authInfo = {
    user,
    loading,
    createUser,
    userSignIn,
    userSignOut
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
