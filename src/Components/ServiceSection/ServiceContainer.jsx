import ServiceCard from "./ServiceCard";
import { useState } from "react";
import { fetchData } from "../../Hooks/fetchData";

const ServiceContainer = () => {
    const [data, setData] = useState([]);
    fetchData()
      .then((data) => setData(data.services))
      .catch((error) => console.log(error));
  return (
    <div>
      <div className="service-container grid grid-cols-3  gap-5">
        {data.map((service) => (
          <div key={service.id}>
            <ServiceCard service={service}></ServiceCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceContainer;
