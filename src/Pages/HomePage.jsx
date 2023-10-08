import { useContext } from "react"
import Banner from "../Components/Home/Banner/Banner"
import ServiceSection from "../Components/ServiceSection/ServiceSection"
import TeamSection from "../Components/Team/TeamSection"
import { AuthDataContext } from "../ContextApi/DataContext"

const HomePage = () => {
  const contextData = useContext(AuthDataContext)
  console.log(contextData)
  return (
    <div>
      <Banner></Banner>
      <ServiceSection></ServiceSection>
      <TeamSection></TeamSection>
    </div>
  )
}

export default HomePage
