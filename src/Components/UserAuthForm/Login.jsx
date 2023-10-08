import { useContext } from "react";
import { AuthDataContext } from "../../ContextApi/DataContext";

const Login = ({ handleClick }) => {
  const { userSignIn } = useContext(AuthDataContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    let userEmail = event.target.userEmail.value;
    let userPass = event.target.userPassword.value;
    userSignIn(userEmail, userPass)
      .then((user) => console.log(user))
      .catch((error) => console.log(error.message));
    console.log("email", userEmail, "and", "pass", userPass, userSignIn);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="m-10 space-y-5 flex flex-col">
        <input
          type="email"
          name="userEmail"
          placeholder="Type Your Email..."
          className="input input-bordered border-color-secondary w-full max-w-xs"
        />
        <input
          type="password"
          name="userPassword"
          placeholder="Your Password..."
          className="input input-bordered border-color-secondary w-full max-w-xs"
        />
        <button
          type="submit"
          className="cta max-w-xs border-2 border-color-secondary p-2 rounded-lg "
        >
          Login
        </button>
      </form>
      <p className="text-center">
        New Here?
        <button
          className="text-[#0000FF] ms-2 pb-8"
          onClick={() => {
            handleClick("register");
          }}
        >
          Register Now!
        </button>
      </p>
    </div>
  );
};

export default Login;
