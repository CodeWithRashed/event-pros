import { useState } from "react";
import Login from "../Components/UserAuthForm/Login";
import Register from "../Components/UserAuthForm/Register";
import { Helmet } from "react-helmet";

const UserAuthFormPage = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = (login) => {

    if(login == "login"){
      setToggle(true)
     console.log( "login Clicked")
      return 
    }else{
      console.log( "register clicked")
      setToggle(false)
      return
    }
    
  
  }

  return (
    <div className="main mb-20  p-[5%]">
      <Helmet>
        <title>EventPros - Login</title>
      </Helmet>
      <div className="bg-[#FFF] shadow-xl lg:w-[520px] mx-auto">
        <div className="authCtaContainer shadow-lg flex justify-around lg:w-[520px]">
          <div
            className={`login-info text-center w-1/2 py-1 transition-all ease-in-out ${
              toggle ? "bg-color-secondary text-[#fff]" : ""
            }`}
          >
            <button
              onClick={() => {
                handleClick("login")
              }}
            >
              Login
            </button>
          </div>
          <div
            className={`register-info text-center  w-1/2 py-1 transition-all ease-in-out ${
              toggle ? "" : "bg-color-primary"
            }`}
          >
            <button
              onClick={() => {
                handleClick("register")
              }}
            >
              Register
            </button>
          </div>
        </div>
        <div className="authFormContainer flex justify-around">
          <div
            className={`${toggle ? "" : "hidden"} register-info text-center`}
          >
            <Login handleClick={handleClick}></Login>
          </div>
          <div
            className={`${toggle ? "hidden" : ""} register-info text-center`}
          >
            <Register handleClick={handleClick}></Register>
          </div>
        </div>


      </div>
    </div>
  );
};

export default UserAuthFormPage;
