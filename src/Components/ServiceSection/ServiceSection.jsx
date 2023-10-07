import { useState } from "react";
import { fetchData } from "../../Hooks/fetchData";
import ServiceCard from "./ServiceCard";
import SectionTitle from '../Title/SectionTitle'

const ServiceSection = () => {
  const [data, setData] = useState([]);
  fetchData()
    .then((data) => setData(data.services))
    .catch((error) => console.log(error));

  return (
    <div className="bg-color-sub/[.15] px-[5%] py-[5%]">
        <SectionTitle></SectionTitle>
      {/* Weddings, Birthday Parties, Anniversaries,Engagement Parties, Retirement Parties, Baby shower, etc. */}
     
     <div className="service-container grid grid-cols-3  gap-5">
     {data.map((service) => (
        <div key={service.id} >
          <ServiceCard service={service}></ServiceCard>
        </div>
      ))}
     </div>
      
    </div>
  );
};

export default ServiceSection;
