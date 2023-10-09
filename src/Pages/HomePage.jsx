import { useContext } from "react"
import Banner from "../Components/Home/Banner/Banner"
import ServiceSection from "../Components/ServiceSection/ServiceSection"
import TeamSection from "../Components/Team/TeamSection"
import BlogSection from "../Components/BlogSection/BlogSection"
import PortfolioSection from "../Components/PortfolioSection/PortfolioSection"
import Newsletter from "../Components/Newsletter/Newsletter"

const HomePage = () => {

  return (
    <div>
      <Banner></Banner>
      <ServiceSection></ServiceSection>
      <TeamSection></TeamSection>
      <PortfolioSection></PortfolioSection>
      <BlogSection></BlogSection>
      <Newsletter></Newsletter>
    </div>
  )
}

export default HomePage
