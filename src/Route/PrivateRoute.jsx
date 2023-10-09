import PropTypes from 'prop-types';
import { useContext } from "react"
import { AuthDataContext } from "../ContextApi/DataContext"
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoute = ({children}) => {
 const {user, loading} = useContext(AuthDataContext)
 const location = useLocation()

 
if(loading){
   return <span  className="loading loading-dots flex justify-center items-center mx-auto h-[90vh]  loading-lg"></span>
}

 if(user){
    return children
 }
    return <Navigate state={location.pathname}  to="/login"></Navigate>
 

 
}

PrivateRoute.propTypes = {
   children: PropTypes.node,
}

export default PrivateRoute
