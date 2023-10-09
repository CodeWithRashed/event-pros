import SectionTitle from "../Title/SectionTitle";
import TeamCard from "./TeamCard";

const TeamSection = () => {
  return (
    <div className="px-[5%] py-[5%]">
      <SectionTitle
      subtitle="Our best team"
      title="Our Team of Professionals"
      ></SectionTitle>
      <TeamCard></TeamCard>
    </div>
  );
};

export default TeamSection;
