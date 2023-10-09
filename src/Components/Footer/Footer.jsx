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
            <p className="bg-color-primary p-3 text-xl text-color-main rounded-full" href="#">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="bg-color-primary p-3 text-xl text-color-main rounded-full" href="#">
              <RiTwitterXFill></RiTwitterXFill>
            </p>
            <p className="bg-color-primary p-3 text-xl text-color-main rounded-full" href="#">
              <RiLinkedinFill></RiLinkedinFill>
            </p>
            <p className="bg-color-primary p-3 text-xl text-color-main rounded-full" href="#">
              <FaInstagram></FaInstagram>
            </p>
            
          </div>
        </aside>
        <nav className="font-bold hidden lg:grid">
          <header className="text-xl flex justify-center">Pages</header>
          <Link to="/"><p className="link link-hover">Home</p></Link>
          <Link to="/portfolios"><a className="link link-hover">Portfolio</a></Link>
          <Link to="/blogs"><p className="link link-hover">Blogs</p></Link>
          <Link to="/Team"><p className="link link-hover">Team</p></Link>
          <Link to="/contact-us"><p className="link link-hover">Contact</p></Link>
          
        </nav>
        <nav className="font-bold hidden lg:grid">
          <header className="text-xl">Services</header>
        <Link to="/services/1">  <p className="link link-hover">Wedding Planning</p></Link>
        <Link to="/services/2">  <p className="link link-hover">Birthday Party</p></Link>
        <Link to="/services/3">  <p className="link link-hover">Anniversary Dinner</p></Link>
        <Link to="/services/4">  <p className="link link-hover">Engagement Party</p></Link>
        <Link to="/services/5">  <p className="link link-hover">Retirement Celebration</p></Link>
        <Link to="/services/6">  <p className="link link-hover">Shower Coordination</p></Link>
          
        </nav>
        <nav className="font-bold">
          <h1 className="text-xl  text-[#FFF]">
            Call Now for <span>Services!</span>{" "}
          </h1>
          <p href="tel:444-333-2211">
            <span>Phone: </span> 444-333-2211
          </p>
          <p href="mailto:demo@gmail.com">
            <span>Email: </span>demo@gmail.com
          </p>
        </nav>
        <div className="social lg:hidden flex flex-col gap-3 mt-5 justify-between items-center">
          <h1>Visit Social</h1>
          <div className="flex gap-3 mt-5 justify-between items-center">
          <p className="bg-color-primary p-3 text-xl text-color-main rounded-full" href="#">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="bg-color-primary p-3 text-xl text-color-main rounded-full" href="#">
              <RiTwitterXFill></RiTwitterXFill>
            </p>
            <p className="bg-color-primary p-3 text-xl text-color-main rounded-full" href="#">
              <RiLinkedinFill></RiLinkedinFill>
            </p>
            <p className="bg-color-primary p-3 text-xl text-color-main rounded-full" href="#">
              <FaInstagram></FaInstagram>
            </p>
            
          </div>
           
          </div>
      </footer>
    </div>
  );
};

export default Footer;
