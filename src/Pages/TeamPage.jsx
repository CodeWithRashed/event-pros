import { Helmet } from "react-helmet"
import PageHeader from "../Components/PageHeader/PageHeader"
import TeamPageContent from "../Components/Team/TeamPageContent"
import SectionTitle from "../Components/Title/SectionTitle"


const TeamPage = () => {
  return (
    <div className="mb-10">
      <Helmet>
        <title>EventPros - Team</title>
      </Helmet>
     <PageHeader title="The Team" ></PageHeader>
     <div className="content pt-[5%] "></div>
     <SectionTitle title="Our Expertise" subtitle="Your Event,"></SectionTitle>
     <TeamPageContent></TeamPageContent>
    </div>
  )
}

export default TeamPage
