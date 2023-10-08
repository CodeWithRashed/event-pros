import { useContext } from "react"
import { AuthDataContext } from "../ContextApi/DataContext"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {
 const {user} = useContext(AuthDataContext)

 if(user){
    return children
 }else{
    return <Navigate to="/login"></Navigate>
 }

 
}

export default PrivateRoute
