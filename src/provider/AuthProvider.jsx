import { createContext, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebae.config';
import { useEffect } from "react";
import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext = createContext(null);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// google provider
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic()

  // user create account
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // signIn
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  // google login
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  // update profile
  const updateUserProfile = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }
  // Logout
  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, currentUser => {
      // setLoading(false)
      setUser(currentUser)
      setLoading(true)
      if (currentUser) {
        // get token and store client
        const userInfo = { email: currentUser.email }
        axiosPublic.post('/jwt', userInfo)
          .then(res => {
            if (res.data.token) {
              localStorage.setItem('access-token', res.data.token)
            }
          })
          .finally(() => setLoading(false));
      } else {
        // TODO: remove token (if token stored in the client side)
        localStorage.removeItem('access-token')
        setLoading(false)
      }
      console.log('current user', currentUser);
    })
    return () => {
      return unsubsCribe()
    }
  }, [auth])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;