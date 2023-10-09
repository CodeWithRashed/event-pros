import SectionTitle from "../Title/SectionTitle";
import Portfolios from "./Portfolios";
import { Link } from "react-router-dom";
import { MainButton } from "../Buttons/Buttons";
const PortfolioSection = () => {
  const exploreButton = (
    <Link to="/portfolios">
      <MainButton buttonText="Explore More"></MainButton>
    </Link>
  );
  return (
    <div className="bg-color-sub/[.15] p-[5%]">
      <SectionTitle
      subtitle="See Our"
      title="Latest Events"
      ></SectionTitle>
      <Portfolios exploreButton={exploreButton}></Portfolios>
    </div>
  );
};

export default PortfolioSection;
