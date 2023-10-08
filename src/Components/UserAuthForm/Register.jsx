import { useContext } from "react";
import { AuthDataContext } from "../../ContextApi/DataContext";

const Register = ({ handleClick }) => {

const {createUser} = useContext(AuthDataContext)


  const handleSubmit = (event) =>{
    event.preventDefault()
    let userEmail = event.target.userEmail.value;
    let userPass = event.target.userPassword.value;
    createUser(userEmail, userPass)
    .then(user => console.log(user))
    .catch(error => console.log(error.message))

    console.log("email", userEmail ,"and", "pass", userPass, createUser)
  }


  return (
    <div className="reg-container flex justify-center flex-col">
      <form onSubmit={handleSubmit} className="m-10 space-y-5 flex flex-col">
        <input
          name="userEmail"
          type="email"
          
          placeholder="Type Your Email..."
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <input
         name="userPassword"
          type="password"
          placeholder="Your Password..."
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <button
          type="submit"
          className="cta max-w-xs border-2 border-color-primary p-2 rounded-lg "
        >
          Register
        </button>
      </form>

      <p className="text-center">
        Already have an account? 
        <button 
          className="text-[#0000FF] ms-2 pb-8"
          onClick={() => {
            handleClick("login");
          }}
        >
          Login Here!
        </button>
      </p>
    </div>
  );
};

export default Register;
