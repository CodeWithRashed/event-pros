import { NavLink } from "react-router-dom";
import Logo from "/logo.png";
import { useContext } from "react";
import { AuthDataContext } from "../../../ContextApi/DataContext";
import { FiMenu } from "react-icons/fi";
import { ImUserPlus } from "react-icons/im";

const Navbar = () => {
  const { user, userInfo, logoutUser } = useContext(AuthDataContext);
  console.log("navuser", userInfo);
  const navItems = (
    <div className="lg:flex gap-2 items-center mr-3 hidden font-bold">
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
    </div>
  );

  const navItemsMobile = (
    <div className="flex flex-col gap-2 items-center font-bold">
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
    </div>
  );
  const doLogout = () => {
    logoutUser()
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-[5%] pt-[2%]">
      <div className="navbar">
        {/* Navbar Start Part */}
        <div className="flex-1">
          <NavLink to="/" className="logo">
            <img src={Logo} alt="" className="h-20" />
          </NavLink>
        </div>
        {/* Start Part End */}

        {/* Nav Middle Section */}
        {navItems}
        {/* Nav Middle Section */}

        {/* Navbar End Section */}
        <div className="flex-none">
          {/* Mobile Navbar Start */}
          <div className="dropdown dropdown-end">
            <div className="lg:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <FiMenu className="text-3xl"></FiMenu>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[10] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">{navItemsMobile}</div>
              </div>
            </div>
          </div>
          {/* Mobile Navbar End */}

          {/* User Logo With Icons */}
          <div className="dropdown dropdown-end">
            {user ? (
              <div>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={`${userInfo?.photoURL}`} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <div className="text-center">User Info</div>
                  <li>{user && <a>{userInfo?.displayName}</a>}</li>
                  <li>{user && <a>{userInfo?.email}</a>}</li>
                  <li>
                    <button
                      onClick={() => {
                        doLogout();
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-color-secondary btn btn-ghost btn-circle"
                    : "btn btn-ghost btn-circle"
                }
                to="/login"
              >
                <ImUserPlus className="text-3xl"></ImUserPlus>
              </NavLink>
            )}
          </div>
          {/* User Logo With Icons */}
        </div>
        {/* Navbar End Section */}
      </div>
    </div>
  );
};

export default Navbar;
