import { Outlet } from "react-router-dom";
import Navbar from "../Components/Home/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Toaster position="top-center" reverseOrder={false} />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
