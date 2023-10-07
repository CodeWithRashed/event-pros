import SectionTitle from "../Title/SectionTitle";
import ServiceContainer from "./ServiceContainer";

const ServiceSection = () => {
  return (
    <div className="bg-color-sub/[.15] px-[5%] py-[5%]">
      <SectionTitle></SectionTitle>
      {/* Weddings, Birthday Parties, Anniversaries,Engagement Parties, Retirement Parties, Baby shower, etc. */}

      <ServiceContainer></ServiceContainer>
    </div>
  );
};

export default ServiceSection;
