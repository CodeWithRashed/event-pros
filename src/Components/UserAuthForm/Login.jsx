import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthDataContext } from "../../ContextApi/DataContext";
import toast from "react-hot-toast";

const Login = ({ handleClick }) => {
  const { userSignIn, googleSignIn } = useContext(AuthDataContext);
  const [errorMessage, setErrorMessage] = useState("")
  const navigator = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    let userEmail = event.target.userEmail.value;
    let userPass = event.target.userPassword.value;
    userSignIn(userEmail, userPass)
      .then(() => {
        toast.success('Login Successful, Redirecting..')
        setTimeout(() => {
          navigator("/")
        }, 2000);
      })
      .catch((error) => setErrorMessage(error.code));
   
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <form onSubmit={handleSubmit} className="mt-10 mb-2 space-y-3 flex flex-col">
        <input
          type="email"
          name="userEmail"
          required
          placeholder="Type Your Email..."
          className="input input-bordered border-color-secondary w-full max-w-xs"
        />
        <input
          type="password"
          name="userPassword"
          required
          placeholder="Your Password..."
          className="input input-bordered border-color-secondary w-full max-w-xs"
        />
        <button
          type="submit"
          className="cta hover:scale-105 transition-all ease-in-out max-w-xs border-2 border-color-secondary p-2 rounded-lg "
        >
          Login
        </button>
      </form>

      <div className="error text-error">

        { errorMessage && <p>Wrong Email or Password!</p>}
      </div>

      <p className="text-center">
        New Here?
        <button
          className="text-[#0000FF] ms-2 pb-1 hover:scale-105 transition-all ease-in-out"
          onClick={() => {
            handleClick("register");
          }}
        >
          Register Now!
        </button>
      </p>

      <div className="google w-full mb-8 space-y-1">
        <p>OR <br />Login with Google</p>
      <button onClick={() => {
        googleSignIn().then(() => {
          toast.success('Login Successful, Redirecting..')

          setTimeout(() => {
            navigator("/")
          }, 2000);
         })
      }}
            className="cta hover:scale-105 transition-all ease-in-out w-[150px] border-2 border-color-secondary p-2 rounded-lg "
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;
