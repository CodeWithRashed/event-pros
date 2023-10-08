import { NavLink } from "react-router-dom";
import Logo from "/logo.png";
import { useContext } from "react";
import { AuthDataContext } from "../../../ContextApi/DataContext";

const Navbar = () => {
  const {user, logoutUser} = useContext(AuthDataContext)
const doLogout = () =>{
  logoutUser()
  .then((user) => {
    console.log(`${user} Sign-out successful.`);
  })
  .catch((error) => {
    console.log(error);
  });
}


  return (
    <div className="px-[5%] pt-[2%]">
      <div className="navbar !m-0 !p-0 font-rubik text-lg font-bold  ">
        <div className="navbar-start flex justify-between  !m-0 !p-0">
          <NavLink to="/" className="logo">
            <img src={Logo} alt="" className="h-20" />
          </NavLink>
        </div>
        <div className="navbar-end lg:flex w-full !m-0 !p-0">
          {/* Desktop Nav */}
          <ul className="menu hidden lg:flex menu-horizontal">
            <div className="items flex gap-3 text-base">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-color-secondary" : ""
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-color-secondary" : ""
                }
                to="/services"
              >
                Services
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-color-secondary" : ""
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-color-secondary" : ""
                }
                to="/about"
              >
                About Us
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-color-secondary" : ""
                }
                to="/quote"
              >
                Get a Quote
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-color-secondary" : ""
                }
                to="/contact-us"
              >
                Contact Us
              </NavLink>

                  {
                    user ? <button onClick={() => {doLogout()}}>Logout</button> : <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-color-secondary" : ""
                    }
                    to="/login"
                  >
                    Login/Register
                  </NavLink>
                  }

              
            </div>
          </ul>

          {/* Mobile Nav */}
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-[12] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div className="items flex flex-col gap-3 px-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-color-secondary" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-color-secondary" : ""
                  }
                  to="/services"
                >
                  Services
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-color-secondary" : ""
                  }
                  to="/blogs"
                >
                  Blogs
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-color-secondary" : ""
                  }
                  to="/about"
                >
                  About Us
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-color-secondary" : ""
                  }
                  to="/quote"
                >
                  Get a Quote
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-color-secondary" : ""
                  }
                  to="/contact-us"
                >
                  Contact Us
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-color-secondary" : ""
                  }
                  to="/login"
                >
                  Login/Register
                </NavLink>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
