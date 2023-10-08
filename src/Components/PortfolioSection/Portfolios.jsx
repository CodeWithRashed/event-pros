import { Link } from "react-router-dom";
import { MainButton } from "../Buttons/Buttons";

const Portfolios = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-2  overflow-hidden">
        <img
          className="object-cover h-full w-full hover:scale-105 transition-all ease-in-out"
          src="https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/gallery-1.jpg"
          alt=""
        />
      </div>
      <div className=" overflow-hidden">
        <img
          className="object-cover h-full w-full hover:scale-105 transition-all ease-in-out"
          src="https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/gallery-3.jpg"
          alt=""
        />
      </div>
      <div className=" overflow-hidden ">
        <img
          className="object-cover h-full w-full hover:scale-105 transition-all ease-in-out"
          src="https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/service-1-540x456.jpg"
          alt=""
        />
      </div>
      <div className=" overflow-hidden">
        <img
          className="object-cover h-full w-full hover:scale-105 transition-all ease-in-out"
          src="https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/gallery-4.jpg"
          alt=""
        />
      </div>
      <div className=" overflow-hidden">
        <img
          className="object-cover h-full w-full hover:scale-105 transition-all ease-in-out"
          src="https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/gallery-5.jpg"
          alt=""
        />
      </div>
      <div className="col-span-2  overflow-hidden relative group">
        <div className="absolute z-10 flex justify-center items-center w-full h-full">
          <Link to="/portfolios">
            <MainButton buttonText="Explore More"></MainButton>
          </Link>
        </div>
        <img
          className="object-cover h-full w-full group-hover:scale-105 transition-all ease-in-out"
          src="https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/bg-20.jpg?id=455"
          alt=""
        />
      </div>
    </div>
  );
};

export default Portfolios;

// https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/bg-20.jpg?id=455
//https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/service-1-540x456.jpg
//https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/gallery-1.jpg
//https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/gallery-4.jpg
//https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/gallery-5.jpg
//https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/gallery-3.jpg
