import SectionTitle from "../Title/SectionTitle";
import ServiceContainer from "./ServiceContainer";

const ServiceSection = () => {
  return (
    <div className="bg-color-sub/[.15] px-[5%] py-[5%]">
      <SectionTitle
        subtitle="Our services"
        title="What We Offer"
      ></SectionTitle>
      <ServiceContainer></ServiceContainer>
    </div>
  );
};

export default ServiceSection;
