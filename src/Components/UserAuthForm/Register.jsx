import { useContext, useState } from "react";
import { AuthDataContext } from "../../ContextApi/DataContext";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = ({ handleClick }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const { createUser, googleSignIn, updateTheUser, setPhoto } =
    useContext(AuthDataContext);
    const location = useLocation()

  const navigator = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let userImage = event.target.userImage.value;
    let userName = event.target.userName.value;
    let userEmail = event.target.userEmail.value;
    let userPass = event.target.userPassword.value;

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[a-zA-Z\d@#$%^&+=!]).{8,}$/;
    const isValidPass = passwordRegex.test(userPass);

    if (!isValidPass) {
      setErrorMessage(
        "Password must contain a uppercase letter (s), one lowercase letter (s), one number (0), and one special character (@), and it is 8 characters long"
      );
      return;
    }

    createUser(userEmail, userPass)
      .then(() => {
        updateTheUser(userName, userImage).then(() => {
          setPhoto(userImage);
        });
        toast.success("Account Create Successful, Redirecting..");
        setTimeout(() => {
          navigator(location.state ? location.state : "/")
        }, 2000);
      })
      .catch((error) => setErrorMessage(error.code));
  };

  const logWithGoogle = () => {
    googleSignIn().then(() => {
      toast.success("Login Successful, Redirecting..");
      setTimeout(() => {
        navigator(location.state ? location.state : "/")
      }, 2000);
    });
  };

  return (
    <div className="reg-container flex justify-center flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="mt-10 mb-2 space-y-3 flex flex-col justify-center"
      >
        <input
          name="userName"
          required
          type="text"
          placeholder="Type Your Name..."
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <input
          name="userImage"
          type="text"
          placeholder="Enter Image Url.."
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <input
          name="userEmail"
          required
          type="email"
          placeholder="Type Your Email..."
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <input
          name="userPassword"
          required
          type="password"
          placeholder="Your Password..."
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <button
          type="submit"
          className="cta hover:scale-105 transition-all ease-in-out max-w-xs border-2 border-color-primary p-2 rounded-lg "
        >
          Register
        </button>
      </form>
      <div className="error text-error px-12">
        {errorMessage && (
          <p>
            {errorMessage == "auth/email-already-in-use"
              ? " Email Already Used!"
              : errorMessage}
          </p>
        )}
      </div>
      <p className="text-center">
        Already have an account?
        <button
          className="text-[#0000FF] ms-2 pb-1 hover:scale-105 transition-all ease-in-out"
          onClick={() => {
            handleClick("login");
          }}
        >
          Login Here!
        </button>
      </p>

      <div className="google w-full mb-8 space-y-1">
        <p>
          OR <br />
          Continue with Google
        </p>
        <button
          onClick={() => {
            logWithGoogle();
          }}
          className="hover:scale-105 transition-all ease-in-out cta w-[150px] border-2 border-color-primary p-2 rounded-lg "
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default Register;
