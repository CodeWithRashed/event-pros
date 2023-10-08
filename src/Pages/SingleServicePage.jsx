import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../Hooks/fetchData";
import SectionTitle from "../Components/Title/SectionTitle";
import { BsArrowUpRightCircle, BsFillArrowRightCircleFill } from "react-icons/bs";

const SingleServicePage = () => {
  const [mainData, setMainData] = useState([]);

  let id = useParams();

  useEffect(() => {
    fetchData()
      .then((data) => setMainData(data.services))
      .catch((error) => console.log(error));
  }, []);

  const filteredData = mainData.filter((singleData) => singleData.id == id.id);
  console.log(filteredData[0]?.packages);

  return (
    <div className="p-[5%] grid grid-cols-4 gap-5">
      <div className="people-container">
        <div className="people text-center font-bold mb-5">
          People Who can help you with your {filteredData[0]?.name}
        </div>
      </div>
      <div className="text-container col-span-3">
        <div className="image">
          <img
            className="w-full h-[60vh] object-cover"
            src={filteredData[0]?.image}
          />
        </div>
        <h1 className="text-xl font-bold my-5">{filteredData[0]?.name}</h1>
        <p>{filteredData[0]?.paragraph}</p>
        <div className="packages my-10 bg-color-sub/[.15] py-10">
          <SectionTitle></SectionTitle>
          <div className="package-card-container grid grid-cols-3 gap-3 px-8 ">
            {filteredData[0]?.packages.map((singlePackage, index) => (
              <div className="cards" key={index}>
                <div className="card pt-6 text-center border-2 border-color-primary/[.40] bg-[#FFF] ">
                  <div className="card-header shadow-lg py-5">
                    <h1 className="text-2xl font-bold">{singlePackage.name}</h1>
                    <div className="flex justify-center items-center font-bold text-color-sub">
                      <p>From</p>
                      <p className="text-3xl text-color-secondary font-bold">
                        {singlePackage.price}
                      </p>
                    </div>
                  </div>
                  <div className="card-footer h-64 py-5 flex justify-between flex-col">
                    <div className=" px-3">
                      <p className="font-bold text-color-sub text-xl flex gap-2 items-center"><BsFillArrowRightCircleFill className="text-color-secondary" />{singlePackage.duration}</p>
                      <p className="font-bold text-color-sub text-xl flex gap-2 items-center"><BsFillArrowRightCircleFill className="text-color-secondary" />{singlePackage.capacity}</p>
                      <ul className="font-bold text-color-sub text-xl ">{
                        singlePackage.services_included.map((item, index) => (
                          <li className="flex items-center gap-2" key={index}><BsFillArrowRightCircleFill className="text-color-secondary" />{item}</li>
                        ))
                      }</ul>
                    </div>
                    <div className="cta ">
                      <button className="bg-color-secondary inline-block p-2 rounded-full text-[#FFF] text-xl">
                        <BsArrowUpRightCircle></BsArrowUpRightCircle>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServicePage;
