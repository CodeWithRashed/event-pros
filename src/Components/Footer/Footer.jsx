import { Link } from "react-router-dom";
import FooterBg from "../../assets/footer_bg.jpg";
import Logo from "/public/logo.png";
import {FaFacebookF, FaInstagram} from "react-icons/fa";
import {RiTwitterXFill, RiLinkedinFill} from "react-icons/ri";
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
            <a className="bg-color-primary p-3 text-xl text-color-main rounded-full" href="#">
              <FaFacebookF></FaFacebookF>
            </a>
            <a className="bg-color-primary p-3 text-xl text-color-main rounded-full" href="#">
              <RiTwitterXFill></RiTwitterXFill>
            </a>
            <a className="bg-color-primary p-3 text-xl text-color-main rounded-full" href="#">
              <RiLinkedinFill></RiLinkedinFill>
            </a>
            <a className="bg-color-primary p-3 text-xl text-color-main rounded-full" href="#">
              <FaInstagram></FaInstagram>
            </a>
            
          </div>
        </aside>
        <nav className="font-bold hidden lg:grid">
          <header className="text-xl flex justify-center">Pages</header>
          <Link to="/"><a className="link link-hover">Home</a></Link>
          <Link to="/portfolios"><a className="link link-hover">Portfolio</a></Link>
          <Link to="/blogs"><a className="link link-hover">Blogs</a></Link>
          <Link to="/Team"><a className="link link-hover">Team</a></Link>
          <Link to="/contact-us"><a className="link link-hover">Contact</a></Link>
          
        </nav>
        <nav className="font-bold hidden lg:grid">
          <header className="text-xl">Services</header>
        <Link to="/services/1">  <a className="link link-hover">Wedding Planning</a></Link>
        <Link to="/services/2">  <a className="link link-hover">Birthday Party</a></Link>
        <Link to="/services/3">  <a className="link link-hover">Anniversary Dinner</a></Link>
        <Link to="/services/4">  <a className="link link-hover">Engagement Party</a></Link>
        <Link to="/services/5">  <a className="link link-hover">Retirement Celebration</a></Link>
        <Link to="/services/6">  <a className="link link-hover">Shower Coordination</a></Link>
          
        </nav>
        <nav className="font-bold">
          <h1 className="text-xl  text-[#FFF]">
            Call Now for <span>Services!</span>{" "}
          </h1>
          <a href="tel:444-333-2211">
            <span>Phone: </span> 444-333-2211
          </a>
          <a href="mailto:demo@gmail.com">
            <span>Email: </span>demo@gmail.com
          </a>
        </nav>
        <div className="social lg:hidden flex flex-col gap-3 mt-5 justify-between items-center">
          <h1 className="text-xl">Visit Social</h1>
          <div className="flex gap-3 justify-between items-center">
          <a className="bg-color-primary p-3 text-xl text-color-main rounded-full" href="#">
              <FaFacebookF></FaFacebookF>
            </a>
            <a className="bg-color-primary p-3 text-xl text-color-main rounded-full" href="#">
              <RiTwitterXFill></RiTwitterXFill>
            </a>
            <a className="bg-color-primary p-3 text-xl text-color-main rounded-full" href="#">
              <RiLinkedinFill></RiLinkedinFill>
            </a>
            <a className="bg-color-primary p-3 text-xl text-color-main rounded-full" href="#">
              <FaInstagram></FaInstagram>
            </a>
            
          </div>
           
          </div>
      </footer>
    </div>
  );
};

export default Footer;
