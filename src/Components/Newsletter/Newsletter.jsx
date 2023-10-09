import toast from "react-hot-toast";

const Newsletter = () => {
  return (
    <div className="p-[5%] bg-color-sub/[.15] flex flex-wrap justify-evenly items-center">
      <h1 className="text-5xl font-bold text-color-secondary lg:text-left text-center lg:mb-0 mb-4">
        Never Miss a Post!
      </h1>
      <div className="">
        <div className="flex join justify-center items-center">
          <input
            required
            type="email"
            id="newsletter"
            className="input input-bordered !rounded-r-none  !rounded-l-lg  w-[80%]"
            placeholder="Email Here"
          />

          <button
            onClick={() => {
              if( document.getElementById("newsletter").value == ""){
               return toast.error("Please Provide an Email!");
              }
             
              setTimeout(() => {
                toast.success("Thank you for subscribing to our newsletter!");
                document.getElementById("newsletter").value = "";
              }, 1000);
            }}
            className="btn  hover:bg-color-primary bg-color-secondary hover:text-color-main text-[#fff] join-item"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
