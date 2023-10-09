import PageHeader from "../Components/PageHeader/PageHeader";
import Portfolios from "../Components/PortfolioSection/Portfolios";
import UpcomingProjects from "../Components/PortfolioSection/UpcomingProjects";
import SectionTitle from "../Components/Title/SectionTitle";

const PortfolioPage = () => {
  return (
    <div>
      <PageHeader title="Portfolio"></PageHeader>
      <div className="p-[5%]">
        <div className="pb-[8%]">
          <SectionTitle
            subtitle="See Our"
            title="Upcoming Events"
          ></SectionTitle>
          <UpcomingProjects></UpcomingProjects>
        </div>
        <div className="mb-10">
          <SectionTitle subtitle="See Our" title="Latest Events"></SectionTitle>
          <Portfolios></Portfolios>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
