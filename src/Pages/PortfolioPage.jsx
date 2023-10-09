import PageHeader from "../Components/PageHeader/PageHeader";
import Portfolios from "../Components/PortfolioSection/Portfolios";
import UpcomingProjects from "../Components/PortfolioSection/UpcomingProjects";
import SectionTitle from "../Components/Title/SectionTitle";

const PortfolioPage = () => {
  return (
    <div>
      <PageHeader title="Portfolio"></PageHeader>
      <div className="p-[5%]">
        <SectionTitle subtitle="See Our" title="Latest Events"></SectionTitle>
        <Portfolios></Portfolios>
        <div className="pt-[8%]">
          <SectionTitle
            subtitle="See Our"
            title="Upcoming Events"
          ></SectionTitle>
        </div>
        <UpcomingProjects></UpcomingProjects>
      </div>
    </div>
  );
};

export default PortfolioPage;
