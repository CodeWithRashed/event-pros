import PageHeader from '../Components/PageHeader/PageHeader'
import ServiceContainer from "../Components/ServiceSection/ServiceContainer"


const ServicesPage = () => {

  return (
    <div>
        <PageHeader title="Services"></PageHeader>
<div className="p-[5%]">
      <ServiceContainer></ServiceContainer>
    </div>
    </div>
    
  )
}

export default ServicesPage
