const Newsletter = () => {
  return (
    <div className="p-[5%] bg-color-sub/[.15] flex flex-wrap justify-evenly items-center">
      <h1 className="text-5xl font-bold text-color-secondary lg:text-left text-center lg:mb-0 mb-4">Never Miss a Post!</h1>
      <div className="">
      <div className="join ">
        <div>
          <div>
            <input
              className="input input-bordered  join-item"
              placeholder="Email Here"
            />
          </div>
        </div>

        <div className="indicator">
          <button className="btn hover:bg-color-primary bg-color-secondary hover:text-color-main text-[#fff] join-item">Search</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Newsletter;
