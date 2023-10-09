import { Link } from "react-router-dom";
import { SubButton } from "../Buttons/Buttons";
import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {
  const {id, name, image, short_description, } = service;


  return (
    <div className="bg-[#fff] shadow-xl max-h-full p-1 rounded-lg hover:shadow-md hover:scale-[103%] transition-all ease-in-out">
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
            {service?.packages[0].price}
          </span>
        </div>

        <div className="cta">
          <Link to={`/services/${id}`}> <SubButton buttonText="Learn More"></SubButton></Link>
         
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
}

export default ServiceCard;
