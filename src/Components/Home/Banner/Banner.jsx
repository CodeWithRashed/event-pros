import slider1Image from "../../../assets/Banner/slide1.jpg";
import slider2Image from "../../../assets/Banner/slide2.jpg";
import slider3Image from "../../../assets/Banner/slide3.jpg";
import cardPhoto1 from "../../../assets/Banner/item-0.jpg";
import cardPhoto2 from "../../../assets/Banner/item-1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { MainButton } from "../../Buttons/Buttons";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="px-[5%] pt-[1%]  pb-[5%]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* Slider 1 Start */}
          <div
            className="slider-1 px-8 py-4 flex relative "
            style={{ backgroundImage: `url('${slider1Image}')` }}
          >
            <div className="text-content relative z-10 my-20 space-y-5">
              <h3 className="text-2xl lg:text-5xl font-pacifico text-[#FFFFFF]">
                Let&apos; have a party!
              </h3>
              <h1 className="drop-shadow-xl text-4xl lg:text-9xl font-rubik text-color-primary font-bold">
                It&apos; time to <br />
                celebrate!
              </h1>
              <div className="cta">
                <Link to="/contact-us"><MainButton buttonText="Get A Quote"></MainButton></Link>
              </div>
            </div>
            <div className="banner-images hidden absolute bottom-32 -right-28 -z-0 lg:flex gap-2">
              <div className="image1 -rotate-6 p-4 pb-16 shadow-xl bg-[#FFFFFF] relative">
                <img src={cardPhoto1} alt="" className="w-[300px] h-[300px] " />
              </div>
              <div className="image2 rotate-6 -translate-x-36 -z-10 p-4 bg-[#FFFFFF] relative shadow-xl">
                <img src={cardPhoto2} alt="" className="w-[300px] h-[300px]" />
              </div>
            </div>
          </div>
          {/* Slider 1 End */}
        </SwiperSlide>

        <SwiperSlide>
          {/* Slider 2 Start */}
          <div
            className="slider-2 px-8 py-4 flex"
            style={{ backgroundImage: `url('${slider3Image}')` }}
          >
            <div className="text-content relative z-10 my-20 space-y-5">
              <h3 className="text-2xl lg:text-5xl font-pacifico text-[#FFFFFF]">
                We are here for you!
              </h3>
              <h1 className="drop-shadow-xl text-4xl lg:text-9xl font-rubik text-color-primary font-bold">
                Concept to <br />
                Celebration.
              </h1>
              <div className="cta">
                <Link to="/contact-us"><MainButton buttonText="Get A Quote"></MainButton></Link>
              </div>
            </div>
          </div>
          {/* Slider 2 End */}
        </SwiperSlide>

        <SwiperSlide>
          {/* Slider 3 Start */}
          <div
            className="slider-2 px-8 py-4 flex"
            style={{ backgroundImage: `url('${slider2Image}')` }}
          >
            {/* Your Event, Our Expertise. */}
            <div className="text-content relative z-10 my-20 space-y-5">
              <h3 className="text-2xl lg:text-5xl font-pacifico text-[#FFFFFF]">
                Elegance in Every Event
              </h3>
              <h1 className="drop-shadow-xl text-4xl lg:text-9xl font-rubik text-color-primary font-bold">
                Enjoy your <br />
                celebration!
              </h1>
              <div className="cta">
                <Link to="/contact-us"><MainButton buttonText="Get A Quote"></MainButton></Link>
              </div>
            </div>
          </div>
          {/* Slider 3 End */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
