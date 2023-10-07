const Register = ({ handleClick }) => {
  return (
    <div className="reg-container flex justify-center flex-col">
      <form className="m-10 space-y-5 flex flex-col">
        <input
          type="email"
          placeholder="Type Your Email..."
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <input
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
