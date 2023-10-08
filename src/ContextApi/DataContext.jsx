import { createContext, useEffect, useState } from "react"
import {auth} from '../Config/FirebaseConfig'
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
export const AuthDataContext = createContext(null)
const provider = new GoogleAuthProvider();
const DataContext = ({children}) => {
const [user, setUser] = useState(false)

   const createUser = (userEmail, userPass) =>{
    return createUserWithEmailAndPassword(auth, userEmail, userPass)
   } 

   const userSignIn = (userEmail, userPass) => {
    return signInWithEmailAndPassword(auth, userEmail, userPass)
   }

   const googleSignIn = () => {
    return signInWithPopup(auth, provider)
   }

  


  const logoutUser = () => {
    signOut(auth)
  }


useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {

      setUser(true)
    } else {
      setUser(false)
    }
  });


},[])


    const authData = {createUser, userSignIn, user, logoutUser, googleSignIn}

  return (
    <AuthDataContext.Provider value={authData}>
        {children}
    </AuthDataContext.Provider>
  )
}

export default DataContext


