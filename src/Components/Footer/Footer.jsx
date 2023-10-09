import { Link } from "react-router-dom";
import FooterBg from "../../assets/footer_bg.jpg";
import Logo from "/public/logo.png";
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
        <aside>
          <img className="h-16" src={Logo} alt="" />
          <div className="social"></div>
        </aside>
        <nav className="font-bold hidden lg:grid">
          <header className="text-xl flex justify-center">Pages</header>
          <Link to="/"><a className="link link-hover">Home</a></Link>
          <Link to="/portfolios"><a className="link link-hover">Portfolio</a></Link>
          <Link to="/blogs"><a className="link link-hover">Blogs</a></Link>
          <Link to="/Team"><a className="link link-hover">Team</a></Link>
          <Link to="/contact-us"><a className="link link-hover">Contact</a></Link>
          
        </nav>
        <nav className="font-bold">
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
      </footer>
    </div>
  );
};

export default Footer;
