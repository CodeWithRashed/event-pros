import PageHeader from "../Components/PageHeader/PageHeader";
import ServiceContainer from "../Components/ServiceSection/ServiceContainer";
import SectionTitle from "../Components/Title/SectionTitle";

const ServicesPage = () => {
  return (
    <div>
      <PageHeader title="Services"></PageHeader>
      <div className="p-[5%]">
        <SectionTitle
        subtitle="Our services"
        title="What We Offer"
        ></SectionTitle>
        <ServiceContainer></ServiceContainer>
      </div>
    </div>
  );
};

export default ServicesPage;
