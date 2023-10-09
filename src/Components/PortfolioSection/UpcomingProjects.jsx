const UpcomingProjects = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-5">
      <div className="bg-[#fff] rounded-lg shadow-lg hover:shadow-md hover:scale-[103%] transition-all ease-in-out">
        <div className="image w-84 h-56 overflow-hidden relative">
            <div className="overly absolute bg-color-main/[.80] flex justify-center items-center h-full w-full">
                <h1 className="text-[#fff] font-bold">Upcoming</h1>
            </div>
          <img
            src="https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/service-8-1170x658.jpg"
            alt=""
            className="h-full w-full object-cover rounded-t-lg"
          />
        </div>
        <div className="text-content text-center space-y-3 p-4">
          <h1 className="font-pacifico -rotate-6 mt-5">Birthday Party</h1>
          <h1 className="font-pacifico -rotate-6 mb-5">July 16</h1>
        </div>
      </div>

      <div className="bg-[#fff] shadow-lg rounded-lg hover:shadow-md hover:scale-[103%] transition-all ease-in-out">
        <div className="image w-84 h-56 overflow-hidden relative">
        <div className="overly absolute bg-color-main/[.80] flex justify-center items-center h-full w-full">
                <h1 className="text-[#fff] font-bold">Upcoming</h1>
            </div>
          <img
            src="https://thekitchencommunity.org/wp-content/uploads/2021/09/shutterstock_1010722123-romantic.jpg"
            alt=""
            className="h-full w-full object-cover rounded-t-lg"
          />
        </div>
        <div className="text-content text-center space-y-3 p-4">
          <h1 className="font-pacifico -rotate-6 mt-5">Anniversary Dinner</h1>
          <h1 className="font-pacifico -rotate-6 mb-5">July 18</h1>
        </div>
      </div>

      <div className="bg-[#fff] shadow-lg rounded-lg hover:shadow-md hover:scale-[103%] transition-all ease-in-out">
        <div className="image w-84 h-56 overflow-hidden relative">
        <div className="overly absolute bg-color-main/[.80] flex justify-center items-center h-full w-full">
                <h1 className="text-[#fff] font-bold">Upcoming</h1>
            </div>
          <img
            src="https://partytimerental.com/wp-content/uploads/2019/02/19-03-12-Retirement-Party.jpg"
            alt=""
            className="h-full w-full object-cover rounded-t-lg"
          />
        </div>
        <div className="text-content text-center space-y-3 p-4">
          <h1 className="font-pacifico -rotate-6 mt-5">
            Retirement Celebration
          </h1>
          <h1 className="font-pacifico -rotate-6 mb-5">July 20</h1>
        </div>
      </div>
    </div>
  );
};

export default UpcomingProjects;
