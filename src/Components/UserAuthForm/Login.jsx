const Login = ({handleClick}) => {
  return (
    <div>
      <form className="m-10 space-y-5 flex flex-col">
        <input
          type="email"
          placeholder="Type Your Email..."
          className="input input-bordered border-color-secondary w-full max-w-xs"
        />
        <input
          type="password"
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
