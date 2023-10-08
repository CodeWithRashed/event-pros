import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import ServicesPage from "../Pages/ServicesPage";
import BLogsPage from "../Pages/BlogsPage";
import AboutUsPage from "../Pages/AboutUsPage";
import GetQuotePage from "../Pages/GetQuotePage";
import ContactUsPage from "../Pages/ContactUsPage";
import UserAuthFormPage from "../Pages/UserAuthFormPage";
import Page404 from "../Pages/Page404";
import SingleServicePage from "../Pages/SingleServicePage";
import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Page404></Page404>,
    children: [
      { path: "/", element: <HomePage></HomePage> },
      { path: "/services", element: <ServicesPage></ServicesPage> },
      { path: "/services/:id", element: <PrivateRoute><SingleServicePage></SingleServicePage></PrivateRoute> },
      { path: "/blogs", element: <BLogsPage></BLogsPage> },
      { path: "/about", element: <AboutUsPage></AboutUsPage> },
      { path: "/quote", element: <GetQuotePage></GetQuotePage> },
      { path: "/contact-us", element: <ContactUsPage></ContactUsPage> },
      { path: "/login", element: <UserAuthFormPage></UserAuthFormPage> },
    ],
  },
]);

export default Routes;
