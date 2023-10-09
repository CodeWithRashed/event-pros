import { Link } from "react-router-dom";
import FooterBg from "../../assets/footer_bg.jpg";
import Logo from "/public/logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill, RiLinkedinFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="">
      <footer
        className="footer flex flex-col justify-center items-center lg:items-start lg:justify-normal lg:grid bg-color-sub/[.15] px-[5%] py-[5%] text-[#FFF]"
        style={{
          backgroundImage: `url(${FooterBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <aside className="flex flex-col justify-center items-center">
          <img className="h-16" src={Logo} alt="" />
          <div className="social hidden lg:flex gap-3 mt-5 justify-between items-center">
            <a className="bg-color-primary p-3 text-xl text-color-main rounded-full">
              <FaFacebookF></FaFacebookF>
            </a>
            <a className="bg-color-primary p-3 text-xl text-color-main rounded-full">
              <RiTwitterXFill></RiTwitterXFill>
            </a>
            <a
              className="bg-color-primary p-3 text-xl text-color-main rounded-full"
              href="#"
            >
              <RiLinkedinFill></RiLinkedinFill>
            </a>
            <a
              className="bg-color-primary p-3 text-xl text-color-main rounded-full"
              href="#"
            >
              <FaInstagram></FaInstagram>
            </a>
          </div>
        </aside>
        <nav className="font-bold hidden lg:grid">
          <header className="text-xl flex justify-center">Pages</header>
          <Link to="/">Home</Link>
          <Link to="/portfolios">Portfolio</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/Team">Team</Link>
          <Link to="/contact-us">Contact</Link>
        </nav>
        <nav className="font-bold hidden lg:grid">
          <header className="text-xl">Services</header>
          <Link to="/services/1">Wedding Planning</Link>
          <Link to="/services/2">Birthday Party</Link>
          <Link to="/services/3">Anniversary Dinner</Link>
          <Link to="/services/4">Engagement Party</Link>
          <Link to="/services/5">Retirement Celebration</Link>
          <Link to="/services/6">Shower Coordination</Link>
        </nav>
        <nav className="font-bold">
          <h1 className="text-xl  text-[#FFF]">
            Call Now for <span>Services!</span>
          </h1>
          <a href="tel:444-333-2211">
            <span>Phone: </span> 444-333-2211
          </a>
          <a href="mailto:demo@gmail.com">
            <span>Email: </span>demo@gmail.com
          </a>
        </nav>
        <div className="social lg:hidden flex flex-col gap-3 mt-5 justify-between items-center">
          <h1>Visit Social</h1>
          <div className="flex gap-3 mt-5 justify-between items-center">
            <p
              className="bg-color-primary p-3 text-xl text-color-main rounded-full"
              href="#"
            >
              <FaFacebookF></FaFacebookF>
            </p>
            <p
              className="bg-color-primary p-3 text-xl text-color-main rounded-full"
              href="#"
            >
              <RiTwitterXFill></RiTwitterXFill>
            </p>
            <p className="bg-color-primary p-3 text-xl text-color-main rounded-full">
              <RiLinkedinFill></RiLinkedinFill>
            </p>
            <p className="bg-color-primary p-3 text-xl text-color-main rounded-full">
              <FaInstagram></FaInstagram>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
