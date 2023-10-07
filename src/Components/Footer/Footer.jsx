import FooterBg from "../../assets/footer_bg.jpg";
import Logo from '/public/logo.png'
const Footer = () => {
  return (
    <div>
      <footer
        className="footer bg-color-sub/[.15] px-[5%] py-[5%] text-[#FFF]"
        style={{ backgroundImage: `url('${FooterBg}')` }}
      >
        <aside>
          <img className="h-16" src={Logo} alt="" />
         <div className="social"></div>
        </aside>
        <nav className="font-bold">
          <header className="text-xl">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="font-bold">
          <header className="text-xl">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <div className="font-bold">
          <h1 className="text-xl  text-[#FFF]">Call Now for <span >Services!</span> </h1>
          <a href="tel:444-333-2211"><span >Phone: </span> 444-333-2211</a>
          <a href="mailto:demo@gmail.com"><span>Email: </span>demo@gmail.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
