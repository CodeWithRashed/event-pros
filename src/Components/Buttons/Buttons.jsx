import PropTypes from "prop-types";
const MainButton = ({ buttonText }) => {
  return (
    <div className="bg-[#FFF] text-color-main font-medium hover:bg-color-primary px-6 py-2 rounded-full inline-block transition-all ease-in-out hover:scale-105">
      {buttonText}
    </div>
  );
};

const SubButton = ({ buttonText }) => {
  return (
    <div className="bg-color-secondary text-[#FFFFFF] font-medium hover:bg-color-primary hover:text-color-main px-6 py-2 rounded-full inline-block transition-all ease-in-out hover:scale-105">
      {buttonText}
    </div>
  );
};
MainButton.propTypes = {
  buttonText: PropTypes.string,
};
SubButton.propTypes = {
  buttonText: PropTypes.string,
};

export { MainButton, SubButton };
