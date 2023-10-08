import { createContext, useEffect, useState } from "react";
import { auth } from "../Config/FirebaseConfig";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthDataContext = createContext(null);
const provider = new GoogleAuthProvider();
const DataContext = ({ children }) => {
  const [user, setUser] = useState(false);
  const [userInfo, setUserInfo] = useState(null)
  const [loading, setLoading] = useState(true);

  const createUser = (userEmail, userPass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, userEmail, userPass);
  };

  const userSignIn = (userEmail, userPass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, userEmail, userPass);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const updateTheUser = (userName, userImage) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: userImage,
    });
  };

  const logoutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
        console.log("theuser", user)
        setUserInfo(user)
        setLoading(false);
      } else {
        setUser(false);
      }
    });
  }, []);

  const authData = {
    createUser,
    userSignIn,
    user,
    logoutUser,
    googleSignIn,
    loading,
    updateTheUser,
    userInfo
  };

  return (
    <AuthDataContext.Provider value={authData}>
      {children}
    </AuthDataContext.Provider>
  );
};

export default DataContext;
