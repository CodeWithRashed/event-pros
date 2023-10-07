import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"

const MainLayout = () => {
  return (
    <div className="px-[5%] py-[2%]">
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default MainLayout
