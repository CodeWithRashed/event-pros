import { useContext } from "react"
import { AuthDataContext } from "../ContextApi/DataContext"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {
 const {user, loading} = useContext(AuthDataContext)
if(loading){
   return <span  className="loading loading-dots flex justify-center items-center mx-auto h-[90vh]  loading-lg"></span>
}
 if(user){
    return children
 }else{
    return <Navigate to="/login"></Navigate>
 }

 
}

export default PrivateRoute
