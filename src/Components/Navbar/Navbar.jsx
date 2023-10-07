import { NavLink } from "react-router-dom";
import Logo from "/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between font-rubik text-lg font-bold">
      <div className="logo">
        <img src={Logo} alt="" className="h-20" />
      </div>
      <div className="items flex gap-5 items-center">
        <NavLink
          className={({ isActive }) => (isActive ? "text-color-secondary" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-color-secondary" : "")}
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-color-secondary" : "")}
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-color-secondary" : "")}
          to="/about"
        >
          About Us
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-color-secondary" : "")}
          to="/quote"
        >
          Get a Quote
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-color-secondary" : "")}
          to="/contact-us"
        >
          Contact Us
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-color-secondary" : "")}
          to="/login"
        >
          Login/Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
