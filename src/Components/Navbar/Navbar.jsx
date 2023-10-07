import { NavLink } from "react-router-dom"
import Logo from '../../../public/logo.png'

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="logo">
        <img src={Logo} alt="" className="h-20"/>
      </div>
      <div className="items flex gap-5 items-center">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/services'>Services</NavLink>
        <NavLink to='/blogs'>Blogs</NavLink>
        <NavLink to='/about'>About Us</NavLink>
        <NavLink to='/quote'>Get a Quote</NavLink>
        <NavLink to='/contact-us'>Contact Us</NavLink>
        <NavLink to='/login'>Login/Register</NavLink>   
      </div>
    </div>
  )
}

export default Navbar
