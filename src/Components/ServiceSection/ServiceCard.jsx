import { Link } from "react-router-dom";
import { SubButton } from "../Buttons/Buttons";

const ServiceCard = ({ service }) => {
  const {id, name, image, price, short_description } = service;
  console.log(name, image, price, short_description);
  return (
    <div className="bg-[#fff] max-h-full p-1 rounded-lg ">
      <div className="image w-84 h-56 overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover rounded-t-lg"
        />
      </div>
      <div className="text-content text-center space-y-3 p-4">
        <h1 className="text-2xl font-bold text-color-secondary">{name}</h1>
        <small className="text-base text-color-sub">{short_description}</small>
        <div className="flex justify-center">
          <h2 className="translate-y-1">Starting From: </h2>
          <span className="text-color-secondary font-bold text-3xl"> 
            { price}
          </span>
        </div>

        <div className="cta">
          <Link to={`/service/${id}`}> <SubButton buttonText="Learn More"></SubButton></Link>
         
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
