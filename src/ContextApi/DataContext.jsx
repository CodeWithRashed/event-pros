import { createContext, useEffect, useState } from "react"
import {auth} from '../Config/FirebaseConfig'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
export const AuthDataContext = createContext(null)

const DataContext = ({children}) => {
const [user, setUser] = useState(false)

   const createUser = (userEmail, userPass) =>{
    return createUserWithEmailAndPassword(auth, userEmail, userPass)
   } 

   const userSignIn = (userEmail, userPass) => {
    return signInWithEmailAndPassword(auth, userEmail, userPass)
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


    const authData = {createUser, userSignIn, user, logoutUser}

  return (
    <AuthDataContext.Provider value={authData}>
        {children}
    </AuthDataContext.Provider>
  )
}

export default DataContext


