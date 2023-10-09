import { useContext } from "react"
import Banner from "../Components/Home/Banner/Banner"
import ServiceSection from "../Components/ServiceSection/ServiceSection"
import TeamSection from "../Components/Team/TeamSection"
import BlogSection from "../Components/BlogSection/BlogSection"
import PortfolioSection from "../Components/PortfolioSection/PortfolioSection"
import Newsletter from "../Components/Newsletter/Newsletter"
import { Helmet } from "react-helmet"

const HomePage = () => {

  return (
    <div>
      <Helmet>
        <title>EventPros - Home</title>
      </Helmet>
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
