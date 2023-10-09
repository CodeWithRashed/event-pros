import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../Hooks/fetchData";
import SectionTitle from "../Components/Title/SectionTitle";
import {
  BsArrowUpRightCircle,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Helmet } from "react-helmet";

const SingleServicePage = () => {
  const [mainData, setMainData] = useState([]);

  let id = useParams();

  useEffect(() => {
    fetchData()
      .then((data) => setMainData(data.services))
      .catch((error) => console.log(error));
  }, []);

  const filteredData = mainData.filter((singleData) => singleData.id == id.id);

  return (
    <div className="p-[5%] grid lg:grid-cols-4 gap-5">
      <Helmet>
        <title>EventPros - Service</title>
      </Helmet>
      <div className="people-container order-2 col-span-3 lg:col-span-1 lg:order-1">
        <div className="people font-bold mb-5 text-center">
             {/* Other Services */}
             <div className="mb-12">
              <div>
                <h1 className="text-2xl mb-4 text-color-secondary">Explore More Services</h1>
              </div>
              <div className="space-y-3">
                {mainData.map((singleData) => (
                  <ul key={singleData.id}>
                    <Link
                      className="hover:text-color-secondary transition-all ease-in-out"
                      to={`/services/${singleData.id}`}
                    >
                      <li>{singleData?.name}</li>
                    </Link>
                  </ul>
                ))}
              </div>
            </div>
          <h1 className="text-xl md:text-3xl lg:text-xl">
            People Who can help you with <br />
            <span className="text-color-secondary">
              {filteredData[0]?.name}
            </span>
          </h1>
          <div className="m-5 grid md:grid-cols-2 lg:grid-cols-1 gap-5 justify-center">
            
            {/* Card - 1 */}
            <div className="card rounded-lg overflow-hidden">
              <img
                className="object-cover h-[250px]"
                src="https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/team2-370x370.jpg"
                alt=""
              />
              <div className="content bg-color-sub/[.15] p-4 flex flex-col justify-center text-center">
                <h3 className="font-bold text-color-main">Ann Wagner</h3>
                <small className="font-bold text-color-sub">Florist</small>
              </div>
            </div>

            {/* Card - 2 */}
            <div className="card rounded-lg overflow-hidden">
              <img
                className="object-cover h-[250px]"
                src="https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/team3-370x370.jpg"
                alt=""
              />
              <div className="content bg-color-sub/[.15] p-4 flex flex-col justify-center text-center">
                <h3 className="font-bold text-color-main">Jessica Smith</h3>
                <small className="font-bold text-color-sub">Designer</small>
              </div>
            </div>
            {/* Card - 3 */}
            <div className="card rounded-lg overflow-hidden">
              <img
                className="object-cover h-[250px]"
                src="https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/team4-370x370.jpg"
                alt=""
              />
              <div className="content bg-color-sub/[.15] p-4 flex flex-col justify-center text-center">
                <h3 className="font-bold text-color-main">Sufi Gilmore</h3>
                <small className="font-bold text-color-sub">Architect</small>
              </div>
            </div>

         
          </div>
        </div>
      </div>
      {/* Blog Content */}
      <div className="text-container order-1 lg:order-2 col-span-3">
        <div className="image">
          <img
            className="w-full h-[60vh] object-cover"
            src={filteredData[0]?.image}
          />
        </div>
        <h1 className="text-xl font-bold my-5">{filteredData[0]?.name}</h1>
        <p>{filteredData[0]?.paragraph}</p>
        <div className="packages my-10 bg-color-sub/[.15] py-10">
          <SectionTitle
            subtitle="Here is"
            title="Best Package Available"
          ></SectionTitle>
          <div className="package-card-container grid lg:grid-cols-3 gap-3 px-8 ">
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
                    <div className="pl-6">
                      <p className="font-bold text-color-sub text-xl flex gap-2 items-center">
                        <BsFillArrowRightCircleFill className="text-color-secondary" />
                        {singlePackage.duration}
                      </p>
                      <p className="font-bold text-color-sub text-xl flex gap-2 items-center">
                        <BsFillArrowRightCircleFill className="text-color-secondary" />
                        {singlePackage.capacity}
                      </p>
                      <ul className="font-bold text-color-sub text-xl ">
                        {singlePackage.services_included.map((item, index) => (
                          <li className="flex items-center gap-2" key={index}>
                            <BsFillArrowRightCircleFill className="text-color-secondary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="cta ">
                      <Link to="/contact-us"  className="bg-color-secondary hover:bg-color-primary hover:text-[#000] hover:scale-105 transition-all ease-in-out inline-block p-2 rounded-full text-[#FFF] text-xl">
                        <BsArrowUpRightCircle></BsArrowUpRightCircle>
                      </Link>
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
